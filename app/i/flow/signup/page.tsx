'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DateOfBirthSelection } from "./DateOfBirthSelection";
import { X } from "../../../../node_modules/lucide-react";
import Home from "@/app/page";
import Link from "next/link";
import { useState } from "react";
import { useMutation } from "react-query";
import { signUp } from "@/app/api/signup";
import { createUserProfile } from "@/app/api/createProfile";
import { UserProfile } from "@/app/utils/supabaseTypes";
import ProfilePicturePlaceholder  from '../../../../public/icons8-user-96.png'
import { randomUUID } from "crypto";


const SignUp: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [name, setName] = useState('');
  const [dateOfBirth, setdateOfBirth] = useState('');
  const [error, setError] = useState('');

  const { mutate, isLoading, isError, isSuccess } = useMutation(signUp);

  const handleSignUp = () => {
    if (password !== repeatPassword) {
      setError('Passwords must match');
      return;
    } else {
      mutate({ email, password }, {
        onSuccess: async (data) => {
          try {
            if (data?.id) {
              const userCreated = await createUser(data?.id);
              if (userCreated) {
                localStorage.setItem('user', JSON.stringify(data));
                window.location.href = '/home';
              } else {
                setError('User creation failed. Please try again.');
                console.log('An error has occurred when creating user sosodkd', error);
              }
            }
          } catch (error: any) {
            setError(error.message);
            console.log('the error message for duplicate email is', error)
          }
        },
      });
    }
  };







  const createUser = async (userId: string) => {
    try {
      const generateUserName = (name: string) => {
        const formattedName = name.toLowerCase().replace(/\s/g, ""); // Convert name to lowercase and remove white spaces
        const randomSuffix = Math.floor(1000 + Math.random() * 9000); // Generate a random 4-digit number
        return `${formattedName}${randomSuffix}`; // Combine the formatted name and the random number
      };

      const randomWidth = Math.floor(Math.random() * (2001 - 200) + 200);
      const randomHeight = Math.floor(Math.random() * (2001 - 200) + 200);

      const imageUrl = `https://picsum.photos/${randomWidth}/${randomHeight}`;


      const user_name = generateUserName(name); // Generate the username variation
      const newUser = {
        display_name: name,
        profile_picture_url: imageUrl,
        background_picture_url: imageUrl,
        bio: '',
        followers: [],
        following: [],
        likes: [],
        posts: [],
        replies: [],
        user_id: userId,
        user_name: user_name,
        email: email,
      };

      await createUserProfile(newUser); // Call the createUserProfile function with the new user data
      console.log("User profile created successfully:", newUser);
      return true

    } catch (error) {
      console.error("Error creating user profile:", error);
      return false

    }
  };




  return (
    <div>
      <Home />
      <div className="fixed inset-0 bg-opacity-80 flex items-center justify-center">
      <div className="md:absolute md:top-10 border md:w-1/2 md:left-72 md:h-4/5 h-screen w-full bg-black px-8 py-4 rounded-lg gap-4">
          <header className="flex gap-4 items-center">
            <Link href={'/'}><div className="p-2 hover:bg-secondary rounded-full"> <X /></div></Link>
            <h2 className="text-2xl">Create an Account</h2>
          </header>
          <div className="flex flex-col gap-4 pl-14">
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="name">Name</Label>
              <Input type="name" id="name" placeholder="Name" normal value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="Email" normal value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className="flex flex-col w-full gap-1.5">
              <h4>Date of Birth</h4>
              <p className="text-xs">
                This will not be shown publicly. Confirm your own age, even if
                this account is for a business, a pet, or something else.
              </p>
              <DateOfBirthSelection />

              <div className="grid w-full -sm items-center gap-1.5">
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  id="password"
                  placeholder="Password"
                  normal
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="grid w-full -sm items-center gap-1.5">
                <Label htmlFor="repeatPassword">Repeat Password</Label>
                <Input
                  type="password"
                  id="repeatPassword"
                  placeholder="Repeat Password"
                  normal
                  value={repeatPassword}
                  onChange={(e) => setRepeatPassword(e.target.value)}
                />
              </div>
              {error && <p className="text-red-500">{error}</p>}
            </div>
          </div>
          <footer className="pl-14 pt-6">
            <Button type="submit" onClick={handleSignUp}>
              {isLoading ? 'Creating Account...' : 'Create Account'} {/* Show loading state */}
            </Button>
            {isError && <p>Error signing up. Please try again.</p>} {/* Show error message */}
            {isSuccess && <p>Sign up successful!</p>} {/* Show success message */}
          </footer>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
