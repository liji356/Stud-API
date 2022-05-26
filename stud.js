const Express=require("express")
const Bodyparser=require("body-parser")
const Mongoose=require("mongoose")




let app=Express()
app.use(Bodyparser.urlencoded({extended:true}))
app.use(Bodyparser.json())


var studmodel=Mongoose.model("studs",
new Mongoose.Schema({
    name:String,
    adnmno:String,
    cgpa:String
}))

app.post("/api/addstud",(req,res)=>{

    var getname=req.body.name
    var getadnmno=req.body.adnmno
    var getcgpa=req.body.cgpa
     var data={"name":getname,"adnmno":getadnmno,"cgpa":getcgpa}

     let stud=new studmodel(data)
     stud.save((error,data)=>
     {
         if(error)
         {
             res.send({"status":"error","data":error})
         }
         else
         {
             res.send({"status":"success","data":data})
         }
     })
    res.send(data)
})
Mongoose.connect("mongodb+srv://ligy:Liji1999@cluster0.25xx9.mongodb.net/studDb")


app.get("/api/viewstud",(req,res)=>{
    res.send("bdhjgdhsgd")
})



app.listen(5000,()=>{
    console.log("Server Running")
})