import Input from "./Input";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation.js"
import { useInput } from "../hooks/useInput";

export default function Login() {

  const {value: emailValue, handleInputChange: handleEmailChange, 
        handleInputBlur: handleEmailBlur, hasError: emailHasError} = useInput('', (value) => isEmail(value) && isNotEmpty(value));

  const {value: passwordValue, handleInputChange: handlePasswordChange,
        handleInputBlur: handlePasswordBlur, hasError: passwordHasError} = useInput("", (value) => hasMinLength(value, 6));

  function handleSubmit(event) {
    event.preventDefault();

    if(emailHasError || passwordHasError) {
      return;
    }
    console.log(emailValue, passwordValue);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input label="Email" id="email"type="email" name="email" 
          onChange={handleEmailChange} 
          onBlur={handleEmailBlur} 
          value={emailValue} error={emailHasError && "Please enter valid email"}/>
        <Input label="Password" id="password" type="password" name="password" 
          onChange={handlePasswordChange} 
          onBlur={handlePasswordBlur} 
          value={passwordValue} error={passwordHasError && "Please enter valid password"}/>
      </div>
      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}















// // const [enteredEmail, setEnteredEmail] = useState('');
//   // const [enteredPassword, setEnteredPassword] = useState('');
//   const [enteredValues, setEnteredValues] = useState({
//     email: '',
//     password: ''
//   });

//   const [didEdit, setDidEdit] = useState({
//     email: false,
//     password: false
//   })

//   const emailIsInvalid = didEdit.email && !isEmail(enteredValues.email) && !isNotEmpty(enteredValues.email); 
//   const passwordIsInvalid = didEdit.password && !hasMinLength(enteredValues.password, 6);

//   function handleSubmit(event) {
//     event.preventDefault();

//     console.log(enteredValues);
//   }

//   function handleInputChange(identifier, value){
//     setEnteredValues((prevValue) => ({
//       ...prevValue,
//       [identifier] : value
//     }));
//     setDidEdit((prevValue) => ({
//       ...prevValue,
//       [identifier]: false
//     }))
//   }

//   function handleInputBlur(identifier){
//     setDidEdit((prevValue) => ({
//       ...prevValue,
//       [identifier]: true
//     }));
//   }
