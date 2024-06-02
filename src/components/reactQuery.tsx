import React from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useQuery } from "react-query";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

const getUsers = async (): Promise<User[]> => {
  const { data } = await axios.get<User[]>(
    "https://jsonplaceholder.typicode.com/users"
  );
  return data;
};

function App() {
  const { isLoading, isError, error, data } = useQuery<User[], Error>(
    "users",
    getUsers
  );

  // const usersObject = useQuery("users", getUsers, {
  //   useErrorBoundary: true,
  // });

  // if (usersObject.isLoading) {
  //   return <div>Loading...</div>;
  // }

  // if (usersObject.data) {
  //   return (
  //      {data.map((user, index) => <p>{user.name}</p>)}
  //   )
  // }

  return (
    <div className="App">
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error, {error.message}</div>}
      {data && data.map((user) => <div key={user.id}>{user.phone}</div>)}
    </div>
  );
}

export default App;
