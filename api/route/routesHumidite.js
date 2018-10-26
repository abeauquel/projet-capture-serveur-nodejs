'use strict';
var controleurHumidite = require('../controleur/controleurHumidite');

module.exports = function(app) {

    // humidite Routes

    app.get('/humidites' , (req, res) => {
        console.log('Routage humidite : get toutes les humidites');
       return controleurHumidite.listerHumites(req, res);
    });

    app.post('/humidite' , (req, res) => {
        console.log('Routage humidite : insertion d une humidite');
        return controleurHumidite.insererHumidite(req, res);
    });

    app.delete('/humidite/:id' , (req, res) => {
        console.log('Routage humidite : suppression d une humidite');
        return controleurHumidite.suppressionHumidite(req, res);
    });
};