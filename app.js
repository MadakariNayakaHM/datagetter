const express=require('express');
const app=express();
const pug=require('pug');
const path = require('path');
const helmet=require('helmet');

app.use(express.json());
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// 1) GLOBAL MIDDLEWARES
// Serving static files
app.use(express.static(path.join(__dirname, 'public')));
const dataRouter= require('./routes/dataRoutes');
const viewsRouter = require('./routes/viewsRoutes')
app.use(helmet());
app.use(
    helmet.contentSecurityPolicy({
      directives: {
        defaultSrc: ["'self'", 'data:', 'blob:'],
   
        fontSrc: ["'self'", 'https:', 'data:'],
  
        scriptSrc: ["'self'", 'unsafe-inline'],
   
        scriptSrc: ["'self'", 'https://*.cloudflare.com'],
   
        scriptSrcElem: ["'self'",'https:', 'https://*.cloudflare.com'],
   
        styleSrc: ["'self'", 'https:', 'unsafe-inline'],
   
        connectSrc: ["'self'", 'data', 'https://*.cloudflare.com']
      },
    })
  );
app.use('/api/v1/data',dataRouter);
app.use('/',viewsRouter);
module.exports=app;