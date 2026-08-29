import React, { useState } from 'react'

function App() {

  const [form, setForm] = useState({
    fullName: '',
    email: '',
    role: '',
    experience: '',
    skills: [],
    terms: false,
    notifications: false
  });

  const [errors, setErrors] = useState({});

  const [submitted, setSubmitted] = useState(false);

  const skillsList = [
    'React',
    'JavaScript',
    'TypeScript',
    'Node.js',
    'Python',
    'Java',
    'UI Design',
    'API Development'
  ];

  const validateForm = (formData)=> {
    const errors = {};

    if(!formData.fullName.trim()){
      errors.fullName = 'Full name is required';
    }else if (!/^[A-Za-z\s]{2,30}$/.test(formData.fullName)){
      errors.fullName = 'Please enter a valid name ( 2-30 characters, letters only)';
    }

    if(!formData.email.trim()){
      errors.email = 'Email is required';
    }else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)){
      errors.email = 'please enter a valid email';
    }

    if(!formData.role.trim()){
      errors.role = 'Please select a role'
    }

    if(!formData.experience.trim()){
      errors.experience = 'Experience is required';
    }else {
      const experience = Number(formData.experience);
      if(isNaN(experience) || experience < 0 || experience > 50) {
        errors.experience = 'Please enter valid years of experience between ( 0-50 )';
      }
    }

    if(formData.skills.length === 0){
      errors.skills = 'Please select at least one skill'
    }

    if(!formData.terms) {
      errors.terms = 'You must agree the Terms';
    }
    return errors
  }

  const handleSubmit = (e)=> {
    e.preventDefault();
    const validationErrors = 
    validateForm(form);
    setErrors(validationErrors);

    if(Object.keys(validationErrors).length === 0){
      console.log('Application submitted', form)
      setSubmitted(true);
      // bu hic validation error yoksa calisir.
    }
  };

  const handleChange = (e)=> {
    const { name, value } = e.target;
    const updatedForm = {
      ...form,
      [name]: value
    };
    // yeni form olustur
    setForm(updatedForm);
    // state'i guncelle

    const validationErrors = validateForm(updatedForm);
    // yeni form nasil?hemen kontrol et.
    setErrors(validationErrors);
    // hatalari guncelle.
    setSubmitted(false)
    // Kullanıcı başarılı submit yaptıktan sonra tekrar input'u değiştirirse success mesajının kalmasın.
  };

  // const handleChange = (e)=> {
  //   const { name, value } = e.target;
  //   setForm((prevForm)=> ({
  //     ...prevForm, 
  //     [name] : value
  //   }));
  // };

  // const handleSkillChange = (e)=> {
  //   const { value, checked } = e.target;
  //     // add & remove array
  //   if(checked) {
  //     setForm((prev)=> ({
  //       ...prev,
  //       skills: [...prev.skills, value]
  //     }));
  //   }else {
  //     setForm((prev)=> ({
  //       ...prev,
  //       skills: prev.skills.filter((skill) => skill !== value)
  //     }))
  //   }
  // }

  const handleSkillChange = (e)=> {
    const { value, checked } = e.target;

    let updatedSkills;
    // burada skill'i degistirmek istiyoruz.
    if(checked){
      updatedSkills = [...form.skills, value];
    }else {
      updatedSkills = form.skills.filter((skill)=> skill !== value);
    }

    const updatedForm = {
      ...form,
      skills: updatedSkills
    }
    setForm(updatedForm);

    const validationErrors = validateForm(updatedForm)
    setErrors(validationErrors)
  }

  return (

    <div className='min-h-screen bg-gray-100  p-12 px-4 sm:px-6 lg:px-8'>
      <div className='w-full max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8'>
      <h1 className='text-gray-800 font-bold text-3xl text-center mb-2'>Developer Application Form</h1>

      <form onSubmit={handleSubmit}>
          {/* Full Name Input */}
        <div className='mb-5'>
          <label className='block text-sm font-semibold text-gray-700 mb-2'>
            Full Name </label>
            <input 
             className={`w-full px-4 py-3 rounded-xl border-2 outline-none ${
              !form.fullName ? 'border-gray-300'
              : errors.fullName ? 'border-red-500'
              : 'border-blue-500'
             }`}
            type="text"
            name="fullName" 
            value={form.fullName}
            onChange={handleChange}
            /><br/>
            {errors.fullName && <p className='text-red-500 text-sm mt-1'
            >{errors.fullName}</p>}
        </div>

        {/* Email Input */}
        <div className='mb-5'>
          <label className='block text-sm font-semibold text-gray-700 mb-2'>
            Email </label>
            <input 
             className={`w-full px-4 py-3 rounded-xl border-2 outline-none ${
              !form.email ? 'border-gray-300'
              : errors.email ? 'border-red-500'
              : 'border-blue-500'
             }`}
            type="email" 
            name="email"
            value={form.email}
            onChange={handleChange}
            /><br/>
            {errors.email && <p className='text-red-500 text-sm mt-1'>{errors.email}</p>}
        </div>

        {/* Select Option */}
        <div>
          <label className='block text-sm font-semibold text-gray-700 mb-2 mt-2'>
            Role </label>
             <select
             className={`w-full px-4 py-3 rounded-xl border-2 outline-none ${
              !form.role ? 'border-gray-300'
              : errors.role ? 'border-red-500'
              : 'border-blue-500'
             }`}
                name='role'
                value={form.role}
                onChange={handleChange}
                > 
                  <option value="">Select a role</option>
                  <option value="frontend">Frontend Developer</option>
                  <option value="backend">Backend Developer</option>
                  <option value="fullstack">Full Stack Developer</option>
                  <option value="uiux">UI/UX Designer</option>
                  <option value="product">Product Manager</option>
                </select><br/>
                {errors.role && <p className='text-sm text-red-500 mt-1'>{errors.role}</p>}
                <br />
            </div>  

        {/* Experience Input */}
        <div className='mb-5'>
          <label className='block text-sm font-semibold text-gray-700 mb-2'>
            Years Of Experience </label>
            <input   className={`w-full px-4 py-3 rounded-xl border-2 outline-none ${
              !form.experience ? 'border-gray-300'
              : errors.experience ? 'border-red-500'
              : 'border-blue-500'
             }`}
            type="number"
            name="experience"
            min='0'
            max='50'
            value={form.experience}
            onChange={handleChange} 
            />
            {errors.experience && <p className='text-red-500 text-sm mt-1'>{errors.experience}</p>}
        </div>

        {/* Skills */}
         <div className='mb-5'>
          <h2 className='text-sm font-semibold text-gray-700 mb-3'>Skills</h2>
          <div className='grid grid-cols-2 gap-3'>
            {
              skillsList.map((skill)=> (
                <label 
                className='flex items-center gap-2 cursor-pointer'
                key={skill}>
                  
                  <input 
                  className='w-4 h-4 accent purple-600'
                  type="checkbox"
                  value={skill}
                  checked={form.skills.includes(skill)}
                  onChange={handleSkillChange} 
                  />
                  <span className='text-sm text-gray-800'>{skill}</span>
                </label>
              ))
            }
            {errors.skills && (
                    <p className='text-red-500 text-sm mt-1'>{errors.skills}</p>
              )}
             </div> 
      </div>

      {/* Terms & conditon */}
      <div className='mb-5'>
      <label className='flex items-center gap-2 cursor-pointer'>
        <input 
        className='w-4 h-4 accent-blue-600'
        type="checkbox"
        checked={form.terms}
        onChange={(e)=> {
          const updatedForm = {
            ...form,
            terms: e.target.checked
          };
          setForm(updatedForm);
          const validationErrors = validateForm(updatedForm)
          setErrors(validationErrors)
        }}
          />
          <p className='text-l text-gray-800'>I agree to the  Terms and Conditions</p>
        </label>
          {errors.terms && <p className='text-red-500 text-sm mt-1'>{errors.terms}</p>}
      
      </div>

      {/* Notifications */}
      <label className='flex items-center gap-2 cursor-pointer mb-6'>
        <input 
        className='w-4 h-4 accent-blue-600'
        type="checkbox"
        checked={form.notifications}
        onChange={(e)=> 
          setForm((prev)=> ({
            ...prev,
            notifications: e.target.checked
          }))
        }
        />
        <p className='text-l text-gray-800'>Receive notifications about new opportunities</p>
      </label>

      <button className='w-full bg-red-600 text-white py-3 rounded-lg font-semibold  cursor-pointer hover:bg-red-400 transition duration-200'
      type='submit'>Submit Application</button>

      {/* showing success message */}
      {submitted && (
        <div className='mb-6 p-4 text-green-700'>
          Application Submitted Successfully! 🎉
        </div>
      )}
      </form>
      </div>
    </div>
  )
}

export default App

// COMMENRTS= 

// skills: [],çünkü birden fazla skill seçebileceğiz.

// terms: false, notifications: fals= çünkü bunlar boolean checkbox.
// digerleri string olarak baskayacak

// checked={form.skills.includes(skill)}= checkbox state'e bagladik ve bu includes()= su skill su anda skills arrayin icinde mi onu soruyor. yani React'ın seçili olup olmadığını otomatik belirler.

// value={skill}= Bu checkbox hangi skill'i temsil ediyor?

// [...prev.skills, value]= Seçilen skill'i array'e ekle.

// prev.skills.filter((skill) => skill !== value)= Seçilmeyen skill'i array'den çıkar.

// e.target.checked= bize true veya false verir.

// array ile farki, array[cok list var] ama terms and notification tek secim by yuzden boolean.

//  if(!form.terms) {
//       errors.terms = 'You must accept the Tersm & Conditions';
//     }= yani terms mutlaka true olmali . false ise user-ka bu mesaji gorur.

// Notifications-ka no validation cunku it is optional checkbox.
// bu asagidakiler cok onemli
// String → .trim()

// Array → .length

// Boolean → direkt if (!form.terms)

// for fullname waye asagdidaki harfler
// Neden .test()?=Regex'in karşısına bir string veriyoruz/
// ^          → başlangıç
// [A-Za-z]   → sadece İngilizce harfler
// \s         → boşluk
// {2,30}     → toplam 2 ile 30 karakter
// $          → bitiş

// for email waye
// ^
// [^\s@]+       → boşluk veya @ olmayan karakterler
// @
// [^\s@]+       → tekrar domain kısmı
// \.
// [^\s@]+       → .com gibi uzantı
// $

// for experience waye asagidaki aciklama
// const experience = Number(form.experience)=Boş değilse değeri sayıya çevir.

// validateForm(updatedForm) gönderiyoruz; validation'ın gönderilen güncel obje üzerinden çalışması gerekiyor.

// real-time validatoion olay su= 
// form → updatedForm → validation=  Yani kullanıcı yeni bir değer giriyor, daha state güncellenmeden güncel objeyi validation'a gönderiyoruz.

// e.target.checked= bize true or false verir.
// terms: e.target.checked bu da sadece terms degerini degistiriyoruz.

// onemli= Normal validation: Submit'i bekliyor.Real-time validation: Input değiştiği anda validation çalışıyor.

// Tailwind
// min-h-screen=ekranın en az yüksekliği kadar.
// flex items-center justify-center=kartı hem yatay hem dikey ortalar.
// w-full=küçük ekranda mümkün olduğunca geniş.
// max-w-2xl=ama büyük ekranda fazla genişlemez.

// for success message
// {submitted && (...)} soyle demek= submitted= false → hiçbir şey gösterme, submitted = true → success mesajını göster