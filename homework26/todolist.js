const field = document.querySelector('#todo')
const btn = document.querySelector('#addTodo')
const list = document.querySelector('#app')

const todoList = [];

let lastId = 0;

const renderTodo = () => {
    list.innerHTML = "";
    todoList.forEach((todo) =>{
        const listElement = document.createElement('li');
        listElement.innerText = todo.title;
        list.appendChild(listElement);
    })
}

btn.addEventListener('click', (event) => {
    event.preventDefault();
    const newText = field.value.trim();
    if (newText === "") return;
    const newItem = {
        id: ++lastId,
        title: newText,
        isCompleted: false
    };
    todoList.push(newItem);
    renderTodo();
    field.value = "";
})

list.addEventListener('click', event => {
    const completion = todoList.find(param => param.title === event.target.textContent)
    completion.isCompleted = !completion.isCompleted;
    event.target.classList.toggle(`text-decoration-line-through`)
})

//text-decoration-line-through