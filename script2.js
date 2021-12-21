mapboxgl.accessToken = 'pk.eyJ1IjoiaGVycmlwdXJiYSIsImEiOiJja3dtMmUwMmowNW01MnZsNjd4NWQwbWpoIn0.f0iD4HACqlQnt3kBfiOLVQ';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [98.802139,2.603773],
    zoom: 10
});
map.on('load', () => {
    map.addSource('beachs', {
        // This GeoJSON contains features that include an "icon"
        // property. The value of the "icon" property corresponds
        // to an image in the Mapbox Streets style's sprite.
        'type': 'geojson',
        'data': {
            'type': 'FeatureCollection',
            'features': [
                {
                    'type': 'Feature',
                    'properties': {
                        'description':  `
                            <div class="mapbox_conteiner">
                                <div class="image">
                                    <img width="150" height="150" src="./image/PantaiBatuHoda.jpg" alt="" />    
                                </div>
                                <div class="detail">
                                    <h3>Pantai Batu Hoda</h3>
                                    <div class="bintang">
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star"></span>
                                        <span style="padding-left: 5px;">4.0</span>
                                    </div>
                                </div>
                            </div>
                            `,
                        'icon': 'beach-15'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [98.79942619839991,2.787560738308471]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description': `
                            <div class="mapbox_conteiner">
                                <div class="image">
                                    <img width="150" height="150" src="./image/PantaiLumbanBul-bulBalige.jpg" alt="" />    
                                </div>
                                <div class="detail">
                                    <h3>Pantai Lumban Bul-bul Balige</h3>
                                    <div class="bintang">
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star"></span>
                                        <span style="padding-left: 5px;">4.0</span>
                                    </div>
                                </div>
                            </div>
                            `,
                        'icon': 'beach-15'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [99.07321861281973,2.3485077460866095]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description': `
                            <div class="mapbox_conteiner">
                                <div class="image">
                                    <img width="150" height="150" src="./image/PantaiSilalahi.jpg" alt="" />    
                                </div>
                                <div class="detail">
                                    <h3>Pantai Silalahi</h3>
                                    <div class="bintang">
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star"></span>
                                        <span style="padding-left: 5px;">4.0</span>
                                    </div>
                                </div>
                            </div>
                            `,
                        'icon': 'beach-15'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [98.52787132788013,2.794732261703909]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description': `
                            <div class="mapbox_conteiner">
                                <div class="image">
                                    <img width="150" height="150" src="./image/PantaiParis.jpg" alt="" />    
                                </div>
                                <div class="detail">
                                    <h3>Pantai Paris</h3>
                                    <div class="bintang">
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star"></span>
                                        <span style="padding-left: 5px;">4.0</span>
                                    </div>
                                </div>
                            </div>
                            `,
                        'icon': 'beach-15'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [98.78004716038205,2.8015986034336815]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description': `
                            <div class="mapbox_conteiner">
                                <div class="image">
                                    <img width="150" height="150" src="./image/PantaiPasirPutihParbaba.jpg" alt="" />    
                                </div>
                                <div class="detail">
                                    <h3>Pantai Pasir Putih Parbaba</h3>
                                    <div class="bintang">
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star"></span>
                                        <span style="padding-left: 5px;">4.0</span>
                                    </div>
                                </div>
                            </div>
                        `,
                        'icon': 'beach-15'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [98.68984224986737,2.695738907842612]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description': `
                            <div class="mapbox_conteiner">
                                <div class="image">
                                    <img width="150" height="150" src="./image/PantaiTambunanSunset.jpg" alt="" />    
                                </div>
                                <div class="detail">
                                    <h3>Pantai Tambunan Sunset</h3>
                                    <div class="bintang">
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star"></span>
                                        <span style="padding-left: 5px;">4.0</span>
                                    </div>
                                </div>
                            </div>
                            `,
                        'icon': 'beach-15'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [99.08465584881358,2.3510053424012307]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description': `
                            <div class="mapbox_conteiner">
                                <div class="image">
                                    <img width="150" height="150" src="./image/PantaiPasirPutihParparean.jpg" alt="" />    
                                </div>
                                <div class="detail">
                                    <h3>Pantai Pasir Putih Parparean</h3>
                                    <div class="bintang">
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star"></span>
                                        <span style="padding-left: 5px;">4.0</span>
                                    </div>
                                </div>
                            </div>
                            `,
                        'icon': 'beach-15'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [99.14910136774307,2.431919297003413]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description': `
                            <div class="mapbox_conteiner">
                                <div class="image">
                                    <img width="150" height="150" src="./image/PantaiPasifikToba.jpg" alt="" />    
                                </div>
                                <div class="detail">
                                    <h3>Pantai Pasifik Toba</h3>
                                    <div class="bintang">
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star"></span>
                                        <span style="padding-left: 5px;">4.0</span>
                                    </div>
                                </div>
                            </div>
                            `,
                        'icon': 'beach-15'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [99.13930570063408,2.434533973901966]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description': `
                            <div style="text-align:center">
                                <h3>Pantai Carita</h3>
                                <img width="150" height="150" src="./image/PantaiCarita.jpg" alt="" />
                            </div>
                            <div class="mapbox_conteiner">
                                <div class="image">
                                    <img width="150" height="150" src="./image/PantaiCarita.jpg" alt="" />    
                                </div>
                                <div class="detail">
                                    <h3>Pantai Carita</h3>
                                    <div class="bintang">
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star"></span>
                                        <span style="padding-left: 5px;">4.0</span>
                                    </div>
                                </div>
                            </div>
                            `,
                        'icon': 'beach-15'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [98.7796940042903,2.8021787262781985]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description': `
                            <div class="mapbox_conteiner">
                                <div class="image">
                                    <img width="150" height="150" src="./image/ArdhanaBeachTigaras.jpg" alt="" />    
                                </div>
                                <div class="detail">
                                    <h3>Ardhana Beach Tigaras</h3>
                                    <div class="bintang">
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star"></span>
                                        <span style="padding-left: 5px;">4.0</span>
                                    </div>
                                </div>
                            </div>
                            `,
                        'icon': 'beach-15'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [98.7806803523957,2.801283968303503]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description': `
                            <div class="mapbox_conteiner">
                                <div class="image">
                                    <img width="150" height="150" src="./image/PantaiNahinanTigaras.jpg" alt="" />    
                                </div>
                                <div class="detail">
                                    <h3>Pantai Nahinan Tigaras</h3>
                                    <div class="bintang">
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star"></span>
                                        <span style="padding-left: 5px;">4.0</span>
                                    </div>
                                </div>
                            </div>
                            `,
                        'icon': 'beach-15'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [98.78258232867412, 2.800967750335562 ]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description': `
                            <div class="mapbox_conteiner">
                                <div class="image">
                                    <img width="150" height="150" src="./image/PantaiTuk-Tuk.jpg" alt="" />    
                                </div>
                                <div class="detail">
                                    <h3>Pantai Tuk-Tuk</h3>
                                    <div class="bintang">
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star"></span>
                                        <span style="padding-left: 5px;">4.0</span>
                                    </div>
                                </div>
                            </div>
                            `,
                        'icon': 'beach-15'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [98.76276079075103,2.8121956551272715]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description': `
                            <div class="mapbox_conteiner">
                                <div class="image">
                                    <img width="150" height="150" src="./image/PantaiArofan.jpg" alt="" />   
                                </div>
                                <div class="detail">
                                    <h3>Pantai Arofan</h3>
                                    <div class="bintang">
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star"></span>
                                        <span style="padding-left: 5px;">4.0</span>
                                    </div>
                                </div>
                            </div>
                            `,
                        'icon': 'beach-15'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [98.76262969372408,2.8125666493383457]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description': `
                            <div class="mapbox_conteiner">
                                <div class="image">
                                    <img width="150" height="150" src="./image/PantaiParopo.jpg" alt="" />    
                                </div>
                                <div class="detail">
                                    <h3>Pantai Paropo</h3>
                                    <div class="bintang">
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star"></span>
                                        <span style="padding-left: 5px;">4.0</span>
                                    </div>
                                </div>
                            </div>
                            `,
                        'icon': 'beach-15'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [98.52907013542473,2.844657707947327]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description': `
                            <div class="mapbox_conteiner">
                                <div class="image">
                                    <img width="150" height="150" src="./image/PantaiLetersia.jpg" alt="" />    
                                </div>
                                <div class="detail">
                                    <h3>Pantai Letersia</h3>
                                    <div class="bintang">
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star"></span>
                                        <span style="padding-left: 5px;">4.0</span>
                                    </div>
                                </div>
                            </div>
                            `,
                        'icon': 'beach-15'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [98.52771732435781,2.8323588913889193]
                    }
                },
            ]
        }
    });
    // Add a layer showing the beachs.
    map.addLayer({
        'id': 'beachs',
        'type': 'symbol',
        'source': 'beachs',
        'layout': {
            'icon-image': '{icon}',
            'icon-allow-overlap': true
        }
    });

    // When a click event occurs on a feature in the beachs layer, open a popup at the
    // location of the feature, with description HTML from its properties.
    map.on('click', 'beachs', (e) => {
        // Copy coordinates array.
        const coordinates = e.features[0].geometry.coordinates.slice();
        const description = e.features[0].properties.description;

        // Ensure that if the map is zoomed out such that multiple
        // copies of the feature are visible, the popup appears
        // over the copy being pointed to.
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        new mapboxgl.Popup()
            .setLngLat(coordinates)
            .setHTML(description)
            .addTo(map);
    });

    // Change the cursor to a pointer when the mouse is over the beachs layer.
    map.on('mouseenter', 'beachs', () => {
        map.getCanvas().style.cursor = 'pointer';
    });

    // Change it back to a pointer when it leaves.
    map.on('mouseleave', 'beachs', () => {
        map.getCanvas().style.cursor = '';
    });

    map.addSource('hotels', {
        // This GeoJSON contains features that include an "icon"
        // property. The value of the "icon" property corresponds
        // to an image in the Mapbox Streets style's sprite.
        'type': 'geojson',
        'data': {
            'type': 'FeatureCollection',
            'features': [
                {
                    'type': 'Feature',
                    'properties': {
                        'description':  `
                            <div class="mapbox_conteiner">
                                <div class="image">
                                    <img width="150" height="150" src="./image/Zoé'sParadiseWaterfrontHotel.jpg" alt="" />    
                                </div>
                                <div class="detail">
                                    <h3>Zoé's Paradise Waterfront Hotel</h3>
                                    <div class="bintang">
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star"></span>
                                        <span style="padding-left: 5px;">4.0</span>
                                    </div>
                                    <h4>Rp 300.000/mlm</h4>
                                </div>
                            </div>
                            `,
                        'icon': 'lodging-15'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [98.8570297075221,2.6700628596398177]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description':  `
                            <div class="mapbox_conteiner">
                                <div class="image">
                                    <img width="150" height="150" src="./image/HOTELRAJAPasirPutihParbaba.JPG" alt="" />    
                                </div>
                                <div class="detail">
                                    <h3>HOTEL RAJA Pasir Putih Parbaba</h3>
                                    <div class="bintang">
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star"></span>
                                        <span style="padding-left: 5px;">4.0</span>
                                    </div>
                                    <h4>Rp 300.000/mlm</h4>
                                </div>
                            </div>
                            `,
                        'icon': 'lodging-15'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [98.69041716718021,2.6947472232525165]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description':  `
                            <div class="mapbox_conteiner">
                                <div class="image">
                                    <img width="150" height="150" src="./image/TonggingPointHotel.jpg" alt="" />    
                                </div>
                                <div class="detail">
                                    <h3>Tongging Point Hotel</h3>
                                    <div class="bintang">
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star"></span>
                                        <span style="padding-left: 5px;">4.0</span>
                                    </div>
                                    <h4>Rp 300.000/mlm</h4>
                                </div>
                            </div>
                            `,
                        'icon': 'lodging-15'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [98.50729326754791,2.8879065571499027]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description':  `
                            <div class="mapbox_conteiner">
                                <div class="image">
                                    <img width="150" height="150" src="./image/MartabeHotel&Restaurant.jpg" alt="" />   
                                </div>
                                <div class="detail">
                                    <h3>Martabe Hotel & Restaurant</h3>
                                    <div class="bintang">
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star"></span>
                                        <span style="padding-left: 5px;">4.0</span>
                                    </div>
                                    <h4>Rp 300.000/mlm</h4>
                                </div>
                            </div>
                            `,
                        'icon': 'lodging-15'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [98.53772245799006,2.7876286352131276]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description':  `
                            <div class="mapbox_conteiner">
                                <div class="image">
                                    <img width="150" height="150" src="./image/HotelNabasa.jpg" alt="" />   
                                </div>
                                <div class="detail">
                                    <h3>Hotel Nabasa</h3>
                                    <div class="bintang">
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star"></span>
                                        <span style="padding-left: 5px;">4.0</span>
                                    </div>
                                    <h4>Rp 300.000/mlm</h4>
                                </div>
                            </div>
                            `,
                        'icon': 'lodging-15'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [99.06234178458955,2.3361229754362807]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description':  `
                            <div class="mapbox_conteiner">
                                <div class="image">
                                    <img width="150" height="150" src="./image/HomestayItaPagarBatu.jpg" alt="" />    
                                </div>
                                <div class="detail">
                                    <h3>Homestay Ita Pagar Batu</h3>
                                    <div class="bintang">
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star"></span>
                                        <span style="padding-left: 5px;">4.0</span>
                                    </div>
                                    <h4>Rp 300.000/mlm</h4>
                                </div>
                            </div>
                            `,
                        'icon': 'lodging-15'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [99.04946724456067,2.3322151958508464]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description':  `
                            <div class="mapbox_conteiner">
                                <div class="image">
                                    <img width="150" height="150" src="./image/LabersaTobaHotel&ConventionCentre.jpg" alt="" />
                                </div>
                                <div class="detail">
                                    <h3>Labersa Toba Hotel & Convention Centre</h3>
                                    <div class="bintang">
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star"></span>
                                        <span style="padding-left: 5px;">4.0</span>
                                    </div>
                                    <h4>Rp 300.000/mlm</h4>
                                </div>
                            </div>
                            `,
                        'icon': 'lodging-15'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [99.08148290456943,2.3392606923885206]
                    }
                },
            ]
        }
    });
    // Add a layer showing the hotels.
    map.addLayer({
        'id': 'hotels',
        'type': 'symbol',
        'source': 'hotels',
        'layout': {
            'icon-image': '{icon}',
            'icon-allow-overlap': true
        }
    });

    // When a click event occurs on a feature in the hotels layer, open a popup at the
    // location of the feature, with description HTML from its properties.
    map.on('click', 'hotels', (e) => {
        // Copy coordinates array.
        const coordinates = e.features[0].geometry.coordinates.slice();
        const description = e.features[0].properties.description;

        // Ensure that if the map is zoomed out such that multiple
        // copies of the feature are visible, the popup appears
        // over the copy being pointed to.
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        new mapboxgl.Popup()
            .setLngLat(coordinates)
            .setHTML(description)
            .addTo(map);
    });

    // Change the cursor to a pointer when the mouse is over the hotels layer.
    map.on('mouseenter', 'hotels', () => {
        map.getCanvas().style.cursor = 'pointer';
    });

    // Change it back to a pointer when it leaves.
    map.on('mouseleave', 'hotels', () => {
        map.getCanvas().style.cursor = '';
    });
});

map.addControl(new mapboxgl.NavigationControl());

map.addControl(new mapboxgl.NavigationControl());
    map.addControl(
        new MapboxDirections({
        accessToken: mapboxgl.accessToken
        }),
        'top-left'
        );
map.addControl(new mapboxgl.FullscreenControl());