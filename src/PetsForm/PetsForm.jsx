import React from 'react';
import logoGaia from '../assets/logoGaia.png'
import { Button } from '../Button/Button';


export const PetsForm = () => {
    return (
        <div className=' flex flex-col justify-center items-center border-2 border-[#75f4f5] h-[125vh] w-[35vw] rounded-2xl mt-5 justify-evenly'>
            <div className='border-2 border-[#75f4f5] p-4 rounded-full bg-[#75f4f5] '>
                <img src={logoGaia} alt="" className='w-[10vw] ' />
            </div>
            <h1 className='text-2xl '>Registrar Mascota</h1>
            <form action="">
                <div className='flex flex-col justify-evenly h-20'>
                    <label htmlFor="">Documento mascota</label>
                    <input type="text" name="Documento mascota" id="" placeholder='Documento de la mascota' className='border-2 border-[#75f4f5] w-[25vw] p-2 rounded-md bg-[#f3f3f2]'/>
                </div>
                <div className='flex flex-col justify-evenly h-20'>
                    <label htmlFor="" >Nombre</label>
                    <input type="text" name="Documento mascota" id="" placeholder='Nombre de la mascota' className='border-2 border-[#75f4f5] w-[25vw] p-2 rounded-md bg-[#f3f3f2] mt-1'  />
                </div>
                <div className='flex flex-col justify-evenly h-20'>
                    <label htmlFor="">Raza</label>
                    <input type="text" name="Documento mascota" id="" placeholder='Raza de la mascota' className='border-2 border-[#75f4f5] w-[25vw] p-2 rounded-md bg-[#f3f3f2]'  />
                </div>
                <div className='flex flex-col justify-evenly h-20'>
                    <label htmlFor="">Edad</label>
                    <input type="text" name="Documento mascota" id="" placeholder='Edad de la mascota' className='border-2 border-[#75f4f5] w-[25vw] p-2 rounded-md bg-[#f3f3f2] '  />
                </div>
                    <Button>Registro completo</Button>
                 </form>
        </div>
    );
};

