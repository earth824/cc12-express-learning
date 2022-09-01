const express = require('express');
const routerLevelMiddleware = require('./todoRoute');

const app = express();

// app.use((req, res) => {
//   res.send('<h1>Hello express app</h1>');
// });

// const fn = (req, res) => {
// request sent from client: start line, headers, body
// express extract request message => request object (req)
// express create response object (start line, headers, body) => response object (res)
// res.send('<h1>Login Page</h1>');
// };
// app.get('/login', fn);

// app.get('/login', (req, res) => {
//   res.send('<h1>Login Page</h1>');
// });
// console.log(__dirname + '/views/index.html');

// *** Query String ***
// app.get('/', (req, res) => {
//   console.log(req.query);
//   console.log(req.query.name);
//   console.log(req.query.age);
// });

// app.get('/products/:productId/country/:countryName', (req, res) => {
//   console.log(req.params);
//   console.log(req.params.productId);
// });

// *** BODY ***
// app.use(express.json()); // parse string request body into javascript object => insert key 'body' into req object
// app.use(express.urlencoded({ extended: false }));
// app.post('/', (req, res) => {
//   console.log(req.body);
// });

// *** MIDDLEWARE ***
// app.get('/', (req, res, next) => {
//   console.log('GET / Middleware');
// });

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// app.post('/', (req, res, next) => {
//   console.log(req.body);
//   res.json({ body: req.body });
// });

// // first middleware
// app.use((req, res, next) => {
//   console.log('First Middleware');
//   res.send('From first middleware');
//   next();
// });

// // seconde middleware
// app.use((req, res, next) => {
//   console.log('Second Middleware');
//   res.send('From second middleware');
//   next();
// });

// app.use(
//   (req, res, next) => {
//     console.log('First Parameter');
//     next();
//   },
//   (req, res, next) => {
//     console.log('Second Parameter');
//     next();
//   },
//   (req, res, next) => {
//     console.log('Third Parameter');
//     res.send('From third middleware');
//   }
// );

// app.get(
//   '/',
//   (req, res, next) => {
//     console.log('First Parameter');
//     next();
//   },
//   (req, res, next) => {
//     console.log('Second Parameter');
//     next();
//   }
// );

// GET /todos
// GET /todos/:id
// POST /todos
// PUT /todos/:id
// DELETE /todos/:id

// app.use('/todos', routerLevelMiddleware);
// app.use('/users', userLevelMiddlware)
// app.use('/auth', authLevelMiddlware)

// app.use((req, res, next) => {
//   const { name } = req.query;
//   if (!name) {
//     throw new Error('lasup');
//   } else {
//     next(new Error(name));
//   }
// });
// app.use((req, res, next) => {
//   res.send('second middlware');
// });

// app.use((err, req, res, next) => {
//   console.log(err);
//   res.status(500).json({ message: err.message });
// });

// STATIC FILE
// app.use(express.static('public'));
app.use('/abcdef', express.static('public'));

app.use((req, res, next) => {
  res.status(404).send('<h1>404 NOT FOUND !!!</h1>');
});

app.listen(7999, () => console.log('server is running on port 7999'));
