const express=require('express')

const mongoose=require('mongoose')
const cors=require('cors')
const Pusher=require('pusher')
const mongoData=require('./mongoData')

const app =express()
const port = process.env.PORT || 9000;

app.use(cors())
app.use(express.json())

// const mongoURI="mongodb+srv://admin:nPzqofJwNMTuqNU9@cluster0.zzlxx.mongodb.net/slackDb?retryWrites=true&w=majority";
const mongoURI='mongodb+srv://admin:nPzqofJwNMTuqNU9@cluster0.zzlxx.mongodb.net/slackDB?retryWrites=true&w=majority'
mongoose.connect(mongoURI,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
})

mongoose.connection.once('open',()=>{
    console.log("db Connected");
})


app.get('/',(req,res)=>{
    res.status(200).send("ok")
})

app.post('/new/channel',(req,res)=>{
    const dbData=req.body

    mongoData.create(dbData,(err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    })
})

app.post('/new/message',(req,res)=>{
    const id=req.query.id
    const newMessage=req.body

    mongoData.update(
        {_id:id},
        {$push:{conversation:newMessage}},
        (err,data)=>{
            if(err){
                res.status(500).send(err)
            }else{
                res.status(201).send(data)
            }
        }
    )
})

app.get('/get/channelList',(req,res)=>{
    mongoData.find((err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            let channel=[]
            data.map((channelData)=>{
                const channelInfo={
                    id:channelData._id,
                    name:channelData.channelName
                }
                channel.push(channelInfo)
            })
            res.status(200).send(channel)
        }
    })
})


app.get('/get/conversation',(req,res)=>{
    const id=req.query.id

    mongoData.find({ _id:id},(err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(data)
        }
    })

})

app.listen(port,()=>console.log("listning to localhost"))

// 5dExn170DMnJq8Nr
// nPzqofJwNMTuqNU9