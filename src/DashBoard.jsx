import React, { useState, useEffect } from 'react'
import Cipher from '@ibnlanre/cipher'
import axios from 'axios'
import line1 from './assets/line1.png'
import line2 from './assets/line2.png'
import line3 from './assets/line3.png'
import set from './assets/set.png'
import down from './assets/down.png'
import SideNav from './SideNav'
import Order from './Order'
import Trade from './Trade'
import './slide.css'


function Dash() {
  const [click, setClick] = useState(false)

  const handleClick = () => {
    setClick(!click)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const encryption_key = 'uEKBcN7kMKayW6SF8d0BtaJq60Musbp0'
        const initialization_vector = "hA7wB3e4v87ihj6R"

        const response = await axios.get("https://comx-sand-api.afex.dev/api/securities/boards?format=json");
        const data = response.data;
        
        const cipher = new Cipher({
          initialization_vector,
          algorithm: "aes-256-cbc",
          output_decoding: "base64",
          input_encoding: "utf-8",
          encryption_key,
        });
        
        // const encryptedData = cipher.encrypt(data);
        const decryptedData = cipher.decrypt(data.data)
        
        // console.log(encryptedData)
        console.log(decryptedData)
        // console.log(data)
      } catch (error) {
        console.log(error)
      }
    };
    fetchData()
  }, []);


  return (

    <div className='bg-[#fbfbfb] h-[100vh] relative text-slate-500 cursor-default'>
      <div className='flex'>
        <SideNav />
        <div className='md:w-11/12 w-full bg-[#fbfbfb]'>
          <div className="text-sm mt-4 mb-2 p-5">
            Home &gt; <span className='text-red-600'> Market </span>
          </div>
          <div className="md:flex justify-between font-semibold text-black mb-3 px-5">
            <h1 className=" text-3xl mb-5 md:mb-0">Market</h1>
            <div className='flex justify-between relative'>
              <div onClick={handleClick} className="flex z-20 px-2 mr-2 items-center border border-slate-400 rounded-lg cursor-pointer">
                <p> Page Setting </p>
                <img src={set} className='w-5 mt-1 ml-2' alt="" />
              </div>
              <div className={click ? "absolute top-10 -left-40 bg-white shadow-xl p-5 rounded-lg text-slate-600 w-[150%] text-xs" : "hidden"}>
                <h1 className='text-black text-base mb-5'>Page settings</h1>
                <div className="p-2 mb-5">
                  <h3 className='mb-3'>Board</h3>
                  <div className="flex flex-wrap text-xs">
                    <div className="text-white mr-1 bg-red-600 px-2 py-1 rounded-lg">X-Traded</div>
                    <div className="mr-1 border border-slate-200 px-2 py-1 rounded-lg">OTC</div>
                    <div className="mr-1 border border-slate-200 px-2 py-1 rounded-lg">FI</div>
                    <div className="mr-1 border border-slate-200 px-2 py-1 rounded-lg">Derivatives</div>
                  </div>
                </div>
                <div className="p-2">
                  <h3 className='mb-3'>Products</h3>
                  <div className="flex flex-wrap text-xs">
                    <div className="text-white mr-1 mb-2 bg-red-600 px-2 py-1 rounded-lg">All</div>
                    <div className="mr-1 mb-2 border border-slate-200 px-2 pl-5 py-1 rounded-lg">SBBS</div>
                    <div className="mr-1 mb-2 border border-slate-200 px-2 pl-5 py-1 rounded-lg">SPRL</div>
                    <div className="mr-1 mb-2 border border-slate-200 px-2 pl-5 py-1 rounded-lg">SGNG</div>
                    <div className="mr-1 mb-2 border border-slate-200 px-2 pl-5 py-1 rounded-lg">SCOC</div>
                    <div className="mr-1 mb-2 border border-slate-200 px-2 py-1 pl-5 rounded-lg">SMAZ</div>
                    <div className="mr-1 mb-2 border border-slate-200 px-2 py-1 pl-5 rounded-lg">SGNG</div>
                    <div className="mr-1 mb-2 border border-slate-200 px-2 py-1 pl-5 rounded-lg">SSGM</div>
                    <div className="mr-1 mb-2 border border-slate-200 px-2 py-1 pl-5 rounded-lg">FETC</div>
                  </div>
                </div>
                <div className="flex p-2 border-b pb-10">
                  <input type="checkbox" />
                  <p className='ml-2'>Sticky Header</p>
                </div>
                <div className="flex justify-end mt-5 py-3 cursor-pointer">
                  <p className='py-2 px-3 items-center border border-slate-400 rounded-lg mr-3' onClick={handleClick}> Reset </p>
                  <p className='py-2 px-3 items-center border bg-red-600 hover:bg-indigo-800 text-white rounded-lg' onClick={handleClick}> Apply </p>
                </div>
              </div>
              <div className="flex px-2 w-2/5 md:w-fit items-center border border-slate-400 rounded-lg">
                <p> Demo </p>
                <img src={down} className='w-5 mt-1 ml-2' alt="" />
              </div>
            </div>
          </div>
          <p className='mb-7 px-5'>Lorem ipsum dolor sit amet consectector. Adipiscing egestas</p>
          <div className='flex flex-wrap justify-between px-5'>
            <div className='flex items-center justify-between bg-white p-3 md:w-[32%] w-full mb-2 md:mb-0 border border-slate-200 rounded-lg'>
              <div>
                <p className='mt-3 text-sm'>Cash Balance</p>
                <p className='text-2xl font-bold my-2 text-black'>N8,374,763</p>
                <div className="flex text-xs font-normal items-center">
                  <p className='bg-red-100 text-red-600 rounded-lg px-2 py-1'>Decline</p>
                  <p className='ml-2'>Monitored Monthly</p>
                </div>
              </div>
              <img src={line1} className='w-36' alt="" />
            </div>
            <div className='flex items-center justify-between bg-white p-3 md:w-[32%] w-full mb-2 md:mb-0 border border-slate-200 rounded-lg'>
              <div>
                <p className='mt-3 text-sm'>Cash Balance</p>
                <p className='text-2xl font-bold my-2 text-black'>N8,374,763</p>
                <div className="flex text-xs font-normal items-center">
                  <p className='bg-red-100 text-red-600 rounded-lg px-2 py-1'>Decline</p>
                  <p className='ml-2'>Monitored Monthly</p>
                </div>
              </div>
              <img src={line2} className='w-36' alt="" />
            </div>
            <div className='flex  items-center justify-between bg-white p-3 md:w-[35%] w-full mb-2 md:mb-0 border border-slate-200 rounded-lg'>
              <div>
                <p className='mt-3 text-sm'>Cash Balance</p>
                <p className='text-2xl font-bold my-2 text-black'>N8,374,763</p>
                <div className="flex text-xs font-normal">
                  <p className='bg-green-100 text-green-600 rounded-lg px-2'>Increment</p>
                  <p className='ml-2'>Monitored Monthly</p>
                </div>
              </div>
              <img src={line3} className='w-40' alt="" />
            </div>
          </div>

          <div className='mt-10 px-5'>
            <div className="flex border-b w-full text-xs font-semibold overflow-auto">
              <div className="w-fit mr-5 py-3 border-b hover:border-b-black hover:text-black">Product View</div>
              <div className="w-fit mr-5 py-3 border-b border-red-600 text-red-600">Order Book</div>
              <div className="w-fit mr-5 py-3 border-b hover:border-b-black hover:text-black">Price History</div>
              <div className="w-fit mr-5 py-3 border-b hover:border-b-black hover:text-black">
                Open Orders <span className='bg-slate-100 ml-1 p-1 rounded-full text-black hover:bg-black hover:text-white'>10</span>
              </div>
              <div className="w-fit mr-5 py-3 border-b hover:border-b-black hover:text-black">
                Closed Trades <span className='bg-slate-100 ml-1 p-1 rounded-full text-black hover:bg-black hover:text-white'>20</span>
              </div>
              <div className="w-fit mr-5 py-3 border-b hover:border-b-black hover:text-black">
                Canceled Trades <span className='bg-slate-100 ml-1 p-1 rounded-full text-black hover:bg-black hover:text-white'>20</span>
              </div>
            </div>

            <div className='md:flex justify-between'>
              <table className='px-10 text-xs border bg-white pb-5  mt-5 md:w-[49%] w-full overflow-auto'>
                <thead>
                  <tr className='text-left h-12'>
                    <th colSpan={4}>
                      <div className='flex text-black border-b h-16 text-base items-center pl-5'>Buy Board</div>
                    </th>
                  </tr>
                </thead>
                <Order color='text-green-500 bg-green-100 w-fit px-2 py-1 rounded-md'
                  col='text-green-500'
                />
              </table>
              <table className='px-10 text-xs border bg-white pb-5  mt-5 md:w-[49%] w-full overflow-auto'>
                <thead>
                  <tr className='text-left h-12'>
                    <th colSpan={4}>
                      <div className='flex text-black border-b h-16 text-base items-center pl-5'>Sell Board</div>
                    </th>
                  </tr>
                </thead>
                <Order color='text-red-500 bg-red-100 w-fit px-2 py-1 rounded-md'
                  col='text-red-500'
                />
              </table>
            </div>
            <table className='px-10 text-xs border bg-white pb-5 mt-5 w-full'>
              <thead>
                <tr className='text-left h-12'>
                  <th colSpan={7}>
                    <div className='flex text-black border-b h-16 text-base items-center pl-5'>Trade Log</div>
                  </th>
                </tr>
              </thead>
              <Trade />
            </table>
          </div>
          <div className="flex mt-20 text-black">
            <div className='bg-black w-fit text-white px-10 py-3 mr-5'>Live Market</div>
            <div className="flex marquee">
              <div className="mr-5">
                <p className='font-semibold'>Soybean (SBSS)</p>
                <p>N30,834.59</p>
              </div>
              <div className="mr-5">
                <p className='font-semibold'>Soybean (SBSS)</p>
                <p>N30,834.59</p>
              </div>
              <div className="mr-5">
                <p className='font-semibold'>Maize (SMAZ)</p>
                <p>N30,834.59</p>
              </div>
              <div className="mr-5">
                <p className='font-semibold'>Paddy Rice (SPRL)</p>
                <p>N30,834.59</p>
              </div>
              <div className="mr-5">
                <p className='font-semibold'>Fair Trade ETC (FETC)</p>
                <p>N30,834.59</p>
              </div>
              <div className="mr-5">
                <p className='font-semibold'>Soybean (SBSS)</p>
                <p>N30,834.59</p>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Dash