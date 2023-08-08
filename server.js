const express = require('express');
require('dotenv').config({ path: './config/config.env' });
const path = require('path');
const app = express();
const cors = require('cors');
app.use(cors());

const getFlowers = require('./routes/home');

// app.get('/', (req, res) => {
//     res.send('hilo')
// })

app.use('/api/v1/', getFlowers);

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
});

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));