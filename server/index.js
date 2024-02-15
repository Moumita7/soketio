const express=require("express");
const app=express()
const http=require("http");
const {Server}=require("socket.io");
const cors=require("cors");


app.use(cors())

const server=http.createServer(app)

const io=new Server(server,{
    cors:{
        origin:"http://localhost:5173/",
        methods:["GET","POST"]
    }
})

// io.on("connection",(soket)=>{
//     console.log(`User connected ${soket}`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    `)
// })

io.on("connection",(soket)=>{
    console.log(`server is running ${soket.id}`)

    // soket.on("send_message",(data)=>{
    //     console.log(data)
    // })
    soket.on("send_message",(data)=>{
       soket.broadcast.emit("receive_meaasge",data)
    })
}

)

server.listen(3000,()=>{
    console.log("server is runnitg 3000")
})
