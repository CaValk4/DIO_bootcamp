import { Container, Content, Row, Column } from "./styles";
import Input from './components/input';
import Button from './components/button';

import { useState } from "react";


const App = () => {
  const [currentNumber, setCurrentNumber] = useState('')

  const [firstNumber, setFirstNumber] = useState('0');

  const [operation, setOperation] = useState('');

  const handleOnCLear = () => {
    setCurrentNumber('0')
  }

  const handleAddNumber = (num) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`)
  } 

  const handleSumNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      handleOnCLear();
      setOperation('+')
    }else{
      console.log(Number(currentNumber), Number(firstNumber))
      const sum = Number(firstNumber) + Number(currentNumber)
      setCurrentNumber(String(sum));
      setOperation('')
    }
  }

  const handleSubtractNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      handleOnCLear();
      setOperation('-')
    }else{
      console.log(Number(currentNumber), Number(firstNumber))
      const sum = Number(firstNumber) - Number(currentNumber)
      setCurrentNumber(String(sum));
      setOperation('')
    }
  }

  const handleMultiplyNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      handleOnCLear();
      setOperation('*')
    }else{
      console.log(Number(currentNumber), Number(firstNumber))
      const sum = Number(firstNumber) * Number(currentNumber)
      setCurrentNumber(String(sum));
      setOperation('')
    }
  }

  const handleDivideNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      handleOnCLear();
      setOperation('/')
    }else{
      console.log(Number(currentNumber), Number(firstNumber))
      const sum = Number(firstNumber) / Number(currentNumber)
      setCurrentNumber(String(sum));
      setOperation('')
    }
  }
  

  const handleEquals = () => {
    if(!firstNumber !== '0' && operation !== '1' && currentNumber !== '0'){
      switch (operation) {
        case '+':
          handleSumNumbers();
          break;
        case '-':
          handleSubtractNumbers();
          break;
        case '*':
          handleMultiplyNumbers();
          break;
        case '/':
          handleDivideNumbers();
      
        default:
          break;
      }
    }
  }

  return (
    <Container>
    <Content>
      <Input value={currentNumber}/>
      <Row>
      <Button label='7' onClick={() => handleAddNumber('7')}/>
      <Button label='8' onClick={() => handleAddNumber('8')}/>
      <Button label='9' onClick={() => handleAddNumber('9')}/>
      <Button label='-' onClick={handleSubtractNumbers}/>
      </Row>
      <Row>
      <Button label='4' onClick={() => handleAddNumber('4')}/>
      <Button label='5' onClick={() => handleAddNumber('5')}/>
      <Button label='6' onClick={() => handleAddNumber('6')}/>
      <Button label='+' onClick={handleSumNumbers}/>
      </Row>
      <Row>
      <Button label='1' onClick={() => handleAddNumber('1')}/>
      <Button label='2' onClick={() => handleAddNumber('2')}/>
      <Button label='3' onClick={() => handleAddNumber('3')}/>
      <Button label='=' onClick={handleEquals}/>
      </Row>
      <Row>
      <Button label='⌫' onClick={() => handleAddNumber('')}/>
      <Button label='0' onClick={() => handleAddNumber('0')}/>
      <Button label='/' onClick={handleDivideNumbers}/>
      <Button label='*' onClick={handleMultiplyNumbers}/>
      </Row>
      <Row>
      <Button label='Clear' onClick={handleOnCLear}/>
      </Row>
    </Content>
    </Container>
  );
}

export default App;
