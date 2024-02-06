import { useState } from "react";
import Input from "./Input";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation.js"

export default function Login() {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [enteredPassword, setEnteredPassword] = useState('');
  const [enteredValues, setEnteredValues] = useState({
    email: '',
    password: ''
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false
  })

  const emailIsInvalid = didEdit.email && !isEmail(enteredValues.email) && !isNotEmpty(enteredValues.email); 
  const passwordIsInvalid = didEdit.password && hasMinLength(enteredValues.password, 6);

  function handleSubmit(event) {
    event.preventDefault();

    console.log(enteredValues);
  }

  function handleInputChange(identifier, value){
    setEnteredValues((prevValue) => ({
      ...prevValue,
      [identifier] : value
    }));
    setDidEdit((prevValue) => ({
      ...prevValue,
      [identifier]: false
    }))
  }

  // function handleEmailChange(event) {
  //   setEnteredEmail(event.target.value);
  // }
  // function handlePasswordChange(event) {
  //   setEnteredPassword(event.target.value);
  // }

  function handleInputBlur(identifier){
    setDidEdit((prevValue) => ({
      ...prevValue,
      [identifier]: true
    }));
    console.log(didEdit);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input label="Email" id="email"type="email" name="email" 
          onChange={(event) => handleInputChange("email", event.target.value)} 
          onBlur={() => handleInputBlur('email')} 
          value={enteredValues.email} error={emailIsInvalid && "Please enter valid email"}/>
        <Input label="Password" id="password" type="password" name="password" 
          onChange={(event) => handleInputChange("password", event.target.value)} 
          onBlur={() => handleInputBlur('password')} 
          value={enteredValues.password} error={passwordIsInvalid && "Please enter valid password"}/>
      </div>
      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
