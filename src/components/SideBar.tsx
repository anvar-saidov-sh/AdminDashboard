import { Bookmark, File, HeartPulseIcon, LayoutDashboard, StarIcon } from 'lucide-react'
import oval from '../assets/Oval.png'
import ovalb from '../assets/Ovalb.png'

function SideBar() {
  return (
    <>
      <div className='flex bg-[#5041BC] w-[15%] h-[100vh] items-center fixed flex-col justify-between'>
        <div className='flex relative z-10 w-[100%] justify-center items-center h-[60px]'>
          <h2 className='text-[30px] z-10 font-bold text-white'>VENTES</h2>
          <img src={oval} alt="" className='absolute left-5 top-3 ' />
          <img src={ovalb} alt="" className='absolute left-10 top-2' />
        </div>
        <hr className='w-[95%] h-0.5 bg-gray-100 border-0 rounded md:my-10 dark:bg-[#8A7DD0]'/>
        <div>
          <div className='flex gap-5 items-center hover:bg-white hover:text-[#5041BC] rounded-lg p-2 '>
              <LayoutDashboard className='text-white '/> <p className='text-white text-lg '>Dashboard</p>
          </div>
          <div className='flex gap-5 items-center hover:bg-white rounded-lg p-2'>
              <File className='text-white'/> <p className='text-white text-lg'>Claims</p>
          </div>
          <div className='flex gap-5 items-center hover:bg-white rounded-lg p-2'>
              <Bookmark className='text-white'/> <p className='text-white text-lg'>Biller Queue</p>
          </div>
          <div className='flex gap-5 items-center hover:bg-white rounded-lg p-2'>
              <StarIcon className='text-white'/> <p className='text-white text-lg'>Subscription</p>
          </div>
          <div className='flex gap-5 items-center hover:bg-white rounded-lg p-2'>
              <HeartPulseIcon className='text-white'/> <p className='text-white text-lg'>Health</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default SideBar