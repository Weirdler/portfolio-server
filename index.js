const express = require('express')
const app = express();

// MIDDLE TIME
app.set("view engine","ejs");

app.use(express.static('./public'));

app.get('/about', function(req, res){
    console.log('bruh')
    res.render('about');
});
app.get('/WhyYouAre.ejs', function(req, res){
    console.log('BRUH')
    res.render('WhyYouAre')
});
app.get('/WhyYouShould.ejs', function(req, res){
    console.log('bRUH')
    res.render('WhyYouShould')
});
app.get('/about.ejs',function(req,res){
    console.log("bRUh")
    res.render('about')
})
app.listen(3000, function(err){
    if (err){
        console.log(err)
    }
    console.log('u mega gay times 3000')
});
