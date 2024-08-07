import React from 'react'

export const Product = ({image, title, alt, description, price}) => {
  return (
    <>
    
    <div className="w-[25rem] h-full m-4 rounded-xl flex flex-col justify-between items-center shadow-md border bg-slate-50 px-2 py-6">
            <div className='w-full h-[23rem] rounded-xl flex justify-center p-2'>
                <img className='object-fit rounded-2xl p-2' src={image} alt={alt}/>
            </div>
            <div className='w-full flex flex-col justify-evenly text-justify px-6 h-[20rem]'>
                <h2 className='text-4xl gorditas text-center my-2'>
                    {title}
                </h2>
                <p className='gorditas text-2xl my-2'>
                    ${price}
                </p>
                <p className='text-base'>
                    {description}
                </p>
                
                
                <div className='w-full  flex justify-center my-4'>
                    <button className='bg-teal-500 w-[15rem] h-[3rem] rounded-xl'>Comprar</button>
                </div>
            </div>
        </div>
    </>
    
  )
}
