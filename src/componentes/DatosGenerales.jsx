import React from 'react';

export default function DatosGenerales() {
  return (
    <div className='m-4 text-base'>
        {/* Fecha y número */}
        <div className='border flex flex-col sm:flex-row w-full'>
            <div className='w-full sm:w-2/5 p-2 border'>
                <label className='mr-2'>Fecha</label>
                <input type='date' className='border'/>
            </div>
            
            <div className='w-full sm:w-3/5 p-2 border '>
                <label className='mr-2'>Número de Historia</label>
                <input type='number' className='border'/>
            </div>
        </div>


        {/* Caja externa */}
        <div className='flex flex-col sm:flex-row w-full border'>

            {/* Caja para datos del propietario */}
            <div className='flex flex-col sm:w-2/5'>
                <h2 className='font-extrabold uppercase text-xl  bg-[#D8804E] p-1'>Datos del propietario</h2>
                <div className='flex flex-col w-full p-2 border'>
                    <label htmlFor='' className='mr-2'>Nombres</label>
                    <input type='text' className='border'/>
                </div>
                <div className='flex flex-col w-full p-2 border'>
                    <label htmlFor='' className='mr-2'>Documento de identidad</label>
                    <input type='number' className='border'/>
                </div>
                <div className='flex flex-col w-full p-2 border'>
                    <label htmlFor='' className='mr-2'>Dirección</label>
                    <input type='text' className='border'/>
                </div>
                <div className='flex flex-col w-full p-2 border'>
                    <label htmlFor='' className='mr-2'>Teléfono</label>
                    <input type='tel' className='border'/>
                </div>
                <div className='flex flex-col w-full p-2 border'>
                    <label htmlFor='' className='mr-2'>Correo</label>
                    <input type='email' className='border'/>
                </div>
            </div>


            {/* Caja de datos del paciente */}
            <div className='flex flex-col sm:w-3/5'>
                <h2 className='font-extrabold uppercase text-xl bg-[#D8804E] p-1'>Datos del paciente</h2>
                <div className='grid grid-cols-1 sm:grid-cols-2'>
                    <div className='flex flex-col w-full p-2 border'>
                        <label htmlFor='' className='mr-2'>Nombre</label>
                        <input type='text' className='border'/>
                    </div>
                    <div className='flex flex-col w-full p-2 border'>
                        <div>
                            <label htmlFor='' className='mr-2'>Macho</label>
                            <input type='radio' name='mc' value='m' className='mx-2'/> 
                        </div>
                        <div>
                            <label htmlFor='' className='mr-2'>Hembra</label>
                            <input type='radio' name='mc' value='h' className='mx-2'/> 
                        </div>
                    </div>
                    <div className='flex flex-col w-full p-2 border'>
                        <label htmlFor='' className='mr-2'>Raza</label>
                        <input type='text' className='border'/>
                    </div>
                    <div className='flex flex-col w-full p-2 border'>
                        <form action='#'>
                            <select name='especies'>
                                <option selected='true' disabled='disabled'>Especie</option>
                                <option value='canino'>Canino</option>
                                <option value='felino'>Felino</option>
                                <option value='otra'>Otra</option>
                            </select>
                        </form>
                    </div>
                    <div className='flex flex-col w-full p-2 border'>
                        <label htmlFor='' className='mr-2'>Fecha de nacimiento</label>
                        <input type='date' className='border'/>
                    </div>
                    <div className='flex flex-col w-full p-2 border'>
                        <label htmlFor='' className='mr-2'>Color</label>
                        <input type='text' className='border'/>
                    </div>
                    <div className='flex flex-col w-full p-2 border'>
                        <label htmlFor='' className='mr-2'>Peso</label>
                        <input type='number' className='border'/>
                    </div>


                </div>
            </div>
        </div>

    </div>
  );
}