var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');

/* 
const NEWS_API_KEY = process.env.NEWS_API_KEY; */
const NEWS_API_KEY = "8417ef0137d3435da1db839eb0d10f87"; 

/* GET home page. */

router.get('/USA', (req, res) => {
  fetch(`https://newsapi.org/v2/everything?sources=the-washington-post&apiKey=${NEWS_API_KEY}`)
    .then(response => response.json())
    .then(data => {
      if (data.status === 'ok') {
        res.json({ articles: data.articles });
      } else {
        res.json({ articles: [] });
      }
    });
});

router.get('/Fra', (req, res) => {
  fetch(`https://newsapi.org/v2/everything?sources=le-monde&apiKey=${NEWS_API_KEY}`)
    .then(response => response.json())
    .then(data => {
      if (data.status === 'ok') {
        res.json({ articles: data.articles });
      } else {
        res.json({ articles: [] });
      }
    });
});

router.get('/UK', (req, res) => {
  fetch(`https://newsapi.org/v2/everything?sources=business-insider-uk&apiKey=${NEWS_API_KEY}`)
    .then(response => response.json())
    .then(data => {
      if (data.status === 'ok') {
        res.json({ articles: data.articles });
      } else {
        res.json({ articles: [] });
      }
    });
});

router.get('/Ger', (req, res) => {
  fetch(`https://newsapi.org/v2/everything?sources=bild&apiKey=${NEWS_API_KEY}`)
    .then(response => response.json())
    .then(data => {
      if (data.status === 'ok') {
        res.json({ articles: data.articles });
      } else {
        res.json({ articles: [] });
      }
    });
});

router.get('/Spa', (req, res) => {
  fetch(`https://newsapi.org/v2/everything?sources=el-mundo&apiKey=${NEWS_API_KEY}`)
    .then(response => response.json())
    .then(data => {
      if (data.status === 'ok') {
        res.json({ articles: data.articles });
      } else {
        res.json({ articles: [] });
      }
    });
});

module.exports = router;
