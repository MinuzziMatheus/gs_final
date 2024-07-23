const { Router } = require("express")
const querys = require("../querys")

const router = Router()

router.get("/", async (req,res) => {
    const query = await querys.getAllUsers()
    return res.status(200).json(query)
})

router.post("/", async (req,res) => {
    const { name, cpf, telefone } = req.body
    const query = await querys.createUser(name, cpf, telefone)
    return res.status(200).json(query)
})

router.post("/doLogin", async (req,res) => {
    console.log(req.body)
    const { name, cpf, telefone } = req.body
    const query = await querys.loginUser(name, cpf, telefone)
    if(query.length === 0){
        return res.status(400).json({message:"Credenciais inválidas"})
    }
    return res.status(200).json({message:"Login efetuado com sucesso"})
})

router.put("/", async (req,res) => {
    const { id, name, cpf, telefone } = req.body
    const query = await querys.updateUser(id, name, cpf, telefone)
    if(query === null){
        return res.status(400).json({message:"Usuário não encontrado"})
    }
    return res.status(200).json({message:"Usuário atualizado com sucesso"})
})

router.delete("/", async (req,res) => {
    const { id } = req.body
    const query = await querys.deleteUser(id)
    console.log(query)
    if(query === null){
        return res.status(400).json({message:"Usuário não encontrado"})
    }
    return res.status(200).json({message:"Usuário deletado com sucesso"})
})

module.exports = router