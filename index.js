require('dotenv').config();

const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8000;
const code = require('./inconnu/connection');

require('events').EventEmitter.defaultMaxListeners = 500;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/code', code);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log('========================================');
    console.log('        𝐒𝐢𝐥𝐚 𝐅𝐫𝐞𝐞 — ONLINE');
    console.log('        Port: ' + PORT);
    console.log('        JID: 120363402325089913@newsletter');
    console.log('        Channel: https://whatsapp.com/channel/0029VbBG4gfISTkCpKxyMH02');
    console.log('        Bot Image: https://i.ibb.co/PzQ0w8pf/silafree.jpg');
    console.log('        Powered by 𝐒𝐢𝐥𝐚 𝐓𝐞𝐜𝐡');
    console.log('========================================');
});

module.exports = app;
