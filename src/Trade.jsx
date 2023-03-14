import React from 'react'

function Trade(props) {
  return (
      <tr className='border-b text-left h-12 text-black'>
        <td className='pl-5'>{props.code}</td>
        <td>{props.board}</td>
        <td>{props.order}</td>
        <td>{props.price}</td>
        <td>203</td>
        <td>{props.created.slice(0,10)}</td>
        <td>{props.created.slice(11,16)}</td>
      </tr>      
  )
}

export default Trade