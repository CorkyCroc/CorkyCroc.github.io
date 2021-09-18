let data = [{
        name: "2020 World Champs Gaming Warzone",
        username: "Nguyen Cuong",
        usertype: "Call of Duty",
        watching: "3.6K",
        userimg: "https://ui8-unity-gaming.herokuapp.com/img/ava-1.png",
        img: "https://ui8-unity-gaming.herokuapp.com/img/card-pic-1.png",
    },
    {
        name: "Team Flash vs. Saigon phantom",
        username: "Thanh Nguyen",
        usertype: "Garena Free Fire",
        watching: "9.6K",
        userimg: "https://ui8-unity-gaming.herokuapp.com/img/ava-2.png",
        img: "https://ui8-unity-gaming.herokuapp.com/img/card-pic-2.png",
    },
    {
        name: "2020 World Champs Gaming Warzone",
        username: "Nguyen Cuong",
        usertype: "Call of Duty",
        watching: "6.6K",
        userimg: "https://ui8-unity-gaming.herokuapp.com/img/ava-3.png",
        img: "https://ui8-unity-gaming.herokuapp.com/img/card-pic-3.png",
    },
    {
        name: "2020 World Champs Gaming Warzone",
        username: "Nguyen Cuong",
        usertype: "Game of Valor",
        watching: "2.6K",
        userimg: "https://ui8-unity-gaming.herokuapp.com/img/ava-4.png",
        img: "https://ui8-unity-gaming.herokuapp.com/img/card-pic-4.png",
    },
    {
        name: "2020 World Champs Gaming Warzone",
        username: "Nguyen Cuong",
        usertype: "Call of Duty",
        watching: "3.6K",
        userimg: "https://ui8-unity-gaming.herokuapp.com/img/ava-1.png",
        img: "https://ui8-unity-gaming.herokuapp.com/img/card-pic-1.png",
    },
    {
        name: "Team Flash vs. Saigon phantom",
        username: "Thanh Nguyen",
        usertype: "Garena Free Fire",
        watching: "9.6K",
        userimg: "https://ui8-unity-gaming.herokuapp.com/img/ava-2.png",
        img: "https://ui8-unity-gaming.herokuapp.com/img/card-pic-2.png",
    },
    {
        name: "2020 World Champs Gaming Warzone",
        username: "Nguyen Cuong",
        usertype: "Call of Duty",
        watching: "6.6K",
        userimg: "https://ui8-unity-gaming.herokuapp.com/img/ava-3.png",
        img: "https://ui8-unity-gaming.herokuapp.com/img/card-pic-3.png",
    },
    {
        name: "2020 World Champs Gaming Warzone",
        username: "Nguyen Cuong",
        usertype: "Game of Valor",
        watching: "2.6K",
        userimg: "https://ui8-unity-gaming.herokuapp.com/img/ava-4.png",
        img: "https://ui8-unity-gaming.herokuapp.com/img/card-pic-4.png",
    },
    {
        name: "2020 World Champs Gaming Warzone",
        username: "Nguyen Cuong",
        usertype: "Call of Duty",
        watching: "3.6K",
        userimg: "https://ui8-unity-gaming.herokuapp.com/img/ava-1.png",
        img: "https://ui8-unity-gaming.herokuapp.com/img/card-pic-1.png",
    },
    {
        name: "Team Flash vs. Saigon phantom",
        username: "Thanh Nguyen",
        usertype: "Garena Free Fire",
        watching: "9.6K",
        userimg: "https://ui8-unity-gaming.herokuapp.com/img/ava-2.png",
        img: "https://ui8-unity-gaming.herokuapp.com/img/card-pic-2.png",
    },
    {
        name: "2020 World Champs Gaming Warzone",
        username: "Nguyen Cuong",
        usertype: "Call of Duty",
        watching: "6.6K",
        userimg: "https://ui8-unity-gaming.herokuapp.com/img/ava-3.png",
        img: "https://ui8-unity-gaming.herokuapp.com/img/card-pic-3.png",
    },
    {
        name: "2020 World Champs Gaming Warzone",
        username: "Nguyen Cuong",
        usertype: "Game of Valor",
        watching: "2.6K",
        userimg: "https://ui8-unity-gaming.herokuapp.com/img/ava-4.png",
        img: "https://ui8-unity-gaming.herokuapp.com/img/card-pic-4.png",
    },
    {
        name: "2020 World Champs Gaming Warzone",
        username: "Nguyen Cuong",
        usertype: "Call of Duty",
        watching: "3.6K",
        userimg: "https://ui8-unity-gaming.herokuapp.com/img/ava-1.png",
        img: "https://ui8-unity-gaming.herokuapp.com/img/card-pic-1.png",
    },
    {
        name: "Team Flash vs. Saigon phantom",
        username: "Thanh Nguyen",
        usertype: "Garena Free Fire",
        watching: "9.6K",
        userimg: "https://ui8-unity-gaming.herokuapp.com/img/ava-2.png",
        img: "https://ui8-unity-gaming.herokuapp.com/img/card-pic-2.png",
    },
    {
        name: "2020 World Champs Gaming Warzone",
        username: "Nguyen Cuong",
        usertype: "Call of Duty",
        watching: "6.6K",
        userimg: "https://ui8-unity-gaming.herokuapp.com/img/ava-3.png",
        img: "https://ui8-unity-gaming.herokuapp.com/img/card-pic-3.png",
    },
    {
        name: "2020 World Champs Gaming Warzone",
        username: "Nguyen Cuong",
        usertype: "Game of Valor",
        watching: "2.6K",
        userimg: "https://ui8-unity-gaming.herokuapp.com/img/ava-4.png",
        img: "https://ui8-unity-gaming.herokuapp.com/img/card-pic-4.png",
    },
];

let card_container = document.querySelector(".cart_wrapper")

for (let i = 0; i < data.length; i++) {
    let html = `<div class="cart">
    <div style="background-image: url('${data[i].img}')" id="ava"></div>
    <div class="cart_content">
        <p id="name">${data[i].name}</p>
        <div class="user">
            <img src="${data[i].userimg}" alt="">
            <div class="name">
                <p>${data[i].username} <i class="fad fa-check-circle"></i></p>
                <p>${data[i].usertype}</p>
            </div>
        </div>
        <hr>
        <div class="info">
            <div class="live"><i class="fas fa-wifi"></i> <span> Live</span></div>
            <div class="watching">
                <div class="dot"></div>
                <span>${data[i].watching} watching</span>
            </div>
        </div>
    </div>
    </div>
    `

    card_container.innerHTML += html

}
