let employees = [];

let employees_list = [];


let employee_names = [
    "Guillaume Winshester"
]

let employee_descriptions = [
    "Big entrepreneur"
]

let employee_titles = [
    "CEO"
]

let employee_photos = [
    "./img/employees/guillaume.jpg"
]

function display_employees() {

    for (let i in employee_names) {

        employees.push(new Employee(employee_names[i], employee_photos[i], employee_titles[i], employee_descriptions[i]));
        document.getElementsByClassName("employee_name")[i].innerHTML = employees[i].name;
        document.getElementsByClassName("employee_photo")[i].src = employees[i].photo;
        document.getElementsByClassName("employee_photo")[i].width = 240;
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