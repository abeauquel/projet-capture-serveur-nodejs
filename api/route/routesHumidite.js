'use strict';
var controleurHumidite = require('../controleur/controleurHumidite');

module.exports = function(app) {

    // humidite Routes

    app.get('/humidite' , (req, res) => {
       return controleurHumidite.listerHumites(req, res);
    });
};