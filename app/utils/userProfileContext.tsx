'use client'
import React, { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import { UserProfile } from '@/app/utils/Types';
import { fetchUserProfile } from '@/app/api/fetchProfile';
import useCheckUser from '../utils/checkForUser';

type UserContextProps = {
  userProfile: UserProfile | null;
  setUserProfile: (profile: UserProfile | null) => void;
};

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [user, setUser] = useState<any>({});

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const user = JSON.parse(localStorage.getItem('user') || '{}');
      setUser(user);
      console.log('user from first useEffect', user)
    }
  }, []);

  useEffect(() => {

    const userId = user.id
    console.log('userID FROM CONTEXT', userId)



    const fetchData = async () => {
      try {
        const data = await fetchUserProfile(userId);
        console.log('data from fetching profile', data)
        setUserProfile(data);
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    if (!userId) {
      console.log('no user so dont fetchProfiles')
    } else {
      fetchData();
    }


  }, [user.id]);

  return <UserContext.Provider value={{ userProfile, setUserProfile }}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
