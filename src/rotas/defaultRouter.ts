import { Router } from "express";
import { criar, deletar } from "../controllers/jogadorController";
import {PrismaClient} from '@prisma/client'
import { jogadoresType } from "../../types"
const prisma = new PrismaClient()
const defaultRouter = Router()
defaultRouter.get("/", async(req,res)=>{
   const p = await prisma.usuario.findMany()
   res.send(p)
})


export default defaultRouter