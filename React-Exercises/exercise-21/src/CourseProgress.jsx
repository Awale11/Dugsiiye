import React from 'react'

function CourseProgress() {

       const courses = [
        {
            id: 1,
            name: 'React Fundamentals',
            progress: 75,
            nextLesson: 'Components & Props',
            instructor: 'Ustaad Hamuda'
        },
        {
            id: 2,
            name: 'JavaScript Advanced',
            progress: 45,
            nextLesson: 'Async/Await',
            instructor: 'Diriye Awale'
        },
        {
            id: 3,
            name: 'UI/UX Design',
            progress: 90,
            nextLesson: 'Color Theory',
            instructor: 'Omar Tood'
        }
    ];

  return (
    <>
        
            <div className=' lg:col-span-2 bg-white rounded-xl shadow-sm p-4 m-4'>
                <h1 className='text-gray-800 font-bold text-xl mb-4'>Course Progress</h1>
                {
                    courses.map((course)=> (
                        <div className='bg-gray-100 rounded-xl p-4 mb-4'
                        key={course.id}>
                            {/* name & persentage */}
                            <div className='flex justify-between items-center'>
                                <div className='text-gray-700 text-l font-semibold'>{course.name}</div>
                                <div className='text-gray-400'>{course.progress}%</div>
                            </div>
                            {/* progress par */}
                            <div className='bg-gray-200 rounded-full h-2 my-2'>
                                <div className='bg-purple-400 rounded-full h-2 '
                                style={{width:`${course.progress}%`}}
                                >
                                    
                                </div>
                            </div>
                            {/* Next lesson & instructor */}
                            <div className='flex justify-between items-center text-gray-400 text-sm'>
                                <div>Next:{course.nextLesson}</div>
                                <div>{course.instructor}</div>
                            </div>
                        </div>
                        
                    ))
                }
            </div>
        
    </>
  )
}

export default CourseProgress


// lg:col-span-2= Course Progress'ın 2 kolon kaplamasını sağlıyor.