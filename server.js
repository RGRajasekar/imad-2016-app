var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articleOne = {
    title:  'Article one I RG RAj',
    heading: 'Article one',
    date: 'Sep 5,2016',
    content: `
        <p>
            this is the content for my first article.this is the content for my first article.this is the content for my first article.this is the content for my first article.this is the cintent for my first article.this is the content for my first article.
        </p>
        <p>
             this is the content for my first article.this is the conyent for my first article.this is the content for my first article.this is the content for my first article.this is the content for my first article.this is the content for my first article.
        </p>
        <p>
             this is the content for my first article.this is the content for my first article.this is the content for my first article.this is the content for my first article.this is the content for my first article.this is the cintent for my first article.
        </p>`
};

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function (req, res) {
    res.sendFile(path.join(__dirname,  'ui',  'article-one.html'));
});
app.get('/article-two', function (req,res){
    res.sendFile(path.join(__dirname, 'ui',  'article-two.html'));
});

app.get('article-three', function (req,res){
    res,sendFile(path.join(__dirname, 'ui',  'article-three.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
