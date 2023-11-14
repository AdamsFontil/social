import { supabase } from '../utils/supabase';

type SignUpParams = {
  email: string;
  password: string;
};


export async function signUp({ email, password }: SignUpParams) {
  try {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password
    });

    if (error) {
      throw new Error('Failed to sign up');
    }
    console.log(data)

    return data.user // Return the user data upon successful sign-in

  } catch (error: any) {
    console.error('Error signing up:', error.message);
    throw new Error('Internal server error');
  }
}
