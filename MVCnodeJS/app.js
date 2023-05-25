import mongoose from 'mongoose';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import customEnv from 'custom-env';
import userRouter from './routes/userRoute.js';
import tokenRouter from './routes/tokenRoute.js';
import chatRouter from './routes/chatRouter.js';


const app = express();
app.use(bodyParser.json({limit:'10mb'}));
app.use(bodyParser.urlencoded({limit:'10mb', extended: true }));
app.use(cors())
customEnv.env(true,'./config');
app.use(express.static('public'));


// Connect to MongoDB
mongoose.connect(process.env.DB_HOST, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;
app.use(express.static('public'))

app.use('/api/Users',userRouter);
app.use('/api/tokens/',tokenRouter);
app.use('/api/Chats/', chatRouter)

// Start the server
app.listen(50000, () => {
  console.log('Server is running on port 50000');
});

app.use(express.json());
