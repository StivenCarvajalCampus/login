import express from "express";
import session from "express-session";
import {passport} from "./passport.js";
import fs from "fs";


const app = express();
app.use(express.static('frontend'));
/*app.use(express.json());
app.listen(3000,()=>{
    console.log('eduardo vale monda')
})*/
app.set('port',process.env.PORT || 3000)

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(session({
    secret: "logindiscord",
    resave: false,
    saveUnitialized:false
}))

app.use(passport.initialize())
app.use(passport.session())



app.get('/inicio', function (req,res){
    fs.readFile('./frontend/login.html', 'utf8', function (err,data){
        if (err){
            res.send('Error al cargar el archivo.');

        }else{
            res.send(data);
        }
    })
})
app.use("/login",passport.authenticate("discord",{failureRedirect:'/'}),(req,res)=>{
res.json({datos:"hola"})
})
app.listen(app.get('port'),()=>{
    console.log('server in port',app.get('port'))
})  