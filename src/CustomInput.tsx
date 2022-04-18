import React from 'react';

import './App.css';

interface CustomInputProps {
  children: React.ReactNode;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function CustomInput({ children, value, onChange }: CustomInputProps) {
  return (
    <div>
      <label htmlFor="search">{children}</label>
      <input
        id="search"
        type="text"
        value={value}
        onChange={onChange}
        placeholder="example"
      />
    </div>
  );
}


export default CustomInput;
