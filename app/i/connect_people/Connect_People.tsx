import { ArrowLeft, Plus, Settings } from "../../../node_modules/lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const suggestedAccounts = [
  {
    id: 1,
    username: 'tech_wiz_101',
    name: 'John Smith',
    avatar: 'url_to_avatar_1.jpg',
    isTwitterBlue: true,
    isVerified: true,
    description: 'Tech enthusiast sharing the latest gadgets and innovations. 📱💻 #TechGuru',
  },
  {
    id: 2,
    username: 'travel_bug',
    name: 'Emily Johnson',
    avatar: 'url_to_avatar_2.jpg',
    isTwitterBlue: false,
    isVerified: true,
    description: 'Exploring the world, one destination at a time. ✈️🌎 #Wanderlust',
  },
  {
    id: 3,
    username: 'foodie_delights',
    name: 'David Brown',
    avatar: 'url_to_avatar_3.jpg',
    isTwitterBlue: false,
    isVerified: true,
    description: 'Food lover sharing delicious recipes and restaurant reviews. 🍔🍕 #Foodie',
  },
  {
    id: 4,
    username: 'fitness_freak',
    name: 'Sarah Davis',
    avatar: 'url_to_avatar_4.jpg',
    isTwitterBlue: true,
    isVerified: false,
    description: 'Fitness enthusiast inspiring a healthy lifestyle. 💪🥗 #FitnessJunkie',
  },
  {
    id: 5,
    username: 'movie_buff',
    name: 'Michael Anderson',
    avatar: 'url_to_avatar_5.jpg',
    isTwitterBlue: false,
    isVerified: false,
    description: 'Cinephile discussing the latest movies and film recommendations. 🎥🍿 #MovieManiac',
  },
];

const Connect_People = () => {
  return (
    <div className='text-2xl flex flex-col h-full'>
      <section className="">
        <header className="flex justify-between items-center p-4 gap-2">
          <div className="gap-6 flex justify-center items-center">
            <div><ArrowLeft /></div>
            <h3>Connect</h3>
          </div>

          <div><Settings /></div>

        </header>

        <div className='flex flex-col '>
          <h3 className="p-4">Suggested for you</h3>
          <div className="">
            {suggestedAccounts.map((account) => (
              <div key={account.id} className="flex justify-between gap hover:bg-secondary">
                  <Avatar className='w-16 h-16 mt-4 ml-2 rounded-full'>
                    <AvatarImage src={account.avatar} />
                    <AvatarFallback>{account.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex-col p-4">
                    <div className="flex justify-between">
                      <div className="flex gap-2">
                      <h4>{account.name}</h4>
                      <p>@{account.username}</p>
                      </div>

                      <Button className="rounded-full justify-center items-center bg-primary">Follow</Button>
                    </div>
                    <div className=" flex items-center">
                      <p>{account.description}</p>
                    </div>
                  </div>

              </div>
            ))}
          </div>
          <div className="px-4 py-2 hover:bg-secondary text-sky-500 text-sm">Show more</div>
        </div>
      </section>
    </div>
  );
};

export default Connect_People;
