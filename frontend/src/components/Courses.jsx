import Navbar from './Navbar'
import Footer from './Footer'
import Course from './Course'

function Courses() {
  return (
    <>
        <Navbar/>
        <div className='dark:bg-slate-700 dark:text-white min-h-screen'>
        <Course/>
        </div>
        <Footer/>
    </>
  )
}

export default Courses
