import { EllipsisVertical, ShoppingCart, TrendingUp } from 'lucide-react'
import react from '../assets/react.svg'
import { products } from '../db'
function Workflow() {
    return (
        <>
            <div className="w-[82%] float-right bg-white flex flex-col justify-between px-[40px]  overflow-y-auto gap-6">
                <h2 className="text-[20px] text-[#04103B] ">Top Sales Representative</h2>
                <div className="w-full p-2 flex flex-col items-center gap-3">
                    {
                        products.map((product) => (
                            <div key={product.id} className="flex w-full py-4 px-3 justify-between border-slate-300 border-[2px] items-center rounded-l-3xl rounded-r-3xl">
                                <img src={react} alt="" className='rounded-full w-[40px] aspect-square ' />
                                <p className=''>{product.name}</p>
                                <p>{product.amounts} products</p>
                                <p>105 premium</p>
                                <p className='text-orange-300'>+Gold</p>
                                <EllipsisVertical className='cursor-pointer text-[#5041BC] ' />
                            </div>
                        ))
                    }
                </div>
                <div className='w-full flex flex-wrap justify-between px-5 py-4'>
                    <div className='w-[30%] flex justify-between border-[2px] gap-5 border-slate-300 p-[20px] rounded-[10px] items-center'>
                        <div className='flex flex-col justify-between  '>
                            <p>Product sold</p>
                            <h2 className='text-[30px] font-bold'>25.2K</h2>
                            <p className='flex gap-2'>+15%<TrendingUp className='text-green-500' /></p>
                        </div>
                        <div className='flex flex-col justify-between h-full items-end'>
                            <ShoppingCart />
                            <p>View report</p>
                        </div>
                    </div>
                </div>
                <div className='w-full flex flex-wrap'>
                    <div>Bar chart</div>
                </div>
            </div>
        </>
    )
}

export default Workflow