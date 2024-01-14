

const functions = require('firebase-functions');
// const port = 5000;
const express = require('express');
const cors = require('cors');
const stripe = require("stripe")(
  "sk_test_51OXw74JniwVC0mlJLbchG5wlgWeHO2VivjMgq7Iqad9KJOjT5i2mDHtCxrXx2PaDrhFcdkdHrErpuivRAMcnWCgw00nngPVa4v"
);
const app = express();



// middlewares
app.use(cors({origin:true}));
app.use(express.json());

app.get('/', (request, response) => response.status(200).send('Hello World'));


app.post('/payments/create', async (request, response) => {
    const total = request.query.total;
    console.log('payment request recieved for this amount >>>', total);


    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'usd',
    })

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })

})

const port=5001
app.listen(port,()=>console.log("listening to",port))
// Listen Command
// exports.api = functions.https.onRequest(app);
// app.listen(port,()=>{
//     console.log("listening to port", port);
// })


// const functions = require ('firebase-functions');
// const express = require ('express');
// const cors = require('cors');

// const stripe = require('stripe')('sk_test_51OPs99BwHSez29wQuO5FW6eTPguDOvN2h2h3bgYkG7LordOoNsVGp6zK1TWIGg9fri7ANdpOGRqdZpzpmeZlyQaK00cjl0bXNh');

// const app =express()
// app.use (cors({origin:true}));
// app.use(express.json());
// app.get('/', (request,response) => response.status(200).send('hello world'))

// app.post ('/payments/create',async(request, response)=>{

// // const total = request.query.total;
// const{items} =req.body;

// // console.log('payment Request Recieved for this amount >>>',total);

// const  paymentIntent = await stripe.paymentIntents.create({

//     amount:calculateOrderAmount(items),
    
//     currency: 'usd',
// });
// response.send({
//     clientSecret:paymentIntent.client_secret,
// });
// });





// exports.api = functions.https.onRequest(app);
