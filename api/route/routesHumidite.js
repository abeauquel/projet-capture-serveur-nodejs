'use strict';
var controleurHumidite = require('../controleur/controleurHumidite');

module.exports = function(app) {

    // humidite Routes

    app.get('/humidites' , (req, res) => {
        console.log('get toutes les humidites');
       return controleurHumidite.listerHumites(req, res);
    });

    app.post('/humidite' , (req, res) => {
        console.log('insertion d une humidite');
        return controleurHumidite.insererHumidite(req, res);
    });
};