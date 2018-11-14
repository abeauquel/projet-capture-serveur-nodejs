'use strict';
var controleurHumidite = require('../controleur/controleurHumidite');

module.exports = function(app) {
var motDePasse="paul";

    // humidite Routes
    app.get('/humidites' , (req, res) => {
        if(req.headers.authentification !== motDePasse){
            console.log("Routage humidite : accees refuse")
            return res.status(401).send("Acces refuse");
        }
        console.log('Routage humidite : get toutes les humidites');
       return controleurHumidite.listerHumites(req, res);
    });

    app.post('/humidite' , (req, res) => {
        if(req.headers.authentification !== motDePasse){
            console.log("Routage humidite : accees refuse")
            return res.status(401).send("Acces refuse");
        }
        console.log('Routage humidite : insertion d une humidite');
        return controleurHumidite.insererHumidite(req, res);
    });

    app.put('/humidite/:id' , (req, res) => {
        if(req.headers.authentification !== motDePasse){
            console.log("Routage humidite : accees refuse")
            return res.status(401).send("Acces refuse");
        }
        console.log('Routage humidite : modification d une humidite');
        return controleurHumidite.modificationHumidite(req, res);
    });

    app.delete('/humidite/:id' , (req, res) => {
        if(req.headers.authentification !== motDePasse){
            console.log("Routage humidite : accees refuse")
            return res.status(401).send("Acces refuse");
        }
        console.log('Routage humidite : suppression d une humidite');
        return controleurHumidite.suppressionHumidite(req, res);
    });
};