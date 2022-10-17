import React from 'react'
import { ImHome } from "react-icons/im";

export const Header = () => {
  return (
    <div>
        <div className='flex items-center justify-between p-4 bg-black text-white'>
            <h3>Sabir's Library</h3>
            <h3><ImHome></ImHome></h3>
        </div>
    </div>
  )
}
