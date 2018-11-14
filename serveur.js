require('babel-register')({
    presets: [ 'env' ]
})
import express from 'express';
import "@babel/polyfill";


//dotenv.config();
// const Reflection = process.env.TYPE === 'db' ? ReflectionWithDB : ReflectionWithJsObject;
const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(express.json());

app.get('/', (req, res) => {

    return res.status(200).send('Vous êtes bien connecté au serveur');
});

//utilisation des routes pour les Humidites
let routesHumidites =require('./api/route/routesHumidite');

routesHumidites(app);

app.listen(8080);
console.log('Le serveur tourne sur le port ', 8080);
