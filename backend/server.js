import express from 'express';
import mongoose from 'mongoose';
import data from './Data.js';
import userRouter from './routers/userRouter.js';
const port = process.env.PORT || 5000;

const app = express();
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/DjMart', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
})

app.get('/api/product/:id', (req, res) => {
    const product = data.products.find((x) => x._id === req.params.id);
    if(product){
        res.send(product);
    }
    else{
        res.status(404).send({message: 'Product not found'});
    }
})

app.get('/api/product', (req, res) => {
    res.send(data.products)
})
app.use('/api/users', userRouter);

app.get('/', (req, res) => {
    res.send("server is ready");
})
app.use((err, req, res, next) => {
    res.status(500).send({message: err.message});

})

app.listen(port, () => {
    console.log("listening to the server");
})