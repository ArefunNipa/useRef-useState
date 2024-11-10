import React from 'react'

const Button = ({className,btnName}) => {
  return (
    <button className={`font-pop font-semibold text-2xl capitalize ${className}`}>{btnName}</button >
  )
}

export default Button