const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

const classesRoutes = require('./routes/classes.js');

mongoose.connect(
  'mongodb+srv://dbUser:MinhThanh0801@cluster0.dacnq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
const conn = mongoose.connection;
conn.on('open', () => {
  console.log('Database connected');
});

app.use(express.json());
app.use(cors());

app.use('/classes', classesRoutes);
const PORT=process.env.PORT||3000
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
