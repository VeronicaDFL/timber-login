import Container from "react-bootstrap/Container";
import  Row  from "react-bootstrap/Row";
import Col  from "react-bootstrap/Col";
import LoginForm from "./LoginForm.jsx";




export default function Login () {

    return (
        <Container>
        <Row>
            <Col className="mx-4 my-4 p-4 rounded-3 login-container">
                <h1>Login</h1>
            <LoginForm/>
            </Col>
        </Row>
        </Container>
        
    )
}

