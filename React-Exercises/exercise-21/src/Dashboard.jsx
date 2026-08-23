import React from 'react'
import CourseProgress from './CourseProgress';
import UpcomingAssignments from './UpcomingAssignments';
import Announcements from './Announcements';

function Dashboard() {

    const stats = [
        {
            id: 1,
            icon: '📊',
            label: 'Average Grade',
            value: '88%'
        },
        {
            id: 2,
            icon: '📚',
            label: 'Courses',
            value: 3
        },
        {
            id: 3,
            icon: '⏰',
            label: 'Study Hours',
            value: '45h'
        },
        {
            id: 4,
            icon: '✍️',
            label: 'Assigments',
            value: 12
        }
    ];


  return (
    <>
    <div className='bg-green-100 border-box rounded-xl shadow-sm p-6 m-4 flex items-center justify-between'>
        {/* Header left */}
        <div>
            <h1 className='text-2xl font-bold text-gray-800'>Welcome Back,Student!</h1>
            <p className='text-sm text-gray-600'>Here's what's happening with your courses today.</p>
        </div>
        {/* Header right */}
        <div className='flex items-center'>
            <span >🔔</span>
            <span className=' text-white bg-gradient-to-br from-purple-500 to-pink-500 w-8 h-8 rounded-full flex items-center justify-center m-2'>S</span>
        </div>
    </div>

    {/* Stats */}
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 m-4'>
        {
            stats.map((stat)=> (
                <div className='bg-blue-100 rounded-xl shadow-sm p-4'
                    key={stat.id}>

                <div className='flex items-center gap-3'>
                     <div>{stat.icon }</div>

                <div>
                     <div className='text-sm text-gray-600'>{stat.label}</div> 
                     <div className='text-xl font-bold text-gray-800'>{stat.value}</div> 
                 </div>
                 </div>
                
                </div>
            ))
        }
    </div>
    
    {/* courseProgress, UpcomingAssigment & Announcements */}
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
        <CourseProgress/>
        <div className='flex flex-col gap-4'>
            <UpcomingAssignments/>
            <Announcements/>

        </div>
    </div>
    </>
   
  )
}

export default Dashboard

// Comments

// flex              → çocukları yatay dizer
// items-center      → dikey olarak ortalar
// justify-between   → sol ve sağ tarafı iki uca iter.

// grid → grid sistemi
// grid-cols-1 → mobilde 1 sütun
// md:grid-cols-2 → orta ekranda 2
// lg:grid-cols-4 → büyük ekranda 4
// gap-4 → kartlar arasında boşluk

// lg:grid-cols-3= 3 kolon oluşturuyor.

// lg:col-span-2= Course Progress'ın 2 kolon kaplamasını sağlıyor.

// flex flex-col gap-4= Right Columnda alt alta iki bölüm alacak.

// grid-cols-1= sayesinde mobilde tek kolon olacak.