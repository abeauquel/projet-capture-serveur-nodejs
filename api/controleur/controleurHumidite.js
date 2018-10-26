var humiditeDAO = require('../donnee/HumiditeDAO');

    /**
     * Récupérer toutes les humidités
     * @param {object} requete
     * @param {object} reponse
     * @returns {object} reflections array
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

    exports.insererHumidite = async function(requete, reponse) {
    try {

        //Pour le moment le json envoyé est un tableau d'une humidite
        let valeurHumidite = requete.body[humiditeDAO.NOM_TABLE][0][humiditeDAO.NOM_CHAMP_VALEUR];
        let dateHumidite = requete.body[humiditeDAO.NOM_TABLE][0][humiditeDAO.NOM_CHAMP_DATE];

        const { rows } = await humiditeDAO.insererHumidite(valeurHumidite, dateHumidite);

        console.log("Inserton d'une humidite : " + "valeur : "+valeurHumidite + ", date : "+dateHumidite);
        return reponse.status(200).send(valeurHumidite);
    } catch(error) {
        console.log(error);
        return reponse.status(400).send(error);
    }
}
