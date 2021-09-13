const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());


app.get('/ingredients', (req, res) => {
    res.json({
        ingredients: [
            'rum',
            'vodka',
            'whiskey',
            'voda',
            'sirup',
            'mineralka'
        ]
    })
})

app.get('/drinks', (req, res) => {
    console.log('Got these ingredients: ', req.query.ingredients);
    res.json([{
        name: 'Mojito',
        description: 'Toto je Mojito',
        price: 20,
        imageSrc: 'mojito.jpg'
    },{
        name: 'GinTonic',
        description: 'Toto je GinTonic',
        price: 40,
        imageSrc: 'gintonic.jpg'
    },{
        name: 'Godfather',
        description: 'Toto je Godfather',
        price: 50,
        imageSrc: 'godfather.jpg'
    },
    {
        name: '22',
        description: 'Toto je Godfather',
        price: 50,
        imageSrc: 'godfather.jpg'
    },{
        name: '33',
        description: 'Toto je Godfather',
        price: 50,
        imageSrc: 'godfather.jpg'
    },{
        name: '44',
        description: 'Toto je Godfather',
        price: 50,
        imageSrc: 'godfather.jpg'
    },{
        name: '55',
        description: 'Toto je Godfather',
        price: 50,
        imageSrc: 'godfather.jpg'
    },{
        name: '66',
        description: 'Toto je Godfather',
        price: 50,
        imageSrc: 'godfather.jpg'
    }])
})

app.get('/drink', (req, res) => {
    console.log('Making this drink:', req.query.name);
    res.send();
})


app.get('/clean', (req, res) => {
    console.log('Cleaning these containers', req.query.containers);
    res.send();
})

const port = 8888
app.listen(port, () => console.log('server listening on http://localhost:' + port))