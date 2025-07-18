const express = require('express');
const cors = require('cors');
const app = express();
const routes = require('./routes/routes');
require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use('/api', routes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`TrustFilter backend running on port ${PORT}`);
});
