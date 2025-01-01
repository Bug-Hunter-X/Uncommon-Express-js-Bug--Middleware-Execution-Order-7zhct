const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
//Error:This code will work fine,but if you have multiple routes and middleware functions, there might be a bug.
//If you are not careful, you could end up with middleware functions that are never executed because of errors in other parts of the code.