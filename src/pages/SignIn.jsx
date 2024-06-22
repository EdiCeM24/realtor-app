import { useState } from 'react';


export default function SignIn() {
  const [ formData, setFormData ] = useState({
    email: '',
    password: '',
  });
  const { email, password } = formData;
  function onChange(e) {
    //console.log(e.target.value);
  }
  return (
    <section>
       <h1 className="text-3xl text-center text-yellow-800 mt-6 font-bold">Sign In</h1>
    
      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto">
        <div className="w-full md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
           <img src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?q=80&w=1373&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Key" className="w-full rounded-2xl" />
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
          <form>
             <input className="w-full" type="email" id="email" value={email} onChange={onChange}/>

             <input type="password" className="w-full" id="" value={password}/>
          </form>
        </div>
      </div>
    </section>
  )
}
