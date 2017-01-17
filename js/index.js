var allArr = [[], [], []];
var allMarkers;
function initMap() {
    var centerMap = {lat: 49.6068, lng: 34.5480};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 6,
        center: centerMap
    });
    var posMark = [
        [
            {
                lat: 50.431403,
                lng: 33.167882
            },
            {
                lat: 50.983668,
                lng: 31.152127
            }

        ],
        [
            {
                lat: 49.665129,
                lng: 30.690702
            },
            {
                lat: 48.775368,
                lng: 33.107694
            }

        ],
        [
            {
                lat: 50.817379,
                lng: 28.032010
            },
            {
                lat: 49.250945,
                lng: 29.196561
            }

        ]
    ];
    var icons = [
        {
            img: "img/clinic.png"
        },
        {
            img: "img/hospital.png"
        },
        {
            img: "img/therapy.png"
        }
    ];
    allMarkers = function () {
        for (var j = 0; j < posMark.length; j++) {
            var typeMarker = posMark[j];
            for (var i = 0; i < 2; i++) {
                var marker = new google.maps.Marker({
                    position: typeMarker[i],
                    map: map,
                    icon: icons[j].img
                });
                var arr = allArr[j];
                arr.push(marker);
            }
        }
    };
    allMarkers();
}

function remove(allArrNumber) {
    for (var i = 0; i < allArrNumber.length; i++) {
        allArrNumber[i].setMap(null);
    }
}
function change(nameId, allArrNumber) {
    var checkbox = document.getElementById(nameId);
    if (!checkbox.checked) {
        remove(allArrNumber);
    } else {
        allMarkers();
    }
}
function ok() {
    var look = document.getElementsByClassName("markerController")[0];
    look.classList.toggle("newBook")
}

//====================================================================================
$(".chose-layer").click(function () {
    $(".layers-controller").show(400);
    $(".legend-box").hide(400);
});
$(".chose-legend").click(function () {
    $(".legend-box").show(400);
    $(".layers-controller").hide(400);
});