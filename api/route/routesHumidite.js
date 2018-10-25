'use strict';
module.exports = function(app) {
    var humiditeDAO = require('../donnee/HumiditeDAO');

    // humidite Routes
    app.route('/humidites')
        .get(humiditeDAO.listerHumites())

    app.route('/humidite/:dd')
        .post(humiditeDAO.insererHumidite())
};