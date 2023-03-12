import React from 'react'

function Order(props) {

  return (
    <tbody>
      <tr className='border-b text-left h-12 font-semibold'>
        <td className='pl-5'>Product</td>
        <td>Quantity</td>
        <td>Price</td>
        <td>Action</td>
      </tr>      
      <tr className='border-b text-left h-12'>
        <td className='pl-5 text-black'>Soybeans (SSBS) </td>
        <td className='text-black'>2003</td>
        <td>
         <p className={props.col}> 6,471.39 </p>
        </td>
        <td>
         <p className={props.color}> BUY </p>
        </td>
      </tr>      
      <tr className='border-b text-left h-12'>
        <td className='pl-5 text-black'>Paddy Rice (SPRL) </td>
        <td className='text-black'>2003</td>
        <td>
         <p className={props.col}> 6,471.39 </p>
        </td>
        <td>
         <p className={props.color}> BUY </p>
        </td>
      </tr>      
      <tr className='border-b text-left h-12'>
        <td className='pl-5 text-black'>Maize (SMAZ) </td>
        <td className='text-black'>2003</td>
        <td>
         <p className={props.col}> 6,471.39 </p>
        </td>
        <td>
         <p className={props.color}> BUY </p>
        </td>
      </tr>      
      <tr className='border-b text-left h-12'>
        <td className='pl-5 text-black'>Sorghum (SSGM) </td>
        <td className='text-black'>2003</td>
        <td>
         <p className={props.col}> 6,471.39 </p>
        </td>
        <td>
         <p className={props.color}> BUY </p>
        </td>
      </tr>      
      <tr className='border-b text-left h-12'>
        <td className='pl-5 text-black'>Fair Trade ETC (FETC) </td>
        <td className='text-black'>2003</td>
        <td>
         <p className={props.col}> 6,471.39 </p>
        </td>
        <td>
         <p className={props.color}> BUY </p>
        </td>
      </tr>      
      <tr className='border-b text-left h-12'>
        <td className='pl-5 text-black'>Soybeans (SSBS) </td>
        <td className='text-black'>2003</td>
        <td>
         <p className={props.col}> 6,471.39 </p>
        </td>
        <td>
         <p className={props.color}> BUY </p>
        </td>
      </tr> 
      <tr className='border-b text-left h-12'>
        <td className='pl-5 text-black'>Soybeans (SSBS) </td>
        <td className='text-black'>2003</td>
        <td>
         <p className={props.col}> 6,471.39 </p>
        </td>
        <td>
         <p className={props.color}> BUY </p>
        </td>
      </tr> 
    </tbody>
  )
}

export default Order