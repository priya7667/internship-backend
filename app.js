const express = require('express')
const app = express();
const port = 3000;
const mongoose=require('mongoose');
const userRoutes=require('./routes/user-routes');
var cors=require("cors")


app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send('running');
})

app.use(userRoutes);



async function connectDb()
{
    await mongoose.connect("mongodb+srv://priyanjalibarriar091:BjvAp2uyd1IfWBdr@cluster0.3ngi1u6.mongodb.net/",
        {
            dbName:"UsersDb"
        }
        
    ).then(console.log("mongodb connected"))
}
connectDb().catch((err)=>console.log(err));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})