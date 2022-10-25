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

    "Samedi 29 Octobre 2022",
    "Amphithéâtre",
    "Concert Triad", "../img/concert_amphi.jpg",
    "Polaire, Edno & more",
    "Premier concert à l'amphi depuis la reformation du Triad"
      );


create_events(

    "Dimanche 30 Octobre 2022 21:00",
    "Triad Records",
    "Concert Triad", "../img/bg.jpg",
    "Toute l'équipe du Triad",
    "Concert tranquille après le gros concert de l'amphi"
        );

display_events();