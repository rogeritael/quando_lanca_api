import { supabase } from '../database/supabase';
import { userType } from '../@types/@user';

export class WishlistRepository {
    static async findByEmail(email: string){
    }

    static async addToWishlist(user_id: string, game_id: string) {
        try {
          // Verificar se o game_id existe na tabela games
          const { data: game, error: gameError } = await supabase
            .from('games')
            .select('id')
            .eq('id', game_id)
            .single();
      
          if (gameError) {
            console.error('Erro ao verificar o jogo:', gameError);
            return { success: false, message: 'Erro ao verificar o jogo' };
          }
      
          if (!game) {
            console.log('Jogo não encontrado');
            return { success: false, message: 'Jogo não encontrado' };
          }
      
          console.log('Jogo encontrado:', game);
      
          // Verificar se o user_id existe na tabela users
          const { data: user, error: userError } = await supabase
            .from('users')
            .select('id')
            .eq('id', user_id)
            .single();
      
          if (userError) {
            console.error('Erro ao verificar o usuário:', userError);
            return { success: false, message: 'Erro ao verificar o usuário' };
          }
      
          if (!user) {
            console.log('Usuário não encontrado');
            return { success: false, message: 'Usuário não encontrado' };
          }
      
          // Inserir na tabela wishlist
          const { data: wishlist, error: wishlistError } = await supabase
            .from('wishlist')
            .insert([{ game_id: game_id, user_id: user_id }])
            .select();
      
          if (wishlistError) {
            console.error('Erro ao inserir na wishlist:', wishlistError);
            return { success: false, message: 'Erro ao inserir na wishlist' };
          }
      
          return { success: true, data: wishlist };
        } catch (error) {
          console.error('Erro inesperado:', error);
          return { success: false, message: 'Erro inesperado' };
        }
      }

    static async removeFromWishlist(user_id: string, game_id: string){
        const { data: wishlist, error: wishlistError } = await supabase
            .from('wishlist')
            .delete()
            .eq('user_id', user_id)
            .eq('game_id', game_id);
    }

}