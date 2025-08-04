import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../App.module.scss';

function Footer() {
    return (
        <footer className="d-flex w-100" style={{backgroundColor: 'rgb(2, 2, 74)', padding: '1%'}}>
            <div>
                <Link className="btn text-white" style={{backgroundColor: 'rgb(2, 2, 74)', border: 'none', padding: '5%', width: '100px', display: 'block', margin: '10px', cursor: 'pointer'}} to="/todo">Todo List</Link>
                <Link className="btn text-white" style={{backgroundColor: 'rgb(2, 2, 74)', border: 'none', padding: '5%', width: '100px', display: 'block', margin: '10px', cursor: 'pointer'}} to="/about">About</Link>
            </div>
            <img style={{ alignItems: "center", display: "block", margin: "auto" }}
                src="https://www.iconpacks.net/icons/2/free-check-mark-icon-3279-thumb.png" alt="logo" width="100px" />

        </footer>
    );
}

export default Footer;
