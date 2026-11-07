"use client"

import { useActionState } from "react";
import { greet } from "./form/actions";

const initialState = {
  success: false,
  message: '', 
  error: ''
}

export default function Home() {

  const [state, formAction] = useActionState(greet, initialState)

  return (
   <div className="flex flex-col items-center justify-center mt-6">
      <form 
      className="flex flex-col gap-2"
      action={formAction}>

        <input 
        className="border-2 border-gray-300 rounded-md p-2"
        type="email"
        name='email'
        placeholder="Enter your email"
         />

         <input 
         className="border-2 border-gray-300 rounded-md p-2"
         type="password" 
         name="password"
         placeholder='Enter your password'
         required
         />

         <input 
         className="border-2 border-gray-300 rounded-md p-2"
         type="text"
         name="firstName"
         placeholder="Enter your first name"
          />

         <input 
         className="border-2 border-gray-300 rounded-md p-2"
         type="text"
         name="lastName"
         placeholder="Enter your last name"
          />

         <button 
         className="bg-rose-500 text-white p-2 rounded-md"
         type="submit"
         >Submit</button>

         {state.success && (
            <p 
            className="text-green-600 mt-4 font-medium"
            >{state.message}</p>
         )}

         {!state.success && state.error && (
          <p
          className="text-rose-600 mt-4 font-medium"
          >{state.error}</p>
         )}
      </form>
   </div>
  );
}
