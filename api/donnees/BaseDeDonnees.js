var {Pool} = require('pg');
let dbNom="station_meteo";
var dbPort = 5432;
var dbHote = 'localhost';
let dbUtilisateur = "postgres";
let dbMotDePasse = "postgres";

let chaineDeConnection = 'postgres://'+dbUtilisateur+':'+dbMotDePasse+'@'+dbHote+':'+dbPort+'/'+dbNom;

var BaseDeDonnees = function () {
};

module.exports = BaseDeDonnees;

BaseDeDonnees.getInstance = function () {
    if (typeof BaseDeDonnees.db === 'undefined') {
        BaseDeDonnees.Initialiser();
    }
    return BaseDeDonnees.db;
}

BaseDeDonnees.Initialiser = function () {
    // BaseDeDonnees.db = new postgresql.Client(chaineDeConnection);
    BaseDeDonnees.db = new Pool({
        user: dbUtilisateur,
        host: dbHote,
        database: dbNom,
        password: dbMotDePasse,
        port: dbPort,
    })

   // BaseDeDonnees.db.connect();
}

BaseDeDonnees.Disconnect = async function () {
    if (BaseDeDonnees.db) {
        BaseDeDonnees.db.close();
    }
}
