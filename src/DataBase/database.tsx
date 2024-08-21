import { createContext, useEffect, useState, ReactNode } from "react";

export const DBContext = createContext({} as any);

type User = {
    name: string,
    email: string,
    password: string
}

export const DbProvider = ({ children }: { children: ReactNode }) => {
    const [users, setUsers] = useState<User[]>([]);
    const [logged, setLogged] = useState<User>();

    useEffect(() => {
        const fetchUsers = async () => {
            const users: string | null = localStorage.getItem("users");

            if (users !== null) {
                const usersArray = JSON.parse(users)

                setUsers(usersArray);
            } else {
                console.log("No users found in the DB");
            }
        };
        fetchUsers();
    }, [logged])

    return (
        <DBContext.Provider value={{ users, setUsers, logged, setLogged }}>
            {children}
        </DBContext.Provider>
    )
}