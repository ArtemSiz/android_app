/**
 * Created by Артем on 05.12.2016.
 */
// var icons = {
//   hospital: {
//       icon: "img/hospital.png"
//   },
//     clinic: {
//       icon: "img/clinic.png"
//     },
//     psyHospital: "img/therapy.png"
//
// };
var markerGroups = {
    "hospital": [],
    "clinic": [],
    "psyHospital": []
};

var clinic, hospital, psyHospital;
var clinicArr = [];
var hospitalArr = [];
var psyArr = [];
function initMap() {
    var centerMap = {lat: 49.6068, lng: 34.5480};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 6,
        center: centerMap
    });

    clinic = function () {


        var pos = {
            lat: 50.431403,
            lng: 33.167882
        };
        var markerClinic = new google.maps.Marker({
            position: pos,
            map: map,
            icon: "img/clinic.png"
        });
        clinicArr.push(markerClinic);
//****************************************************
        pos = {
            lat: 50.983668,
            lng: 31.152127
        };
        markerClinic = new google.maps.Marker({
            position: pos,
            map: map,
            icon: "img/clinic.png"
        });
        clinicArr.push(markerClinic);
    };
    hospital =  function () {


        var pos = {
            lat: 49.665129,
            lng: 30.690702
        };
        var markerHospital = new google.maps.Marker({
            position: pos,
            map: map,
            icon: "img/hospital.png"
        });
        hospitalArr.push(markerHospital);
//****************************************************
        pos = {
            lat: 48.775368,
            lng: 33.107694
        };
        markerHospital = new google.maps.Marker({
            position: pos,
            map: map,
            icon: "img/hospital.png"
        });
        hospitalArr.push(markerHospital);
    };
    psyHospital = function() {


        var pos = {
            lat: 50.817379,
            lng: 28.032010
        };
        var markerPsy = new google.maps.Marker({
            position: pos,
            map: map,
            icon: "img/therapy.png"
        });
        psyArr.push(markerPsy);
//****************************************************
        pos = {
            lat: 49.250945,
            lng: 29.196561
        };
        markerPsy = new google.maps.Marker({
            position: pos,
            map: map,
            icon: "img/therapy.png"
        });
        psyArr.push(markerPsy);
    };

    clinic();
    hospital();
    psyHospital();
}


function removeClinic() {
    for (var i = 0; i < clinicArr.length; i++) {
        clinicArr[i].setMap(null);
    }
}
function removeHospital() {
    for (var i = 0; i < hospitalArr.length; i++) {
        hospitalArr[i].setMap(null);
    }
}
function removePsy() {
    for (var i = 0; i < psyArr.length; i++) {
        psyArr[i].setMap(null);
    }
}

function delClinic() {
    var checkbox = document.getElementById('checkbox1');
    if (!checkbox.checked) {
        removeClinic();
    } else {
        clinic();
    }
}
//Появление контроллера***************************************************
// var mark = document.getElementsByClassName("book")[0];
// function see () {
//     var look = document.getElementsByClassName("markerController")[0];
//     // look.style.display = "block";
//     look.classList.toggle("newBook");
// }
// mark.addEventListener("click", see);
function ok() {
    var look = document.getElementsByClassName("markerController")[0];
    look.classList.toggle("newBook")
}


// var mark2 = document.getElementsByClassName("newBook");
// function see2 () {
//     var look = document.getElementsByClassName("markerController")[0];
//     look.style.display = "none";
//     mark.className = "book";
// }
// mark2.addEventListener("click", see2);


function seeMarkers() {
    var marker = document.getElementsByClassName("layers-controller")[0];
    marker.style.display = "flex";
    var legend = document.getElementsByClassName("legend-box")[0];
    legend.style.display = "none";
    var colLayer = document.getElementsByClassName("chose-layer")[0];
    colLayer.style.color = "#ffffff";
    var colLegend = document.getElementsByClassName("chose-legend")[0];
    colLegend.style.color = "#000";
}

function seeLegend() {
    var marker = document.getElementsByClassName("layers-controller")[0];
    marker.style.display = "none";
    var legend = document.getElementsByClassName("legend-box")[0];
    legend.style.display = "flex";
    var colLayer = document.getElementsByClassName("chose-layer")[0];
    colLayer.style.color = "#000";
    var colLegend = document.getElementsByClassName("chose-legend")[0];
    colLegend.style.color = "#ffffff";
}