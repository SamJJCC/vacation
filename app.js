import express from 'express';
const app=express();
const port=3005;

const vacations=[];

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true}));

 app.get('/', (req, res) => {
   res.sendFile(`${import.meta.dirname}/views/home.html`);
  
});

 app.get('/confirmation', (req, res) => {
   res.sendFile(`${import.meta.dirname}/views/confirmation.html`);
  
});


app.post('/submit', (req, res) => {
    console.log(req.body);
    const vacation = req.body;
    vacations['timestamp'] = new Date();
    console.log(vacations);
  
   vacations.push(vacation);
  

   //Display confirmation page
   res.sendFile(`${import.meta.dirname}/views/confirmation.html`)
  
});


app.listen(port, () => {
    console.log(`Server is runnning at http://localhost:${port}`);
});