const express = require('express');
const app = express();
const api = require(__dirname+'/api')
const PORT = process.env.PORT;

app.use(express.urlencoded({extended: true})); 
app.use(express.json());

app.use('/api', api);

app.listen(PORT, ()=>{
    console.log('Server berhasil berjalan')
    console.log(`http://localhost:${PORT}/api `)
})