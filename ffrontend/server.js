const express = require('express');
const app = express();
app.use(express.static('./dist/ffrontend'));
app.get('/*', function (req, res) {
  res.sendFile(__dirname + '/dist/ffrontend/index.html');
});
app.listen(process.env.PORT || 4200);
