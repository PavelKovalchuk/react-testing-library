import React from 'react';
import userEvent from "@testing-library/user-event";
import { render, screen, fireEvent } from '@testing-library/react';

import CustomInput from './CustomInput';


describe('when everything is OK', () => {

  test('should call props.onChange handler with fireEvent', () => {
    const onChange = jest.fn();
    render(<CustomInput value="" onChange={onChange} >Input</CustomInput>);
    
    fireEvent.change(screen.getByRole("textbox"), {
      target: {value: "Test"},
    })

    expect(onChange).toHaveBeenCalledTimes(1);
  });

  test('should call props.onChange handler with userEvent', async () => {
    const onChange = jest.fn();
    render(<CustomInput value="" onChange={onChange} >Input</CustomInput>);
    
    await userEvent.type(screen.getByRole("textbox"), "Test2")

    expect(onChange).toHaveBeenCalledTimes(5);
  });

});
