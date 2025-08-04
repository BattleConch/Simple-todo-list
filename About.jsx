import styles from './App.module.scss';
import React from "react";



function About() {
  return ( 
<div>
        {/*--------------------------------NAV------------------------------*/}

        {/*--------------------------------BODY------------------------------*/}

    <h1 className='abouttxt'>Why are todo lists so useful?</h1>
   <div className='d-flex text-white m-3 p-5, text-center text-warning-emphasis' style={{fontFamily:'Segoe UI', Tahoma, Geneva, Verdana, sanSerif}}>
     <p>There are many studies that show that todo lists are quite useful. The best most reliable source in the internet - r/productivity - says, "It keeps your day as full as you can and let you avoid slacking when you see you still have lots of things in your to-do list"
    </p>
    <img src="https://media.npr.org/assets/img/2022/12/22/lk_harlan_to-do-list_final_slide-3afb79b27d7f583bc41eb4f3ba1c50c9d17877ae.jpg" alt="" width="300px"/>
    </div>
        {/*--------------------------------Footer------------------------------
        <footer>
            <div>
            <Link className="button2" to="/todo">Todo List</Link>
            <Link className="button2" to="/">Home</Link>
            </div>
            <img style={{ alignItems: "center", display: "block", margin: "auto" }}src="https://www.iconpacks.net/icons/2/free-check-mark-icon-3279-thumb.png" alt="logo" width="100px"/>
          </footer>
  */}


</div>
    );
  }

export default About;


