import React, { Component } from 'react'
import background from '../assets/images/pexels-jakub-zerdzicki-18991663.jpg'
const productos = [

    {
      id: 2,
      name: 'Product 2',

      imageSrc: 'https://images.pexels.com/photos/1682699/pexels-photo-1682699.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
      imageAlt: 'Product 2 Image',
      href: '/product2',
    },
    {
        id:3,
        name: 'Product 2',
        color: 'Blue',
        price: '$29.99',
        imageSrc: 'https://images.pexels.com/photos/1682699/pexels-photo-1682699.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
        imageAlt: 'Product 2 Image',
        href: '/product2',
      },
      {
        id: 4,
        name: 'Product 2',

        price: '$29.99',
        imageSrc: 'https://images.pexels.com/photos/1682699/pexels-photo-1682699.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
        imageAlt: 'Product 2 Image',
        href: '/product2',
      },
      {
        id: 5,
        name: 'Product 2',
        color: 'Blue',

        imageSrc: 'https://images.pexels.com/photos/1682699/pexels-photo-1682699.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
        imageAlt: 'Product 2 Image',
        href: '/product2',
      },
      {
        id: 6,
        name: 'Product 1',
        color: 'Red',
        price: '$19.99',
        imageSrc: 'https://images.pexels.com/photos/1148957/pexels-photo-1148957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        imageAlt: 'Product 1 Image',
        href: '/product1',
      },
      {
        id: 8,
        name: 'Product 1',
        color: 'Red',
        price: '$19.99',
        imageSrc: 'https://images.pexels.com/photos/1148957/pexels-photo-1148957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        imageAlt: 'Product 1 Image',
        href: '/product1',
      },
    // Add more products as needed
  ]
export default class Home extends Component {
  render() {
    // const selectedProduct = products.filter((product) => product.id === 3)[0];
    return (
      <div className=' grid [grid-template-rows:_repeat(5,_1fr);]'>
       <main className='m-4 bg-neutral-900 p-2 min-h-max [grid-area:_1_/_1_/_5_/_6;]'>
       <h2 class="text-xl text-center text-sky-900 font-bold mb-6">Generador de Equipos</h2>
        <section className='flex flex-row justify-center gap-2'>
          {/* <div>
            <h2 class="text-xl text-sky-900 font-bold mb-6">Alumnos</h2>
            <div
  class="relative group rounded-lg h-80 w-64 bg-gray-50 overflow-hidden before:absolute before:w-12 before:h-12 before:content[''] before:right-0 before:bg-green-500 before:rounded-full before:blur-lg before:[box-shadow:-60px_20px_10px_10px_#3390C8]"
>
  
  <select multiple="multiple"
    class="appearance-none  hover:placeholder-shown:bg-emerald-500 relative text-sky-400 bg-transparent ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-green-700 text-sm font-bold rounded-lg focus:ring-green-500 focus:border-green-500 block w-full h-full p-2.5"
  >
    <option className='text-base'>javier</option>
    <option className='text-base'>bobasdfa</option>
    <option className='text-base'>bobasdfa</option>
    <option className='text-base'>bobasdfa</option>
    <option className='text-base'>bobasdfa</option>
    <option className='text-base'>bobasdfa</option>
    <option className='text-base'>bobasdfa</option>
    <option className='text-base'>bobasdfa</option>
    <option className='text-base'>bobasdfa</option>
    <option className='text-base'>bobasdfa</option>
    <option className='text-base'>bobasdfa</option>
    <option className='text-base'>bobasdfa</option>
    <option className='text-base'>bobasdfa</option>
    <option className='text-base'>d</option>
    <option className='text-base'>bobasdfa</option>
    <option className='text-base'>bobasdfa</option>
    <option className='text-base'>bobasdfa</option>
  </select>
            </div>
            <button class="relative  mt-8 border hover:border-sky-600 duration-500 group cursor-pointer text-sky-50  overflow-hidden h-14 w-full rounded-md bg-sky-800 p-2 flex justify-center items-center font-extrabold">
  <div class="absolute z-10 w-48 h-48 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-900 delay-150 group-hover:delay-75"></div>
  <div class="absolute z-10 w-40 h-40 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-800 delay-150 group-hover:delay-100"></div>
  <div class="absolute z-10 w-32 h-32 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-700 delay-150 group-hover:delay-150"></div>
  <div class="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-600 delay-150 group-hover:delay-200"></div>
  <div class="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-500 delay-150 group-hover:delay-300"></div>
  <p class="z-10">Magia!</p>
</button>
<button class="relative mt-8 group cursor-pointer text-sky-50  overflow-hidden h-16 w-64 rounded-md bg-sky-800 p-2 flex justify-center items-center font-extrabold">

  <div class="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-40 h-40 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-900"></div>
  <div class="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-32 h-32 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-800"></div>
  <div class="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-24 h-24 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-700"></div>
  <div class="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-14 h-14 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-600"></div>
  <p class="z-10">Descarga pdf</p>
</button>

          </div>
          */}
{/*        
          <div className='bg-sky-600 rounded-lg p-8 py-16 max-w-7xl w-full flex flex-row justify-center flex-wrap gap-8'>
            <div className='flex flex-col'>
              <span className=' text-xl text-neutral-50 font-bold mb-6'>Equipo n</span>
              <div
                  class="w-56 relative overflow-hidden z-10 bg-white p-4 rounded-lg shadow-md before:w-24 before:h-24 before:absolute before:bg-purple-500 before:rounded-full before:-z-10 before:blur-2xl after:w-32 after:h-32 after:absolute after:bg-sky-400 after:rounded-full after:-z-10 after:blur-xl after:top-24 after:-right-12"
                > 
                  <h2 class="text-xl text-sky-900 font-bold mb-6">nombre apellido</h2>
                  <h2 class="text-xl text-sky-900 font-bold mb-6">nombre apellido</h2>
                  <h2 class="text-xl text-sky-900 font-bold mb-6">nombre apellido</h2>
                  <h2 class="text-xl text-sky-900 font-bold mb-6">nombre apellido</h2>
              </div>
            </div>
            <div className='flex flex-col'>
              <span className=' text-xl text-neutral-50 font-bold mb-6'>Equipo n</span>
              <div
                  class="w-56 relative overflow-hidden z-10 bg-white p-4 rounded-lg shadow-md before:w-24 before:h-24 before:absolute before:bg-purple-500 before:rounded-full before:-z-10 before:blur-2xl after:w-32 after:h-32 after:absolute after:bg-sky-400 after:rounded-full after:-z-10 after:blur-xl after:top-24 after:-right-12"
                > 
                  <h2 class="text-xl text-sky-900 font-bold mb-6">nombre apellido</h2>
                  <h2 class="text-xl text-sky-900 font-bold mb-6">nombre apellido</h2>
                  <h2 class="text-xl text-sky-900 font-bold mb-6">nombre apellido</h2>
                  <h2 class="text-xl text-sky-900 font-bold mb-6">nombre apellido</h2>
              </div>
            </div>
            <div className='flex flex-col'>
              <span className=' text-xl text-neutral-50 font-bold mb-6'>Equipo n</span>
              <div
                  class="w-56 relative overflow-hidden z-10 bg-white p-4 rounded-lg shadow-md before:w-24 before:h-24 before:absolute before:bg-purple-500 before:rounded-full before:-z-10 before:blur-2xl after:w-32 after:h-32 after:absolute after:bg-sky-400 after:rounded-full after:-z-10 after:blur-xl after:top-24 after:-right-12"
                > 
                  <h2 class="text-xl text-sky-900 font-bold mb-6">nombre apellido</h2>
                  <h2 class="text-xl text-sky-900 font-bold mb-6">nombre apellido</h2>
                  <h2 class="text-xl text-sky-900 font-bold mb-6">nombre apellido</h2>
                  <h2 class="text-xl text-sky-900 font-bold mb-6">nombre apellido</h2>
              </div>
            </div>
            <div className='flex flex-col'>
              <span className=' text-xl text-neutral-50 font-bold mb-6'>Equipo n</span>
              <div
                  class="w-56 relative overflow-hidden z-10 bg-white p-4 rounded-lg shadow-md before:w-24 before:h-24 before:absolute before:bg-purple-500 before:rounded-full before:-z-10 before:blur-2xl after:w-32 after:h-32 after:absolute after:bg-sky-400 after:rounded-full after:-z-10 after:blur-xl after:top-24 after:-right-12"
                > 
                  <h2 class="text-xl text-sky-900 font-bold mb-6">nombre apellido</h2>
                  <h2 class="text-xl text-sky-900 font-bold mb-6">nombre apellido</h2>
                  <h2 class="text-xl text-sky-900 font-bold mb-6">nombre apellido</h2>
                  <h2 class="text-xl text-sky-900 font-bold mb-6">nombre apellido</h2>
              </div>
            </div>
            <div className='flex flex-col'>
              <span className=' text-xl text-neutral-50 font-bold mb-6'>Equipo n</span>
              <div
                  class="w-56 relative overflow-hidden z-10 bg-white p-4 rounded-lg shadow-md before:w-24 before:h-24 before:absolute before:bg-purple-500 before:rounded-full before:-z-10 before:blur-2xl after:w-32 after:h-32 after:absolute after:bg-sky-400 after:rounded-full after:-z-10 after:blur-xl after:top-24 after:-right-12"
                > 
                  <h2 class="text-xl text-sky-900 font-bold mb-6">nombre apellido</h2>
                  <h2 class="text-xl text-sky-900 font-bold mb-6">nombre apellido</h2>
                  <h2 class="text-xl text-sky-900 font-bold mb-6">nombre apellido</h2>
                  <h2 class="text-xl text-sky-900 font-bold mb-6">nombre apellido</h2>
              </div>
            </div>
            <div className='flex flex-col'>
              <span className=' text-xl text-neutral-50 font-bold mb-6'>Equipo n</span>
              <div
                  class="w-56 relative overflow-hidden z-10 bg-white p-4 rounded-lg shadow-md before:w-24 before:h-24 before:absolute before:bg-purple-500 before:rounded-full before:-z-10 before:blur-2xl after:w-32 after:h-32 after:absolute after:bg-sky-400 after:rounded-full after:-z-10 after:blur-xl after:top-24 after:-right-12"
                > 
                  <h2 class="text-xl text-sky-900 font-bold mb-6">nombre apellido</h2>
                  <h2 class="text-xl text-sky-900 font-bold mb-6">nombre apellido</h2>
                  <h2 class="text-xl text-sky-900 font-bold mb-6">nombre apellido</h2>
                  <h2 class="text-xl text-sky-900 font-bold mb-6">nombre apellido</h2>
              </div>
            </div>
            <div className='flex flex-col'>
              <span className=' text-xl text-neutral-50 font-bold mb-6'>Equipo n</span>
              <div
                  class="w-56 relative overflow-hidden z-10 bg-white p-4 rounded-lg shadow-md before:w-24 before:h-24 before:absolute before:bg-purple-500 before:rounded-full before:-z-10 before:blur-2xl after:w-32 after:h-32 after:absolute after:bg-sky-400 after:rounded-full after:-z-10 after:blur-xl after:top-24 after:-right-12"
                > 
                  <h2 class="text-xl text-sky-900 font-bold mb-6">nombre apellido</h2>
                  <h2 class="text-xl text-sky-900 font-bold mb-6">nombre apellido</h2>
                  <h2 class="text-xl text-sky-900 font-bold mb-6">nombre apellido</h2>
                  <h2 class="text-xl text-sky-900 font-bold mb-6">nombre apellido</h2>
              </div>
            </div>
            <div className='flex flex-col'>
              <span className=' text-xl text-neutral-50 font-bold mb-6'>Equipo n</span>
              <div
                  class="w-56 relative overflow-hidden z-10 bg-white p-4 rounded-lg shadow-md before:w-24 before:h-24 before:absolute before:bg-purple-500 before:rounded-full before:-z-10 before:blur-2xl after:w-32 after:h-32 after:absolute after:bg-sky-400 after:rounded-full after:-z-10 after:blur-xl after:top-24 after:-right-12"
                > 
                  <h2 class="text-xl text-sky-900 font-bold mb-6">nombre apellido</h2>
                  <h2 class="text-xl text-sky-900 font-bold mb-6">nombre apellido</h2>
                  <h2 class="text-xl text-sky-900 font-bold mb-6">nombre apellido</h2>
                  <h2 class="text-xl text-sky-900 font-bold mb-6">nombre apellido</h2>
              </div>
            </div>
            <div className='flex flex-col'>
              <span className=' text-xl text-neutral-50 font-bold mb-6'>Equipo n</span>
              <div
                  class="w-56 relative overflow-hidden z-10 bg-white p-4 rounded-lg shadow-md before:w-24 before:h-24 before:absolute before:bg-purple-500 before:rounded-full before:-z-10 before:blur-2xl after:w-32 after:h-32 after:absolute after:bg-sky-400 after:rounded-full after:-z-10 after:blur-xl after:top-24 after:-right-12"
                > 
                  <h2 class="text-xl text-sky-900 font-bold mb-6">nombre apellido</h2>
                  <h2 class="text-xl text-sky-900 font-bold mb-6">nombre apellido</h2>
                  <h2 class="text-xl text-sky-900 font-bold mb-6">nombre apellido</h2>
                  <h2 class="text-xl text-sky-900 font-bold mb-6">nombre apellido</h2>
              </div>
            </div>



          


          </div> */}
          </section>
        </main> 
        

<footer class="bg-white dark:bg-gray-900 h-24 [grid-area:_5_/_1_/_6_/_6;]">
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
              <a href="https://flowbite.com/" class="flex items-center">
                  <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 me-3" alt="FlowBite Logo" />
                  <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
              </a>
          </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a href="https://flowbite.com/" class="hover:underline">Flowbite</a>
                      </li>
                      <li>
                          <a href="https://tailwindcss.com/" class="hover:underline">Tailwind CSS</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a href="https://github.com/themesberg/flowbite" class="hover:underline ">Github</a>
                      </li>
                      <li>
                          <a href="https://discord.gg/4eeurUVvTy" class="hover:underline">Discord</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a href="#" class="hover:underline">Privacy Policy</a>
                      </li>
                      <li>
                          <a href="#" class="hover:underline">Terms &amp; Conditions</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">Flowbite™</a>. All Rights Reserved.
          </span>
          <div class="flex mt-4 sm:justify-center sm:mt-0">
              <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                        <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
                    </svg>
                  <span class="sr-only">Facebook page</span>
              </a>
              <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                        <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"/>
                    </svg>
                  <span class="sr-only">Discord community</span>
              </a>
              <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                    <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd"/>
                </svg>
                  <span class="sr-only">Twitter page</span>
              </a>
              <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
                  </svg>
                  <span class="sr-only">GitHub account</span>
              </a>
              <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z" clip-rule="evenodd"/>
                </svg>
                  <span class="sr-only">Dribbble account</span>
              </a>
          </div>
      </div>
    </div>
</footer>

      </div>





    )
  }
}

// {/* <div className="bg-neutral-50 ">
//       <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
//         <h2 className="text-2xl font-bold tracking-tight text-gray-900">Nuestra selección</h2>

//         <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
//           {products.map((product) => (
//             <div key={product.id} className="group relative border border-neutral-50 shadow-lg p-2 rounded">
//               <div className="aspect-h-1  aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
//                 <img
//                   src={product.imageSrc}
//                   alt={product.imageAlt}
//                   className="h-44 w-full object-cover object-center lg:h-full lg:w-full"
//                 />
//               </div>
//               <div className="mt-4 flex justify-between">
//                 <div>
//                   <h3 className="text-sm text-sky-800 font-bold">
//                     <a href={product.href}>
//                       <span aria-hidden="true" className="absolute  inset-0" />
//                       {product.name}
//                     </a>
//                   </h3>
//                   <p className="mt-1 text-sm text-gray-500">{product.color}</p>
//                 </div>
//                 <p className="text-sm font-medium text-gray-900">{product.price}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         <h2 className="text-2xl mt-6 mb-4 font-bold tracking-tight text-gray-900">Destacado de hoy</h2>
//         {selectedProduct && (
//             <div key={selectedProduct.id} className="group relative border bg-sky-100 border-neutral-50 shadow-lg p-4 rounded">
//               <div className="aspect-h-1  aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
//                 <img
//                   src={selectedProduct.imageSrc}
//                   alt={selectedProduct.imageAlt}
//                   className="h-44 w-full object-cover object-center lg:h-full lg:w-full"
//                 />
//               </div>
//               <div className="mt-4 flex justify-between">
//                 <div>
//                   <h3 className="text-sm text-gray-700">
//                     <a href={selectedProduct.href}>
//                       <span aria-hidden="true" className="absolute inset-0" />
//                       {selectedProduct.name}
//                     </a>
//                   </h3>
//                   <p className="mt-1 text-sm text-gray-500">{selectedProduct.color}</p>
//                 </div>
//                 <p className="text-sm font-medium text-gray-900">{selectedProduct.price}</p>
//               </div>
//             </div>
//           )}
//       </div>
//     </div> */}