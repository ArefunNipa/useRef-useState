import React from 'react'

const Menu = ({className,menuTxt}) => {
  return (
    <ul>
        <li className={`font-pop font-semibold text-2xl ml-14 capitalize ${className}`}>{menuTxt}</li>
    </ul>
  )
}

export default Menu