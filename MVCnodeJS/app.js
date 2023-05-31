import mongoose from 'mongoose';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import customEnv from 'custom-env';
import userRouter from './routes/userRoute.js';
import tokenRouter from './routes/tokenRoute.js';
import chatRouter from './routes/chatRouter.js';
import tokenService from './services/tokenService.js';
import chatService from './services/chatService.js';
import {Server} from 'socket.io';
import http from 'http';

const app = express();
const server = http.createServer(app); // Use require instead of import for http module
const io = new Server(server, {
  cors: {
    origin: true, // Replace with your desired allowed origins or set to true to allow all origins
    methods: ['GET', 'POST'], // Specify the allowed HTTP methods
    allowedHeaders: ['Authorization'], // Specify the allowed headers
    credentials: true, // Set to true to allow cookies to be sent with the requests
  },
});
const userSockets = {};
var x=0;
io.on('connection', (socket) => {
  socket.emit('identify', 'Hello client!')
  socket.on('token', async (token) => {
    const username= await tokenService.isLoggedIn(token);
    userSockets[username]=socket;
    //const username = await userService.isLoggedIn(token);
    // Do something with the identified user
  });
  socket.on('message', async (data) => {
    const username= data.sender;
    const chat = await chatService.getChatById(data.chatID,username);
    const otherUser= chat.users.find(u => u.username !== username);
    if(userSockets[otherUser.username]){
      userSockets[otherUser.username].emit('update', data.chatID);
    }
    //const username = await userService.isLoggedIn(token);
    // Do something with the identified user
  }

)});

app.use(cors());
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));

customEnv.env(true, './config');
app.use(express.static('public'));

// Connect to MongoDB
mongoose.connect(process.env.DB_HOST, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;

const allowedOrigins = ['http://localhost:3000']; // Replace with your desired allowed origins

const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

app.use(cors(corsOptions)); // Enable CORS with options



app.use(express.json());
app.use(express.static('public'));

app.use('/api/Users', userRouter);
app.use('/api/tokens/', tokenRouter);
app.use('/api/Chats/', chatRouter);

server.listen(50000, () => {
  console.log('Server is running on port 50000');
});
