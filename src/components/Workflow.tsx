import { EllipsisVertical } from 'lucide-react'
import react from '../assets/react.svg'
import {users, amounts } from '../db'
function Workflow() {
    return (
        <>
            <div className="w-[82%] float-right bg-white flex flex-col justify-between px-[40px]  overflow-y-auto">
                <h2 className="text-[20px] text-[#04103B] ">Top Sales Representative</h2>
                <div className="w-full p-2 flex flex-col items-center gap-3">
                    {
                        users.map((user) =>(
                            <div className="flex w-full py-4 px-3 justify-between border-slate-300 border-[2px] items-center rounded-l-3xl rounded-r-3xl">
                            <img src={react} alt="" className='rounded-full w-[40px] aspect-square ' />
                            <p className=''>{user}</p>
                            <p>$500</p>
                            <p>150 products</p>
                            <p>105 premium</p>
                            <p className='text-orange-300'>+Gold</p>
                            <EllipsisVertical className='cursor-pointer text-[#5041BC] ' />
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Workflow