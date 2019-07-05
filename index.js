const app = require('./server.js')

app.listen(app.get('port'), () => {
  console.log('App is running at http://localhost:3000');
})
module.exports = app