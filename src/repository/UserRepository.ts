import cheerio = require('cheerio');
import { getPageInfo } from '../utils/getPageInfo';
import { supabase } from '../database/supabase';
import { GameList } from '../@types/@gameList';
import { userType } from '../@types/@user';

export class UserRepository {
    static async findByEmail(email: string){
        const { data: userByEmail } = await supabase.from('users').select("*").eq('email', email)
        if(userByEmail!.length){
            return true
        } else {
            return false
        }
    }

    static async findByUsername(username: string){
        const { data: userByUsername } = await supabase.from('users').select("*").eq('username', username)
        if(userByUsername!.length){
            return true
        } else {
            return false
        }
    }

    static async create(user: userType){
        const { data: newUser, error }= await supabase.from('users').insert(user).select()
        if(error){
            throw new Error
        }
        if(newUser){
            return newUser
        }
    }

    // static async findUser(email: string, username: string){
    //     const { data: userByUsername } = await supabase.from('users').select("*").eq('username', username)
    //     const { data: userByEmail } = await supabase.from('users').select("*").eq('email', email)

    //     //username já foi cadastrado?
    //     if(userByUsername!.length > 0){
    //         return 'username já cadastrado'
    //     }

    //     if(userByEmail!.length > 0){
    //         return 'username já cadastrado'
    //     }

    //     if(userByEmail!.length > 0 || userByUsername!.length > 0){
    //         console.log(true)
    //         return true
    //     } else {
    //         console.log(false)
    //         return false
    //     }
    // }
}