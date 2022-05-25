import express, {request, response} from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
const PORT = 8080;

const{
    MONGODB_ATLAS_USERNAME,
    MONGODB_ATLAS_PASSWORD,
    MONGODB_ATLAS_DBNAME
} = process.env;

const uri = `mongodb+srv://${MONGODB_ATLAS_USERNAME}:${MONGODB_ATLAS_PASSWORD}@cluster0.vvl4e.mongodb.net/${MONGODB_ATLAS_DBNAME}?retryWrites=true&w=majority`;

const options = { useNewUrlParser: true, useUnifiedTopology: true };

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.send("ini about");
})

mongoose.set('useFindAndModify', true);

mongoose.connect(uri, options)
.then(() => {
  app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
  })
})
.catch((error) => {
  throw error
})

