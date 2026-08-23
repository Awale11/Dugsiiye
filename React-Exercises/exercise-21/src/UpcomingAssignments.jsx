import React from 'react'

function UpcomingAssignments() {

    const assignments = [
        {
            id: 1,
            title: 'Build a Todo App',
             status: 'pending',
            course: 'React Fundamentals',
            dueDate: 'Due 2024-03-20',
           
        },
        {
            id: 2,
            title: 'API Integration',
             status: 'completed',
            course: 'JavaScript Advanced',
            dueDate: 'Due 2024-03-18',
           
        },
        {
            id: 3,
            title: 'Design System',
            status: 'in-progress',
            course: 'UI/UX Design',
            dueDate: 'Due 2024-03-25',
            
        },
        
    ]

  return (
     
    <div className='bg-white rounded-xl shadow-sm p-4 m-4'>

        <h1 className='text-gray-800 font-bold text-xl mb-4'>Upcoming Assignments</h1>

        {
            assignments.map((assignment)=> (
                <div key={assignment.id}>

                    {/* Title & status */}
                    <div className=' flex justify-between items-center'>
                        <div className='text-gray-700 text-l font-semibold'>{assignment.title}</div>
                        <div className={`
                        px-3 py-1 rounded-full text-xs font-semibold
                        ${
                            assignment.status==='pending' ? 'bg-pink-100 text-pink-700' : assignment.status === 'completed' ? 'bg-green-100 text-green-700' :
                            'bg-yellow-100 text-yellow-700'
                        }`}>{assignment.status}</div>
                    </div>

                    {/* course & dueDate */}
                    <div className='flex justify-between items-center text-gray-400 text-sm'>
                        <div>{assignment.course}</div>
                        <div>{assignment.dueDate}</div>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default UpcomingAssignments