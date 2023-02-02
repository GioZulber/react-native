import {useRef, useState} from 'react';

enum Operadores {
  sumar,
  restar,
  multiplicar,
  dividir,
}
export const useCalculadora = () => {
  const [lastNumber, setLastNumber] = useState('0');

  const [number, setNumber] = useState('0');

  const lastOperation = useRef<Operadores>();

  const cleanup = () => {
    setNumber('0');
    setLastNumber('0');
  };
  const btnDelete = () => {
    let negativo = '';
    let temporalNumber = number;

    if (number.includes('-')) {
      negativo = '-';
      temporalNumber = number.substring(1);
    }

    if (temporalNumber.length > 1) {
      setNumber(negativo + temporalNumber.slice(0, -1));
    } else {
      setNumber('0');
    }
  };
  const buildNumber = (numberString: string) => {
    // no aceptar doble punto
    if (number.includes('.') && numberString === '.') {
      return;
    }
    if (number.startsWith('0') || number.startsWith('-0')) {
      // punto decimal
      if (numberString === '.') {
        console.log('hola');
        setNumber(number + numberString);
        // evaluamos si es otro cero y hay un punto
      } else if (numberString === '0' && number.includes('.')) {
        setNumber(number + numberString);
        //Evaluar si es diferente de 0 y no tiene un punto
      } else if (numberString !== '0' && !number.includes('.')) {
        setNumber(numberString);
      } else if (numberString === '0' && !number.includes('.')) {
        setNumber(number);
      } else {
        setNumber(number + numberString);
      }
    } else {
      setNumber(number + numberString);
    }
  };

  const positiveNegative = () => {
    if (number.includes('-')) {
      setNumber(number.replace('-', ''));
    } else {
      setNumber('-' + number);
    }
  };

  const changeLastNumber = () => {
    if (number.endsWith('.')) {
      setLastNumber(number.slice(0, -1));
    } else {
      setLastNumber(number);
    }
    setNumber('0');
  };

  const btnDividir = () => {
    changeLastNumber();
    lastOperation.current = Operadores.dividir;
  };
  const btnMultiplicar = () => {
    changeLastNumber();
    lastOperation.current = Operadores.multiplicar;
  };
  const btnSumar = () => {
    changeLastNumber();
    lastOperation.current = Operadores.sumar;
  };
  const btnRestar = () => {
    changeLastNumber();
    lastOperation.current = Operadores.restar;
  };

  const calculate = () => {
    const num1 = Number(number);
    const num2 = Number(lastNumber);

    switch (lastOperation.current) {
      case Operadores.sumar: {
        setNumber(`${num1 + num2}`);
        break;
      }
      case Operadores.restar: {
        setNumber(`${num2 - num1}`);
        break;
      }
      case Operadores.multiplicar: {
        setNumber(`${num1 * num2}`);
        break;
      }
      case Operadores.dividir: {
        setNumber(`${num2 / num1}`);
        break;
      }
      default:
        break;
    }
    setLastNumber('0');
  };
  return {
    lastNumber,
    number,
    cleanup,
    positiveNegative,
    btnDelete,
    btnDividir,
    btnMultiplicar,
    btnRestar,
    btnSumar,
    buildNumber,
    calculate,
  };
};
