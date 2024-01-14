import React from 'react'
import Image from 'next/image'
const page = () => {
  return (
    <div className='text-6xl text-center font-bold text-purple-600 bg bg-red-300'> Riaz Ahmad Arrain
    <div className=' flex text-2xl text-yellow-400 bg bg-green-600 flex-auto'> Contact-me 03368282730 </div>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <Image alt="ecommerce" className="object-cover-red object-center w-full h-full block" src="/camera.jfif"width={200} height={200}/>
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 className="text-red-900 title-font text-lg font-bold">Canon EOS 4000D</h2>
          <p className="mt-1">$39.00</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <Image alt="ecommerce" className="object-cover-red object-center w-full h-full block" src="/mobile.WEBP"width={200} height={200}/>
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">Xiaomi Redmi 12 4GB 128GB</h2>
          <p className="mt-1">$21.15</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <Image alt="ecommerce" className="object-cover-red object-center w-full h-full block" src="/watch.webp"width={200} height={200}/>
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">Tank T2 Special Edition Smart Watch Silver Bundle</h2>
          <p className="mt-1">$25.00</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <Image alt="ecommerce" className="object-cover-red object-center w-full h-full block" src="/soft.jpg"width={200} height={200}/>
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">Microsoft Surface Duo 2 8GB 128GB</h2>
          <p className="mt-1">$18.40</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <Image alt="ecommerce" className="object-cover-red object-center w-full h-full block" src="/cam.jpg"width={300} height={300}/>
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">Logitech C505 HD Webcam - 720p HD External USB Camera</h2>
          <p className="mt-1">$16.00</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <Image alt="ecommerce" className="object-cover-red object-center w-full h-full block" src="/usb.PNG"width={200} height={200}/>
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">Logitech Spotlight Presentation Remote</h2>
          <p className="mt-1">$21.15</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <Image alt="ecommerce" className="object-cover-red object-center w-full h-full block" src="/mouse.jpg"width={200} height={200}/>
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">Logitech G402 Hyperion Fury FPS Gaming Mouse</h2>
          <p className="mt-1">$12.00</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <Image alt="ecommerce" className="object-cover-red object-center w-full h-full block" src="/ram.jpg"width={200} height={200}/>
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">Samsung M393A2K40CB2-CTD 16GB Ram</h2>
          <p className="mt-1">$18.40</p>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default page