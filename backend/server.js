import express, { urlencoded } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import productRouter from './routers/productRouter.js';
import userRouter from './routers/userRouter.js';
import orderRouter from './routers/orderRouter.js';
const port = process.env.PORT || 5000;

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/DjMart', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

app.use('/api/users', userRouter);
app.use('/api/product', productRouter);
app.use('/api/orders', orderRouter);

app.get('/', (req, res) => {
    res.send("server is ready");
})
app.use((err, req, res, next) => {
    res.status(500).send({message: err.message});

})

app.listen(port, () => {
    console.log("listening to the server");
})