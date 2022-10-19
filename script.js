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

    "Jeudi 20 Octobre 2022 21:00",
    "Triad Records",
    "Concert Triad", "../img/bg.jpg",
    "Polaire, Edno, Le Loup & DJ sets",
    "Concert tranquille avant le bordel ce week-end"
      );


create_events(

    "Vendredi 21 Octobre 2022 21:00",
    "Triad Records",
    "Concert Triad", "../img/bg.jpg",
    "Polaire, Edno, Le Loup & DJ sets",
    "Concert tranquille avant le bordel ce week-end"
        );

display_events();

