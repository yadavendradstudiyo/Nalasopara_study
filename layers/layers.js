var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Nalasoparaprecient_1 = new ol.format.GeoJSON();
var features_Nalasoparaprecient_1 = format_Nalasoparaprecient_1.readFeatures(json_Nalasoparaprecient_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nalasoparaprecient_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nalasoparaprecient_1.addFeatures(features_Nalasoparaprecient_1);
var lyr_Nalasoparaprecient_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nalasoparaprecient_1, 
                style: style_Nalasoparaprecient_1,
                popuplayertitle: "Nalasopara precient",
                interactive: false,
                title: '<img src="styles/legend/Nalasoparaprecient_1.png" /> Nalasopara precient'
            });
var format_Roadnetwork_2 = new ol.format.GeoJSON();
var features_Roadnetwork_2 = format_Roadnetwork_2.readFeatures(json_Roadnetwork_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Roadnetwork_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Roadnetwork_2.addFeatures(features_Roadnetwork_2);
var lyr_Roadnetwork_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Roadnetwork_2, 
                style: style_Roadnetwork_2,
                popuplayertitle: "Road network",
                interactive: false,
                title: '<img src="styles/legend/Roadnetwork_2.png" /> Road network'
            });
var format_Secondaryroad_3 = new ol.format.GeoJSON();
var features_Secondaryroad_3 = format_Secondaryroad_3.readFeatures(json_Secondaryroad_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Secondaryroad_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Secondaryroad_3.addFeatures(features_Secondaryroad_3);
var lyr_Secondaryroad_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Secondaryroad_3, 
                style: style_Secondaryroad_3,
                popuplayertitle: "Secondary road",
                interactive: false,
                title: '<img src="styles/legend/Secondaryroad_3.png" /> Secondary road'
            });
var format_SHOPSLOC_4 = new ol.format.GeoJSON();
var features_SHOPSLOC_4 = format_SHOPSLOC_4.readFeatures(json_SHOPSLOC_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SHOPSLOC_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SHOPSLOC_4.addFeatures(features_SHOPSLOC_4);
var lyr_SHOPSLOC_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SHOPSLOC_4, 
                style: style_SHOPSLOC_4,
                popuplayertitle: "SHOPS LOC",
                interactive: true,
    title: 'SHOPS LOC<br />\
    <img src="styles/legend/SHOPSLOC_4_0.png" /> Ayurvedic medicines<br />\
    <img src="styles/legend/SHOPSLOC_4_1.png" /> Biryani<br />\
    <img src="styles/legend/SHOPSLOC_4_2.png" /> Coconut cream desert<br />\
    <img src="styles/legend/SHOPSLOC_4_3.png" /> Farsan<br />\
    <img src="styles/legend/SHOPSLOC_4_4.png" /> Ganpati idols, wood carving\'s<br />\
    <img src="styles/legend/SHOPSLOC_4_5.png" /> Langda mango, bitki mango<br />\
    <img src="styles/legend/SHOPSLOC_4_6.png" /> Mawa and banana cake<br />\
    <img src="styles/legend/SHOPSLOC_4_7.png" /> Mawa cake, mutton pattice<br />\
    <img src="styles/legend/SHOPSLOC_4_8.png" /> n/a<br />\
    <img src="styles/legend/SHOPSLOC_4_9.png" /> Newspaper<br />\
    <img src="styles/legend/SHOPSLOC_4_10.png" /> Rice<br />\
    <img src="styles/legend/SHOPSLOC_4_11.png" /> Seek kabab, gulati kabab, gulabjamun<br />\
    <img src="styles/legend/SHOPSLOC_4_12.png" /> Shir kurma<br />\
    <img src="styles/legend/SHOPSLOC_4_13.png" /> Sugar khari<br />\
    <img src="styles/legend/SHOPSLOC_4_14.png" /> Sukeli, bin bonda banana, elaichi banana<br />\
    <img src="styles/legend/SHOPSLOC_4_15.png" /> Wood carvings, Foldable chair, mandir carvings<br />\
    <img src="styles/legend/SHOPSLOC_4_16.png" /> <br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_Nalasoparaprecient_1.setVisible(true);lyr_Roadnetwork_2.setVisible(true);lyr_Secondaryroad_3.setVisible(true);lyr_SHOPSLOC_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Nalasoparaprecient_1,lyr_Roadnetwork_2,lyr_Secondaryroad_3,lyr_SHOPSLOC_4];
lyr_Nalasoparaprecient_1.set('fieldAliases', {'latitude': 'latitude', 'longitude': 'longitude', 'area_in_me': 'area_in_me', 'confidence': 'confidence', 'full_plus_': 'full_plus_', });
lyr_Roadnetwork_2.set('fieldAliases', {'id': 'id', });
lyr_Secondaryroad_3.set('fieldAliases', {'id': 'id', });
lyr_SHOPSLOC_4.set('fieldAliases', {'start': 'start', 'end': 'end', 'How_would_': 'How_would_', 'Location': 'Location', '_Location_': '_Location_', '_Locatio_1': '_Locatio_1', '_Locatio_2': '_Locatio_2', '_Locatio_3': '_Locatio_3', 'How_long_h': 'How_long_h', 'What_are_t': 'What_are_t', 'What_are_1': 'What_are_1', 'What_are_2': 'What_are_2', 'What_are_3': 'What_are_3', 'What_are_4': 'What_are_4', 'How_do_you': 'How_do_you', 'How_do_y_1': 'How_do_y_1', 'How_do_y_2': 'How_do_y_2', 'How_do_y_3': 'How_do_y_3', 'How_do_y_4': 'How_do_y_4', 'How_do_y_5': 'How_do_y_5', 'How_do_y_6': 'How_do_y_6', 'How_do_y_7': 'How_do_y_7', 'How_do_y_8': 'How_do_y_8', 'What_days_': 'What_days_', 'What_day_1': 'What_day_1', 'What_day_2': 'What_day_2', 'What_day_3': 'What_day_3', 'What_day_4': 'What_day_4', 'What_day_5': 'What_day_5', 'What_day_6': 'What_day_6', 'What_day_7': 'What_day_7', 'Where_do_y': 'Where_do_y', 'Where_do_1': 'Where_do_1', 'Where_do_2': 'Where_do_2', 'Where_do_3': 'Where_do_3', 'Where_do_4': 'Where_do_4', 'Who_are_yo': 'Who_are_yo', 'Who_are__1': 'Who_are__1', 'Who_are__2': 'Who_are__2', 'Who_are__3': 'Who_are__3', 'Who_are__4': 'Who_are__4', 'Is_there_a': 'Is_there_a', 'What_are_5': 'What_are_5', 'What_are_6': 'What_are_6', 'What_are_7': 'What_are_7', 'What_are_8': 'What_are_8', 'What_are_9': 'What_are_9', 'Do_you_spe': 'Do_you_spe', 'Do_you_s_1': 'Do_you_s_1', 'Do_you_s_2': 'Do_you_s_2', 'Specify_th': 'Specify_th', 'How_do_y_9': 'How_do_y_9', 'How_do_y10': 'How_do_y10', 'How_do_y11': 'How_do_y11', 'How_do_y12': 'How_do_y12', 'How_do_y13': 'How_do_y13', 'What_envir': 'What_envir', 'What_env_1': 'What_env_1', 'What_env_2': 'What_env_2', 'What_env_3': 'What_env_3', 'What_env_4': 'What_env_4', 'What_measu': 'What_measu', 'What_mea_1': 'What_mea_1', 'What_mea_2': 'What_mea_2', 'What_mea_3': 'What_mea_3', 'What_mea_4': 'What_mea_4', '__version_': '__version_', 'meta/insta': 'meta/insta', '_uuid': '_uuid', '_submissio': '_submissio', '_tags': '_tags', '_notes': '_notes', '_validatio': '_validatio', });
lyr_Nalasoparaprecient_1.set('fieldImages', {'latitude': 'TextEdit', 'longitude': 'TextEdit', 'area_in_me': 'TextEdit', 'confidence': 'TextEdit', 'full_plus_': 'TextEdit', });
lyr_Roadnetwork_2.set('fieldImages', {'id': 'TextEdit', });
lyr_Secondaryroad_3.set('fieldImages', {'id': 'TextEdit', });
lyr_SHOPSLOC_4.set('fieldImages', {'start': 'TextEdit', 'end': 'TextEdit', 'How_would_': 'TextEdit', 'Location': 'TextEdit', '_Location_': 'TextEdit', '_Locatio_1': 'TextEdit', '_Locatio_2': 'Range', '_Locatio_3': 'Range', 'How_long_h': 'TextEdit', 'What_are_t': 'Range', 'What_are_1': 'Range', 'What_are_2': 'Range', 'What_are_3': 'Range', 'What_are_4': 'Range', 'How_do_you': 'Range', 'How_do_y_1': 'Range', 'How_do_y_2': 'Range', 'How_do_y_3': 'Range', 'How_do_y_4': 'Range', 'How_do_y_5': 'Range', 'How_do_y_6': 'Range', 'How_do_y_7': 'Range', 'How_do_y_8': 'Range', 'What_days_': 'Range', 'What_day_1': 'Range', 'What_day_2': 'Range', 'What_day_3': 'Range', 'What_day_4': 'Range', 'What_day_5': 'Range', 'What_day_6': 'Range', 'What_day_7': 'Range', 'Where_do_y': 'Range', 'Where_do_1': 'Range', 'Where_do_2': 'Range', 'Where_do_3': 'Range', 'Where_do_4': 'Range', 'Who_are_yo': 'Range', 'Who_are__1': 'Range', 'Who_are__2': 'Range', 'Who_are__3': 'Range', 'Who_are__4': 'Range', 'Is_there_a': 'TextEdit', 'What_are_5': 'Range', 'What_are_6': 'Range', 'What_are_7': 'Range', 'What_are_8': 'Range', 'What_are_9': 'Range', 'Do_you_spe': 'TextEdit', 'Do_you_s_1': 'TextEdit', 'Do_you_s_2': 'TextEdit', 'Specify_th': 'TextEdit', 'How_do_y_9': 'TextEdit', 'How_do_y10': 'TextEdit', 'How_do_y11': 'TextEdit', 'How_do_y12': 'TextEdit', 'How_do_y13': 'TextEdit', 'What_envir': 'TextEdit', 'What_env_1': 'TextEdit', 'What_env_2': 'TextEdit', 'What_env_3': 'TextEdit', 'What_env_4': 'TextEdit', 'What_measu': 'TextEdit', 'What_mea_1': 'TextEdit', 'What_mea_2': 'TextEdit', 'What_mea_3': 'TextEdit', 'What_mea_4': 'TextEdit', '__version_': 'TextEdit', 'meta/insta': 'TextEdit', '_uuid': 'TextEdit', '_submissio': 'TextEdit', '_tags': 'TextEdit', '_notes': 'TextEdit', '_validatio': 'TextEdit', });
lyr_Nalasoparaprecient_1.set('fieldLabels', {'latitude': 'no label', 'longitude': 'no label', 'area_in_me': 'no label', 'confidence': 'no label', 'full_plus_': 'no label', });
lyr_Roadnetwork_2.set('fieldLabels', {'id': 'no label', });
lyr_Secondaryroad_3.set('fieldLabels', {'id': 'hidden field', });
lyr_SHOPSLOC_4.set('fieldLabels', {'start': 'hidden field', 'end': 'hidden field', 'How_would_': 'inline label - visible with data', 'Location': 'inline label - visible with data', '_Location_': 'hidden field', '_Locatio_1': 'hidden field', '_Locatio_2': 'hidden field', '_Locatio_3': 'hidden field', 'How_long_h': 'inline label - visible with data', 'What_are_t': 'hidden field', 'What_are_1': 'hidden field', 'What_are_2': 'hidden field', 'What_are_3': 'hidden field', 'What_are_4': 'hidden field', 'How_do_you': 'hidden field', 'How_do_y_1': 'hidden field', 'How_do_y_2': 'hidden field', 'How_do_y_3': 'hidden field', 'How_do_y_4': 'hidden field', 'How_do_y_5': 'hidden field', 'How_do_y_6': 'hidden field', 'How_do_y_7': 'hidden field', 'How_do_y_8': 'hidden field', 'What_days_': 'hidden field', 'What_day_1': 'hidden field', 'What_day_2': 'hidden field', 'What_day_3': 'hidden field', 'What_day_4': 'hidden field', 'What_day_5': 'hidden field', 'What_day_6': 'hidden field', 'What_day_7': 'hidden field', 'Where_do_y': 'hidden field', 'Where_do_1': 'hidden field', 'Where_do_2': 'hidden field', 'Where_do_3': 'hidden field', 'Where_do_4': 'hidden field', 'Who_are_yo': 'hidden field', 'Who_are__1': 'hidden field', 'Who_are__2': 'hidden field', 'Who_are__3': 'hidden field', 'Who_are__4': 'hidden field', 'Is_there_a': 'hidden field', 'What_are_5': 'hidden field', 'What_are_6': 'hidden field', 'What_are_7': 'hidden field', 'What_are_8': 'hidden field', 'What_are_9': 'hidden field', 'Do_you_spe': 'hidden field', 'Do_you_s_1': 'hidden field', 'Do_you_s_2': 'hidden field', 'Specify_th': 'inline label - visible with data', 'How_do_y_9': 'hidden field', 'How_do_y10': 'hidden field', 'How_do_y11': 'hidden field', 'How_do_y12': 'hidden field', 'How_do_y13': 'hidden field', 'What_envir': 'hidden field', 'What_env_1': 'hidden field', 'What_env_2': 'hidden field', 'What_env_3': 'hidden field', 'What_env_4': 'hidden field', 'What_measu': 'hidden field', 'What_mea_1': 'hidden field', 'What_mea_2': 'hidden field', 'What_mea_3': 'hidden field', 'What_mea_4': 'hidden field', '__version_': 'hidden field', 'meta/insta': 'hidden field', '_uuid': 'hidden field', '_submissio': 'hidden field', '_tags': 'hidden field', '_notes': 'hidden field', '_validatio': 'hidden field', });
lyr_SHOPSLOC_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});