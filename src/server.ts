import express from 'express';

const app = express();
app.use(express.json())

app.get('/',  (request, response) => {
    return response.json({message: "Ola Mundo!!"});
})


app.listen(3333, () =>{
    console.log('🚀 listening on port 3333')
})