import React, { useContext, useEffect, useState } from "react";
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedUser, setSelectedUser] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
  });
  const fetchUserData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const userData = await response.json();
    setUsers(userData);
  };
  useEffect(() => {
    fetchUserData();
  }, []);
  const HandleDelete = (id) => {
    let DeleteUser = users.filter((item) => item.id !== id);
    setUsers(DeleteUser);
  };
  const showModal = (updatedInfo) => {
    const { id, name, email, phone, website } = updatedInfo;
    setSelectedUser({
      id: id,
      name: name,
      email: email,
      phone: phone,
      website: website,
    });

    setIsModalVisible(true);
  };
  const handleOk = (id) => {
    const updatedData = users.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          name: selectedUser.name,
          phone: selectedUser.phone,
          email: selectedUser.email,
          website: selectedUser.website,
        };
      }
      return item;
    });
    console.log(updatedData);
    setUsers(updatedData);

    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <AppContext.Provider
      value={{
        users,
        HandleDelete,
        isModalVisible,
        showModal,
        handleOk,
        handleCancel,
        selectedUser,
        setSelectedUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
