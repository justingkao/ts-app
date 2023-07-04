import { useContext } from 'react';
import { UserContext } from '../Model/UserContext';
import { useRef } from "react";

export default function Header() {
  const userContext = useContext(UserContext);
  const inputRef = useRef<HTMLInputElement>(null);
  const handleLogin = () => {
    userContext.setUser({
      userid: '9901',
      email: 'lcoding@example.com',
      role: 'admin'
    })
  }
  const handleLogout = () => {
    userContext.setUser(null)
  }

    const handleChange = () => {
    console.log(inputRef.current?.value);
  }

  return <><div>
    {userContext.user? (
      <>
        {userContext.user.userid} /{userContext.user.email} / {userContext.user.role}
        <button onClick={handleLogout}>Logout</button>
      </>
    ):(
      <button onClick={handleLogin}>Login</button>
    )}
  </div>
  <div>
      <input type="text" ref={inputRef} onChange={ handleChange }/>
    </div> 
  </>;
}
