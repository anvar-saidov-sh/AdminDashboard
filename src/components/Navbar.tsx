import { Bell, ChevronDown, Search } from "lucide-react"
import reactsvg from '../assets/react.svg'



function Navbar() {
  return (
    <>
      <div className="w-[82%] float-right h-[90px] bg-white flex flex-grow items-center justify-between px-[40px] rounded-tl-full ">
        <h1 className="text-[30px] text-[#1F192F]">Overview</h1>
        <div className="flex items-center justify-start w-[50%] px-3 ">
          <div className="flex items-center px-[30px]">
            <input type="text" placeholder="Search" className="border-[#5041BC] border-[2px]  rounded-l-full border-r-0 p-2 outline-none w-[300px] placeholder:text-[#5041bc]" />
            <Search className="size-[43px] p-2 text-[#5041bc] border-[#5041BC] border-[2px] rounded-r-full border-l-1" />
          </div>
          <Bell className="text-[#5041bc]"/>
        </div>
        <div className="flex items-center gap-5">
          <img src={reactsvg} alt="" className="rounded-full " />
          <p>Full Name</p>
          <ChevronDown />
        </div>
      </div>
    </>
  )
}

export default Navbar