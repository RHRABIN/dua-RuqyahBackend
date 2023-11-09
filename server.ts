import express, { NextFunction, Request, Response } from 'express';
import router from './src/app/routes';
import { globalErrorHandler } from './src/middlewares/globalErrorHandler';

const app = express();
const port = process.env.PORT || 8000;

// app.use(cors())
// app.use(cookieParser())

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', router);

//global error handler 
app.use(globalErrorHandler)

//not found ro0ute
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(401).json({
    success: false,
    message: "Not Found",
    errorMessages: [{
      path: req.originalUrl,
      message: "Not Found"
    }]
  })
  next();

})


app.listen(port, () => {
  console.log(`App is running on ${port}`);
});
