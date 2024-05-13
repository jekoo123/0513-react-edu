import React from "react";
import { Container, NavContainer, Title, NavContents, StyledButton } from "./styled";

export const Header = () => {
    return (
        <Container>
            <Title>Company name</Title>
            <NavContainer>
                <NavContents>Features</NavContents>
                <NavContents>Enterprise</NavContents>
                <NavContents>Support</NavContents>
                <NavContents>Pricing</NavContents>
                <StyledButton>Sign up</StyledButton>
            </NavContainer>
        </Container>
    )
}   