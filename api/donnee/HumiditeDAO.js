var baseDeDonnees = require('./BaseDeDonnees').getInstance();

const NOM_TABLE = "humidite";
const NOM_CHAMP_ID = "id";
const NOM_CHAMP_VALEUR = "valeur";
const NOM_CHAMP_DATE = "date";

    exports.listerHumites = async function()
{
    // console.log('base de donnee ' + JSON.stringify(basededonnees));
    const SELECT_TOUTES_LES_HUMIDITES = 'select * from humidite';
    return await baseDeDonnees.query(SELECT_TOUTES_LES_HUMIDITES);

//    let curseurListeHumidite = await baseDeDonnees.query('select * from humidite');

    let listeHumidites = {}; var position = 0;
    curseurListeHumidite.rows.forEach
    (
        humidite=>
        {
            console.log("Humidite:" + humidite.id + " (" + humidite.valeur + ", "+humidite.date+")");
            listeHumidites[position++] = humidite;
        }
    );
    return listeHumidites;

}

exports.insererHumidite = async function (humidite) {
    const requete = 'INSERT INTO '+NOM_TABLE+' ('+NOM_CHAMP_VALEUR+', '+NOM_CHAMP_DATE+') VALUES($1, $2) RETURNING *';
    console.log(humidite)
    values = [humidite['valeur'], humidite.date];
    console.log(values);
    console.log("Insertion d'une humidite");


    try {
        const resultat = await baseDeDonnees.query(requete, values);
        console.log(resultat.rows[0])
        // { humidite: valeur: 50,6, date: 2654949445 }
    } catch(err) {
        console.log(err.stack)
    }
}