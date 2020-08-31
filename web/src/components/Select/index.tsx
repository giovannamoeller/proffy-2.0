import React, {SelectHTMLAttributes} from "react";
import Select from 'react-select';

import './style.css';

interface InputProps extends SelectHTMLAttributes<HTMLSelectElement> {
    label: string,
    name: string,
    options: Array<{
      value: string;
      label: string;
    }>;
}

const SelectComponent:React.FC<InputProps> = ({label, name, options, ...rest}) => {

  return (
    <div className="select-block">
      <label htmlFor={name}>{label}</label>
      <Select className="select" options={options}/>
    </div>
  );
}

export default SelectComponent;
