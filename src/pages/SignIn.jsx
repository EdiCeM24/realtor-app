import { useState } from 'react';
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Link } from 'react-router-dom';



export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [ formData, setFormData ] = useState({
    email: '',
    password: '',
  });
  const { email, password } = formData;
  function onChange(e) {
    //console.log(e.target.value);
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }
  return (
    <section>
       <h1 className="text-3xl text-center text-yellow-800 mt-6 font-bold">Sign In</h1>
    
      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto">
        <div className="w-full md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
           <img src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?q=80&w=1373&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Key" className="w-full rounded-2xl" />
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
          <form className='p-8'>
             <input type="email" id="email" value={email} onChange={onChange} placeholder='Enter Your email address' className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"/>

            <div className='relative mt-4'>
              <input type={showPassword ? 'text' : 'password'} id="password" value={password} onChange={onChange} placeholder='Enter your password' 
              className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out" />
              (/**
               * ! is not working the code below.
              **/)
              {showPassword ? (
                 <AiFillEyeInvisible className='absolute right-3 top-3 text-xl text-gray-700 cursor-pointer' onClick={() => setShowPassword((prevState) => !prevState)}/> 
              ):( 
                <AiFillEye className='absolute right-3 top-3 text-xl text-gray-700 cursor-pointer'/>
              )}
            </div>

            <div className='flex justify-between items-center mt-6 whitespace-nowrap text-sm sm:text-lg'>
                <p className='text-center text-gray-700'>Don't have an account? 
                  <Link to="/sign-up"  className='text-yellow-800 font-bold hover:underline'>Register</Link>
                </p>
                <p>
                  <Link to="/forgot-password">Forgot Password?</Link>
                </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
