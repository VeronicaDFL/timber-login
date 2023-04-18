import { useState } from "react";
import { Button } from "react-bootstrap";
import Login from "./Login.jsx";
import Signup from "./Signup.jsx";

export default function Home () {
    const [isMember, setIsMember] = useState (true);

    return (
        <>
        {
        (isMember)
       ? <Login/>
       : <Signup/>
       
        }
        <Button onClick ={() => setIsMember(!isMember)} >Switch Form</Button>
        </>
    )
}