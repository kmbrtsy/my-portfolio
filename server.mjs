import path from 'path';
import express from 'express';

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const app = express();

// Serve static files from the 'dist' folder
app.use(express.static(path.resolve(__dirname, 'dist')));

// Serve index.html from the root directory
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
