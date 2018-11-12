require('dotenv').config();
// require('babel-register')({ 
//    presets: ['react']
// })
// Now our component that's required later will be transforme by Babel so that node will recognize the JSX
var express = require('express');
var bodyParser = require('body-parser');
var React = require('react');
var ReactDOMServer = require( 'react-dom/server');
// var App = require('./../client/src/components/App.jsx');
// var reactDOM = require('react-dom/server');


var app = express();
app.use(express.static(__dirname + '/../client/dist'));

// app.get('/*', (req, res) => {
//   var html = `
//     <!DOCTYPE html>
//     <head>
//       <title>Mattminwoolee</title>
//       <link rel="stylesheet" href="https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css">
//       <link href="https://fonts.googleapis.com/css?family=Montserrat:300" rel="stylesheet">
//       <style>
//       #particles-js{
//         width: 100%;
//         height: 100%;
//         background-size: cover;
//         background-position: 50% 50%;
//         background-repeat: no-repeat;
//         position: absolute;
//         z-index: -1;
//       }
//       </style>
//     </head>
//     <body style="font-family: 'Montserrat', sans-serif; background-color: rgb(250, 250, 248)">
//       <div id="particles-js"></div>
//       <div id="app">${ ReactDOMServer.renderToString( React.createElement(App))}</div>
//     <script src="https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js"></script>
//     <script src="app.js"></script>
//     <script src="bundle.js" async defer></script>
//     </body>
//     </html>
//   `;
//   res.send(html);
// })

// app.get('*', (req, res) => {
//   const html = reactDOM.renderToString(<App />);
//   res.set('Cache-Control', 'public, max-age=6000, s-maxage=1200');
//   res.send(html);
// })
// app.get('/', (req, res) => {
//   var html = `
//     <!DOCTYPE html>
//     <head>
//       <title>Mattminwoolee</title>
//       <link rel="stylesheet" href="https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css">
//       <link href="https://fonts.googleapis.com/css?family=Montserrat:300" rel="stylesheet">
//       <style>
//       #particles-js{
//         width: 100%;
//         height: 100%;
//         background-size: cover;
//         background-position: 50% 50%;
//         background-repeat: no-repeat;
//         position: absolute;
//         z-index: -1;
//       }
//       </style>
//     </head>
//     <body style="font-family: 'Montserrat', sans-serif; background-color: rgb(250, 250, 248)">
//       <div id="particles-js"></div>
//       <div id="app">${ ReactDOMServer.renderToString( React.createElement(App))}</div>
//     <script src="https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js"></script>
//     <script src="app.js"></script>
//     <script src="bundle.js" async defer></script>
//     </body>
//     </html>
//   `;
//   res.send(html);
// })

let PORT = process.env.PORT || 7777;
app.listen(PORT, () => console.log(`listening on port ${PORT}`));
// kill $(lsof -t -i:3001)