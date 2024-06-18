import { hash, compare } from "bcrypt";


export async function comparePassword(userPassword: string, DBPassword: string){
    try {
        const match = await compare(userPassword, DBPassword);
        console.log(match)
        return true;
    } catch (error) {
        console.error('Erro ao verificar a senha:', error);
        return false;
    }
}

export async function generateHash(password: string){
    const hashed = await hash(password,8)
    return hashed
}