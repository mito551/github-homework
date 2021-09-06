const nameInput = document.querySelector('#formName')
const birthdayInput = document.querySelector('#formBirth')
const countryInput = document.querySelector('#formCountry')
const pizzaInput = document.querySelector('#formPizza')
const btn = document.querySelector('#submitForm')
const list = document.querySelector('#app')

class Person {
    constructor(nextID, newName, newAge, newCountry, newPizza) {
        this.id = nextID;
        this.name = newName;
        this.age = newAge
        this.country = newCountry;
        this.isPsychopath = newPizza;
        this.isDeleted = false;
    }
}

const peopleList = [{
    id: 0,
    name: "Test Subject",
    age: 29,
    country: "Germany",
    isPsychopath: "Personality: Normal Person",
    isDeleted: false
}];


let lastId = 0;

const renderTodo = () => {
    list.innerHTML = "";
    peopleList.forEach((person) => {
        const deleteButton = document.createElement('div');
        deleteButton.classList.add('deleteButton');
        deleteButton.innerText = "D"
        const editButton = document.createElement('div');
        editButton.classList.add('editButton');
        editButton.innerText = "E"

        const container = document.createElement('div');
        container.classList.add('wrapItUp')
        const personContainer = document.createElement('section');
        personContainer.classList.add("item")
        const personName = document.createElement('span');
        personName.innerText = "Name: " + person.name;
        const personAge = document.createElement('span');
        personAge.innerText = "Age: " + person.age;
        const personCountry = document.createElement('span');
        personCountry.innerText = "Living in: " + person.country;
        const personPizza = document.createElement('span');
        personPizza.innerText = person.isPsychopath ? "Personality: Normal Person" : "Personality: Obnoxious";
        deleteButton.id = `id_${person.id}`

        if (person.isDeleted) {
            container.classList.add('deleted')
        }

        container.appendChild(deleteButton);
        container.appendChild(editButton);
        personContainer.appendChild(personName);
        personContainer.appendChild(personAge);
        personContainer.appendChild(personCountry);
        personContainer.appendChild(personPizza);
        container.appendChild(personContainer);
        list.appendChild(container);

    })
}

renderTodo();

btn.addEventListener('click', (event) => {
    event.preventDefault();
    const newName = nameInput.value.trim();
    const newBirthday = new Date(birthdayInput.value);
    const newCountry = countryInput.value;
    const newPizza = pizzaInput.checked;
    if (newName === "") return;
    if (birthdayInput.value === "") return;
    const newPerson = new Person (++lastId, newName, 2021 - newBirthday.getUTCFullYear(), newCountry, newPizza)
    peopleList.push(newPerson);
    // console.log(peopleList)
    renderTodo();
    nameInput.value = "";
})

list.addEventListener('click', event => {
    const id = +event.target.id.split("_")[1]
    const deletion = peopleList.find(param => param.id === id)
    deletion.isDeleted = true;
    renderTodo();
    // event.target.classList.toggle(`text-decoration-line-through`)
})

//text-decoration-line-through