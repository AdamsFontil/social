'use client'
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { MoreHorizontal } from '../../node_modules/lucide-react'
import Link from "next/link";
import { UserProfile } from "@/app/utils/supabaseTypes";
import { supabase } from "@/app/utils/supabase";

// Inside your logout function or wherever you want to sign out the user
const handleLogout = async () => {
  console.log('logging out')
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.error('Error signing out:', error.message);
  } else {
    console.log('no errors removing from localstorage')
    localStorage.removeItem('user');
    window.location.href = '/';
  }
};


interface Props {
  userProfile: UserProfile | null | undefined;
}

const AccountPopover: React.FC<Props> = ({ userProfile }) => {
  console.log('accountPOPOVER---', userProfile);

  return (
    <Popover>
      <PopoverTrigger>
        <MoreHorizontal />
      </PopoverTrigger>
      <PopoverContent className="overflow-y-auto">
        <div className="flex flex-col text-lg gap-2">
          <div >
            <p className="flex items-center hover:bg-secondary p-2">Add an existing account</p>
          </div>
          <div >
            <p onClick={handleLogout} className="flex items-center hover:bg-secondary p-2">Log out of {userProfile?.user_name}</p>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default AccountPopover;
