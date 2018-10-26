var humiditeDAO = require('../donnee/HumiditeDAO');

/**
 * Récupérer toutes les humidités
 * @param {object} requete
 * @param {object} reponse
 * @returns {Promise<*|void>}
 */
exports.listerHumites = async function(requete, reponse) {
    try {
        const { rows : humidites } = await humiditeDAO.listerHumites();
        return reponse.status(200).send({ humidites });
    } catch(error) {
        console.log(error);
        return reponse.status(400).send(error);
    }
}

/***
 *Insertion d'une humidite
 * @param requete
 * @param reponse
 * @returns {Promise<*|void>}
 */
exports.insererHumidite = async function(requete, reponse) {
    try {

        //Pour le moment le json envoyé est un tableau d'une humidite
        let valeurHumidite = requete.body[humiditeDAO.NOM_TABLE][0][humiditeDAO.NOM_CHAMP_VALEUR];
        let dateHumidite = requete.body[humiditeDAO.NOM_TABLE][0][humiditeDAO.NOM_CHAMP_DATE];

        const { rows: humidites } = await humiditeDAO.insererHumidite(valeurHumidite, dateHumidite);

        console.log("Inserton d'une humidite : " + "valeur : "+valeurHumidite + ", date : "+dateHumidite);
        return reponse.status(200).send(humidites);
    } catch(error) {
        console.log(error);
        return reponse.status(400).send(error);
    }
}

/***
 *Modification d'une humidite
 * @param requete
 * @param reponse
 * @returns {Promise<*|void>}
 */
exports.modificationHumidite = async function(requete, reponse) {
    try {
        let idHumidite = requete.params.id;

        const {rows :resultatTrouverUne}  = await humiditeDAO.trouverUne(idHumidite);

        if(!resultatTrouverUne[0]) {
            return reponse.status(404).send({'message': humiditeDAO.NOM_TABLE+" n'existe pas"});
        }

        //Pour le moment le json envoyé est un tableau d'une humidite
        let valeurHumidite = requete.body[humiditeDAO.NOM_TABLE][0][humiditeDAO.NOM_CHAMP_VALEUR] || resultatTrouverUne[0][humiditeDAO.NOM_CHAMP_VALEUR];
        let dateHumidite = requete.body[humiditeDAO.NOM_TABLE][0][humiditeDAO.NOM_CHAMP_DATE] || resultatTrouverUne[0][humiditeDAO.NOM_CHAMP_DATE];

        const { rows: humidites } = await humiditeDAO.modifierHumidite(idHumidite,valeurHumidite, dateHumidite);

        console.log("Modification d'une humidite : id :"+idHumidite + ", valeur : "+valeurHumidite + ", date : "+dateHumidite);
        return reponse.status(200).send(humidites);
    } catch(error) {
        console.log(error);
        return reponse.status(400).send(error);
    }
}

/***
 * Suppression d'une humidité
 * @param requete
 * @param reponse
 * @returns {Promise<*|void>}
 */
exports.suppressionHumidite = async function(requete, reponse) {
    try {
        let idHumidite = requete.params.id;

        const { rows : humidites } = await humiditeDAO.suppressionHumidite(idHumidite);
        if(!humidites[0]) {
            return reponse.status(404).send({'message': humiditeDAO.NOM_TABLE+" n'existe pas"});
        }
        console.log("Suppression de l'humidite avec l'id: " + idHumidite);
        return reponse.status(200).send(humidites);
    } catch(error) {
        console.log(error);
        return reponse.status(400).send(error);
    }
}
