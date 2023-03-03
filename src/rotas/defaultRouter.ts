import { Router } from "express";
import { criar, deletar } from "../controllers/jogadorController";

const defaultRouter = Router()
defaultRouter.get("/",(req,res)=>{
   res.send("servidor rodando ...")
})


export default defaultRouter