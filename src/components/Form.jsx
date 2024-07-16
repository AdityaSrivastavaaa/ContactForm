import React, { useState } from 'react'
import supportImage from '../assets/ic_outline-message.png'
import callImage from '../assets/Vector.png'
import emaiImage from '../assets/ic_outline-message (1).png'

function Form() {
 
  // const onViaCallSubmit = () =>{
  //   console.log("I am from call!!!");
  // }
  const [name , setName] = useState('');
  const [email , setEmail] = useState('');
  const [text , setText] = useState('')

  const handleSubmit = (event) =>{
    event.preventDefault();
       
    setName( event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);

    console.log("name",name);
    console.log("email",email);
    console.log("text",text);
  };
  return (
    <div className='W-[472px] h-[457px]'>
      <div className='w-full flex flex-col gap-4'>
      <div className='w-full flex gap-8 h-[44px]' >
        <button className='bg-black text-white flex justify-center items-center px-3 py-5 gap-3 rounded w-[220px]'><img src={supportImage} alt="" className='invert-0' />VIA SUPPORT CHAT</button>
        <button className='bg-black text-white flex justify-center items-center px-3 py-5 gap-3 rounded w-[220px]' ><img src={callImage} alt=""  />VIA CALL</button>
      </div>
      <div className='w-full  flex items-center justify-center'>
      <button className='bg-white text-black flex justify-center items-center gap-3 px-3 py-5 rounded border-[1px] border-black w-full h-[44px] font-semibold text-base'><img src={emaiImage} alt="" />VIA EMAIL FORM </button>
      </div>
      </div>
      <div className='w-[440px] h-[329px] mx-auto mt-6' >
      <form onSubmit={handleSubmit}>
      <div className='flex  flex-col gap-5'>
        <div className=' flex flex-col relative w-full'>
        <label htmlFor="name" className='absolute top-[-12px] left-[10px] bg-white px-2 py-1 font-semibold text-base'>Name</label>
        <input type="text" name="name" id="name" className='border border-[1px] border-black h-[40px] pt-6 '/>
        </div>
        <div className=' flex flex-col relative w-full'>
        <label htmlFor="email" className='absolute top-[-12px] left-[10px] bg-white px-2 py-1 font-semibold text-base'>E-Mail</label>
        <input type="email" name="email" id="email" className='border border-[1px] border-black h-[40px] pt-6 '/>
        </div><div className=' flex flex-col relative w-full'>
        <label htmlFor="textarea" className='absolute top-[-12px] left-[10px] bg-white px-2  py-1 font-semibold text-base'>TEXT</label>
        <textarea name="textarea" id="textarea"  className='border border-[1px] border-black h-[120px] pt-6 ' rows='40'></textarea>
        </div>
        <div className='flex justify-end'>
          <button type="submit" className='bg-black text-white flex justify-center items-center px-3 py-5 gap-3 rounded w-[220px] h-[44px]' >Submit</button>
        </div>
      </div>
      </form>

      </div>
      
    </div>
  )
}

export default Form
