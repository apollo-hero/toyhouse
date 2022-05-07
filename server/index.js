const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.o8s1r.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        await client.connect();
        const toyCollection = client.db('toyhouse').collection('totaltoys');

        app.get('/toy', async (req, res) => {
            const query = {};
            const cursor = toyCollection.find(query);
            const toys = await cursor.toArray();
            res.send(toys);
        });

        app.get('/toy/:id', async(req, res) =>{
            const id = req.params.id;
            const query={_id: ObjectId(id)};
            const toy = await toyCollection.findOne(query);
            res.send(toy);

        });

      
        app.post('/toy', async(req, res)=>{
            const addToy = req.body;
            const result = await toyCollection.insertOne(addToy);
            res.send(result);
        });

        app.put('/toy/:id', async(req, res) =>{
            const id = req.params.id;
            const updateToy = req.body;
            const filter = {_id: ObjectId(id)};
            const options = { upsert: true};
            const updatedDoc = {
                $set: {
                    name: updateToy.name,
                    details: updateToy.details,
                    price: updateToy.price,
                    quantity: updateToy.quantity,
                    seller: updateToy.seller,
                    img: updateToy.img
                }
            };

            const result = await toyCollection.updateOne(filter, updatedDoc, options);
            res.send(result);

        });

        app.delete('/toy/:id', async(req, res)=>{
            const id = req.params.id;
            const query = {_id: ObjectId(id)};
            const result = await toyCollection.deleteOne(query);
            res.send(result);
        });

       

    }
    finally {

    }
}

run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('Server is Running');
});

app.listen(port, () => {
    console.log('Port is Working', port);
});