import { Link } from 'react-router-dom';
import React from "react";
import styles from './App.module.scss';



export default function Home() {
    const toDo = () => {
        window.location.href= '/todo';
      };
      const toAbout = () => {
        window.location.href= '/about';
      };

    return(
    <div  className={'m-0 p-0 d-block App ' + styles.body}>

<h2 className={'text-white p-3 text-center ' + styles.welcome}>
Welcome to your to-do list
</h2>

<div className="text-center text-white" style={{fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif", backgroundColor: 'rgb(49, 26, 16)', padding: '3%', margin: '3%',}}>
<h1>
  Helps with work, play, and everything in between.
</h1>
<p>
  We help you organize your day flawlessly - starting from $0 a month
</p>
<Link to="/todo">
<button className="btn text-white" style={{backgroundColor: 'black', borderColor: 'white', borderRadius: '10%', width: '90px', height: '30px', fontWeight: 'bolder', margin: '1%', cursor: 'pointer',}}>Get started</button>
</Link>
<Link to="/about">
<button className="btn text-black" style={{backgroundColor: 'white', borderColor: 'white', borderRadius: '10%', width: '90px', height: '30px', fontWeight: 'bolder', margin: '1%', cursor: 'pointer',}}>About</button>
</Link >
</div>
<div className="d-flex p-3" >
<img src="https://www.amitree.com/wp-content/uploads/2021/08/the-pros-and-cons-of-paper-to-do-lists.jpeg" alt="" width="500px"/>

<p className="text-white" style={{fontSize: 'large', padding: '4%'}}>
  Create a todo list as simple as you need. It is one of the best tools if you want to actually do something useful - scientifically proven! (i think)
</p>

</div>
<div className="p-10 mr-4">
    <h3 >
        "With [To-do list], people aren't as lost anymore. They don’t need to ask, ‘Is this happening on Tuesday?’ If plans change quickly, the team is aware and it’s clearly documented. You don't have to wait until a meeting, a chat. You see everything in one place."
    </h3>
    <p>
    - Someone who likes a to-do list website
    </p>
</div> 


<h5 className="text-white" style={{fontSize: 'large', padding: '4%',textAlign: "center"}}>
  Use your to-do list today!
  </h5>
</div>
    )
}

