import '../styles/globals.css';


import Header from './home_header_fotter_content/header';
import MainLayout from './home_header_fotter_content/layout'

export default function App({ Component, pageProps}) {
  return (
    <>
    
    <MainLayout>
    

    <Component {...pageProps} />
    </MainLayout>
    
    </>
  
 
  )
}
