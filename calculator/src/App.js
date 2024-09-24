import { Container, Content, Row, Column } from "./styles";
import Input from './components/input';
import Button from './components/button';

import { useState } from "react";


const App = () => {
  const [currentNumber, setCurrentNumber] = useState('')

  const [firstNumber, setFirstNumber] = useState('0');

  const handleOnCLear = () => {
    setCurrentNumber('0')
  }

  const handleAddNumber = (num) => {
    setCurrentNumber(prev => `${num}${prev === '0' ? '' : prev}`)
  } 

  const handleSumNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      handleOnCLear();
    }else{
      console.log(Number(currentNumber), Number(firstNumber))
      const sum = Number(firstNumber) + Number(currentNumber)
      setCurrentNumber(sum.toString());
    }
  }

  //to resolve:
//  - input showing numbers backwards
//  - the HandleSumNumbers function
  return (
    <Container>
    <Content>
      <Input value={currentNumber}/>
      <Row>
      <Button label='7' onClick={() => handleAddNumber('7')}/>
      <Button label='8' onClick={() => handleAddNumber('8')}/>
      <Button label='9' onClick={() => handleAddNumber('9')}/>
      <Button label='-' onClick={() => handleAddNumber('-')}/>
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
      <Button label='=' onClick={() => handleAddNumber('=')}/>
      </Row>
      <Row>
      <Button label='⌫' onClick={() => handleAddNumber('')}/>
      <Button label='0' onClick={() => handleAddNumber('0')}/>
      <Button label='/' onClick={() => handleAddNumber('/')}/>
      <Button label='x' onClick={() => handleAddNumber('*')}/>
      </Row>
      <Row>
      <Button label='Clear' onClick={handleOnCLear}/>
      </Row>
    </Content>
    </Container>
  );
}

export default App;
