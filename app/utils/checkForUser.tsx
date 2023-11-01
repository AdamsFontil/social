import { useEffect, useState } from 'react';

function useCheckUser() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const user = localStorage.getItem('user');
      if (user) {
        setUser(JSON.parse(user));
        console.log('user found----', user);
      } else {
        console.log('no user found-----');
        window.location.href = '/';
      }
    }
  }, [ ]);

  return user;
}

export default useCheckUser;
