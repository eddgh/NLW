// tipos de dados
// String ""
// Number 01
// Object {}
// Boolean true or false
// Array []

// create map 
const map = L.map('mapid').setView([-22.817391, -42.9952261], 15)

// create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
).addTo(map)

// create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})


// create popup overlay
const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
}).setContent('Movimento Pró-Criança <a href="orphanage.html?id=1" class="choose-orphanage"> <img src="./public/images/arrow-white.svg"></a>')


// create and add marker
L
.marker([-22.817391, -42.9952261], { icon })
.addTo(map)
.bindPopup(popup)