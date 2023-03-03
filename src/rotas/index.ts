import { rotaType } from "../../types";
import defaultRouter from "./defaultRouter";
import jogadorRouter from "./jogadorRouter";
import usuarioRouter from "./usuarioRouter";

const route:rotaType[] = [
    // {endpoint:"/usuario",rota:usuarioRouter},
    {endpoint:"/usuario2",rota:usuarioRouter},
    // {endpoint:"/jogador",rota:jogadorRouter},
    {endpoint:"/",rota:defaultRouter},
]

export default route