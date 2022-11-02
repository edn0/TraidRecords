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
create_events(

    "Samedi 12 Novembre 19:00 - 1:00",
    "Observatoire",
    "Event Triad", "../img/bg.jpg",
    "DJ Patate Douce, Edno, Polaire & more",
    "Tombola, venez prendre vos tickets au Triad. Un véhicule mystère à gagner !"
      );



display_events();

