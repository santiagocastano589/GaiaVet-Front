import React from 'react'

export const Button = ({children}) => {
  return (
    <div>

        <button className='w-[20vw] h-[7vh] border-2 border-[#75f4f5] bg-[#75f4f5] mt-11 m-6 flex justify-center items-center rounded-md'>{children}</button>

    </div>
  )
}
