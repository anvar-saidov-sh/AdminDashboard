import { Bookmark, File, HeartPulseIcon, LayoutDashboard, StarIcon } from 'lucide-react'
import oval from '../assets/Oval.png'
import ovalb from '../assets/Ovalb.png'
import rocket from '../assets/rocket.png'

function SideBar() {
  return (
    <>
      <div className='flex bg-[#5041BC] w-[18%] h-[100vh] items-center fixed flex-col gap-[20px]'>
        <div className='flex relative z-10 w-[100%] justify-center items-center h-[60px]'>
          <h2 className='text-[30px] z-10 font-bold text-white'>VENTES</h2>
          <img src={oval} alt="" className='select-none absolute left-11 top-4 ' />
          <img src={ovalb} alt="" className='select-none absolute left-16 top-2' />
        </div>
        <hr className='w-[95%] h-0.5 bg-gray-100 border-0 rounded md:my-10 dark:bg-[#8A7DD0]'/>
        <div className='flex flex-col  items-start gap-1'>
          <div className='group flex gap-5 items-center hover:bg-white  rounded-lg p-1 w-[200px] cursor-pointer'>
              <LayoutDashboard className='text-white group-hover:text-[#5041BC]'/> <p className='text-white text-[14px] group-hover:text-[#5041BC]'>Dashboard</p>
          </div>
          <div className='group flex gap-5 items-center hover:bg-white rounded-lg p-1 w-[200px] cursor-pointer'>
              <File className='text-white group-hover:text-[#5041BC]'/> <p className='text-white text-[14px] group-hover:text-[#5041BC]'>Claims</p>
          </div>
          <div className='group flex gap-5 items-center hover:bg-white rounded-lg p-1 w-[200px] cursor-pointer'>
              <Bookmark className='text-white group-hover:text-[#5041BC]'/> <p className='text-white text-[14px] group-hover:text-[#5041BC]'>Biller Queue</p>
          </div>
          <div className='group flex gap-5 items-center hover:bg-white rounded-lg p-1 w-[200px] cursor-pointer'>
              <StarIcon className='text-white group-hover:text-[#5041BC]'/> <p className='text-white text-[14px]  group-hover:text-[#5041BC]'>Subscription</p>
          </div>
          <div className='group flex gap-5 items-center hover:bg-white rounded-lg p-1 w-[200px] cursor-pointer'>
              <HeartPulseIcon className='text-white group-hover:text-[#5041BC]'/> <p className='text-white text-[14px] group-hover:text-[#5041BC]'>Health</p>
          </div>
        </div>
        <div className='w-[180px] h-[240px] bg-slate-200 rounded-3xl flex flex-col p-3 gap-2 items-center'>
            <img src={rocket} alt="" className='w-full h-[80%] select-none'/>
            <p>Want to upgrade</p>
            <button className='p-3 bg-[#FF8057] rounded-l-full rounded-r-full text-white'>Upgrade now</button>
        </div>
      </div>
    </>
  )
}

export default SideBar