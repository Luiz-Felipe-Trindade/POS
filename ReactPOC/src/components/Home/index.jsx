import React from "react";
import { Container, Card, Title, Subtitle, Button } from "./styles";
import { useNavigate } from "react-router-dom";

export const Home = () => {
    const navigate = useNavigate()
    return(
        <Container>
            <Card>
                <Title>ERP Manager</Title>
                    <Subtitle>Sistema de gerenciamento empresarial</Subtitle>
                    <Button variant="primary"   onClick={() => {
                        navigate("/login")
                    }}>
                     Entrar no Sistema
                    </Button>
                    <Button variant="secondary" onClick={() => {
                        navigate("/cadastro")
                    }}>
                    Cadastrar Empresa
                    </Button>
            </Card>
        </Container>
    )
}