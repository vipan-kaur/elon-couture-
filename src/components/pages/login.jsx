import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Checkbox, FormControlLabel } from "@mui/material";
const Login = () => {
 const [login, setLogin] = useState(true)

  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  })

  const navigate = useNavigate()

  const handleClick = () => {
    setLogin(prev => !prev)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    console.log("name",name)
    console.log("value",value)
    setFormdata(prev => ({
      ...prev,
      [name]: value 
      
    }))
  }

const handleSubmit = (e) => {
  e.preventDefault()

 

if (!login) {
  if (!formdata.name || !formdata.email || !formdata.password || !formdata.confirmPassword) {
    alert("All fields required");
    return;
  }

  if (formdata.password !== formdata.confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  const users = JSON.parse(localStorage.getItem("logininfo")) || [];

  const userExists = users.some(
    (user) => user.email === formdata.email
  );

  if (userExists) {
    alert("User already exists");
    return;
  }

  users.push({
    name: formdata.name,
    email: formdata.email,
    password: formdata.password,
  });

  localStorage.setItem("logininfo", JSON.stringify(users));

  alert("Signup successful");
  setLogin(true);
  return;
}


  // ===== LOGIN =====
  if (!formdata.email || !formdata.password) {
    alert("All fields required")
    return
  }

  const saveddata = JSON.parse(localStorage.getItem("logininfo"))

  if (!saveddata) {
    alert("No user found. Please sign up.")
    return
  }

if (!formdata.email || !formdata.password) {
  alert("All fields required");
  return;
}

const users = JSON.parse(localStorage.getItem("logininfo")) || [];

if (users.length === 0) {
  alert("No user found. Please sign up.");
  return;
}

const loggedInUser = users.find(
  (user) =>
    user.email === formdata.email &&
    user.password === formdata.password
);

if (loggedInUser) {
  alert("Login successful");

  // optional: store logged-in user
  localStorage.setItem("users", JSON.stringify(loggedInUser));

  navigate("/");
} else {
  alert("Invalid email or password");
}

}



  return (
    <div className="h-full mt-5 flex items-center w-full justify-center">
      <div className="flex w-4/5 md:w-2/5  ">

        

        <div className="w-full  shadow-2xl  pb-20 ">
            <div>
          <button onClick={handleClick} className={`text-3xl w-1/2  p-5 font-semibold text-sky-950 mb-5 ${login?"bg-gray-200":"bg-white"}`}>
            Login
          </button>
          <button  onClick={handleClick}className={`text-3xl w-1/2  p-5 font-semibold text-sky-950 mb-5 ${!login?"bg-gray-200":"bg-white"}`}>
            Sign up
          </button>
</div>
          <form className="space-y-5 px-10 pb-10" onSubmit={handleSubmit}>
               <div className="flex items-start gap-2">
  <input
    type="checkbox"
    id="remember"
    className="mt-1 "
  />
  <label htmlFor="remember" className="text-sm text-gray-400 cursor-pointer">
    Remember me – I want ELON COUTURE  to personalize my shopping experience
  </label>
</div>

            {!login && (
              <div>
                <label className="text-gray-600"></label>
                <input
                  type="text"
                  name="name"
                  placeholder='User Name*'
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded text-gray-600"
                />
              </div>
            )}

            
              <div>
                
                <input
                  type="email"
                  name="email"
                  placeholder='Email*'
                  onChange={handleChange}
                  className="w-full px-4 py-2 border  text-gray-600"
                />
              </div>
          

            <div>
             
              <input
                type="password"
                name="password"
                onChange={handleChange}
                placeholder='Password*'
                className="w-full px-4 py-2 border text-gray-600"
              />
            </div>

            {!login && (
              <div>
                
                <input
                  type="password"
                  name="confirmPassword"
                  onChange={handleChange}
                  placeholder='Confirm Password*'
                  className="w-full px-4 py-2 border text-gray-600"
                />
              </div>
            )}

            <button className="w-full bg-sky-950 text-white py-3 rounded">
              {login ? "Login" : "Signup"}
            </button>
          </form>

          <p className="text-sm text-gray-500 mt-6 text-center">
            New User?
            <button onClick={handleClick} className="text-blue-500 ml-1">
              {login ? "Signup" : "Login"}
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
