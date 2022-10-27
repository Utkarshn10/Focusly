import {createContext, useState} from "react";

export const MyContext = createContext();

function Appcontext({children}) {
  const [timer, setTimer] = useState(0);
  return (
    <MyContext.Provider value={{timer,setTimer}}>
      {children}
    </MyContext.Provider>
  );
}

export default Appcontext;