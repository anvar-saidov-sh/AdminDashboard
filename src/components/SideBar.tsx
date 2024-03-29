import oval from '../assets/Oval.png'
import ovalb from '../assets/Ovalb.png'

function SideBar() {
  return (
    <>
        <div className='flex bg-[#5041BC] w-[15%] h-[100vh]'>
            <h2 className='text-'>Ventes</h2>
            <img src={oval} alt="" className='absolute'/>
            <img src={ovalb} alt="" className='absolute'/>
        </div>
    </>
  )
}

export default SideBar