import { Link } from 'react-router-dom'
import MobileNav from './mobileNav'
import DestopNav from './destopNav'

function Header() {
  return (
    <div className='border-b-2 border-orange-500 py-6' >
     <div className='container flex justify-between items-center mx-auto'>
      <Link to='/' className='text-3xl text-orange-500 font-bold tracking-tight'>MernEats.com</Link>
       <div className='md:hidden'>
       <MobileNav/>
       </div>
       <div className='hidden md:block'>
        <DestopNav/>
       </div>
     </div>
    </div>
  )
}

export default Header
