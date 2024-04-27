import { EllipsisVertical } from 'lucide-react'
import react from '../assets/react.svg'
import {users} from '../db'
function Workflow() {
    return (
        <>
            <div className="w-[82%] float-right bg-white flex flex-col justify-between px-[40px]  overflow-y-auto gap-6">
                <h2 className="text-[20px] text-[#04103B] ">Top Sales Representative</h2>
                <div className="w-full p-2 flex flex-col items-center gap-3">
                    {
                        users.map( (user)=>(
                            <div className="flex w-full py-4 px-3 justify-between border-slate-300 border-[2px] items-center rounded-l-3xl rounded-r-3xl">
                            <img src={react} alt="" className='rounded-full w-[40px] aspect-square ' />
                            <p className=''>{user}</p>
                            <p>150 products</p>
                            <p>105 premium</p>
                            <p className='text-orange-300'>+Gold</p>
                            <EllipsisVertical className='cursor-pointer text-[#5041BC] ' />
                            </div>
                        ))
                    }
                </div>
                <div className='w-full flex flex-wrap justify-between px-5 py-4'>
                    <div>Chart 1</div>
                    <div>Chart 3</div>
                    <div>Chart 2</div>
                </div>
                <div className='w-full flex flex-wrap'>
                    <div>Bar chart</div>
                </div>
            </div>
        </>
    )
}

export default Workflow