/**
 * Created by Артем on 05.12.2016.
 */


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
    var posImgMark = {
        clinicMark: [
            {
                lat: 50.431403,
                lng: 33.167882
            },
            {
                lat: 50.983668,
                lng: 31.152127
            },
            {
                img: "img/clinic.png"
            }
        ],
        hospitalMark: [
            {
                lat: 49.665129,
                lng: 30.690702
            },
            {
                lat: 48.775368,
                lng: 33.107694
            },
            {
                img: "img/hospital.png"
            }
        ],
        psyMark: [
            {
                lat: 50.817379,
                lng: 28.032010
            },
            {
                lat: 49.250945,
                lng: 29.196561
            },
            {
                img: "img/therapy.png"
            }
        ]
    };

    clinic = function () {
        for (var i = 0; i < 2; i++) {
            var a = 2;
            var markerClinic = new google.maps.Marker({
                position: posImgMark.clinicMark[i],
                map: map,
                icon: posImgMark.clinicMark[a].img
            });
            clinicArr.push(markerClinic);
        }
    };
    hospital = function () {
        for (var i = 0; i < 2; i++) {
            var a = 2;
            var markerHospital = new google.maps.Marker({
                position: posImgMark.hospitalMark[i],
                map: map,
                icon: posImgMark.hospitalMark[a].img
            });
            hospitalArr.push(markerHospital);
        }
    };
    psyHospital = function () {
        for (var i = 0; i < 2; i++) {
            var a = 2;
            var markerPsy = new google.maps.Marker({
                position: posImgMark.psyMark[i],
                map: map,
                icon: posImgMark.psyMark[a].img
            });
            psyArr.push(markerPsy);
        }
    };

    clinic();
    hospital();
    psyHospital();
}


function remove(nameArr) {
    for (var i = 0; i < nameArr.length; i++) {
        nameArr[i].setMap(null);
    }
}
function change (nameId, nameArr, type) {
    var checkbox = document.getElementById(nameId);
    if (!checkbox.checked) {
        remove(nameArr);
    } else {
        type();
    }
}


function ok() {
    var look = document.getElementsByClassName("markerController")[0];
    look.classList.toggle("newBook")
}
// $("#markerController").click(function () {
//    $(".newBook").show(700);
// });
//====================================================================================
$(".chose-layer").click(function () {
    $(".layers-controller").show(400);
    $(".legend-box").hide(400);
});
$(".chose-legend").click(function () {
   $(".legend-box").show(400);
    $(".layers-controller").hide(400);
});