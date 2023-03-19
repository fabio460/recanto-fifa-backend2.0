import { Router } from "express";
import { atualizar, bugado, criar, deletar, getUsuario, getUsuarioPeloNome, getUsuarioPoId, pagamentoDasPremiacoes } from "../controllers/usuarioController";

const usuarioRouter = Router()

usuarioRouter.get("/",getUsuario)
usuarioRouter.get("/:id",getUsuarioPoId)
usuarioRouter.get("/pelonome/:id",getUsuarioPeloNome)
usuarioRouter.post("/",criar)
usuarioRouter.put('/',atualizar)
usuarioRouter.delete('/',deletar)
usuarioRouter.put("/bugado",bugado)
usuarioRouter.put("/premios",pagamentoDasPremiacoes)
export default usuarioRouter