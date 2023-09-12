const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

let books = [];

// Helper function to generate a unique ID
function generateUniqueId() {
  return Math.random().toString(36).substring(2, 10);
}

// Serve static HTML file for the root route
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// To Get all books
app.get('/books', (req, res) => {
  res.json(books);
});

// Add a new book to the collection
app.post('/books', (req, res) => {
  const { title, author, publishedDate } = req.body;
  if (!title || !author) {
    return res.status(400).json({ error: "Title and author are required." });
  }
  else{
    const id = generateUniqueId();
    const newBook = { id, title, author, publishedDate };
    books.push(newBook);
    res.json(newBook);
  }
});

// Delete a book from the collection
app.delete('/books/:id', (req, res) => {
  const bookId = req.params.id;
  const index = books.findIndex(book => book.id === bookId);
  if (index !== -1) {
    const deletedBook = books.splice(index, 1)[0];
    res.json({ message: 'Book is deleted successfully' });
  } else {
    res.json({ message: 'Book is not found' });
  }
});


// Other Routes
app.use((req, res)=>{
  res.sendFile(__dirname + '/error.html');
})


// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
