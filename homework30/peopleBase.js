const nameInput = document.querySelector('#formName')
const birthdayInput = document.querySelector('#formBirth')
const countryInput = document.querySelector('#formCountry')
const pizzaInput = document.querySelector('#formPizza')
const btn = document.querySelector('#submitForm')
const list = document.querySelector('#app')
let lastId = 0;

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

function renderForm(container, person, editingObject){
    const confirmButton = document.createElement('div');
    confirmButton.classList.add('confirmButton');
    confirmButton.innerText = "✓"
    confirmButton.id = `id_${person.id}`

    const editingContainer = document.createElement('section');
    editingContainer.classList.add("item")

    const personNameLabel = document.createElement('label');
    personNameLabel.innerText = "New Name:";
    const personName = document.createElement('input');
    personName.setAttribute("type", "text")
    personName.setAttribute("value", editingObject.name)

    const personAgeLabel = document.createElement('label');
    personAgeLabel.innerText = "New Birthday:";
    const personAge = document.createElement('input');
    personAge.setAttribute("type", "date")

    const personCountryLabel = document.createElement('label');
    personCountryLabel.innerText = "New Country:";
    const personCountry = document.createElement('select');
    const personCountryGermany = document.createElement('option');
    personCountryGermany.setAttribute("value", "Germany")
    personCountryGermany.innerText = "Germany"
    const personCountryOther = document.createElement('option');
    personCountryOther.setAttribute("value", "Other")
    personCountryOther.innerText = "Other"
    personCountry.appendChild(personCountryGermany)
    personCountry.appendChild(personCountryOther)

    const personPizzaLabel = document.createElement('label');
    personPizzaLabel.innerText = "New Pizza Preference:";
    const personPizza = document.createElement('input');
    personPizza.setAttribute("type", "checkbox")
    personPizza.checked = person.isPsychopath

    container.appendChild(confirmButton);
    editingContainer.appendChild(personNameLabel);
    editingContainer.appendChild(personName);
    editingContainer.appendChild(personAgeLabel);
    editingContainer.appendChild(personAge);
    editingContainer.appendChild(personCountryLabel);
    editingContainer.appendChild(personCountry);
    editingContainer.appendChild(personPizzaLabel);
    editingContainer.appendChild(personPizza);
    container.appendChild(editingContainer);
    confirmButtonActivate(confirmButton, editingContainer, editingObject, personName, personAge, personCountry, personPizza);
}

const deleteButtonActivate = (deleteBtn) => {
    deleteBtn.addEventListener('click', event => {
        const id = +event.target.id.split("_")[1]
        const deletion = peopleList.find(param => param.id === id)
        deletion.isDeleted = true;
        renderTodo();
    })
}

const editButtonActivate = (editBtn, personContainer, container, person) => {
    editBtn.addEventListener('click', event => {
        const id = +event.target.id.split("_")[1]
        const editingObject = peopleList.find(param => param.id === id)
        personContainer.classList.add('deleted')
        editBtn.classList.add('deleted')

        renderForm(container, person, editingObject)
    })
}

const confirmButtonActivate = (confirmBtn, editingContainer, editingObject, personName, personAge, personCountry, personPizza) => {
    confirmBtn.addEventListener('click', event => {
        const newName = personName.value.trim();
        const newBirthday = new Date(personAge.value);
        const newCountry = personCountry.value;
        const newPizza = personPizza.checked;
        if (newName === "") return;
        if (newBirthday.value === "") return;
        editingContainer.classList.remove('deleted')
        editingObject.name = newName
        editingObject.age = 2021 - newBirthday.getUTCFullYear()
        editingObject.country = newCountry
        editingObject.isPsychopath = newPizza
        renderTodo();
    })
}

const renderTodo = () => {
    list.innerHTML = "";
    peopleList.forEach((person) => {

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
        const deleteButton = document.createElement('div');
        deleteButton.classList.add('deleteButton');
        deleteButton.innerText = "D"
        deleteButton.id = `id_${person.id}`
        const editButton = document.createElement('div');
        editButton.classList.add('editButton');
        editButton.innerText = "E"
        editButton.id = `id_${person.id}`

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

        deleteButtonActivate(deleteButton);
        editButtonActivate(editButton, personContainer, container, person);

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



//text-decoration-line-through