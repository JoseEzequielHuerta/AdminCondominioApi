import Login from "../models/Login";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const SALT_ROUNDS=10;


exports.nuevoUsuario = async(req,res)=>{
    const {correo,password,name}=req.body
    const has = await bcrypt
                    .genSalt(SALT_ROUNDS)
                    .then((salt)=>bcrypt.hash(password,salt))
                    .then((ha)=>ha)
    const login = Login({correo:correo,password:has,name:name});
    await login
        .save(login)
        .then((data)=>res.status(201).json(data))
        .catch((err)=>res.status(501).json(err))

}

exports.login = async (req,res)=>{
    const {correo,password} =req.body;

    await Login.findOne({correo})
        .then((data)=>{
            if(!data){
                return res.status(400).json({message:"Credenciales incorrectas"})
            }
            bcrypt.compare(password,data.password).then((isSamePassword)=>{
                if(!isSamePassword){
                    return res.status(400).json({message:"Credenciales incorrectas"})
                }

                const token = jwt.sign({
                    name:data.name,
                    correo:data.correo,
                    id:data._id
                },process.env.TOKEN_SECRET)
                return res.status(201).json({message:"Pass",token:token})
            })
        })
}

