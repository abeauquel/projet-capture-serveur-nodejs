require('babel-register')({
    presets: [ 'env' ]
})
import express from 'express';
import dotenv from 'dotenv';
import "@babel/polyfill";

import controleurHumidite from './api/controleur/controleurHumidite';

dotenv.config();
// const Reflection = process.env.TYPE === 'db' ? ReflectionWithDB : ReflectionWithJsObject;
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    return res.status(200).send({'Vous êtes bien connecté au serveur'});
});
app.get('/humidite', (req, res) => {
    return res.status(200).send({'message': 'YAY! Congratulations! Your first endpoint is working'});
});

    app.listen(3000)
console.log('app running on port ', 3000);
