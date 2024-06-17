import { Request, Response } from "express"
import { UserRepository } from "../repository/UserRepository"
import { generateHash } from "../utils/password"

export class UserController {
        
    // static async index(req: Request, res: Response){
    //     try {
    //         //recupera todos os resultados
    //     } catch(error){
    //         console.error(error)
    //         throw error
    //     } 
    // }

    static async show(req: Request, res: Response){
        try {
            //recupera apenas um resultado (serach)
        } catch(error){
            console.error(error)
            throw error
        }
    }

    static async store(req: Request, res: Response){
        try {
            const { username, email, password } = req.body
            if(!username || !email || !password){
                res.status(400).json('Erro ao cadastrar usuário')
            }

            //verifica se o usuário já existe
            const emailAlreadyExists = await UserRepository.findByEmail(email)
            if(emailAlreadyExists){
                return res.status(400).json({ message: 'email já cadastrado' })
            }

            const usernameAlreadyExists = await UserRepository.findByUsername(`${username}`)
            if(usernameAlreadyExists){
                return res.status(400).json({ message: 'username já cadastrado' })
            }

            //encripta a senha e cria o usuário
            const hashedPass = await generateHash(password)
            const user = {
                email, username, password: hashedPass
            }

            //insere o usuário no banco de dados
            const createdUser = await UserRepository.create(user)
            if(createdUser){
                res.status(200).json({ user: createdUser })
            } else {
                res.status(400).json({ message: 'erro ao criar conta' })
            }

            //armazena um dado
        } catch(error){
            console.error(error)
            throw error
        }
    }

    static async login(req: Request, res: Response){
        try {
            //faz login e retorna um token
        } catch(error){
            console.error(error)
            throw error
        }
    }
}