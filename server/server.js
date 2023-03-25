const app = require('express')();
const port = 5001;
const cors = require("cors");
const stripe = require('stripe')('sk_test_51MYbfMDYuzoeBKxGcMhrNfA5j9wjsN4QqBDDofXq7ZXgfJhZB1K5R9MrUQZAEGVdzUgxgFcLyzSWIXLgbtUSD2Fz00NY3BBAUN');
//const cookieParser = require('cookie-parser');
const session = require("express-session");

require('./config/db')

const UserRouter = require('./api/User');
const CookRouter = require('./api/Cook');
const ScheduleRouter = require('./api/Schedule');


const bodyParser = require('express').json;
app.use(bodyParser());
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true
}));




// app.post('/create_customer', async (request, response) => {
//     const customerEmailAddress = request.body.customerEmailId;
//     const customer = await stripe.customers.create({
//         description: `${customerEmailAddress} via API`,
//         email: customerEmailAddress
//     });
//     // console.log(customer);
//     let theCreatedCustomerId = customer.id;
//     response.send({
//         customerId: theCreatedCustomerId
//     });
// });

app.post('/create_checkout_link', async (request, response) => {
    const priceId = request.body.priceId;
    const cook_email = request.body.customerEmailId;
    console.log("cook_email", cook_email);
    const session = await stripe.checkout.sessions.create({
        billing_address_collection: 'auto',
        line_items: [
            {
                price: priceId,
                quantity: 1,
            },
        ],
        mode: 'subscription',
        success_url: `http://localhost:3000/paymentsuccessful/?success=true&cook_email=${cook_email}`,
        cancel_url: `http://localhost:3000/paymentunsuccessful/?canceled=true`,
        customer_email: cook_email
    });
    console.log(session);
    response.send({
        url: session.url
    });
});

// app.post('/verify_cook', async (request, response) => {
//     const cook_email = request.body.cook_email;
//     const customer = await stripe.customers.retrieve(request.body.customerId);
//     if (customer.email === cook_email && customer.subscriptions.data.length > 0) {
//         // mark the cook as verified in the database
//         const Cook = require('./api/Cook');
//         await Cook.findOneAndUpdate({ cook_email: cook_email }, { verified: true });
//         response.status(200).send({ success: true });
//     } else {
//         response.status(400).send({ error: 'Verification failed' });
//     }
// });

app.post('/create-subscription', async (req, res) => {
    const subscription = await createSubscription(req.body);
    res.send(subscription);
});

async function createSubscription({name, email, paymentMethod, priceId}) {
    // create a stripe customer
    const customer = await stripe.customers.create({
        name: name,
        email: email,
        payment_method: paymentMethod,
        invoice_settings: {
            default_payment_method: paymentMethod,
        },
    });

    // create a stripe subscription
    const subscription = await stripe.subscriptions.create({
        customer: customer.id,
        items: [{ price: priceId }],
        payment_settings: {
            payment_method_options: {
                card: {
                    request_three_d_secure: 'any',
                },
            },
            payment_method_types: ['card'],
            save_default_payment_method: 'on_subscription',
        },
        expand: ['latest_invoice.payment_intent'],
    });

    // return the client secret and subscription id
    return {
        clientSecret: subscription.latest_invoice.payment_intent.client_secret,
        subscriptionId: subscription.id,
        customerEmail: email // adding email to the response
    };
}


//app.use(cookieParser());

app.use(session({
    key: "userId",
    secret: "subscribe_to_findacook",
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 86400000,
    }
}))


app.use('/user', UserRouter)
app.use('/cook', CookRouter)
app.use('/schedule', ScheduleRouter)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})