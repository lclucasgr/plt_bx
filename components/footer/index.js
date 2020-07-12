import React from 'react'

const Footer = () => {
    return(
        <div className='bg-gray-700 p-4'>
             <div className='container mx-auto text-center font-bold text-white'>
               Projeto Desenvolvido por: Lucas /Github: <a className='hover:underline' href='https://github.com/lclucasgr'>lclucasgr</a>
                <div className='mt-4'>   
                  <img className='inline p-4' src='/fsm.png'/>
                  <img className='inline p-4' src='/dp.png'/>
               </div>
            </div>
        </div>
    )
}

export default Footer