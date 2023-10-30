import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { MoreHorizontal } from '../../node_modules/lucide-react'
import Link from "next/link";
import { UserProfile } from "@/app/utils/supabaseTypes";



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
          <Link href="/i/bookmarks">
            <p className="flex items-center hover:bg-secondary p-2">Add an existing account</p>
          </Link>
          <Link href="/i/connect_people">
            <p className="flex items-center hover:bg-secondary p-2">Log out of {userProfile?.user_name}</p>
          </Link>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default AccountPopover;
