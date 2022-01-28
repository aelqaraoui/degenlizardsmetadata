const express = require('express');
const cors = require('cors');
var path = require('path');
const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname)))

app.use(cors({
    origin: '*'
}));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(process.env.PORT || 3000, () => console.log(`Server listening on port: ${PORT}`));
