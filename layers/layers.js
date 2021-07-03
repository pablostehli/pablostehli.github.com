var wms_layers = [];

var format_Prueba_0 = new ol.format.GeoJSON();
var features_Prueba_0 = format_Prueba_0.readFeatures(json_Prueba_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Prueba_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Prueba_0.addFeatures(features_Prueba_0);
var lyr_Prueba_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Prueba_0, 
                style: style_Prueba_0,
                interactive: true,
    title: 'Prueba<br />\
    <img src="styles/legend/Prueba_0_0.png" /> Distribucion 1<br />\
    <img src="styles/legend/Prueba_0_1.png" /> Distribucion 2<br />\
    <img src="styles/legend/Prueba_0_2.png" /> Distribucion 3<br />\
    <img src="styles/legend/Prueba_0_3.png" /> Distribucion 0<br />'
        });

lyr_Prueba_0.setVisible(true);
var layersList = [lyr_Prueba_0];
lyr_Prueba_0.set('fieldAliases', {'DN': 'DN', });
lyr_Prueba_0.set('fieldImages', {'DN': 'Range', });
lyr_Prueba_0.set('fieldLabels', {'DN': 'no label', });
lyr_Prueba_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});