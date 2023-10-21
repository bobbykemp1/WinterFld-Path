var wms_layers = [];


        var lyr_GoogleSat_0 = new ol.layer.Tile({
            'title': 'Google Sat',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });

        var lyr_NLSOld1_1 = new ol.layer.Tile({
            'title': 'NLS Old 1',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://api.maptiler.com/tiles/uk-osgb10k1888/{z}/{x}/{y}.jpg?key=0e1FOgfCSpysyBGm1F79'
            })
        });

        var lyr_OpenStreetMap_2 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_SJ97nw_DTM_1m_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "SJ97nw_DTM_1m",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/SJ97nw_DTM_1m_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-239511.202839, 7033452.778234, -231147.323630, 7041836.605979]
                            })
                        });
var format_WntrFldFmPth_4 = new ol.format.GeoJSON();
var features_WntrFldFmPth_4 = format_WntrFldFmPth_4.readFeatures(json_WntrFldFmPth_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WntrFldFmPth_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WntrFldFmPth_4.addFeatures(features_WntrFldFmPth_4);
var lyr_WntrFldFmPth_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WntrFldFmPth_4, 
                style: style_WntrFldFmPth_4,
                interactive: true,
                title: '<img src="styles/legend/WntrFldFmPth_4.png" /> WntrFld Fm + Pth'
            });

lyr_GoogleSat_0.setVisible(true);lyr_NLSOld1_1.setVisible(true);lyr_OpenStreetMap_2.setVisible(true);lyr_SJ97nw_DTM_1m_3.setVisible(true);lyr_WntrFldFmPth_4.setVisible(true);
var layersList = [lyr_GoogleSat_0,lyr_NLSOld1_1,lyr_OpenStreetMap_2,lyr_SJ97nw_DTM_1m_3,lyr_WntrFldFmPth_4];
lyr_WntrFldFmPth_4.set('fieldAliases', {'FID': 'FID', });
lyr_WntrFldFmPth_4.set('fieldImages', {'FID': '', });
lyr_WntrFldFmPth_4.set('fieldLabels', {'FID': 'no label', });
lyr_WntrFldFmPth_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});