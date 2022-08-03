const express = require('express');

const app = express();


app.use(() => {
    console.log('server sedang berjalan');
})
app.listen(4000);