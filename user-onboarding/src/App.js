import './App.css';
import Form from './components/Form.js';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import * as yup from 'yup';
import User from './components/User';
import schema from './components/formSchema';

const initialFormValues = {
  username: '',
  email: '',
  password: '',
  terms: false,
}

const initialFormErrors = {
  username: '',
  email: '',
  password: '',
  terms: '',
}

function App() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [users, setUsers] = useState([]);
  const [disabled, setDisabled] = useState(true);

  const inputChange = (name, value) => {
    setFormValues({
      ...formValues, [name]: value
    })
  }

  const postNewUser = newUser => {
    axios.post('https://reqres.in/api/users', newUser)
      .then(res => {
        // console.log(res);
        setUsers([res.data, ...users]);
      })
      .catch(err => console.error(err))
      .finally(() => {
        setFormValues(initialFormValues);
      })
  }

  const validate = (name, value) => {
    yup.reach(schema, name).validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch(err => setFormErrors({...formErrors, [name]: err.errors[0] }))
  }

  const submitForm = () => {
    const newUser = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      password: formValues.password,
      terms: formValues.checked
    }
    postNewUser(newUser);
    setFormValues(initialFormValues);
  }

  useEffect(() => {
    axios.get('https://reqres.in/api/users')
      .then(res => {
        console.log(res.data.data);
        setUsers(res.data.data);
        // console.log(users)
      })
      .catch(err => console.error(err))
  }, [])

  return (
    <div className="App">
      <Form values={formValues} change={inputChange} submit={submitForm} validate={validate} errors={ formErrors}/>
      {users.map(user => {
        return (
          <User
            username={user.username}
            email={user.email}
            id={user.id}
          />
        )
      })}
    </div>
  );
}

export default App;
