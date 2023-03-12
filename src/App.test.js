import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

describe('Calculator App', () => {
  test('renders calculator component', () => {
     const { getByTestId } = render(<App />);
     const calculator = getByTestId("calculator");
     expect(calculator).toBeInTheDocument();
  });

  test('displays input on screen when button is clicked', () => {
    const { getByTestId } = render(<App />);
    const calculator = getByTestId('calculator');
    const screen = calculator.querySelector('.input');
    const button = calculator.querySelector('.button[value="1"]');
    fireEvent.click(button);
    expect(screen).toHaveTextContent('1');
  });

  test('evaluates input and displays result on screen when "=" button is clicked', () => {
    const { getByTestId } = render(<App />);
    const calculator = getByTestId('calculator');
    const screen = calculator.querySelector('.input');
    const button1 = calculator.querySelector('.button[value="1"]');
    const button2 = calculator.querySelector('.button[value="+"]');
    const button3 = calculator.querySelector('.button[value="2"]');
    const equalsButton = calculator.querySelector('.equals-button[value="="]');
    fireEvent.click(button1);
    fireEvent.click(button2);
    fireEvent.click(button3);
    fireEvent.click(equalsButton);
    expect(calculator).toHaveTextContent('3');
  });
  test('displays error message when dividing by zero', () => {
    const { getByTestId } = render(<App />);
    const calculator = getByTestId('calculator');
    const screen = calculator.querySelector('.input');
    const button1 = calculator.querySelector('.button[value="1"]');
    const button2 = calculator.querySelector('.button[value="/"]');
    const button3 = calculator.querySelector('.button[value="0"]');
    const equalsButton = calculator.querySelector('.equals-button[value="="]');
    fireEvent.click(button1);
    fireEvent.click(button2);
    fireEvent.click(button3);
    fireEvent.click(equalsButton);
    //expect(screen).toHaveClass('Error');
    expect(calculator).toHaveTextContent('Error');
  });



  


  test('evaluates substraction operation', () => {
    const { getByTestId } = render(<App />);
    const calculator = getByTestId('calculator');
    const screen = calculator.querySelector('.input');
    const button1 = calculator.querySelector('.button[value="1"]');
    const button2 = calculator.querySelector('.button[value="-"]');
    const button3 = calculator.querySelector('.button[value="2"]');
    const equalsButton = calculator.querySelector('.equals-button[value="="]');
    fireEvent.click(button1);
    fireEvent.click(button2);
    fireEvent.click(button3);
    fireEvent.click(equalsButton);
    expect(calculator).toHaveTextContent('-1');
  });

  test('evaluates multiplication operation', () => {
    const { getByTestId } = render(<App />);
    const calculator = getByTestId('calculator');
    const screen = calculator.querySelector('.input');
    const button1 = calculator.querySelector('.button[value="8"]');
    const button2 = calculator.querySelector('.button[value="*"]');
    const button3 = calculator.querySelector('.button[value="6"]');
    const equalsButton = calculator.querySelector('.equals-button[value="="]');
    fireEvent.click(button1);
    fireEvent.click(button2);
    fireEvent.click(button3);
    fireEvent.click(equalsButton);
    expect(calculator).toHaveTextContent('48');
  });

  test('evaluates division operation', () => {
    const { getByTestId } = render(<App />);
    const calculator = getByTestId('calculator');
    const screen = calculator.querySelector('.input');
    const button1 = calculator.querySelector('.button[value="8"]');
    const button2 = calculator.querySelector('.button[value="/"]');
    const button3 = calculator.querySelector('.button[value="2"]');
    const equalsButton = calculator.querySelector('.equals-button[value="="]');
    fireEvent.click(button1);
    fireEvent.click(button2);
    fireEvent.click(button3);
    fireEvent.click(equalsButton);
    expect(calculator).toHaveTextContent('4');
  });

  test('evaluates square-root operation', () => {
    const { getByTestId } = render(<App />);
    const calculator = getByTestId('calculator');
    const screen = calculator.querySelector('.input');
    const button1 = calculator.querySelector('.button[value="Math.sqrt("]');
    const button2 = calculator.querySelector('.button[value="9"]');
    const button3 = calculator.querySelector('.button[value=")"]');

    const equalsButton = calculator.querySelector('.equals-button[value="="]');
    fireEvent.click(button1);
    fireEvent.click(button2);
    fireEvent.click(button3);
    fireEvent.click(equalsButton);
    expect(calculator).toHaveTextContent('3');
  });


});
