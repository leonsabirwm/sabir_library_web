import React from 'react'



const Feature = ({feature,redirect,bg,icon}) => {
                          
                        
  return (
    <div className={`${bg} flex items-center flex-col justify-center text-white font-medium rounded-lg p-10 shadow-xl`}>
        
        <h3 className='text-2xl'>
          {icon}
        </h3>
        <h3 className='text-xl mt-3'>{feature}</h3>        
    </div>
  )
}

export default Feature