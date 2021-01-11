const functions = require('firebase-functions');
const express = require('express')
const cors = require('cors')
const stripe = require('stripe')('sk_test_51GsUdzGxDWHadQBo80bcYeI5fkRUXZXItVl9u0wjYC1Id3RWfthC5HdHprBeIiouweJFNvxR4rZijN8fIHi6F2c400ynusagje')

//API

//App config
const app = express();

//Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//API routes
app.get('/', (request, response) => response.status(200).send('hello world'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, //subunits of currency
        currency:'inr'
    })

    //Ok created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

//Listen command
exports.api = functions.https.onRequest(app)


