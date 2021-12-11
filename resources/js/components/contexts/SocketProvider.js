import { React, useContext, useEffect, useState, io } from "../../index";

const SocketContext = React.createContext()

export function useSocket() {
    return useContext(SocketContext)
}

export function SocketProvider ({children}) {

    const [socket, setSocket] = useState()

    useEffect( () => {

        var ip_address = '127.0.0.1';
        var socket_port = '8005';
        var new_socket = io(ip_address + ':' + socket_port);

        setSocket(new_socket)

        // console.log("in provider")
        // console.log(new_socket)

        return () => socket.close()

    }, [])

    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    )
}
