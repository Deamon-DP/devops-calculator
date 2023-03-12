import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';


  test('check Button 1 ', () => {
    const { getByTestId } = render(<App />);
    const calculator = getByTestId('calculator');
    const screen = calculator.querySelector('.input');
    const button = calculator.querySelector('.button[value="1"]');
    fireEvent.click(button);
    expect(screen).toHaveTextContent('1');
  });
  test('check button 2', () => {
    const { getByTestId } = render(<App />);
    const calculator = getByTestId('calculator');
    const screen = calculator.querySelector('.input');
    const button = calculator.querySelector('.button[value="2"]');
    fireEvent.click(button);
    expect(screen).toHaveTextContent('2');
  });

  test('check Button 3', () => {
    const { getByTestId } = render(<App />);
    const calculator = getByTestId('calculator');
    const screen = calculator.querySelector('.input');
    const button = calculator.querySelector('.button[value="3"]');
    fireEvent.click(button);
    expect(screen).toHaveTextContent('3');
  });
  test('check Button 4', () => {
    const { getByTestId } = render(<App />);
    const calculator = getByTestId('calculator');
    const screen = calculator.querySelector('.input');
    const button = calculator.querySelector('.button[value="4"]');
    fireEvent.click(button);
    expect(screen).toHaveTextContent('4');
  });
  test('check Button 5', () => {
    const { getByTestId } = render(<App />);
    const calculator = getByTestId('calculator');
    const screen = calculator.querySelector('.input');
    const button = calculator.querySelector('.button[value="5"]');
    fireEvent.click(button);
    expect(screen).toHaveTextContent('5');
  }); 
  test('check Button 6', () => {
    const { getByTestId } = render(<App />);
    const calculator = getByTestId('calculator');
    const screen = calculator.querySelector('.input');
    const button = calculator.querySelector('.button[value="6"]');
    fireEvent.click(button);
    expect(screen).toHaveTextContent('6');
  }); 
  test('check Button 7', () => {
    const { getByTestId } = render(<App />);
    const calculator = getByTestId('calculator');
    const screen = calculator.querySelector('.input');
    const button = calculator.querySelector('.button[value="7"]');
    fireEvent.click(button);
    expect(screen).toHaveTextContent('7');
  }); 
  test('check Button 8', () => {
    const { getByTestId } = render(<App />);
    const calculator = getByTestId('calculator');
    const screen = calculator.querySelector('.input');
    const button = calculator.querySelector('.button[value="8"]');
    fireEvent.click(button);
    expect(screen).toHaveTextContent('8');
  });
  test('check Button 9', () => {
    const { getByTestId } = render(<App />);
    const calculator = getByTestId('calculator');
    const screen = calculator.querySelector('.input');
    const button = calculator.querySelector('.button[value="9"]');
    fireEvent.click(button);
    expect(screen).toHaveTextContent('9');
  });
  test('check Button 0', () => {
    const { getByTestId } = render(<App />);
    const calculator = getByTestId('calculator');
    const screen = calculator.querySelector('.input');
    const button = calculator.querySelector('.button[value="0"]');
    fireEvent.click(button);
    expect(screen).toHaveTextContent('0');
  });

  test('check Button .', () => {
    const { getByTestId } = render(<App />);
    const calculator = getByTestId('calculator');
    const screen = calculator.querySelector('.input');
    const button = calculator.querySelector('.button[value="."]');
    fireEvent.click(button);
    expect(screen).toHaveTextContent('.');
  });
  test('check Button +', () => {
    const { getByTestId } = render(<App />);
    const calculator = getByTestId('calculator');
    const screen = calculator.querySelector('.input');
    const button = calculator.querySelector('.button[value="+"]');
    fireEvent.click(button);
    expect(screen).toHaveTextContent('+');
  });
  test('check Button -', () => {
    const { getByTestId } = render(<App />);
    const calculator = getByTestId('calculator');
    const screen = calculator.querySelector('.input');
    const button = calculator.querySelector('.button[value="-"]');
    fireEvent.click(button);
    expect(screen).toHaveTextContent('-');
  });
  test('check Button *', () => {
    const { getByTestId } = render(<App />);
    const calculator = getByTestId('calculator');
    const screen = calculator.querySelector('.input');
    const button = calculator.querySelector('.button[value="*"]');
    fireEvent.click(button);
    expect(screen).toHaveTextContent('*');
  });
  test('check Button /', () => {
    const { getByTestId } = render(<App />);
    const calculator = getByTestId('calculator');
    const screen = calculator.querySelector('.input');
    const button = calculator.querySelector('.button[value="/"]');
    fireEvent.click(button);
    expect(screen).toHaveTextContent('/');
  });
  test('check Button %', () => {
    const { getByTestId } = render(<App />);
    const calculator = getByTestId('calculator');
    const screen = calculator.querySelector('.input');
    const button = calculator.querySelector('.button[value="%"]');
    fireEvent.click(button);
    expect(screen).toHaveTextContent('%');
  });
  
  test('check Button (', () => {
    const { getByTestId } = render(<App />);
    const calculator = getByTestId('calculator');
    const screen = calculator.querySelector('.input');
    const button = calculator.querySelector('.button[value="("]');
    fireEvent.click(button);
    expect(screen).toHaveTextContent('(');
  });
  test('check Button )', () => {
    const { getByTestId } = render(<App />);
    const calculator = getByTestId('calculator');
    const screen = calculator.querySelector('.input');
    const button = calculator.querySelector('.button[value=")"]');
    fireEvent.click(button);
    expect(screen).toHaveTextContent(')');
  });


test('check Button π', () => {
    const { getByTestId } = render(<App />);
    const calculator = getByTestId('calculator');
    const screen = calculator.querySelector('.input');
    const button = calculator.querySelector('.button[value="Math.PI"]');
    fireEvent.click(button);
    expect(screen).toHaveTextContent('Math.PI');
  });


  test('check Button e', () => {
    const { getByTestId } = render(<App />);
    const calculator = getByTestId('calculator');
    const screen = calculator.querySelector('.input');
    const button = calculator.querySelector('.button[value="Math.E"]');
    fireEvent.click(button);
    expect(screen).toHaveTextContent('Math.E');
  });
  test('check Button !', () => {
    const { getByTestId } = render(<App />);
    const calculator = getByTestId('calculator');
    const screen = calculator.querySelector('.input');
    const button = calculator.querySelector('.button[value="!"]');
    fireEvent.click(button);
    expect(screen).toHaveTextContent('!');
  });
  test('check Button sin', () => {
    const { getByTestId } = render(<App />);
    const calculator = getByTestId('calculator');
    const screen = calculator.querySelector('.input');
    const button = calculator.querySelector('.button[value="Math.sin("]');
    fireEvent.click(button);
    expect(screen).toHaveTextContent('Math.sin(');
  });
  test('check Button cos', () => {
    const { getByTestId } = render(<App />);
    const calculator = getByTestId('calculator');
    const screen = calculator.querySelector('.input');
    const button = calculator.querySelector('.button[value="Math.cos("]');
    fireEvent.click(button);
    expect(screen).toHaveTextContent('Math.cos(');
  });

  test('check Button tan', () => {
    const { getByTestId } = render(<App />);
    const calculator = getByTestId('calculator');
    const screen = calculator.querySelector('.input');
    const button = calculator.querySelector('.button[value="Math.tan("]');
    fireEvent.click(button);
    expect(screen).toHaveTextContent('Math.tan(');
  });
  test('check Button log', () => {
    const { getByTestId } = render(<App />);
    const calculator = getByTestId('calculator');
    const screen = calculator.querySelector('.input');
    const button = calculator.querySelector('.button[value="Math.log10("]');
    fireEvent.click(button);
    expect(screen).toHaveTextContent('Math.log10(');
  });

  test('check Button sqrt', () => {
    const { getByTestId } = render(<App />);
    const calculator = getByTestId('calculator');
    const screen = calculator.querySelector('.input');
    const button = calculator.querySelector('.button[value="Math.sqrt("]');
    fireEvent.click(button);
    expect(screen).toHaveTextContent('Math.sqrt(');
  });
  test('check Button ceil', () => {
    const { getByTestId } = render(<App />);
    const calculator = getByTestId('calculator');
    const screen = calculator.querySelector('.input');
    const button = calculator.querySelector('.button[value="Math.ceil("]');
    fireEvent.click(button);
    expect(screen).toHaveTextContent('Math.ceil(');
  });
  test('check Button floor', () => {
    const { getByTestId } = render(<App />);
    const calculator = getByTestId('calculator');
    const screen = calculator.querySelector('.input');
    const button = calculator.querySelector('.button[value="Math.floor("]');
    fireEvent.click(button);
    expect(screen).toHaveTextContent('Math.floor(');
  });

  test('check Button absolute', () => {
    const { getByTestId } = render(<App />);
    const calculator = getByTestId('calculator');
    const screen = calculator.querySelector('.input');
    const button = calculator.querySelector('.button[value="Math.abs("]');
    fireEvent.click(button);
    expect(screen).toHaveTextContent('Math.abs(');
  });
  test('check Button ^', () => {
    const { getByTestId } = render(<App />);
    const calculator = getByTestId('calculator');
    const screen = calculator.querySelector('.input');
    const button = calculator.querySelector('.button[value="**"]');
    fireEvent.click(button);
    expect(screen).toHaveTextContent('**');
  });
  test('check Button exp', () => {
    const { getByTestId } = render(<App />);
    const calculator = getByTestId('calculator');
    const screen = calculator.querySelector('.input');
    const button = calculator.querySelector('.button[value="Math.exp("]');
    fireEvent.click(button);
    expect(screen).toHaveTextContent('Math.exp(');
  });






  test('check Button AC', () => {
    const { getByTestId } = render(<App />);
    const calculator = getByTestId('calculator');
    const screen = calculator.querySelector('.input');
    const button = calculator.querySelector('.button[value="C"]');
    fireEvent.click(button);
    expect(screen).toHaveTextContent('0');
  });
  test('check button delete', () => {
    const { getByTestId } = render(<App />);
    const calculator = getByTestId('calculator');
    const screen = calculator.querySelector('.input');


    const button = calculator.querySelector('.button[value="DEL"]');
    
    fireEvent.click(button);

    expect(screen).toHaveTextContent('');
  });




  



