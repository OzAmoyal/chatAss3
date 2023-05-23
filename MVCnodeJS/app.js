import mongoose from 'mongoose';
import express from 'express';
import bodyParser from 'body-parser';
const app = express();
app.use(bodyParser);
app.use(express.static('public'));
// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;

// Create a schema for Chat documents
const chatSchema = new mongoose.Schema({
  name: String
});

// Create a Chat model based on the schema
const Chat = mongoose.model('Chat', chatSchema);

// Mock data representing chats
let chats = [
  { id: 1, name: 'Chat 1' },
  { id: 2, name: 'Chat 2' },
  { id: 3, name: 'Chat 3' }
];

// Handle GET request to /api/Chats
app.get('/api/Chats', async (req, res) => {
  try {
    // Retrieve chats from MongoDB
    const chats = await Chat.find({});
    res.json(chats);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

// Handle POST request to /api/Chats
app.post('/api/Chats', async (req, res) => {
  try {
    const { name } = req.body;

    // Create a new chat document
    const chat = new Chat({ name });

    // Save the chat to MongoDB
    await chat.save();

    res.json(chat);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
