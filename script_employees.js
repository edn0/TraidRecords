let employees = [];

let employees_list = [];

let employee_username = [
    "Guillaume Winshester",
    "Camelia",
    "DEX",
    "edno",
    "Georges Lozano",
    "[Sécurité Triad Records] Kenzy",
    "Evan Balaz"
]

let employee_names = [
    "Guillaume Winshester",
    "Camelia G",
    "Dex Lightyear",
    "Ed' Know",
    "Georges Lozano",
    "Kenzy Parker",
    "Evan Balaz",
    "Danzo Delaveras",
    "Le Loup",
    "Diego",
    "DJ Patate",
    "Dorès"
]

let employee_descriptions = [
    "Big entrepreneur",
    "Charbonneuse",
    "Real OG moulaga",
    "Edno multi-casquettes",
    "Sorti de la jungle",
    "La deter",
    "Le meilleur secrétaire",
    "Le boug est sérieux",
    "Big W",
    "L'agent fou furieux",
    "s/o la patate douce",
    "La douceur"
]

let employee_titles = [
    "Directeur",
    "Co-Directrice",
    "Agent de sécurité",
    "Co-Directeur, Rappeur, DJ",
    "Directeur artistique",
    "Agent de sécurité",
    "Secrétaire, DJ, Food-Trucker",
    "Agent de sécurité",
    "Rappeur",
    "Agent de sécurité",
    "DJ",
    "Rappeur"
]

let employee_photos = [
    "https://edn0.github.io/TriadRecords/img/employees/guillaume.png",
    "https://edn0.github.io/TriadRecords/img/employees/camelia.jpg",
    "https://edn0.github.io/TriadRecords/img/employees/dex.png",
    "https://edn0.github.io/TriadRecords/img/employees/edno.jpg",
    "https://edn0.github.io/TriadRecords/img/employees/georges.PNG",
    "https://edn0.github.io/TriadRecords/img/employees/kenzy.PNG",
    "https://edn0.github.io/TriadRecords/img/employees/evan.png",
    "https://edn0.github.io/TriadRecords/img/employees/danzo.jpg",
    "https://edn0.github.io/TriadRecords/img/employees/leloup.jpg",
    "https://edn0.github.io/TriadRecords/img/employees/diego.jpg",
    "https://edn0.github.io/TriadRecords/img/employees/clement.PNG",
    "https://edn0.github.io/TriadRecords/img/employees/dores.PNG"


]

function check_employee_status(jsondata) {

    for (i in employee_username) {

        // Object.values creates a list from the json string
        if (Object.values(jsondata)[i] == true) { 

            console.log(employee_names[i] + " is online.")
            employees[i].status = true;

            
        }

        if (employees[i].status == true) {
            document.getElementsByClassName("employee_frame")[i].classList.add("employee_online");
        }

    }


}

let employees_status = []

const employes_co = fetch("https://edn0.github.io/TriadRecords/proches.json")
  .then(response => {
  return response.json();
})
 .then(jsondata => check_employee_status(jsondata));




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

