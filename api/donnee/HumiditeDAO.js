var baseDeDonnees = require('./BaseDeDonnees').getInstance();

export const NOM_TABLE = "humidite";
export const NOM_CHAMP_ID = "id";
export const NOM_CHAMP_VALEUR = "valeur";
export const NOM_CHAMP_DATE = "date";

    exports.listerHumites = async function()
{
    console.log("select de toutes les humidites");

    const SELECT_TOUTES_LES_HUMIDITES = 'select * from humidite';
    return await baseDeDonnees.query(SELECT_TOUTES_LES_HUMIDITES);

}

exports.insererHumidite = async function (valeurHumidite, dateHumidite) {
    const INSERT_HUMIDITE = 'INSERT INTO '+NOM_TABLE+' ('+NOM_CHAMP_VALEUR+', '+NOM_CHAMP_DATE+') VALUES($1, $2) RETURNING *';
    const parametres = [valeurHumidite, dateHumidite];
    return baseDeDonnees.query(INSERT_HUMIDITE, parametres);
}

exports.suppressionHumidite = async function (idHumidite) {
    const DELETE_HUMIDITE = 'DELETE FROM '+NOM_TABLE+ ' WHERE '+NOM_CHAMP_ID+'= $1 RETURNING *';
    return baseDeDonnees.query(DELETE_HUMIDITE, [idHumidite]);
}