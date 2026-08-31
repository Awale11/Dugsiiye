import React from 'react'
import { useForm } from 'react-hook-form'


function App() {

  const { register, handleSubmit, formState : {errors}} = useForm({mode: 'onChange'});
  // bu mode onchange=Input'un değeri her değiştiğinde validation yap.

  const onSubmit = (data)=> {
    console.log(data);
    alert('Registration successful!\n' + JSON.stringify(data, null, 2));
  };

  return (

    <div className='max-w-md mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-md'>
      <h1 className='text-3xl font-bold mb-4 text-center'>Student Registration</h1>
      <form className='space-y-4'
      onSubmit={handleSubmit(onSubmit)}>
        {/* Student Name */}
        <div>
          <label className='block text-sm font-medium  mb-2'>
            Student Name</label>
          <input 
          className='w-full p-2 border rounded-lg'
          type="text" 
          {...register('name', {required: 'Name is required', minLength: {
            value: 2, 
            message: 'Name must be at least 2 characters'
          }})}/>
            {errors.name && <p className='text-red-500 text-sm mt-1'>{errors.name.message}</p>}
            {/* error varsa, show the message */}
        </div>

        {/* Email */}
        <div>
          <label className='block text-sm font-medium mb-2'>
            Email</label>
          <input 
          className='w-full p-2 border rounded-lg'
          type="email" 
          {...register('email', {required:'email is required', pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email address'}})}/>
            {errors.email && <p className='text-red-500 text-sm mt-1'>{errors.email.message}</p>}
        </div>

        {/* selection option */}
        <label className='block text-sm font-medium mb-2'>
          Grade lavel</label>
        <select
        className='w-full p-2 border rounded-lg '
        {...register('grade', {required:'please select a grade'})}
        >
          <option value="">Select Grade</option>
          <option value="grade9">Grade 9</option>
          <option value="grade10">Grade 10</option>
          <option value="grade11">Grade 11</option>
          <option value="grade12">Grade 12</option>
        </select>
        {errors.grade && <p className='text-red-500 text-sm'>{errors.grade.message}</p>}

        {/* chekbox */}
        <div>
           <label className='block text-sm font-medium mb-2'>
            Subject Interest</label>
           <div className='space-y-2'>
            <label className='flex items-center'>
            <input 
            className='mr-2'
            type="checkbox" 
            {...register('subjects', {
              required: 'Select at least one subject'})}
              value= 'math'
            />
            Mathematics
            </label>
            <label className='flex items-center'>
              <input 
              className='mr-2'
              type="checkbox" 
              {...register('subjects')}
              value='science'
              />
              Science
            </label>
            <label className='flex items-center '>
              <input 
              className='mr-2'
              type="checkbox" 
              {...register('subjects')}
              value='english'
              />
              English
            </label>
           </div>
           {errors.subjects && <p className='text-red-500 text-sm mt-1'>{errors.subjects.message}</p>}
        </div>
        
            {/* Submit Button */}
        <button 
        className='bg-rose-500 rounded-lg text-white py-2 w-full cursor-pointer hover:bg-green-600'
        type='submit'>Register</button>
      </form>
    </div>
  )
}

export default App
// COMMENTS

//  register → inputları form'a bağlar
// handleSubmit → submit + validation sürecini yönetir
// errors → validation hatalarını tutar.

// Tailwind 
// min-h-screen → en az ekran yüksekliği
// w-full → küçük ekranlarda genişliği kullan
// max-w-lg → büyük ekranda aşırı büyümesin