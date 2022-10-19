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


async function get_players() {
    
    let rep = await fetch("https://servers-frontend.fivem.net/api/servers/single/q8538p", {
        "credentials": "omit",
        "headers": {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:106.0) Gecko/20100101 Firefox/106.0",
            "Accept": "*/*",
            "Accept-Language": "fr,fr-FR;q=0.8,en-US;q=0.5,en;q=0.3",
            "Sec-Fetch-Dest": "empty",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Site": "cross-site"
        },
        "referrer": "https://shop.unityrp.io/",
        "method": "GET",
        "mode": "cors"
    });

    let data = await rep.json();
    console.table(data);
}


get_players();