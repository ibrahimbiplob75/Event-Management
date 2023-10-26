import { Helmet } from 'react-helmet';
import './App.css'
import { Outlet } from 'react-router-dom';
import Footer from './Footer/Footer';
import Navbar from './Home/Shared/Navbar/Navbar';

function App() {


  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>News Portal || Home</title>
      </Helmet>
      <div className='font-Poppins'>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App
