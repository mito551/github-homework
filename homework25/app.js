const title = document.querySelector('title').innerText

console.log("We're working with", title)

switch (title){
    case "Company":
    {
        console.log("Company is open for business!")




    }
    break;
    case "Mounting":
    {
        console.log("Mounting the mountain expedition!")




    }
    break;
    case "Cards":
    {
        console.log("This house of cards is impressive!")




    }
    break;
    default:
    console.log("Unsupported page, stop.")
    break;
}