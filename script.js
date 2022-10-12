let events = [];

class Event {
    constructor (date, localisation, title, photo, artists, details) {
        this.date = date;
        this.localisation = localisation;
        this.title = title;
        this.photo = photo;
        this.artists = artists;
        this.details = details;
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

function create_events(date, localisation, title, photo, artists, details) {

    let e = new Event(
        date,
        localisation,
        title,
        photo,
        artists,
        details
    )

    events.push(e);

}

function display_events() {

    for (i in events) {

        document.getElementsByClassName("event_date")[i].innerHTML = events[i].date;
        document.getElementsByClassName("event_localisation")[i].innerHTML = events[i].localisation;
        document.getElementsByClassName("event_title")[i].innerHTML = events[i].title;
        document.getElementsByClassName("event_photo")[i].src = events[i].photo;
        document.getElementsByClassName("event_photo")[i].width = 480;
        document.getElementsByClassName("event_artists")[i].innerHTML = events[i].artists;
        document.getElementsByClassName("event_details")[i].innerHTML = events[i].details;

    }
}

function display_employees() {
    document.getElementsByClassName("employee_name")[i].innerHTML = employees[i].name;
    document.getElementsByClassName("employee_photo")[i].src = employees[i].photo;
    document.getElementsByClassName("employee_photo")[i].width = 480;
    document.getElementsByClassName("employee_title")[i].innerHTML = employees[i].title;
    document.getElementsByClassName("employee_description")[i].innerHTML = events[i].description;

}

create_events("Dimanche 16 Octobre 2022", "Triad Records", "Concert Triad", "../img/bg.jpg", "Polaire, Edno & more","Premier concert au Triad depuis la réouverture. Les anciens du Triad et les nouvelles têtes vont tout retourner ce soir dans la salle de concert du Triad.");





display_events();