import React from 'react'
import { CartProducts } from '../CartProducts/CartProducts'
import tapetes from '../../assets/tapetes-extra-gruesos.webp'

export const Carousel = () => {
  return (
    <div className='w-full h-full bg-slate-100 flex justify-evenly py-10 flex-wrap'>
        <div className='flex justify-evenly flex-wrap'>
          <CartProducts image={tapetes} title={'Tapetes extra gruesos'} description={"Diseñados con 3 capas para una máxima absorción y neutralización del olor, estos tapetes mantienen tu piso seco y libre de manchas."} price={'300'} />
          <CartProducts image={tapetes} title={'Tapetes extra gruesos'} description={"Diseñados con 3 capas para una máxima absorción y neutralización del olor, estos tapetes mantienen tu piso seco y libre de manchas."} price={'300'} />
          <CartProducts image={tapetes} title={'Tapetes extra gruesos'} description={"Diseñados con 3 capas para una máxima absorción y neutralización del olor, estos tapetes mantienen tu piso seco y libre de manchas."} price={'300'} />
          <CartProducts image={tapetes} title={'Tapetes extra gruesos'} description={"Diseñados con 3 capas para una máxima absorción y neutralización del olor, estos tapetes mantienen tu piso seco y libre de manchas."} price={'300'} />
        </div>

        <div className='w-full flex justify-center mt-4'>
          <button className='bg-buttonProducts text-white py-3 px-7 rounded-3xl'>Ver todos los productos</button>
        </div>
    </div>
  )
}
