import  express  from "express";
import {client} from "@repo/db/client"
import "dotenv/config";
 const app = express();
 app.use(express.json())
 app.get("/" , (req,res) => {
    res.send("Hi There")
 })
 app.post("/signup", async function (req, res) {
    const username = req.body.username
    const password = req.body.password
    console.log(req.body)
    const user = await client.user.create({
        data : {
            username :username, 
            password : password
        }
    })
    res.json({
        message : "Signup Sucessful", 
        id : user.id
    })
 })
 app.listen(3002)

