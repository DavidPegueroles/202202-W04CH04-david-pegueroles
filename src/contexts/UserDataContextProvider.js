import { useState } from "react";
import UserDataContext from "./UserDataContext";

const UserDataContextProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    name: "",
    lastname: "",
    birthday: "",
    email: "",
    username: "",
    password: "",
  });
  const [currentPage, setCurrentPage] = useState(0);

  const inputOnChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  const nextPage = () => {
    if (currentPage === 2) {
      return;
    }
    setCurrentPage(currentPage + 1);
  };

  const previousPage = () => {
    if (currentPage === 0) {
      return;
    }
    setCurrentPage(currentPage - 1);
  };
  console.log(userData);

  return (
    <UserDataContext.Provider
      value={{ userData, inputOnChange, currentPage, nextPage, previousPage }}
    >
      {children}
    </UserDataContext.Provider>
  );
};

export default UserDataContextProvider;
