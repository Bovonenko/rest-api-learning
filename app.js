const express = require('express');
const path = require('path');
const app = express();


const CONTACTS = [
    {id: 1, name: 'Rostyslav', value: '+420774233299', marked: false}
]



app.use(express.static(path.resolve(__dirname, 'client'))); // make folder static to find files inside

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'index.html'))
});

app.listen(3000, () => console.log('Server has been started on port 3000...'));
