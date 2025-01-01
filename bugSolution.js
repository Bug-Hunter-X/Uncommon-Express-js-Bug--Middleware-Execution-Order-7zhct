const express = require('express');
const app = express();
const port = 3000;

const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
};

app.use(errorHandler);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
//This solution uses error handling middleware to catch errors that occur in other middleware functions or route handlers. By placing error handling middleware at the end of your middleware stack, you ensure that any errors are caught and handled properly, preventing unexpected application behavior.