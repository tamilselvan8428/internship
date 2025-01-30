const express = require('express');
const server = express();
const port = 5001;
const items=[
    {id:1,name:'Windows'},
    {id:2,name:'MAC'}
];

//middleware

server.get('/', (req, res) => {
    console.log("Running Tamil!...");
    res.send("Hello, this is the Tamil!");
});

server.get('/user',(req,res) => {
    res.end("This is the tamil's router")
});

server.get('/product',(req,res) => {
    res.json(items)
});

server.use(express.json());
server.post('/product',(req,res)=>{
    newitem={id:items.length+1,name:req.body.name};
    items.push(newitem);
    res.status(201).json(newitem);
});

server.put('/product/:id',(res,req)=>{
    const itemid=parseInt(req.params.id);
    const updateditem=items.findIndex((item)=>item.id===itemid);
    if(updateditem !== -1){
        items[updateditem].name=req.body.name;
        res.json(items[updateditem]);
    }
    else{
        res.status(404).json("Item Tamil is not found!......Bhai!!..........");
    }
});
let itemindex = 0;
server.delete('/product/:id',(req,res)=>{
    const itemid=parseInt(req.params.id);
    const updateditem=items.findIndex((item)=>item.id===itemid);
    if(updateditem !== -1){
        const deleteditem=items.splice(itemindex,1);
        res.json(deleteditem);
    }
    else{
        res.status(404).json("Item Tamil is not found!......Bhai!!..........");
    }
});

server.listen(port, () => {
    console.log(`Server running on port ${port}`);
}); 