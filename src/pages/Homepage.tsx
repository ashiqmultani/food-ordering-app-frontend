import landingPic from '../assets/landing.png'
import appdownload from '../assets/appDownload.png'
import { Link } from 'react-router-dom'
function Homepage() {
  return (
    <div className="flex flex-col gap-12">
        <div className="py-8 flex flex-col bg-white rounded-lg gap-5 shadow-md text-center -mt-16 ">
            <h1 className="text-orange-600 tracking-tight font-bold text-5xl">Tuck into a Takeaway today</h1>
            <span className="text-xl">Food is just a click away!</span>
        </div>   
        <div className="grid md:grid-cols-2 gap-5">
            <img src={landingPic}/>
            <div className="flex flex-col text-center justify-center items-center gap-4">
                <span className='text-3xl font-bold tracking-tighter'>Orders Take-away even faster</span>
                <span className='tracking-tight'>Download the MernEat App for faster ordering and personalised recommendations</span>
                <Link to='/'>
                     <img src={appdownload} />
                </Link>
            </div>
        </div>   
    </div>
  )
}

export default Homepage
