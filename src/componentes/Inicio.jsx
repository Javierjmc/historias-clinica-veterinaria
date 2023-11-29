import React from 'react';
import logo from '../assets/logotipost.png';

export default function Inicio() {
  return (
    <>
      <div className='flex flex-col items-center sm:w-full sm:px-2'>
        <img className='w-56 mb-1.5 mt-2.5' src={logo} alt='logo'/>
        <div className='flex flex-col items-center w-full sm:flex-row sm:justify-center sm:items-center'>
          <input type='search' placeholder='Ingrese nombre del paciente' className='w-full border-solid border border-[#FE914D] outline-none px-2 mb-6 h-8 max-w-screen-sm sm:mx-2 sm:rounded-md'/>
          <button className='w-full bg-[#FE914D] text-white font-sans font-black mb-6 h-8 hover:bg-[#D8804E] hover:text-pink-100 sm:w-36 sm:mx-2 sm:max-w-[85px] sm:rounded-md'>Buscar</button>
          <button className='w-full bg-[#FE914D] text-white font-sans font-black mb-6 h-8 hover:bg-[#D8804E] hover:text-pink-100 sm:w-56 sm:mx-2 sm:max-w-[140px] sm:rounded-md'>Nueva Historia</button>
      </div>
      </div>
    </>
  );
}