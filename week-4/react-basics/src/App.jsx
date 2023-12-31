

function App() {
  
  function todoList(title,description){
    const outerDiv = document.createElement('div')
    const titleDiv = document.createElement('h1');
    const descriptionDiv =  document.createElement('h3');

    titleDiv.innerHTML = `Title : ${title}`;
    descriptionDiv.innerHTML = `Desc : ${description}`;

    outerDiv.appendChild(titleDiv);
    outerDiv.appendChild(descriptionDiv)

    return outerDiv
  }

  function addTodo(){
    const todoTitle = document.getElementById('title').value;
    const todoDesc = document.getElementById('desc').value;
    const parent = todoList(todoTitle,todoDesc);
    document.getElementById('todos').appendChild(parent)
  }

  return (
    <>
    <input id="title" type="text" placeholder="Title" />
    <input  id='desc' type="text " placeholder="Description" />
    <button onClick={addTodo}>Submit</button>
    <div id='todos'>
        
    </div>
    </>
  )
}

export default App
