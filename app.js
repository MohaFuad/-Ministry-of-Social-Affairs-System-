require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');

const helmet = require('helmet');
const xss = require('xss-clean');
const cors = require('cors');
const mongoSanitize = require('express-mongo-sanitize');

const connectDB = require('./db/connect');

const OrganizationRouter = require('./routes/OrganizationRoutes');
const StateRouter = require('./routes/StateRoutes');
const CityRouter = require('./routes/CityRoutes');
const AuthenticationRouter = require('./routes/AuthenticationRoutes');
const UserRouter = require('./routes/UserRoutes');


const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');


app.use(helmet());
app.use(cors());
app.use(xss());
app.use(mongoSanitize());

app.use(express.json());
app.use(cookieParser(process.env.JWT_SECRET));

app.use(express.static('./public'));
app.use(fileUpload());

app.get('/', (req, res) => {
  res.send('Organizations Project');
});

app.use('/api/Organizations', OrganizationRouter);
app.use('/api/States', StateRouter);
app.use('/api/Cities', CityRouter);
app.use('/api/Authentication', AuthenticationRouter);
app.use('/api/Users', UserRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);


const port = process.env.PORT || 3000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();

