import { Bookmark, File, HeartPulseIcon, LayoutDashboard, StarIcon } from 'lucide-react'
import oval from '../assets/Oval.png'
import ovalb from '../assets/Ovalb.png'

function SideBar() {
  return (
    <>
      <div className='flex bg-[#5041BC] w-[18%] h-[100vh] items-center fixed flex-col gap-[30px]'>
        <div className='flex relative z-10 w-[100%] justify-center items-center h-[60px]'>
          <h2 className='text-[30px] z-10 font-bold text-white'>VENTES</h2>
          <img src={oval} alt="" className='absolute left-5 top-3 ' />
          <img src={ovalb} alt="" className='absolute left-10 top-2' />
        </div>
        <hr className='w-[95%] h-0.5 bg-gray-100 border-0 rounded md:my-10 dark:bg-[#8A7DD0]'/>
        <div className='flex flex-col  items-start gap-3'>
          <div className='group flex gap-5 items-center hover:bg-white  rounded-lg p-2 w-[200px] cursor-pointer'>
              <LayoutDashboard className='text-white group-hover:text-[#5041BC]'/> <p className='text-white text-[16px] group-hover:text-[#5041BC]'>Dashboard</p>
          </div>
          <div className='group flex gap-5 items-center hover:bg-white rounded-lg p-2 w-[200px] cursor-pointer'>
              <File className='text-white group-hover:text-[#5041BC]'/> <p className='text-white text-[16px]  group-hover:text-[#5041BC]'>Claims</p>
          </div>
          <div className='group flex gap-5 items-center hover:bg-white rounded-lg p-2 w-[200px] cursor-pointer'>
              <Bookmark className='text-white group-hover:text-[#5041BC]'/> <p className='text-white text-[16px] group-hover:text-[#5041BC]'>Biller Queue</p>
          </div>
          <div className='group flex gap-5 items-center hover:bg-white rounded-lg p-2 w-[200px] cursor-pointer'>
              <StarIcon className='text-white group-hover:text-[#5041BC]'/> <p className='text-white text-[16px]  group-hover:text-[#5041BC]'>Subscription</p>
          </div>
          <div className='group flex gap-5 items-center hover:bg-white rounded-lg p-2 w-[200px] cursor-pointer'>
              <HeartPulseIcon className='text-white group-hover:text-[#5041BC]'/> <p className='text-white text-[16px] group-hover:text-[#5041BC]'>Health</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default SideBar