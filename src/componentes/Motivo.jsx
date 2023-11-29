import React from 'react';

export default function Motivo() {
  return (
    
    <div className='flex border flex-col m-4 text-base'>
        <div className='font-extrabold uppercase text-xl bg-[#D8804E] py-1 w-full text-center'>
          Motivo de la consulta
        </div>
        <textarea name="Text1" cols="40" rows="5" className='border my-1 md:my-0 p-2'></textarea> 
    </div>
    
  );
}