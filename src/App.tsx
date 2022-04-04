import React, { useState } from 'react';

import './App.css';

interface CustomInputProps {
  children: React.ReactNode;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function CustomInput({ children, value, onChange }: CustomInputProps) {
  return (
    <div>
      <label htmlFor="search" />
      <input id="search" type="text" value={value} onChange={onChange} />
    </div>
  );
}

function App() {
  const [text, setText] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <div>
      <CustomInput value={text} onChange={handleChange}>
        Input:
      </CustomInput>
      <p>You typed {text || '...'}</p>
    </div>
  );
}

export default App;
