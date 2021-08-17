import express from 'express';
import mongoose from 'mongoose';
import productRouter from './routers/productRouter.js';
import userRouter from './routers/userRouter.js';
const port = process.env.PORT || 5000;

const app = express();
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/DjMart', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

app.use('/api/users', userRouter);
app.use('/api/product', productRouter);

app.get('/', (req, res) => {
    res.send("server is ready");
})
app.use((err, req, res, next) => {
    res.status(500).send({message: err.message});

})

app.listen(port, () => {
    console.log("listening to the server");
})