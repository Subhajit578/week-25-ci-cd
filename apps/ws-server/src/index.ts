import { WebSocket, WebSocketServer } from "ws";
import {client} from "@repo/db/client"
const wss = new WebSocketServer({port : 3001})
wss.on('connection' , async function  connection(socket) {
    const user = await client.user.create( {
        data : {
            username : "ChatUser"  + Math.random()*1000,
            password : "ChatPassword"  + Math.random()*1000,
        }
    })
    console.log(user)
    socket.send("Hi There from Server" + JSON.stringify(user))
})