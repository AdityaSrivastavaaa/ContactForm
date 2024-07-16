import React from 'react'
import Heading from './components/Heading'
import Form from './components/Form'
import Service from './components/Service'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div >
      <div className=''>
      <Navbar/>
      </div>
     
      <div className='flex flex-col justify-start items-center mt-20 w-3/4 mx-auto'>
      <div>
       <Heading/>
      </div>
      <div className='flex justify-center items-center text-center   w-[1161px] h-[calc(100%-72px)] gap-20'>
      <Form/>
      <Service/>
      </div>
      </div>
    </div>
  )
}

export default App
