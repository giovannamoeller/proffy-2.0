import { Request, Response } from "express";
import knex from "../database/connection";
import convertHourToMinutes from "../utils/convertHourToMinutes";

interface ScheduleItem {
  week_day: number;
  from: string;
  to: string;
}

const Proffy = {
  async create(req: Request, res: Response) {
    const {
      name,
      avatar_url,
      whatsapp,
      biography,
      subject,
      price,
      schedule,
    } = req.body;

    const trx = await knex.transaction();

    try {
      const insertedUserId = await trx("proffys")
        .insert({
          name,
          avatar_url,
          whatsapp,
          biography,
          subject,
          price,
        })
        .returning("*");

      const user_id = insertedUserId[0].id;

      const classSchedule = schedule.map((scheduleItem: ScheduleItem) => {
        return {
          week_day: scheduleItem.week_day,
          from: convertHourToMinutes(scheduleItem.from),
          to: convertHourToMinutes(scheduleItem.to),
          user_id,
        };
      });

      await trx("schedule").insert(classSchedule);

      await trx.commit();

      return res.status(201).send(); // 201 - criado com sucesso
    } catch (err) {
      return res.status(400).json({ message: err });
    }
  },

  async index(req: Request, res: Response) {
    const filters = req.query;

    if(!filters.week_day || !filters.subject || !filters.time) {
        return res.status(400).json({
            error: 'Missing filters'
        });
    }

    const timeInMinutes = convertHourToMinutes(filters.time as string);

    const classes = await knex('proffys')
        .whereExists(function() {
            this.select('schedule.*')
                .from('schedule')
                .whereRaw('schedule.user_id = proffys.id')
                .whereRaw('schedule.week_day = ??', [Number(filters.week_day)])
                .whereRaw('schedule.from <= ??', [timeInMinutes])
                .whereRaw('schedule.to > ??', [timeInMinutes])
        })
        .where('proffys.subject', '=', filters.subject as string)

    return res.json(classes);
  }
};

export default Proffy;
