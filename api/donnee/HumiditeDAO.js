var baseDeDonnees = require('./BaseDeDonnees').getInstance();

export const NOM_TABLE = "humidite";
export const NOM_CHAMP_ID = "id";
export const NOM_CHAMP_VALEUR = "valeur";
export const NOM_CHAMP_DATE = "date";

exports.listerHumites = async function() {
    console.log("select de toutes les humidites");
    const SELECT_TOUTES_LES_HUMIDITES = 'select * from humidite';
    return await baseDeDonnees.query(SELECT_TOUTES_LES_HUMIDITES);
}

exports.trouverUne = async function (idHumidite) {
    const SELECT_UNE_HUMIDITE = 'select * FROM '+NOM_TABLE+ ' WHERE '+NOM_CHAMP_ID+'= $1 ';
    return baseDeDonnees.query(SELECT_UNE_HUMIDITE, [idHumidite]);
}

exports.modifierHumidite = async function (idHumidite, valeurHumidite, dateHumidite) {
    const MODIFIER_UNE_HUMIDITE = 'UPDATE '+NOM_TABLE+' SET '+NOM_CHAMP_VALEUR+'=$2, '+NOM_CHAMP_DATE+'=$3 WHERE '+NOM_CHAMP_ID+'= $1 RETURNING *';
    const parametres = [idHumidite, valeurHumidite, dateHumidite];
    return baseDeDonnees.query(MODIFIER_UNE_HUMIDITE, parametres);
}

exports.insererHumidite = async function (valeurHumidite, dateHumidite) {
    const INSERT_UNE_HUMIDITE = 'INSERT INTO '+NOM_TABLE+' ('+NOM_CHAMP_VALEUR+', '+NOM_CHAMP_DATE+') VALUES($1, $2) RETURNING *';
    const parametres = [valeurHumidite, dateHumidite];
    return baseDeDonnees.query(INSERT_UNE_HUMIDITE, parametres);
}

exports.suppressionHumidite = async function (idHumidite) {
    const DELETE_UNE_HUMIDITE = 'DELETE FROM '+NOM_TABLE+ ' WHERE '+NOM_CHAMP_ID+'= $1 RETURNING *';
    return baseDeDonnees.query(DELETE_UNE_HUMIDITE, [idHumidite]);
}