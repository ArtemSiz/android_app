/**
 * Created by Артем on 05.12.2016.
 */

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
//******************************************
    var posMark = {
        clinicMark: {
            pos1: {
                lat: 50.431403,
                lng: 33.167882
            },
            pos2: {
                lat: 50.983668,
                lng: 31.152127
            }
        },
        hospitalMark: {
            pos1: {
                lat: 49.665129,
                lng: 30.690702
            },
            pos2: {
                lat: 48.775368,
                lng: 33.107694
            }
        },
        psyMark: {
            pos1: {
                lat: 50.817379,
                lng: 28.032010
            },
            pos2: {
                lat: 49.250945,
                lng: 29.196561
            }
        }
    };
//     var posMark = [[[50.431403, 33.167882], [50.983668, 31.152127]],
//         [[49.665129, 30.690702], [48.775368, 33.107694]],
//         [[50.817379, 28.032010], [49.250945, 29.196561]]];

    clinic = function () {

        var markerClinic = new google.maps.Marker({
            position: posMark.clinicMark.pos1,
            map: map,
            icon: "img/clinic.png"
        });
        clinicArr.push(markerClinic);
//****************************************************

        markerClinic = new google.maps.Marker({
            position: posMark.clinicMark.pos2,
            map: map,
            icon: "img/clinic.png"
        });
        clinicArr.push(markerClinic);
    };
    hospital =  function () {

        var markerHospital = new google.maps.Marker({
            position: posMark.hospitalMark.pos1,
            map: map,
            icon: "img/hospital.png"
        });
        hospitalArr.push(markerHospital);
//****************************************************
        markerHospital = new google.maps.Marker({
            position: posMark.hospitalMark.pos2,
            map: map,
            icon: "img/hospital.png"
        });
        hospitalArr.push(markerHospital);
    };
    psyHospital = function() {

        var markerPsy = new google.maps.Marker({
            position: posMark.psyMark.pos1,
            map: map,
            icon: "img/therapy.png"
        });
        psyArr.push(markerPsy);
//****************************************************
        markerPsy = new google.maps.Marker({
            position: posMark.psyMark.pos2,
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

function ok() {
    var look = document.getElementsByClassName("markerController")[0];
    look.classList.toggle("newBook")
}
//====================================================================================
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