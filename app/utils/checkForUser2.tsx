import { useEffect, useState } from 'react';

function useCheckUser2() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const user = localStorage.getItem('user');
      if (user) {
        setUser(JSON.parse(user));
        window.location.href = '/home';
        console.log('user found----', user);
      } else {
        console.log('no user found-----');
      }
    }
  }, [ ]);

  return user;
}

export default useCheckUser2;
