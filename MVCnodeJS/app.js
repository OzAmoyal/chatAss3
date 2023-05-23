import mongoose from 'mongoose';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import userRouter from './routes/userRoute.js'



const app = express();
app.use(bodyParser.json({limit:'10mb'}));
app.use(bodyParser.urlencoded({limit:'10mb', extended: true }));
app.use(cors())
app.use(express.static('public'));


// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/chatapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;
app.use(express.static('public'))

app.use('/api/Users',userRouter)
// Start the server
app.listen(50000, () => {
  console.log('Server is running on port 50000');
});

/*
app.get('/api/Chats', async (req, res) => {
  try {
    // Fetch all the chats from the database
    const chats = await Chat.find();

    // Return the chats as a response
    res.json(chats);
  } catch (error) {
    // Handle any errors that occur
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

*/
app.use(express.json());
/*
// Handle POST requests to /api/Chats
app.post('/api/Chats', async (req, res) => {
  try {
    // Create a new chat based on the request body
    const chat = await Chat.create(req.body);

    // Return the created chat as a response
    res.status(201).json(chat);
  } catch (error) {
    // Handle any errors that occur
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
*/