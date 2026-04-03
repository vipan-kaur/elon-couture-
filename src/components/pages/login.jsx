import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const [login, setLogin] = useState(true)
const[verifyotp,setverifyotp]=useState(false)
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    password: "",
    PhoneNo: "",
    otp:""
  })

  const navigate = useNavigate()

  const handleClick = () => {
    setLogin(prev => !prev)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormdata(prev => ({
      ...prev,
      [name]: value 
      
    }))
  }

const handleSubmit =async (e) => {
  e.preventDefault()


if (!login) {
  if (!formdata.name || !formdata.email || !formdata.password || !formdata.PhoneNo) {
    alert("All fields required");
   
  }


  try {
    const response = await fetch("http://localhost:3000/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type":"application/json",
                },
      body: JSON.stringify({ 
        name: formdata.name,
        email: formdata.email,
        password: formdata.password,
        PhoneNo: formdata.PhoneNo
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      alert(data.message || "Signup failed");
      return;
    } 
     

    alert("Signup successful");
    setLogin(true);

  } catch (error) {
    console.error(error);
    alert("Server error");
  }

  return;
}


  // ===== LOGIN =====
  if (!formdata.email || !formdata.password) {
    alert("All fields required")
    return
  }

 try{
  const response= await fetch("http://localhost:3000/api/auth/login",{
    method:"POST",
    headers:{
      "content-type":"application/json"
    },
    body:JSON.stringify({
     email: formdata.email,
     password:formdata.password
    })
    
  })
  const data = await response.json()
  if(!response.ok){
    alert(data.message|| "invalid email or password")
    return;
  }
  alert("otp sent")
  setverifyotp(true)
 }catch(error){
  console.log(error.message)
 }
}

 const handleverifyOtp =async(e)=>{
  e.preventDefault();
  if(!formdata.otp){
    alert("please enter OTP")
    return;
  }
try{
  const response=await fetch("http://localhost:3000/api/auth/verify",{
    method:"POST",
  headers:{
    "content-type":"application/json"
  },
  body:JSON.stringify({
    otp:formdata.otp,
    email:formdata.email
  })
  })
  const data=await response.json()
  if(!response.ok){
    alert(data.message || "otp verification failed")
    return;
  }

const userId=data.user._id
  alert("otp verified successfully")
  navigate(`/profile/${userId}`);

}catch(error){
  console.log(error.message)
  alert("server error")
}
 }





  return (
   <div className=" relative min-h-screen mt-2 flex items-center justify-center px-4">
    <Link to="/admin"> <button className='absolute top-20 right-50  bg-black text-white px-3 rounded'> Admin</button></Link>
  <div className="  flex flex-col md:flex-row w-full max-w-4xl">
   

    <div className="relative bg-black text-white p-6 md:p-10 w-full md:w-1/2">
      <p className="text-sm font-semibold mb-6">COMPANY LOGO</p>
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Welcome to...</h1>
      <p className="opacity-50 max-w-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>

    <div className="w-full md:w-1/2 p-6 md:p-10">
      <h2 className="text-2xl md:text-3xl font-semibold text-black mb-2">
        {login ? "Login" : "Signup"}
      </h2>

      <form className="space-y-5" onSubmit={handleSubmit}>

        {!login && (
          <div>
            <label className="text-gray-600">User Name</label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded"
            />
          </div>
        )}

        <div>
          <label className="text-gray-600">Email</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          />
        </div>

        <div>
          <label className="text-gray-600">Password</label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          />
        </div>

        {verifyotp && (
          <div className="otp-section">
            <label className="text-gray-600">OTP</label>
            <input
              type="number"
              name="otp"
              value={formdata.otp}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded"
            />
            <button
              onClick={handleverifyOtp}
              className="w-full bg-black text-white py-2 mt-2 rounded"
            >
              Verify OTP
            </button>
          </div>
        )}

        {!login && (
          <div>
            <label className="text-gray-600">Phone NO</label>
            <input
              type="Number"
              name="PhoneNo"
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded"
            />
          </div>
        )}

      {!verifyotp &&  <button className="w-full bg-black text-white py-3 rounded">
          {login ? "Login" : "Signup"}
        </button>}
      </form>
{!verifyotp &&
      <p className="text-sm text-gray-500 mt-6 text-center">
     <span>New User?</span>
        <button onClick={handleClick} className="text-blue-500 ml-1">
          {login ? "Signup" : "Login"}
        </button>
      </p>}
    </div>
  </div>
</div>)
}

export default Login
