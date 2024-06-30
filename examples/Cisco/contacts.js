////////////This program was created to be able to run it locally changing prompt alert for readlineSync, obviuly we hasd to install the pacckage first. npm install readline-sync


const readlineSync = require('readline-sync');

let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
}, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
}];

console.log("Welcome to the contacts database");
let validator = true;
while (validator) {
    let selection = readlineSync.question("Please choose what you want to do: \n display the first contact (first) \n display the last contact (last) \n display all contacts (all) \n add a new contact (new) \n exit the program (quit)\n");
    
    switch (selection) {
        case "first": 
            console.log(`Name: ${contacts[0].name}, Phone: ${contacts[0].phone}, Email: ${contacts[0].email}`); 
            break;
        
        case "last": 
            console.log(`Name: ${contacts[contacts.length - 1].name}, Phone: ${contacts[contacts.length - 1].phone}, Email: ${contacts[contacts.length - 1].email}`); 
            break;
        
        case "new": 
            let new_user = {};
            new_user.name = readlineSync.question("Name of the contact: ");
            new_user.phone = readlineSync.question("Phone of the contact: ");
            new_user.email = readlineSync.question("Email of the contact: ");
            console.log(new_user);

            let green_flag_to_add = false;
            if (new_user.name === "" || new_user.phone === "" || new_user.email === "") {
                console.log("One of the values is missing");
            } else {
                green_flag_to_add = true;
            }

            if (green_flag_to_add) {
                contacts.push(new_user);
                console.log("Contact successfully added");
            } else {
                console.log("The user was not added");
            }
            break;
        
        case "quit": 
            validator = false; 
            break; 
        
        case "all": 
            for (let contact of contacts) {
                console.log(`Name: ${contact.name} / Phone: ${contact.phone} / Email: ${contact.email}`);
            }
            break;
        
        default:
            console.log("Not a valid option");
    }
    // console.log(contacts);
}
