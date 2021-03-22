const express = require(‘express’);
const axios = require(‘axios’);
const bodyParser = require(‘body-parser’);
const cors = require(‘cors’);
const CircularJSON = require(‘circular-json’);
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
// call the API
app.get(‘/’, (req, res) => {
axios.get(‘https://bing.com/covid/data')
    .then(data => {
    res.send(CircularJSON.stringify(data.data));
})
    .catch(error=> {
        console.log(error.message);
    })
});
app.listen(3000, () => console.log(‘server started’));