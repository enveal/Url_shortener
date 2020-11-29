const express = require('express');
const app= express();
const ShortUrl= require('./models/shortUrl')
const mongoose = require('mongoose')
const PORT= process.env.PORT|| 4444;

mongoose.connect('mongodb://localhost/urlShortener',{
    useNewUrlParser:true,useUnifiedTopology:true
})

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))

app.get('/', async (req,res) =>{
    const shortUrls= await ShortUrl.find()
    console.log(shortUrls)
    res.render('index', {shortUrls:shortUrls})
})

app.post('/shortUrls', async (req,res)=>{
await ShortUrl.create({ full: req.body.fullUrl })

res.redirect('/')
})

app.get('/:shortUrl',async (req,res)=>{
    const shortUrl=await ShortUrl.findOne({short:req.params.shortUrl})
    if (shortUrl==null) return res.sendStatus(404)

    shortUrl.clicks++
    shortUrl.save()

    res.redirect(shortUrl.full)

})

app.listen(PORT,()=>{
console.log('started on http://localhost:'+ PORT);
});