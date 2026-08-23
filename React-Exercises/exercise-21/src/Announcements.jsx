import React from 'react'

function Announcements() { 

    const announcements = [
        {
            id: 1,
            title: 'New Course Available',
            message: 'Check out our new TypeScript course!',
            time: '2 hours ago'
        },
        {
            id: 2,
            title: 'Maintenance Notice',
            message: 'Platform updates scheduled for tonight',
            time: '5 hours ago'
        }
    ]

  return (

    <div className='bg-green-100 rounded-xl shadow-sm p-4 m-4'>
        <h1 className='text-gray-800 font-bold text-xl mb-4'>Announcements</h1>
        {
            announcements.map((announcement)=> (
                <div key={announcement.id}
                className='border-l-4 border-purple-400 pl-4 mb-5'>
                    <div className='text-gray-700 text-l font-semibold'>{announcement.title}</div>
                    {/* message & time */}
                    <div className='text-gray-400 text-sm'>
                        <div>{announcement.message}</div>
                        <div>{announcement.time}</div>
                    </div>
                    
                </div>
            ))
        }
    </div>
  )
}
export default Announcements

// border-l-4= sol tarafa 4px border koyuyor.

// border ile yazı arasında boşluk oluşturuyor.
