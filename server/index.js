require('dotenv').config();
var express = require('express');
var bodyParser = require('body-parser');

// const clientBundles = './public/services';
// const serverBundles = './templates/services';
// const serviceConfig = require('./service-config.json');
// const services = require('./loader.js')(clientBundles, serverBundles, serviceConfig);

var React = require('react');
var ReactDOM = require( 'react-dom/server');
const Layout = require('./templates/layout');


var app = express();
app.use(express.static(__dirname + '/../client/dist'));

// const renderComponent = (component, props = {}) => {
//   let component = React.createElement(component, props);
//   return ReactDom.renderToString(component);
// };

// app.get('/test', (req, res) => {
//   res.end(Layout());
// })

// app.get('*', (req, res) => {
//   const html = reactDOM.renderToString(<App />);
//   res.set('Cache-Control', 'public, max-age=6000, s-maxage=1200');
//   res.send(html);
// })

let PORT = process.env.PORT || 7777;
app.listen(PORT, () => console.log(`listening on port ${PORT}`));
// kill $(lsof -t -i:3001)