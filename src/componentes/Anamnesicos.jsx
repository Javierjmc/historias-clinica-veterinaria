import React from 'react';

export default function Anamnesicos() {
  return (
    
    <div className='flex border flex-col m-4 text-base'>
        <div className='font-extrabold uppercase text-xl bg-[#D8804E] py-1 w-full text-center'>
          Anamnesicos
        </div>
        <div className='flex flex-col md:flex-row w-full p-2 border '>
          <label htmlFor='' className='mr-2 p-2'>Ultima desparasitación</label>
          <input type='date' className='border p-2 md:mx-4'/>
          <input type='text' placeholder='Producto' className='border my-1 md:my-0 p-2'/>
        </div>
        <div className='flex flex-col lg:flex-row w-full p-2 border'>
          <label htmlFor='' className='mr-2 p-2'>Vacuna</label>
          <input type='date' className='border p-2 lg:mx-4'/>
          <input type='text' placeholder='Marca' className='border my-1 lg:my-0 p-2'/>
          <input type='text' placeholder='Lote' className='border p-2 lg:mx-4'/>
        </div>
        <div className='flex flex-col xl:flex-row w-full p-2 border'>
          <label htmlFor='' className='mr-2 p-2 w-[300px]'>Enfermedades anteriores</label>
          <input type='text' className='border my-1 lg:my-0 px-2 w-full xl:w-full'/>
        </div>
        <div className='flex flex-col xl:flex-row w-full p-2 border'>
          <label htmlFor='' className='mr-2 p-2'>Tratamientos</label>
          <input type='text' className='border my-1 lg:my-0 px-2 w-full xl:w-11/12'/>
        </div>
        <div className='flex flex-col xl:flex-row w-full p-2 border'>
          <label htmlFor='' className='mr-2 p-2'>Evolución</label>
          <input type='text' className='border my-1 lg:my-0 px-2 w-full xl:w-11/12'/>
        </div>
        <div className='flex flex-col xl:flex-row w-full p-2 border'>
          <label htmlFor='' className='mr-2 p-2'>Alimentación</label>
          <input type='text' className='border my-1 lg:my-0 px-2 w-full xl:w-11/12'/>
        </div>
        <div className='flex flex-col xl:flex-row w-full p-2 border'>
          <label htmlFor='' className='mr-2 p-2 w-[300px]'>Historia reproductiva</label>
          <div>
            <label htmlFor='' className='mr-2'>Entero</label>
            <input type='radio' name='hr' value='m' className='mx-2'/> 
          </div>
          <div>
            <label htmlFor='' className='mr-2'>Esterilizado</label>
            <input type='radio' name='hr' value='h' className='mx-2'/> 
          </div>
        </div>
        <div className='flex flex-col md:flex-row w-full p-2 border '>
          <label htmlFor='' className='mr-2 p-2'>Ultimo celo</label>
          <input type='date' className='border p-2 md:mx-4'/>
        </div>
        <div className='flex flex-col md:flex-row w-full p-2 border '>
          <label htmlFor='' className='mr-2 p-2'>Ultimo parto</label>
          <input type='date' className='border p-2 md:mx-4'/>
        </div>
               
    </div>
    
  );
}