console.log('brendan!')
var standardColor = '#92D300';
var highlightColor = '#FD7C08';
    viewPort = $(document).width();
    change = false;
$(document).ready(function() {

    // Load Map
    function initialize() {

        var styles = [
            {
                "featureType": "administrative",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#444444"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#92d300"
                    },
                    {
                        "lightness": "100"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#92d300"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -100
                    },
                    {
                        "lightness": 45
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#0087ce"
                    },
                    {
                        "visibility": "on"
                    }
                ]
            }
        ];

        var mapOptions = {
            center: { lat: 39.8120, lng: -86.1480},
            zoom: 11,
            styles: styles
        };
        window.map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);


        /* Polyline
        //////////////////////////////////////////////*/
        meridianCoords = [
            new google.maps.LatLng(39.912409780019786, -86.15787506103516),
            new google.maps.LatLng(39.88012326613326, -86.15785360336304),
            new google.maps.LatLng(39.877488599164494, -86.15787506103516),

            new google.maps.LatLng(39.87020980562549, -86.15585803985596),

            new google.maps.LatLng(39.86899110859627, -86.15547180175781),

            new google.maps.LatLng(39.867410063971384, -86.1553430557251),

            new google.maps.LatLng(39.866125438383825, -86.1553430557251),

            new google.maps.LatLng(39.86556546585626, -86.1554503440857),

            new google.maps.LatLng(39.865005488758314, -86.15581512451172),

            new google.maps.LatLng(39.86459373797635, -86.15626573562622),

            new google.maps.LatLng(39.863770228999336, -86.15720987319946),

            new google.maps.LatLng(39.86312788513576, -86.1573600769043),

            new google.maps.LatLng(39.81885756170534, -86.1568021774292),

            new google.maps.LatLng(39.80311635241795, -86.15660905838013),

            new google.maps.LatLng(39.80258883587129, -86.15663051605225),

            new google.maps.LatLng(39.796175889240835, -86.15731716156006),

            new google.maps.LatLng(39.795631832831745, -86.15733861923218),

            new google.maps.LatLng(39.78839382450806, -86.15727424621582),

            new google.maps.LatLng(39.780017228804276, -86.15759611129761),

            new google.maps.LatLng(39.773057942793294, -86.15787506103516),

            new google.maps.LatLng(39.769083248135736, -86.15800380706787),

            new google.maps.LatLng(39.769056704732755, -86.1578106880188),

            new google.maps.LatLng(39.76896599322008, -86.15756392478943),

            new google.maps.LatLng(39.76866087180028, -86.15731716156006),

            new google.maps.LatLng(39.76852892698368, -86.1572527885437),

            new google.maps.LatLng(39.76833925586681, -86.15732789039612),

            new google.maps.LatLng(39.76818257063701, -86.15743517875671),

            new google.maps.LatLng(39.768058871519486, -86.15760684013367),

            new google.maps.LatLng(39.767976405317654, -86.15784287452698),

            new google.maps.LatLng(39.767935172179705, -86.15806818008423),

            new google.maps.LatLng(39.765906471296056, -86.15811109542847),

            new google.maps.LatLng(39.7614200261931, -86.1583149433136)
        ];

        var meridianPoly = new google.maps.Polyline({
            path: meridianCoords,
            geodesic: true,
            strokeColor: '#92D300',
            strokeOpacity: 1,
            strokeWeight: 2
        });

        window.meridian = {
            name: 'meridian',
            el: function() {
            return $('.' + this.name);
            },
            center: {lat: 39.76841991769641, lng: -86.15808963775635},
            zoom: 15,
            coords: meridianCoords,
            type: 'line',
            poly: {
                path: meridianCoords,
                geodesic: true,
                strokeColor: '#92D300',
                strokeOpacity: 1,
                strokeWeight: 2
            },
            stndardColor: standardColor,
            highlightColor: highlightColor,
            marker: null,
            constructPoly: function() {
                meridianPoly.setMap(map);
                if (this.next) {
                    this.next.constructPoly();
                }
            },
            constructMarker: function () {
                var myLatlng = new google.maps.LatLng(this.center.lat,this.center.lng);

                this.marker = new google.maps.Marker({
                    position: myLatlng,
                    title:"Meridian",
                    
                    icon: 'images/marker.png'
                });

                this.marker.setMap(map);

                if (this.next) {
                    this.next.constructMarker();
                }
            },
            resetMarker: function () {
                 
            },
            highlight: function() {
                unhighlight(this.el());
                meridianPoly.setMap(null);

                this.poly.strokeColor = this.highlightColor;
                this.poly.strokeOpacity = 0.5;
                this.poly.strokeWeight = 10;
                meridianPoly = new google.maps.Polyline(this.poly);
                meridianPoly.setMap(map);

                this.panTo();
            },
            reset: function() {
                meridianPoly.setMap(null);
                if (this.marker) {this.resetMarker();};

                this.poly.strokeColor = '#92D300';
                this.poly.strokeOpacity = 1;
                this.poly.strokeWeight = 2;
                meridianPoly = new google.maps.Polyline(this.poly);
                meridianPoly.setMap(map);
            },
            setZoom: function () {
                map.setZoom(this.zoom)
            },
            panTo: function () {
                map.panTo(this.center);
                this.setZoom();
            },
            moveToSlide: function () {
                console.log('move Slide')
                var index = $('.swiper-slide').index(this.el()) - 1;
                mySwiper.slideTo(index, 500);
            }
        };

        window.broadRippleCoords = [
            new google.maps.LatLng(39.86963339756685, -86.14609479904175),

            new google.maps.LatLng(39.8696992730187, -86.14171743392944),

            new google.maps.LatLng(39.86966633530071, -86.13869190216064),

            new google.maps.LatLng(39.869155798649196, -86.13676071166992),

            new google.maps.LatLng(39.868793480010815, -86.13459348678589),

            new google.maps.LatLng(39.86859585085607, -86.13412141799927),

            new google.maps.LatLng(39.868579381734136, -86.13158941268921),

            new google.maps.LatLng(39.86862878908807, -86.1283278465271),

            new google.maps.LatLng(39.86866172730424, -86.12236261367798)
        ];

        var broadRipplePoly = new google.maps.Polyline({
            path: broadRippleCoords,
            geodesic: true,
            strokeColor: '#92D300',
            strokeOpacity: 1,
            strokeWeight: 2
        });

        window.broadRipple = {
            name: 'broadRipple',
            el: function() {
                return $('.' + this.name);
            },
            center: {lat: 39.86850990258248, lng: -86.13418579101562},
            zoom: 15,
            coords: broadRippleCoords,
            type: 'line',
            poly: {
                path: broadRippleCoords,
                geodesic: true,
                strokeColor: '#92D300',
                strokeOpacity: 1,
                strokeWeight: 2
            },
            stndardColor: '#92D300',
            highlightColor: highlightColor,
            polyMap: broadRipplePoly,
            marker: null,
            constructPoly: function() {
                broadRipplePoly.setMap(map);
                if (this.next) {
                    this.next.constructPoly();
                }
            },
            constructMarker: function () {
                var myLatlng = new google.maps.LatLng(this.center.lat,this.center.lng);

                this.marker = new google.maps.Marker({
                    position: myLatlng,
                    title:"Broad Ripple",
                    
                    icon: 'images/marker.png'
                });
                this.constructInfoWindow(this.marker);
                this.marker.setMap(map);

                if (this.next) {
                    this.next.constructMarker();
                }
            },
            resetMarker: function () {
                 
            },
            highlight: function() {
                unhighlight(this.el());
                broadRipplePoly.setMap(null);
                this.polyMap.setMap(null);

                this.poly.strokeColor = this.highlightColor;
                this.poly.strokeOpacity = 0.5;
                this.poly.strokeWeight = 10;
                this.polyMap = new google.maps.Polyline(this.poly);
                this.polyMap.setMap(map);

                this.panTo();
            },
            reset: function() {
                broadRipplePoly.setMap(null);
                this.polyMap.setMap(null);
                if (this.marker) {this.resetMarker();};

                this.poly.strokeColor = '#92D300';
                this.poly.strokeOpacity = 1;
                this.poly.strokeWeight = 2;
                this.polyMap = new google.maps.Polyline(this.poly);
                this.polyMap.setMap(map);
            },
            setZoom: function () {
                map.setZoom(this.zoom)
            },
            panTo: function () {
                map.panTo(this.center);
                this.setZoom();
            },
            moveToSlide: function () {
                console.log('move Slide')
                var index = $('.swiper-slide').index(this.el()) - 1;
                mySwiper.slideTo(index, 500);
            },
            contentString: [
                '<div class="content">'+
                '<div class="siteNotice">'+
                '</div>'+
                '<h1 class="firstHeading" class="firstHeading">Broad Ripple</h1>'+
                '<div class="bodyContent">'+
                '<p style="display: inline-block;width:49%;">Located in northern Indy, Broad Ripple is home to a fun mix'+
                'of art galleries, restaurants, comedy clubs,  local shopping'+
                'venues, and bars.  It’s a popular destination for those seeking'+
                'some fun on the weekend.</p>'+
                '<img style="display: inline-block;width:49%; vertical-align:top" src="http://cdn.visitindy.com/web/2014/4/25/broad-ripple-village-1.jpg">'+
                '</div>'+
                '</div>'
            ].join(''),
            constructInfoWindow: function(marker) {
                var infowindow = new google.maps.InfoWindow({
                    content: this.contentString
                });
                google.maps.event.addListener(marker, 'click', function() {
                    infowindow.open(map,marker);
                });
            }
        };

        var collegeCoords = [
            new google.maps.LatLng(39.91253784835588, -86.1458158493042),

            new google.maps.LatLng(39.9007031172086, -86.14585876464844),

            new google.maps.LatLng(39.88572159734742, -86.1458158493042),

            new google.maps.LatLng(39.88144056165907, -86.14579439163208),

            new google.maps.LatLng(39.877488599164494, -86.14613771438599),

            new google.maps.LatLng(39.87536432521706, -86.14613771438599),

            new google.maps.LatLng(39.87407984858469, -86.14618062973022),

            new google.maps.LatLng(39.872581262110266, -86.14624500274658),

            new google.maps.LatLng(39.863869050598446, -86.14607334136963),

            new google.maps.LatLng(39.85713238576469, -86.14594459533691),

            new google.maps.LatLng(39.84785809547373, -86.1458158493042),

            new google.maps.LatLng(39.842816836594174, -86.1457085609436),

            new google.maps.LatLng(39.84232257560377, -86.1457085609436),

            new google.maps.LatLng(39.8406420616243, -86.14532232284546),

            new google.maps.LatLng(39.840032453250814, -86.14517211914062),

            new google.maps.LatLng(39.839505220023106, -86.14521503448486),

            new google.maps.LatLng(39.82502119962214, -86.14506483078003),

            new google.maps.LatLng(39.80911656829775, -86.1449146270752),

            new google.maps.LatLng(39.80717150073159, -86.14478588104248),

            new google.maps.LatLng(39.785475323257955, -86.14474296569824),

            new google.maps.LatLng(39.78174869538038, -86.14472150802612),

            new google.maps.LatLng(39.780709820662594, -86.14512920379639),

            new google.maps.LatLng(39.77924217726969, -86.14508628845215),

            new google.maps.LatLng(39.77836817251456, -86.1451506614685),

            new google.maps.LatLng(39.77721380960049, -86.14523649215698),

            new google.maps.LatLng(39.775234856701566, -86.14532232284546),

            new google.maps.LatLng(39.770996407821016, -86.14551544189453),

            new google.maps.LatLng(39.75794958308906, -86.14598751068115),
        ];

        var collegePoly = new google.maps.Polyline({
            path: collegeCoords,
            geodesic: true,
            strokeColor: '#92D300',
            strokeOpacity: 1,
            strokeWeight: 2
        });

        //collegePoly.setMap(map);

        //Foxhill Coords
        window.foxHillCoords = [
            new google.maps.LatLng(39.864956078794926, -86.20023250579834),

            new google.maps.LatLng(39.865071368654114, -86.19774341583252),

            new google.maps.LatLng(39.86464314820064, -86.19353771209717),

            new google.maps.LatLng(39.864692558389365, -86.19197130203247),

            new google.maps.LatLng(39.86477490862484, -86.18332386016846),

            new google.maps.LatLng(39.86464314820064, -86.18019104003906),

            new google.maps.LatLng(39.86459373797635, -86.17913961410522),

            new google.maps.LatLng(39.86429727588325, -86.17828130722046),

            new google.maps.LatLng(39.86403375294735, -86.17572784423828),

            new google.maps.LatLng(39.86388552085113, -86.17366790771484),

            new google.maps.LatLng(39.863605526017835, -86.17210149765015),

            new google.maps.LatLng(39.86307847382023, -86.16961240768433),

            new google.maps.LatLng(39.86278200517997, -86.1682391166687)
        ];

        // Foxhill Polyline
        var foxHillPoly = new google.maps.Polyline({
            path: foxHillCoords,
            geodesic: true,
            strokeColor: '#92D300',
            strokeOpacity: 1,
            strokeWeight: 2
        });

        window.foxHill = {
            name: 'foxHill',
            el: function() {
                return $('.' + this.name);
            },
            center: {lat: 39.86475483576405, lng: -86.18375301361084},
            zoom: 14,
            coords: foxHillCoords,
            type: 'line',
            poly: {
                path: foxHillCoords,
                geodesic: true,
                strokeColor: '#92D300',
                strokeOpacity: 1,
                strokeWeight: 2
            },
            stndardColor: '#92D300',
            highlightColor: highlightColor,
            polyMap: foxHillPoly,
            marker: null,
            constructPoly: function() {
                foxHillPoly.setMap(map);
                if (this.next) {
                    this.next.constructPoly();
                }
            },
            constructMarker: function () {
                var myLatlng = new google.maps.LatLng(this.center.lat,this.center.lng);

                this.marker = new google.maps.Marker({
                    position: myLatlng,
                    title:"Fox Hill",
                    
                    icon: 'images/marker.png'
                });

                this.marker.setMap(map);

                if (this.next) {
                    this.next.constructMarker();
                }
            },
            resetMarker: function () {
                 
            },
            highlight: function() {
                unhighlight(this.el());

                foxHillPoly.setMap(null);
                this.polyMap.setMap(null);

                this.poly.strokeColor = this.highlightColor;
                this.poly.strokeOpacity = 0.5;
                this.poly.strokeWeight = 10;
                this.polyMap = new google.maps.Polyline(this.poly);
                this.polyMap.setMap(map);

                this.panTo();
            },
            reset: function() {
                foxHillPoly.setMap(null);
                this.polyMap.setMap(null);
                if (this.marker) {this.resetMarker();};

                this.poly.strokeColor = '#92D300';
                this.poly.strokeOpacity = 1;
                this.poly.strokeWeight = 2;
                this.polyMap = new google.maps.Polyline(this.poly);
                this.polyMap.setMap(map);
            },
            setZoom: function () {
                map.setZoom(this.zoom)
            },
            panTo: function () {
                map.panTo(this.center);
                this.setZoom();
            },
            moveToSlide: function () {
                var index = $('.swiper-slide').index(this.el()) - 1;
                mySwiper.slideTo(index, 500);
            }
        };

        var kesslerCoords = [
            new google.maps.LatLng(39.85520154639845, -86.08376026153564),

            new google.maps.LatLng(39.85635460016761, -86.08468294143677),

            new google.maps.LatLng(39.8571617262798, -86.08519792556763),

            new google.maps.LatLng(39.85785354110664, -86.0858416557312),

            new google.maps.LatLng(39.858018257894656, -86.08633518218994),

            new google.maps.LatLng(39.85810061614039, -86.08807325363159),

            new google.maps.LatLng(39.858067672853956, -86.09210729598999),

            new google.maps.LatLng(39.85813355941101, -86.09264373779297),

            new google.maps.LatLng(39.85833121870268, -86.09384536743164),

            new google.maps.LatLng(39.858990078896575, -86.09459638595581),

            new google.maps.LatLng(39.85971481780381, -86.09508991241455),

            new google.maps.LatLng(39.86095015057128, -86.09513282775879),

            new google.maps.LatLng(39.862168990439265, -86.09607696533203),

            new google.maps.LatLng(39.862300755614704, -86.09657049179077),

            new google.maps.LatLng(39.862300755614704, -86.09880208969116),

            new google.maps.LatLng(39.86235016749027, -86.1221694946289),

            new google.maps.LatLng(39.862300755614704, -86.13083839416504),

            new google.maps.LatLng(39.862267814344584, -86.13798379898071),

            new google.maps.LatLng(39.86220193175684, -86.14652395248413),

            new google.maps.LatLng(39.86215251977454, -86.14892721176147),

            new google.maps.LatLng(39.86215251977454, -86.1501932144165),

            new google.maps.LatLng(39.8624819323178, -86.15163087844849),

            new google.maps.LatLng(39.8625807557724, -86.15257501602173),

            new google.maps.LatLng(39.86263016744631, -86.15379810333252),

            new google.maps.LatLng(39.86279487276908, -86.1544418334961),

            new google.maps.LatLng(39.86319016393065, -86.15562200546265),

            new google.maps.LatLng(39.86317369351106, -86.1562442779541),

            new google.maps.LatLng(39.86291016625977, -86.15701675415039),

            new google.maps.LatLng(39.86236663810754, -86.15819692611694),

            new google.maps.LatLng(39.86211957843325, -86.15907669067383),

            new google.maps.LatLng(39.86208663707611, -86.16019248962402),

            new google.maps.LatLng(39.86220193175684, -86.16257429122925),

            new google.maps.LatLng(39.86225134370357, -86.16536378860474),

            new google.maps.LatLng(39.86244899113463, -86.16746664047241),

            new google.maps.LatLng(39.862679579084656, -86.16838932037354),

            new google.maps.LatLng(39.862465461728185, -86.16952657699585),

            new google.maps.LatLng(39.86220193175684, -86.17019176483154),

            new google.maps.LatLng(39.861477219116935, -86.17072820663452),

            new google.maps.LatLng(39.86048896227286, -86.17150068283081),

            new google.maps.LatLng(39.858990078896575, -86.17321729660034),

            new google.maps.LatLng(39.85852887742504, -86.17424726486206),

            new google.maps.LatLng(39.858067672853956, -86.17516994476318),

            new google.maps.LatLng(39.85765588043917, -86.1772084236145),

            new google.maps.LatLng(39.85760646518334, -86.17976188659668),

            new google.maps.LatLng(39.85755704989193, -86.18145704269409),

            new google.maps.LatLng(39.85762293693925, -86.18476152420044),

            new google.maps.LatLng(39.85754057812022, -86.18692874908447),

            new google.maps.LatLng(39.85721114185585, -86.18838787078857),

            new google.maps.LatLng(39.85628871190268, -86.1898684501648),

            new google.maps.LatLng(39.85590985315163, -86.19124174118042),

            new google.maps.LatLng(39.855712186886066, -86.1935806274414),

            new google.maps.LatLng(39.85543215870204, -86.19555473327637),

            new google.maps.LatLng(39.85500387809296, -86.19714260101318),

            new google.maps.LatLng(39.85432850708711, -86.19834423065186),

            new google.maps.LatLng(39.85370254753791, -86.19954586029053),

            new google.maps.LatLng(39.85365312943563, -86.20413780212402),

            new google.maps.LatLng(39.85355429312432, -86.21192693710327),
        ];

        window.kesslerPoly = new google.maps.Polyline({
            path: kesslerCoords,
            geodesic: true,
            strokeColor: '#92D300',
            strokeOpacity: 1,
            strokeWeight: 2
        });

        kessler = {
            name: 'kessler',
            el: function() {
                return $('.' + this.name);
            },
            center: {lat: 39.862053695703196, lng: -86.14397048950195},
            zoom: 13,
            coords: kesslerCoords,
            type: 'line',
            poly: {
                path: kesslerCoords,
                geodesic: true,
                strokeColor: '#92D300',
                strokeOpacity: 1,
                strokeWeight: 2
            },
            stndardColor: '#92D300',
            highlightColor: highlightColor,
            polyMap: kesslerPoly,
            marker: null,
            constructPoly: function() {
                kesslerPoly.setMap(map);
                if (this.next) {
                     this.next.constructPoly();
                }
            },
            constructMarker: function () {
                var myLatlng = new google.maps.LatLng(this.center.lat,this.center.lng);

                this.marker = new google.maps.Marker({
                    position: myLatlng,
                    title:"Kessler",
                    
                    icon: 'images/marker.png'
                });

                this.marker.setMap(map);

                if (this.next) {
                    this.next.constructMarker();
                }
            },
            resetMarker: function () {
                 
            },
            highlight: function() {
                unhighlight(this.el());

                kesslerPoly.setMap(null);
                this.polyMap.setMap(null);

                this.poly.strokeColor = this.highlightColor;
                this.poly.strokeOpacity = 0.5;
                this.poly.strokeWeight = 10;
                this.polyMap = new google.maps.Polyline(this.poly);
                this.polyMap.setMap(map);

                this.panTo();
            },
            reset: function() {
                kesslerPoly.setMap(null);
                this.polyMap.setMap(null);
                if (this.marker) {this.resetMarker();};

                this.poly.strokeColor = '#92D300';
                this.poly.strokeOpacity = 1;
                this.poly.strokeWeight = 2;
                this.polyMap = new google.maps.Polyline(this.poly);
                this.polyMap.setMap(map);
            },
            setZoom: function () {
                map.setZoom(this.zoom)
            },
            panTo: function () {
                map.panTo(this.center);
                this.setZoom();
            },
            moveToSlide: function () {
                console.log('move Slide')
                var index = $('.swiper-slide').index(this.el()) - 1;
                mySwiper.slideTo(index, 500);
            }
        };

        butlerCoords = [
            new google.maps.LatLng(39.842602657268465, -86.1642050743103),

            new google.maps.LatLng(39.84657310385206, -86.16429090499878),

            new google.maps.LatLng(39.84662252705149, -86.16772413253784),

            new google.maps.LatLng(39.846895769774896, -86.16769194602966),

            new google.maps.LatLng(39.84746413174884, -86.16853952407837),

            new google.maps.LatLng(39.847114054277945, -86.16887211799622),

            new google.maps.LatLng(39.84662394281968, -86.16887748241425),

            new google.maps.LatLng(39.84664041721123, -86.17006838321686),

            new google.maps.LatLng(39.84484146752454, -86.17145776748657),

            new google.maps.LatLng(39.844750855947865, -86.17263793945312),

            new google.maps.LatLng(39.84456963243581, -86.17747664451599),

            new google.maps.LatLng(39.84252671612118, -86.17764830589294),

            new google.maps.LatLng(39.84221368325107, -86.17745518684387),

            new google.maps.LatLng(39.84068144914138, -86.17733716964722),

            new google.maps.LatLng(39.84026955242091, -86.17682218551636),

            new google.maps.LatLng(39.839305704440285, -86.17655396461487),

            new google.maps.LatLng(39.83901737121904, -86.17626428604126),

            new google.maps.LatLng(39.839124466556825, -86.17596387863159),

            new google.maps.LatLng(39.83951989404954, -86.17587804794312),

            new google.maps.LatLng(39.83970936891621, -86.17548108100891),

            new google.maps.LatLng(39.840055365149865, -86.17521286010742),

            new google.maps.LatLng(39.839791749129965, -86.17473006248474),

            new google.maps.LatLng(39.839626988603634, -86.17444038391113),

            new google.maps.LatLng(39.835936249213866, -86.17646813392639),

            new google.maps.LatLng(39.83499705619415, -86.1771011352539),

            new google.maps.LatLng(39.83451921621975, -86.17741227149963),

            new google.maps.LatLng(39.834494500268576, -86.17683291435242),

            new google.maps.LatLng(39.83423910158573, -86.17689728736877),

            new google.maps.LatLng(39.834337965704634, -86.17592096328735),

            new google.maps.LatLng(39.83573852543489, -86.17578148841858),

            new google.maps.LatLng(39.83581267191871, -86.16883993148804),

            new google.maps.LatLng(39.83604656750722, -86.16882920265198),

            new google.maps.LatLng(39.83605480597241, -86.16848587989807),

            new google.maps.LatLng(39.83661501928792, -86.16851806640625),

            new google.maps.LatLng(39.836635615278624, -86.16831958293915),

            new google.maps.LatLng(39.83701458040491, -86.16835176944733),

            new google.maps.LatLng(39.83701458040491, -86.16850197315216),

            new google.maps.LatLng(39.837467688137174, -86.16851806640625),

            new google.maps.LatLng(39.83745533069322, -86.16899013519287),

            new google.maps.LatLng(39.83757845450165, -86.16898745298386),

            new google.maps.LatLng(39.839465445672516, -86.1689418554306),

            new google.maps.LatLng(39.83945720761646, -86.16855025291443),

            new google.maps.LatLng(39.83981968114875, -86.1685448884964),

            new google.maps.LatLng(39.83983615717296, -86.1689043045044),

            new google.maps.LatLng(39.84006682109655, -86.1689043045044),

            new google.maps.LatLng(39.84148785853579, -86.16896867752075),

            new google.maps.LatLng(39.8415166908751, -86.16833567619324),

            new google.maps.LatLng(39.8422004256597, -86.1684000492096),

            new google.maps.LatLng(39.84258759775949, -86.16850733757019),

            new google.maps.LatLng(39.842645261502476, -86.1642587184906),

            new google.maps.LatLng(39.842602657268465, -86.1642050743103)
        ];

        // Construct the polygon.
        butlerPolygon = new google.maps.Polygon({
            paths: butlerCoords,
            strokeColor: '#92D300',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#92D300',
            fillOpacity: 0.35
        });

        window.butler = {
            name: 'butler',
            el: function() {
                return $('.' + this.name);
            },
            center: {lat: 39.83882609235166, lng: -86.17130756378174},
            zoom: 14,
            coords: butlerCoords,
            type: 'gon',
            poly: {
                path: butlerCoords,
                geodesic: true,
                strokeColor: '#92D300',
                strokeOpacity: 1,
                strokeWeight: 2,
                fillColor: '#92D300',
                fillOpacity: 0.35
            },
            stndardColor: '#92D300',
            highlightColor: highlightColor,
            polyMap: butlerPolygon,
            marker: null,
            constructPoly: function() {
                butlerPolygon.setMap(map);
                if (this.next) {
                     this.next.constructPoly();
                }
            },
            constructMarker: function () {
                var myLatlng = new google.maps.LatLng(this.center.lat,this.center.lng);

                this.marker = new google.maps.Marker({
                    position: myLatlng,
                    title:"Butler",
                    
                    icon: 'images/marker.png'
                });

                this.marker.setMap(map);

                if (this.next) {
                    this.next.constructMarker();
                }
            },
            resetMarker: function () {
                 
            },
            highlight: function() {
                unhighlight(this.el());

                butlerPolygon.setMap(null)
                this.polyMap.setMap(null);

                this.poly.strokeColor = this.highlightColor;
                this.poly.strokeOpacity = 0.5;
                this.poly.strokeWeight = 5;
                this.poly.fillColor = highlightColor;
                this.polyMap = new google.maps.Polygon(this.poly);
                this.polyMap.setMap(map);

                this.panTo();
            },
            reset: function() {
                butlerPolygon.setMap(null)
                this.polyMap.setMap(null);
                if (this.marker) {this.resetMarker();};

                this.poly.strokeColor = '#92D300';
                this.poly.strokeOpacity = 1;
                this.poly.strokeWeight = 2;
                this.poly.fillColor = '#92D300';
                this.poly.fillOpacity = 0.35;
                this.polyMap = new google.maps.Polygon(this.poly);
                this.polyMap.setMap(map);
            },
            setZoom: function () {
                map.setZoom(this.zoom)
            },
            panTo: function () {
                map.panTo(this.center);
                this.setZoom();
            },
            moveToSlide: function () {
                console.log('move Slide')
                var index = $('.swiper-slide').index(this.el()) - 1;
                mySwiper.slideTo(index, 500);
            }
        };

        // Set the Polygon Coords
        var fountainSquareCoords = [
            new google.maps.LatLng(39.75960273687801, -86.13993644714355),

            new google.maps.LatLng(39.75969810001129, -86.14045143127441),

            new google.maps.LatLng(39.76105069585544, -86.142897605896),

            new google.maps.LatLng(39.75983006175096, -86.1431336402893),

            new google.maps.LatLng(39.755095776158484, -86.14371299743652),

            new google.maps.LatLng(39.75130151447744, -86.14416360855103),

            new google.maps.LatLng(39.749750756062475, -86.14339113235474),

            new google.maps.LatLng(39.74848042794696, -86.14214658737183),

            new google.maps.LatLng(39.74688011113675, -86.1397647857666),

            new google.maps.LatLng(39.74471879953827, -86.13985061645508),

            new google.maps.LatLng(39.74557673286751, -86.1386489868164),

            new google.maps.LatLng(39.745956199971125, -86.1376404762268),

            new google.maps.LatLng(39.746170680453076, -86.13620281219482),

            new google.maps.LatLng(39.74646765232583, -86.13553762435913),

            new google.maps.LatLng(39.747771013741534, -86.13480806350708),

            new google.maps.LatLng(39.74813397075925, -86.13377809524536),

            new google.maps.LatLng(39.74872789630005, -86.13276958465576),

            new google.maps.LatLng(39.74937130985801, -86.13193273544312),

            new google.maps.LatLng(39.749437300652396, -86.13064527511597),

            new google.maps.LatLng(39.759335203923435, -86.13066673278809),

            new google.maps.LatLng(39.759711888993984, -86.13058626651764),

            new google.maps.LatLng(39.75960273687801, -86.13993644714355)
        ];

        // Construct the polygon.
        fountainSquarePolygon = new google.maps.Polygon({
            paths: fountainSquareCoords,
            strokeColor: '#92D300',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#92D300',
            fillOpacity: 0.35
        });

        window.fountainSquare = {
            name: 'fountainSquare',
            el: function() {
                return $('.' + this.name);
            },
            center: {lat: 39.7521722541479, lng: -86.13959312438965},
            zoom: 15,
            coords: fountainSquareCoords,
            type: 'gon',
            poly: {
                path: fountainSquareCoords,
                geodesic: true,
                strokeColor: '#92D300',
                strokeOpacity: 1,
                strokeWeight: 2,
                fillColor: '#92D300',
                fillOpacity: 0.35
            },
            stndardColor: '#92D300',
            highlightColor: highlightColor,
            polyMap: fountainSquarePolygon,
            marker: null,
            constructPoly: function() {
                fountainSquarePolygon.setMap(map);
                if (this.next) {
                     this.next.constructPoly();
                }
            },
            constructMarker: function () {
                var myLatlng = new google.maps.LatLng(this.center.lat,this.center.lng);

                this.marker = new google.maps.Marker({
                    position: myLatlng,
                    title:"Fountain Square",
                    
                    icon: 'images/marker.png'
                });

                this.marker.setMap(map);

                if (this.next) {
                    this.next.constructMarker();
                }
            },
            resetMarker: function () {
                 
            },
            highlight: function() {
                unhighlight(this.el());

                fountainSquarePolygon.setMap(null)
                this.polyMap.setMap(null);

                this.poly.strokeColor = this.highlightColor;
                this.poly.strokeOpacity = 0.5;
                this.poly.strokeWeight = 5;
                this.poly.fillColor = highlightColor;
                this.polyMap = new google.maps.Polygon(this.poly);
                this.polyMap.setMap(map);

                this.panTo();
            },
            reset: function() {
                fountainSquarePolygon.setMap(null)
                this.polyMap.setMap(null);
                if (this.marker) {this.resetMarker();};

                this.poly.strokeColor = '#92D300';
                this.poly.strokeOpacity = 1;
                this.poly.strokeWeight = 2;
                this.poly.fillColor = '#92D300';
                this.poly.fillOpacity = 0.35;
                this.polyMap = new google.maps.Polygon(this.poly);
                this.polyMap.setMap(map);
            },
            setZoom: function () {
                map.setZoom(this.zoom)
            },
            panTo: function () {
                map.panTo(this.center);
                this.setZoom();
            },
            moveToSlide: function () {
                console.log('move Slide')
                var index = $('.swiper-slide').index(this.el()) - 1;
                mySwiper.slideTo(index, 500);
            }
        };

        // Set the Polygon Coords
        var tarkingtonCoords = [

                new google.maps.LatLng(39.828422345457334, -86.15922689437866),

                new google.maps.LatLng(39.826329511015935, -86.1592161655426),

                new google.maps.LatLng(39.82635422990499, -86.15684509277344),

                new google.maps.LatLng(39.82847178172062, -86.15687727928162),
            ];

            // Construct the polygon.
            tarkingtonPolygon = new google.maps.Polygon({
                paths: tarkingtonCoords,
                strokeColor: '#92D300',
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: '#92D300',
                fillOpacity: 0.35
            });

        window.tarkington = {
            name: 'tarkington',
            el: function() {
                return $('.' + this.name);
            },            center: {lat: 39.827324696760776, lng: -86.1568021774292},
            zoom: 16,
            coords: tarkingtonCoords,
            type: 'gon',
            poly: {
                path: tarkingtonCoords,
                geodesic: true,
                strokeColor: '#92D300',
                strokeOpacity: 1,
                strokeWeight: 2,
                fillColor: '#92D300',
                fillOpacity: 0.35
            },
            stndardColor: '#92D300',
            highlightColor: highlightColor,
            polyMap: tarkingtonPolygon,
            marker: null,
            constructPoly: function() {
                tarkingtonPolygon.setMap(map);
                if (this.next) {
                     this.next.constructPoly();
                }
            },
            constructMarker: function () {
                var myLatlng = new google.maps.LatLng(this.center.lat,this.center.lng);

                this.marker = new google.maps.Marker({
                    position: myLatlng,
                    title:"Tarkington",
                    
                    icon: 'images/marker.png'
                });

                this.marker.setMap(map);

                if (this.next) {
                    this.next.constructMarker();
                }
            },
            resetMarker: function () {
                 
            },
            highlight: function() {
                unhighlight(this.el());

                tarkingtonPolygon.setMap(null)
                this.polyMap.setMap(null);

                this.poly.strokeColor = this.highlightColor;
                this.poly.strokeOpacity = 0.5;
                this.poly.strokeWeight = 5;
                this.poly.fillColor = highlightColor;
                this.polyMap = new google.maps.Polygon(this.poly);
                this.polyMap.setMap(map);

                this.panTo();
            },
            reset: function() {
                tarkingtonPolygon.setMap(null)
                this.polyMap.setMap(null);
                if (this.marker) {this.resetMarker();};

                this.poly.strokeColor = '#92D300';
                this.poly.strokeOpacity = 1;
                this.poly.strokeWeight = 2;
                this.poly.fillColor = '#92D300';
                this.poly.fillOpacity = 0.35;
                this.polyMap = new google.maps.Polygon(this.poly);
                this.polyMap.setMap(map);
            },
            setZoom: function () {
                map.setZoom(this.zoom)
            },
            panTo: function () {
                map.panTo(this.center);
                this.setZoom();
            },
            moveToSlide: function () {
                console.log('move Slide')
                var index = $('.swiper-slide').index(this.el()) - 1;
                mySwiper.slideTo(index, 500);
            }
        };

        /*// Set the Linked List
        ///////////////////////////////////////////////////*/

        broadRipple.previous = null;
        broadRipple.next = kessler;
        kessler.previous = broadRipple;
        kessler.next = butler;
        butler.previous = kessler;
        butler.next = foxHill;
        foxHill.previous = butler;
        foxHill.next = fountainSquare;
        fountainSquare.previous = foxHill;
        fountainSquare.next = meridian;
        meridian.previous = fountainSquare;
        meridian.next = tarkington;
        tarkington.previous = meridian;
        tarkington.next = null;

        broadRipple.constructPoly();
        broadRipple.constructMarker();
        ///* Add Coordinate on click
        // //////////////////////////////////////////////*/

        /*// Set Indexes and Add Marker Listeners
        ///////////////////////////////////////////////////*/

        var locations = [];

        function locationsArrayAndListener (first) {
            var link = first;

            while (link) {

                locations.push(link)

                google.maps.event.addListener(link.marker, 'click', function() {

                    for(var i = 0; i < locations.length; i++) {

                        if(locations[i].marker === this) {
                            window[$(mySwiper.slides[mySwiper.activeIndex]).data('name')].reset();

                            locations[i].highlight();
                            locations[i].moveToSlide();
                        }
                        else {
                            console.log(locations[i].name + ' is not a match');
                        }

                    } // End for loop
                }); // End Marker Click Listener
                link = link.next
            } // End While Loop
        } // End locationsArrayAndListener
        locationsArrayAndListener(broadRipple);

        // Creating Swiper
        if(viewPort < 642) createSwiper(true);
        else createSwiper(false);

        function unhighlight($el) {
            //console.log($el);
            old = window[$('.highlighted').data('name')];
            //console.log(old);
            if(typeof old != 'undefined') {
                //console.log(old)
                old.reset();
            }
            $('.highlighted').removeClass('highlighted');
            $el.addClass('highlighted')
        }


        ///* Add Coordinate on click
        // //////////////////////////////////////////////*/
        //google.maps.event.addListener(map, 'click', function(event) {
        //
        //    // Get Coordinates of Click
        //    window.marker = new google.maps.Marker({position: event.latLng, map: map});
        //    var lat = marker.position.k;
        //    var Lng = marker.position.D;
        //
        //    console.log('before: ' + meridianCoords)
        //
        //    // Add click locaiton to array
        //    meridianCoords.push(new google.maps.LatLng(lat, Lng));
        //    console.log('after: ' + meridianCoords)
        //
        //    // Make array into Polyline
        //    meridianPoly = new google.maps.Polyline({
        //        path: meridianCoords,
        //        geodesic: true,
        //        strokeColor: '#92D300',
        //        strokeOpacity: 1,
        //        strokeWeight: 2
        //    });
        //
        //    // Set Polyline on Map
        //    meridianPoly.setMap(map);
        //
        //    //// Show point
        //    $('#list').append('<p>new google.maps.LatLng(' + lat + ', ' + Lng + '),</p>');
        //
        //
        //});
    }

    window.createSwiper = function(small) {
        window.mySwiper_h = new Swiper('.swiper-container-h',{
            direction:'horizontal',
            loop: false,
            //pagination: '#dot-inner',
            //paginationClickable: true,
            keyboardControl: true,
            autoplay: false,
            autoplayDisableInteraction: true,
            mousewheelControl: true,
            slidesPerView: 1,
            onClick: function(swiper, event) {
                //console.log('change!');
                var last = $(swiper.slides[swiper.activeIndex]).data('name');
                //console.log(last);
                swiper.updateActiveIndex()
                console.log(swiper.activeIndex)

                name = $(swiper.slides[swiper.activeIndex]).data('name');
                //console.log(name + ' is active -----------------------')
                //console.log(name + ' is name of active slide');
                activePair = window[name];
                //console.log(map.getCenter().k)
                //console.log(activePair.center.lat)

                if (map.getCenter().k !== activePair.center.lat) {
                    //if (activePair.previous) {
                    //    activePair.previous.reset();
                    //}
                    //if (activePair.next) {
                    //    activePair.next.reset();
                    //}
                    activePair.highlight();

                }
            }
            //onDestroy: function() {
            //    $('.swiper-slide').css('style', '');
            //    createSwiper(false);
            //
            //},
            //onInit: function(swiper) {
            //    console.log(swiper.params.direction);
            //    swiper.updateSlidesSize();
            //}
        });

        window.mySwiper = new Swiper('.swiper-container-v',{
            direction:'vertical',
            loop: false,
            slidesPerView: 2,
            stimulateTouch:false,
            mousewheelControl: true,
            //pagination: '#dot-inner',
            //paginationClickable: true,
            keyboardControl: true,
            autoplay: false,
            autoplayDisableInteraction: true,
            slideToClickedSlide: true,
            onClick: function(swiper, event) {
                console.log('change!');
                var last = $(swiper.slides[swiper.activeIndex]).data('name');
                console.log(last);
                swiper.updateActiveIndex()
                console.log(swiper.activeIndex)

                name = $(swiper.slides[swiper.activeIndex]).data('name');
                console.log(name + ' is active -----------------------')
                console.log(name + ' is name of active slide');
                activePair = window[name];
                console.log(map.getCenter().k)
                console.log(activePair.center.lat)

                if (map.getCenter().k !== activePair.center.lat) {
                    //if (activePair.previous) {
                    //    activePair.previous.reset();
                    //}
                    //if (activePair.next) {
                    //    activePair.next.reset();
                    //}
                    activePair.highlight();

                }
            }
            //onDestroy: function() {
            //    $('.swiper-slide').attr('style', '');
            //        createSwiper(true);
            //
            //},
            //onInit: function(swiper) {
            //    console.log(swiper.params.direction);
            //    swiper.updateSlidesSize();
            //}
        });
    }

    function debounce(func, wait, immediate) {
        var timeout;
        return function() {
            var context = this, args = arguments;
            var later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };

    var rebootSwiper = debounce(function() {
        console.log('resize!')
        var newViewPort = $(document).width();
        if(viewPort >= 642 && newViewPort < 642) {
            console.log('big to small')
            //mySwiper.destroy();
        }
        else if(viewPort < 642 && newViewPort >= 642) {
            console.log('small to big')
            //mySwiper.destroy();
        }
        else {change=false}
    }, 150);

    window.addEventListener('resize', rebootSwiper);

    google.maps.event.addDomListener(window, 'load', initialize);

});