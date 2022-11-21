let employees = [];

let employees_list = [];

let employee_username = [
    "Guillaume Winshester",
    "Camelia",
    "DEX",
    "edno",
    "Kops",
    "laucl"
]

let employee_names = [
    "Guillaume Winshester",
    "Camelia G",
    "Dex Lightyear",
    "Ed' Know",

    "Danzo Delaveras",
    "Le Loup",
    "Diego",
    "Georges Lozano",
    "DJ Patate",
    "Dorès"
]

let employee_descriptions = [
    "Big entrepreneur",
    "Charbonneuse",
    "Real OG moulaga",
    "Edno multi-casquettes",

    "Le boug est sérieux",
    "Big W",
    "L'agent fou furieux",
    "Sorti de la jungle",
    "s/o la patate douce",
    "La douceur"
]

let employee_titles = [
    "Directeur",
    "Co-Directrice",
    "Agent de sécurité",
    "Co-Directeur, Rappeur, DJ",

    "Agent de Sécurité",
    "Rappeur",
    "Agent de sécurité",
    "Directeur artistique",
    "DJ",
    "Rappeur"
]

let employee_photos = [
    "https://edn0.github.io/TriadRecords/img/employees/guillaume.png",
    "https://edn0.github.io/TriadRecords/img/employees/camelia.jpg",
    "https://edn0.github.io/TriadRecords/img/employees/dex.png",
    "https://edn0.github.io/TriadRecords/img/employees/edno.jpg",

    "https://edn0.github.io/TriadRecords/img/employees/danzo.jpg",
    "https://edn0.github.io/TriadRecords/img/employees/leloup.jpg",
    "https://edn0.github.io/TriadRecords/img/employees/diego.jpg",
    "https://edn0.github.io/TriadRecords/img/employees/georges.PNG",
    "https://edn0.github.io/TriadRecords/img/employees/clement.PNG",
    "https://edn0.github.io/TriadRecords/img/employees/dores.PNG"


]

function use_json(jsondata) {
    console.log(jsondata);
    for (i in employee_username) {
        if (Object.values(jsondata)[i] == true) { // Object.values creates a list from the json string

            console.log(employee_names[i] + " is online.")

            document.getElementsByClassName("employee_photo")[i].style.border = "4px solid rgb(0, 100, 0)"; // update la bordure en vert pour indiquer que l'employé est en ligne
        }
    }

}

let employees_status = []

const employes_co = fetch("../proches.json")
  .then(response => {
  return response.json();
})
 .then(jsondata => use_json(jsondata));//employees_status.push(jsondata));


console.log(employees_status);


function display_employees() {

    for (let i in employee_names) {

        employees.push(new Employee(employee_names[i], employee_photos[i], employee_titles[i], employee_descriptions[i]));
        document.getElementsByClassName("employee_name")[i].innerHTML = employees[i].name;
        document.getElementsByClassName("employee_photo")[i].src = employees[i].photo;
        document.getElementsByClassName("employee_photo")[i].width = 260;
        document.getElementsByClassName("employee_title")[i].innerHTML = employees[i].title;
        document.getElementsByClassName("employee_description")[i].innerHTML = employees[i].description;


    }
}

console.log(employees_status[0]);

class Employee {
    constructor(name, photo, title, description, status) {
        this.name = name;
        this.photo = photo;
        this.title = title;
        this.description = description;
        this.status = status;
    }
}

display_employees();

