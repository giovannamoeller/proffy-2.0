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
    console.log(req.body)

    const trx = await knex.transaction();

    try {
      const insertedUserId = await trx("users")
        .insert({
          name,
          avatar_url,
          whatsapp,
          biography,
          subject,
          price,
        })
        .returning("*");
      console.log(insertedUserId)

      const user_id = insertedUserId[0].id;

      const classSchedule = schedule.map((scheduleItem: ScheduleItem) => {
        return {
          week_day: scheduleItem.week_day,
          from: convertHourToMinutes(scheduleItem.from),
          to: convertHourToMinutes(scheduleItem.to),
          user_id,
        };
      });

      await trx("class_schedule").insert(classSchedule);

      await trx.commit();

      return res.status(201).send(); // 201 - criado com sucesso
    } catch (err) {
      console.log(err)
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

    const classes = await knex('users')
        .whereExists(function() {
            this.select('class_schedule.*')
                .from('class_schedule')
                .whereRaw('class_schedule.user_id = users.id')
                .whereRaw('class_schedule.week_day = ??', [Number(filters.week_day)])
                .whereRaw('class_schedule.from <= ??', [timeInMinutes])
                .whereRaw('class_schedule.to > ??', [timeInMinutes])
        })
        .where('users.subject', '=', filters.subject as string)
    
    return res.json(classes);
  }
};

export default Proffy;
