const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());


let users = [
  { "name": "Cristina", "city": "Sebes" },
  { "name": "Andrei", "city": "Satu Mare" },
  { "name": "Sebastian", "city": "Bistrita-Nasaud" },
  { "name": "Maria", "city": "Cluj-Napoca" }
];


// get users
app.get('/users', (req, res) => {
    res.json(users);
});

// add user
app.post('/users', (req, res) => {
    users.push(req.body); 
    res.status(201).json({ message: 'User adăugat cu succes', user: req.body });
});


// delete user
app.delete('/users/:index', (req, res) => {
    const index = parseInt(req.params.index);
    if (index >= 0 && index < users.length) {
        users.splice(index, 1); 
        res.json({ message: 'User șters cu succes' });
    } else {
        res.status(404).json({ message: 'Index invalid' });
    }
});


// edit user
app.put('/users/:index', (req, res) => {
    const index = parseInt(req.params.index);
    if (index >= 0 && index < users.length) {
        users[index] = req.body; 
        res.json({ message: 'User modificat cu succes', user: req.body });
    } else {
        res.status(404).json({ message: 'Index invalid' });
    }
});


// start server port 3000
app.listen(3000, () => {
    console.log('Serverul a pornit si ruleaza pe portul 3000!');
});