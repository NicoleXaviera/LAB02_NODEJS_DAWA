const express = require ('express');

const app = express(); //es objeto que hereda la clase express, app tiene todas las librerias de express

app.get('/', (req, res) => { //este es el root 
    res.sendFile('./static/index.html',{ 
        root: __dirname
    });
});

app.get('/about', (req, res) => { 
    res.sendFile('./static/about.html',{ 
        root: __dirname
    });
});

app.get('/contact', (req, res) => { 
    res.sendFile('./static/contact.html',{ 
        root: __dirname
    });
});

app.use((req,res) => {
    res.status(404).send('No se encontró tu página...!')
})

app.listen(3000)
    console.log(`Server on port ${3000}`);
	
