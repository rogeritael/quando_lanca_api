import { hash } from "bcrypt";


export async function comparePassword(password1: string, password2: string){

}

export async function generateHash(password: string){
    const hashed = await hash(password,8)
    return hashed
}