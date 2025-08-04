import React from 'react';
import '../components/Todo.css';
import styles from './App.module.scss';



function Todo() {
    function addTask() {
      const inputValue = document.getElementById("input").value;
      if (!inputValue.trim()) return;
  
      const div = document.createElement("div");
      div.textContent = inputValue;
      div.className = "taskItem";
  
      const closeButton = document.createElement("button");
      closeButton.textContent = "x";
      closeButton.className = "close";
      closeButton.onclick = () => div.remove();
  
      div.appendChild(closeButton);
      document.getElementById("taskList").appendChild(div);
      document.getElementById("input").value = "";
    }
  
    return (
      <div>
        {/*--------------------------------NAV------------------------------*
        <nav>
            <img
              src="https://www.iconpacks.net/icons/2/free-check-mark-icon-3279-thumb.png" alt="" width="30px"/>
            <Link className="buttons" to="/">Home</Link>
            <Link className="buttons" to="/todo">Todo</Link>
        </nav>


    <nav>
        <img src="https://www.iconpacks.net/icons/2/free-check-mark-icon-3279-thumb.png" alt="" width="30px"/>
        <Link className="buttons" to="/">Home</Link>
        <Link className="buttons" to="/todo">Todo</Link>
    </nav>


        {/*--------------------------------BODY------------------------------*/}

          <h1 style={{textAlign:"center"}} className="text">
            Your To-do list
          </h1>
          <div className="d-block text-center" style={{marginLeft: 'auto', marginRight: 'auto'}}>
            <p className="text-white " style={{fontSize: 'large', padding: '4%',textAlign: "center"}}>Enter your task here and add it:</p>
            <div>
              <input className='d-block' style={{border: 'none', padding: '1%', marginLeft: 'auto', marginRight: 'auto'}} type="text" id="input" placeholder="Enter task:" />
              <button onClick={addTask} className="btn text-white" style={{backgroundColor: 'red', border: 'none', padding: '1%', cursor: 'pointer'}}>Add</button>
            </div>
            <ul id="taskList"></ul>
          </div>
          {/*--------------------------------FOOTER------------------------------

          <footer>
            <div>
            <Link className="button2" to="/todo">Todo</Link>
            <Link className="button2" to="/">Home</Link>
            </div>
            <img style={{ alignItems: "center", display: "block", margin: "auto" }}src="https://www.iconpacks.net/icons/2/free-check-mark-icon-3279-thumb.png" alt="logo" width="100px"/>
          </footer>
  
*/}
      </div>
         );
        }

        export default Todo;
  
