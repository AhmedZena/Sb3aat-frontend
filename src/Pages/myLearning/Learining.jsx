import React from 'react'
import { Link } from 'react-router-dom'
import AllCourses from './AllCourses'

export default function Learining() {
   

  return (
   <>
   <div className=' bg-gray-900'>
    <h1 className='text-white font-bold text-3lx'>My Learning</h1>
    <div>
        <Link to='/allcourses'>All Courses</Link>
        <AllCourses/>
        <Link to='/mylist'>My List</Link>
        <Link to='/wishlist'>WishList</Link>
        <Link to='/archived'>Archived</Link>
        <Link to='/learningtools'>Learning Tools</Link>

    </div>

   </div>
   </>
  )
}
