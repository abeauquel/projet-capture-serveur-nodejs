var humiditeDAO = require('../donnee/HumiditeDAO');

    /**
     * Récupérer toutes les humidités
     * @param {object} requete
     * @param {object} reponse
     * @returns {object} reflections array
     */
    exports.listerHumites = async function(requete, reponse) {
        try {
            const { rows } = await humiditeDAO.listerHumites();
            return reponse.status(200).send({ rows });
        } catch(error) {
            console.log(error)
            return reponse.status(400).send(error);
        }
    }
