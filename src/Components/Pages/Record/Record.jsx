import React from 'react'
import google from '../../../assets/google.webp'
import logo from '../../../assets/logoGaia.webp'
import { Input } from '../../Input/Input';
import { Button } from '../../Button/Button';
import { Header } from '../../Layouts/Header/Header';
import { Link } from 'react-router-dom';

export const Record = () => {
  return (
    <div className='h-full w-full flex flex-col'>
      <Header />
      <div className='flex justify-center items-center z-0 pt-36 pb-10 '>


        <div className="bg-white flex justify-center items-center  flex-col border-solid border-2 border-blue-border rounded-lg">

          <div className='w-24 bg-blue-border rounded-full my-6'>
            <img className='' src={logo} alt="" />
          </div>

          <h2 className='my-3'>REGISTRO</h2>
          <p className='my-2'>¿Ya tienes cuenta?<Link to={'/login'} className='text-blue-700'>Inicia Sesión</Link></p>

          <form className='flex flex-col ' action="">

            <Input name="Nombre Completo" type="text" placeholder='Nombre Completo' />
            <Input name="Correo Electronico" type="text" placeholder='Correo Electronico' />
            <Input name="Contraseña" type="password" placeholder='Contraseña' />

            <div className='flex justify-center items-center flex-col'>
              <Button textButton="Registrar" />
              <button className='w-72 hover:bg-slate-200 shadow-lg shadow-gray-500/50 p-3 mb-8 rounded-lg flex justify-center items-center bg-slate-100 '>Registrate con Google<div className='flex items-center mx-2 rounded-xl'><img className='w-4 flex items-center' src={google} alt="" /></div> </button>
            </div>
          </form>
        </div>
      </div>
    </div>

  )
}