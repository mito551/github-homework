const nameInput = document.querySelector('#formName')
const birthdayInput = document.querySelector('#formBirth')
const countryInput = document.querySelector('#formCountry')
const pizzaInput = document.querySelector('#formPizza')
const btn = document.querySelector('#submitForm')
const list = document.querySelector('#app')

const peopleList = [];

let lastId = 0;

const renderTodo = () => {
    list.innerHTML = "";
    peopleList.forEach((person) => {
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
        personContainer.appendChild(personName);
        personContainer.appendChild(personAge);
        personContainer.appendChild(personCountry);
        personContainer.appendChild(personPizza);
        list.appendChild(personContainer);

    })
}

btn.addEventListener('click', (event) => {
    event.preventDefault();
    const newName = nameInput.value.trim();
    const newBirthday = new Date(birthdayInput.value);
    const newCountry = countryInput.value;
    const newPizza = pizzaInput.checked;
    if (newName === "") return;
    if (birthdayInput.value === "") return;
    const newPerson = {
        id: ++lastId,
        name: newName,
        age: 2021 - newBirthday.getUTCFullYear(),
        country: newCountry,
        isPsychopath: newPizza
    };
    peopleList.push(newPerson);
    // console.log(peopleList)
    renderTodo();
    nameInput.value = "";
})

//text-decoration-line-through