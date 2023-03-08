import { Response, Request } from "express"
export const getUsuario =async (req:Request,res:Response)=>{
    // const u = await prisma.usuario.findMany({
    //    include:{
    //       jogadore:true
    //    }
    // })
    // res.json(u)
    res.json("usuarios")
 }