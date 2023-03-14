import React from 'react'

function Order(props) {
  return (
      <tr className='border-b text-left h-12'>
        <td className='pl-5 text-black'>{props.name} </td>
        <td className='text-black'>{props.quantity}</td>
        <td>
         <p className={props.col}> {props.price} </p>
        </td>
        <td>
         <p className={props.color}> {props.action} </p>
        </td>
      </tr>      
  )
}

export default Order