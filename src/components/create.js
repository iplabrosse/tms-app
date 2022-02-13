import { Button, Form } from 'semantic-ui-react'
import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';

export default function Create() {
  let navigate = useNavigate();
  const [playerName, setPlayerName] = useState('');
  const [position, setPosition] = useState('');
  const [salary, setSalary] = useState('');
  const postData = () => {
    axios.post(`https://6203eda8c6d8b20017dc333b.mockapi.io/fakeData`, {
      playerName,
      position,
      salary
  }) .then(() => {
    navigate.push('/read')
})
  }

  return (
      <div>
        <Form className='create-form'>
          <Form.Field>
            <label>Player Name</label>
            <input placeholder='Full Name' onChange={(e) => setPlayerName(e.target.value)}/>
          </Form.Field>
          
          <Form.Field>
            <label>Position</label>
            <input placeholder='Position Name'  onChange={(e) => setPosition(e.target.value)}/>
          </Form.Field>
      
          <Form.Field>
            <label>Salary</label>
            <input placeholder='$1,000,000'  onChange={(e) => setSalary(e.target.value)}/>
          </Form.Field>
          
          <Button onClick={postData} type='submit'>Submit</Button>
        </Form>
    </div>
  )
}
