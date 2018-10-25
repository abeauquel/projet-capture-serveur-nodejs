var humiditeDAO = require('../donnee/HumiditeDAO');
const controleurHumidite = {

    /**
     * Récupérer toutes les humidités
     * @param {object} requete
     * @param {object} reponse
     * @returns {object} reflections array
     */
    async listerHumites(requete, reponse) {
        try {
            const { rows } = await humiditeDAO.listerHumites();
            return reponse.status(200).send({ rows });
        } catch(error) {
            return reponse.status(400).send(error);
        }
    },
}