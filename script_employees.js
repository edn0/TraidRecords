let employees = [];

let employees_list = [];


let employee_names = [
    "Guillaume Winshester",
    "Camelia G",
    "Evan",
    "Edouard Know",
//    "Curtis Jackson",
    "Hichem",
    "Danzo Delaveras",
    "Polaire",
    "Le Loup",
    "Diego"
]

let employee_descriptions = [
    "Big entrepreneur",
    "Charbonneuse",
    "Scrappy",
    "Edno multi-casquettes",
//    "Big Curtis dans cette shit",
    "Grosse voix gros bras",
    "Le boug est sérieux",
    "Légendaire",
    "Big W",
    "L'agent fou furieux"
]

let employee_titles = [
    "Directeur",
    "Co-Directrice",
    "Rappeur",
    "Rappeur",
//    "Chef Sécurité",
    "Chef de la sécurité",
    "Agent de Sécurité",
    "Chanteur & DJ",
    "Rappeur",
    "Agent de sécurité"
]

let employee_photos = [
    "https://edn0.github.io/TriadRecords/img/employees/guillaume.png",
    "https://edn0.github.io/TriadRecords/img/employees/camelia.jpg",
    "https://edn0.github.io/TriadRecords/img/employees/evan.jpg",
    "https://edn0.github.io/TriadRecords/img/employees/edno.jpg",
//    "https://edn0.github.io/TriadRecords/img/employees/curtis.png",
    "https://edn0.github.io/TriadRecords/img/employees/hichem.jpg",
    "https://edn0.github.io/TriadRecords/img/employees/danzo.jpg",
    "https://edn0.github.io/TriadRecords/img/employees/polaire.PNG",
    "https://edn0.github.io/TriadRecords/img/employees/leloup.jpg",
    "https://edn0.github.io/TriadRecords/img/employees/diego.jpg"


]

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
    constructor(name, photo, title, description) {
        this.name = name;
        this.photo = photo;
        this.title = title;
        this.description = description;
    }
}

display_employees();