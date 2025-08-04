import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import styles from '../App.module.scss';



export default function Navigation() {
    return(
        <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    );
    }
