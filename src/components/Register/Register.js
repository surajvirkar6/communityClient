import { useState } from "react";
import './Register.css';

function Register() {
  const [name, setname] = useState("");
  const [mobile, setmobile] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [errorText, seterrorText] = useState("")

  const handleSubmit = e => {
    e.preventDefault();
    if(isValid()){
      console.log("send form data");
    }
  }

  function isValid(){
    if(!name || name.match(/[^A-Za-z]/)){
      seterrorText("Please enter valid name");
      return false;
    } else if(!mobile || mobile.toString().length !== 10){
      seterrorText("Please enter 10 digit mobile number");
      return false;
    } else if(!email || !email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)){
      seterrorText("Please enter valid email");
      return false;
    } else if(!password){
      seterrorText("Please enter valid password");
      return false;
    } else if(!confirmPassword){
      seterrorText("Please enter valid confirm password");
      return false;
    } else if(password !== confirmPassword){
      seterrorText("Password doest not match.");
      return false;
    }

    seterrorText('');
    return true;
  }

  return (
    <div>
      <div className="register_container">
        <h3 className="register_header">Register</h3>
        <p className="error_text">{errorText}</p>
          <form className="form" onSubmit={handleSubmit}>
            <input
              type="text"
              value={name}
              onChange={(e) => setname(e.target.value)}
              placeholder="Enter your Name"
            />
            <input
              type="number"
              value={mobile}
              onChange={(e) => setmobile(e.target.value)}
              placeholder="Enter your Mobile Number"
            />
            <input
              type="text"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              placeholder="Enter your Email"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              placeholder="Enter your Password"
            />
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setconfirmPassword(e.target.value)}
              placeholder="Enter yout Confirm Password"
            />
            <button className="register_btn">Register</button>
          </form>
      </div>
    </div>
  );
}

export default Register;
