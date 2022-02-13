import React, { useState, useEffect } from 'react';
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useNavigate } from 'react-router';

export default function Create() {
  let navigate = useNavigate();
  const [playerName, setPlayerName] = useState('');
  const [position, setPosition] = useState('');
  const [salary, setSalary] = useState('');

  useEffect(() => {
    setPlayerName(localStorage.getItem('Player Name'));
    setPosition(localStorage.getItem('Position'));
    setSalary(localStorage.getItem('Salary'));
}, []);

  const updateAPIData= () => {
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
            <input placeholder='Full Name' value={playerName} onChange={(e) => setPlayerName(e.target.value)}/>
          </Form.Field>
          
          <Form.Field>
            <label>Position</label>
            <input placeholder='Position Name' value={position} onChange={(e) => setPosition(e.target.value)}/>
          </Form.Field>
      
          <Form.Field>
            <label>Salary</label>
            <input placeholder='$1,000,000' value={salary} onChange={(e) => setSalary(e.target.value)}/>
          </Form.Field>
          
          <Button onClick={updateAPIData} type='submit'>Update</Button>
        </Form>
    </div>
  )
}