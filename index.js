import expres from 'express';

const app = expres()
app.use(expres.json());
app.use(expres.urlencoded())

app.use('/', (req, res )=> {
    res.send("Hello world")
})

app.listen(8005, ()=>{
    console.log('App running on 8005 port');
})