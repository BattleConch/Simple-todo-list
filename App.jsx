import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Todo from './pages/Todo';
import About from './pages/About';
import Navigation from './components/Navigation';
import Home from './pages/Home';

function App() {
  return (
<BrowserRouter>
<Routes>
  <Route path="/" element={<Navigation />}>
  <Route index element={<Home />} />
  <Route path="todo" element={<Todo />} />
  <Route path="about" element={<About />} />
  </Route>
</Routes>

      </BrowserRouter>
 
  );
}
export default App;



{/*}



      <div className="App">
{/* ----------------------NAV---------------------------- *
<nav>
<img src="https://www.iconpacks.net/icons/2/free-check-mark-icon-3279-thumb.png" alt="" width="30px"/>
<Link className="buttons" to="/App">Home</Link>
<Link className="buttons" to="/Todo">Todo</Link>
</nav>
{/*!----------------------BODY----------------------------->*

<h2 className="text" style={{textAlign: "center"}}>
Welcome to your to-do list
</h2>

<div className="d-main">
<h1>
  Helps with work, play, and everything in between.
</h1>
<p>
  We help you organize your day flawlessly - starting from $0 a month
</p>
<button onClick={toDo()} className="buttons-main1">Get started</button>
<button onclick={toAbout()} className="buttons-main2">About</button>
</div>
<div className="d-second">
<img src="https://www.amitree.com/wp-content/uploads/2021/08/the-pros-and-cons-of-paper-to-do-lists.jpeg" alt="" width="500px"/>

<p className="text">
  Create a todo list as simple as you need. It is one of the best tools if you want to actually do something useful - scientifically proven! (i think)
</p>

</div>
<div className="d-third">
<h3 >
  "With [To-do list], people aren't as lost anymore. They don’t need to ask, ‘Is this happening on Tuesday?’ If plans change quickly, the team is aware and it’s clearly documented. You don't have to wait until a meeting, a chat. You see everything in one place."
</h3>
<p>
  - Someone who likes a to-do list website
</p>
</div>


<h5 style="text-align: center;" className="text">Use your to-do list today!</h5>

{/*<!--------------------------FOOTER------------------------->*

<footer>
<div>
<Link className="button2" to="/todo">Todo</Link>
<Link className="button2" to="/about">About</Link>
</div>
<img style={{alignItems: "center", display: "block", margin: "auto"}}
src="https://www.iconpacks.net/icons/2/free-check-mark-icon-3279-thumb.png" alt="logo" width="100px"/>

</footer>
</div>


<script>
    function toDo() {
      window.location.href = 'todoList.html';
    }
    function about() {
      window.location.href = 'About.html';
    }
    function home() {
        window.location.href = 'index.html';
    }
    function addTask(){
        var div = document.createElement("div")
        var inputValue = document.getElementById("input").value;
        var txtList = document.createTextNode(inputValue);
        div.appendChild(txtList);
        div.className="taskItem";
        var closeButton = document.createElement("button");
        closeButton.textContent = "x";
        closeButton.onclick = function() {
            div.remove();
        };
        div.appendChild(closeButton);
        closeButton.className="close";
        var ul = document.getElementById("taskList");
        ul.appendChild(div);
        document.getElementById("input").value = "";
    }

<Routes>
<Route path="/home" element={<Home />} />
<Route path="/todo" element={<div>Todo Page</div>} />
<Route path="/about" element={<div>About Page</div>} />
<Route path="/" element={<div>Home Page</div>} />
</Routes> 


 


<Link className="buttons" to="/home">Home</Link>
<Link className="buttons" to="/todo">Todo</Link>
<Link className="buttons" to="/about">About</Link>


<Routes>
<Route path="/home" element={<Home />} />
<Route path="/todo" element={<div>Todo Page</div>} />
<Route path="/about" element={<div>About Page</div>} />
<Route path="/" element={<div>Home Page</div>} />
</Routes> */}
