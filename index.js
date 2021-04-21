const express = require('express');

const fuzzy = express();

fuzzy.get('/', (req, res) => {
    res.send('Hello world!\n');
});

const port = process.env.PORT || 3000;

fuzzy.listen(port, () => console.log(`fuzzy listening on http://localhost:${port}`) );