import { useState } from 'react';


export default function SignIn() {
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

             <input type="password" id="password" value={password} onChange={onChange} placeholder='Enter your password' 
              className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out" />
          </form>
        </div>
      </div>
    </section>
  )
}
