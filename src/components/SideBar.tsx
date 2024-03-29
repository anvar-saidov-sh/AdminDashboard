import { Bookmark, File, LayoutDashboard, StarIcon } from 'lucide-react'
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
        <hr className='w-48 h-0.5 bg-gray-100 border-0 rounded md:my-10 dark:bg-[#8A7DD0]'/>
        <div>
          <LayoutDashboard/>
          <File/>
          <Bookmark/>
          <StarIcon/>
        </div>
      </div>
    </>
  )
}

export default SideBar