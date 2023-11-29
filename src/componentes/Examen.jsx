import React from 'react';

export default function Motivo() {
  return (
    
    <div className='flex border flex-col m-4 text-base'>
      <div className='font-extrabold uppercase text-xl bg-[#D8804E] py-2 w-full text-center'>
          Examen clínico
      </div>
      <div className='flex flex-col lg:flex-row w-full border'>
        <div className='border-y p-1 lg:w-1/4 lg:border'>F. Respiratoria <input type='number' className='border w-[70px]'/> rpm</div>
        <div className='border-y p-1 lg:w-1/4 lg:border'>F. Cardiaca <input type='number' className='border w-[70px]'/> ipm</div>
        <div className='border-y p-1 lg:w-1/4 lg:border'>Temperatura<input type='number' className='border w-[70px]'/> °C</div>
        <div className='border-y p-1 lg:w-1/4 lg:border'>Pulso <input type='number' className='border w-[70px]'/></div>
      </div>

      <div className='flex flex-col lg:flex-row w-full border'>
        <div className='border-y p-1 lg:w-1/4 lg:border'>Tiempo de llenado capilar <input type='number' className='border w-[70px]'/></div>
        <div className='border-y p-1 lg:border lg:w-3/4'>Ganglios linfaticos <input type='number' className='border w-[70px]'/>
        </div>
      </div>

      <div className='flex flex-col lg:flex-row w-full '>
        <div className='border-y p-1 lg:w-1/3 lg:border'>Mucosas: <input type='number' className='border'/>
        </div>
        <div className='flex flex-col xl:flex-row w-full p-1 border'>
          <label htmlFor='' className='mr-2  w-[300px]'>Actitud y temperamento</label>
          <div>
            <label htmlFor='' className='mr-2'>Letárgico</label>
            < input type='radio' name='hr' value='m' className='mx-2'/> 
          </div>
          <div>
            <label htmlFor='' className='mr-2'>Estuporoso</label>
            <input type='radio' name='hr' value='h' className='mx-2'/>               
          </div>
          <div>
            <label htmlFor='' className='mr-2'>Comatoso</label>
            <input type='radio' name='hr' value='h' className='mx-2'/>               
          </div>
          <div>
            <label htmlFor='' className='mr-2'>Alerta</label>
            <input type='radio' name='hr' value='h' className='mx-2'/>               
          </div>
          <div>
            <label htmlFor='' className='mr-2 p-2'>Otro</label>
            <input type='text' className='border'/>
          </div>

        </div>
      </div>
         
    </div>
    
  );
}