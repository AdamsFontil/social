import { supabase } from '../utils/supabase';

type SignInParams = {
  email: string;
  password: string;
};


export async function signIn({ email, password }: SignInParams) {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password
    });

    if (error) {
      throw new Error('Failed to sign in');
    }
    console.log(data)

    return data.user // Return the user data upon successful sign-in

  } catch (error: any) {
    console.error('Error signing in:', error.message);
    throw new Error('Internal server error');
  }
}
