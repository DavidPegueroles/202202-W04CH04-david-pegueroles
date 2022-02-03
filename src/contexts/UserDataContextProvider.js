import { useState } from "react";
import UserDataContext from "./UserDataContext";

const UserDataContextProvider = ({ children }) => {
  const UserData = useState([]);

  return (
    <UserDataContext.Provider value={{ UserData }}>
      {children}
    </UserDataContext.Provider>
  );
};

export default UserDataContextProvider;
