import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import React from 'react'
import Meta from './meta'

const inter = Inter({ subsets: ['latin'] })



const Home = () => {
  return (
    <React.Fragment>
      <Meta title="Home Page" keywords="fahad" description ="Fahad" />
     

          {/* <h1>This is Home Page</h1>
          <Link href="./admin/admin_profile">Admin Data</Link><br></br>
          <Link href="./manager/manager_all_data">Manager List</Link><br></br>
          <Link href="./traveler/traveler_list">Traveler List</Link><br></br>
          <Link href="./tourguid/tourguid_list">Tourguid List</Link><br></br>
          <Link href="../payment/payment_h">Show Payment History</Link> */}

            <h1 className=' text-lg  font-bold text-size-manuali absolute left-0 right-0 text-center text-white top-20'>Welcome travel blogger website</h1>

            <div className='flex justify-center space-x-10 absolute left-0 right-0 top-40'>

              <div className='relative hh'>
              <Link href="#"><Image  src="/download (2).jpg" height={200} width={220}/>
              <h1 className='absolute left-20 hh2 right-0 top-16 bottom-0 font-bold text-white text-lg'>
                Sajek
              </h1></Link>
              </div>

              <div className='relative hh'>
              <Link href="#"><Image  src="/download (1).jpg" height={200} width={220}/>
              <h1 className='absolute left-14 hh2 right-0 top-16 bottom-0 font-bold text-white text-lg'>
                Bangladesh
              </h1></Link>
              </div>

              <div className='relative hh'>
              <Link className='' href="#"><Image  src="/fff.jpg" height={200} width={220}/>
              <h1 className='absolute left-16 right-0 top-16 bottom-0 font-bold hh2  text-white text-lg'>
                Sentmartin
              </h1></Link>
              </div>

              <div className='relative hh'>
              <Link href="#"><Image  src="/ff.jpg" height={200} width={220}/>
              <h1 className='absolute left-16 right-0 top-16 bottom-0 hh2 font-bold text-white text-lg'>
                Cox Bazar
              </h1></Link>
              </div>
              
            </div>


            <div className='flex justify-center space-x-10 absolute left-0 right-0 top-96'>

              <div className='relative hh'>
              <Link href="#"><Image  src="/download (2).jpg" height={200} width={220}/>
              <h1 className='absolute left-20 hh2 right-0 top-16 bottom-0 font-bold text-white text-lg'>
                Sajek
              </h1></Link>
              </div>

              <div className='relative hh'>
              <Link href="#"><Image  src="/download (1).jpg" height={200} width={220}/>
              <h1 className='absolute left-14 hh2 right-0 top-16 bottom-0 font-bold text-white text-lg'>
                Bangladesh
              </h1></Link>
              </div>

              <div className='relative hh'>
              <Link className='' href="#"><Image  src="/fff.jpg" height={200} width={220}/>
              <h1 className='absolute left-16 right-0 top-16 bottom-0 font-bold hh2  text-white text-lg'>
                Sentmartin
              </h1></Link>
              </div>

              <div className='relative hh'>
              <Link href="#"><Image  src="/ff.jpg" height={200} width={220}/>
              <h1 className='absolute left-16 right-0 top-16 bottom-0 hh2 font-bold text-white text-lg'>
                Cox Bazar
              </h1></Link>
              </div>
              
            </div>
            
            

           
            {/* <div className='fahad flex justify-center items-center h-screen'>
            <span className='fullscreenDiv '>
            <h1 className='mt-6 font-semibold text-white bg-black mr-auto inline-block  text-lg p-4 '>If you are not register! <Link href="/admin/admin_reg" className='text-yellow-300'>Register</Link></h1><br></br>
            <h1 className='mt-6 mb-6  font-semibold text-white bg-black mr-auto inline-block  text-lg p-4'>Already have a account <Link href="/admin/admin_log" className='text-green-500 ml-16-10'>Log in</Link></h1>

            </span>
            </div> */}
              
              
              
              {/* <Image 
              src="/fahad1.png" 
              alt="Photo" 
              height={250}
              width={300}
          /> */}
     
    </React.Fragment>

    
    
  );
}

export default  Home