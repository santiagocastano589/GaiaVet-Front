import React, { useState } from 'react';

export const CartProducts = ({ title, description, price, image }) => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className='w-2/5 bg-white flex justify-evenly rounded-3xl items-center px-4 my-4 shadow-2xl'>
      <div className='w-2/6  rounded-xl'>
        <img src={image} alt='' />
      </div>
      <div className='w-3/5 flex flex-col p-4 items-start'>
        <div>
          <h4 className='text-center text-xl font-semibold '>{title}</h4>
        </div>
        <div className='w-full'>
          <p className='text-sm pb-8 pt-2 text-start'>{description}</p>
        </div>
        <div className='w-full flex justify-start items-center'>
          <div>
            <p className='text-lg'>${price}</p>
          </div>
          <div>
            <button className='text-white ml-6 w-full px-8 py-2 rounded-full bg-teal-500 shadow-md hover:bg-teal-400' onClick={handleOpenModal}>Comprar</button>
          </div>
        </div>
      </div>

      {showModal && (

        <div className="fixed inset-0 flex flec-col items-center justify-center z-50 bg-opacity-80 bg-gray-700">
          <div className="bg-white rounded-lg border-2 border-blue-border w-3/5 h-3/5">
            
          <button type="button" className="float-end bg-blue-border rounded-full p-1 m-2" onClick={handleCloseModal}>
            <span className="sr-only">Cerrar</span>   
            <svg aria-hidden="true" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10L4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>

          <div className='flex h-full'>

          <div className='flex flex-col justify-center items-center w-10/12 h-full'>
            <img className='h-96' src={image} alt="" />
            <p className='text-3xl font-semibold p-5 mt-9'>COP ${price}</p>
          </div>

            <div className=' flex flex-col justify-evenly'>
            <div>
            <h2 className='text-4xl'>{title}</h2>
            <p className='text-lg'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel, fugiat suscipit libero ea deleniti, quas eius non corrupti sit tempore a perferendis deserunt sunt nesciunt voluptatum doloremque, consectetur possimus necessitatibus.</p>
            </div>

            <div className='flex flex-col justify-evenly h-48'>
            <p>Categoria: Comida para perros</p>
            <p>Pesp: 2 KG</p>
            <p>Disponibles: 15</p>
            
            <div className='flex'>
                <button className='bg-blue-border rounded-full p-1 text-white'>+</button>
                  <p className='mx-2 bg-gray-300 p-1 rounded-md'>5</p>
                <button className='bg-blue-border rounded-full p-1 text-white'>-</button></div>

            
            </div>
            <div className=' flex justify-evenly w-96'>
                <button className='text-white hover:bg-teal-300 rounded-lg bg-blue-border p-2'>agregar al carrito</button>
                <button className='text-white hover:bg-teal-300 rounded-lg bg-blue-border p-2'>comprar ahora</button>
            </div>
            </div>
            
          </div>
        </div>
        </div>
      )}
    </div>
  );
};
