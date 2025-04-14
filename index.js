const express = require('express')


const app = express();


app.use(express.json());

app.get('/', (req,res) => {
    res.json({ message: 'Hello world'})
});


app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on localhost: 6000`);
    
});