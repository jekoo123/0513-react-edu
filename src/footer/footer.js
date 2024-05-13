import React from "react";
import { Container, Icon, FooterContentsArea, FooterContentsLabel, FooterContents } from "./styled";


export const Footer = () => {

    return (

        <Container>
            <FooterContentsArea>
                <Icon>B</Icon>
                <FooterContents>© 2017-2018</FooterContents>
            </FooterContentsArea>
            <FooterContentsArea>
                <FooterContentsLabel>Features</FooterContentsLabel>
                <FooterContents>Cool stuff</FooterContents>
                <FooterContents>Random feature</FooterContents>
                <FooterContents>Team feature</FooterContents>
                <FooterContents>Stuff for developers</FooterContents>
                <FooterContents>Another one</FooterContents>
                <FooterContents>Another one</FooterContents>
            </FooterContentsArea>
            <FooterContentsArea>
                <FooterContentsLabel>Resources</FooterContentsLabel>
                <FooterContents>Resource</FooterContents>
                <FooterContents>Resource name</FooterContents>
                <FooterContents>Another resource</FooterContents>
                <FooterContents>Final resource</FooterContents>
            </FooterContentsArea>
            <FooterContentsArea>
                <FooterContentsLabel>About</FooterContentsLabel>
                <FooterContents>Team</FooterContents>
                <FooterContents>Locations</FooterContents>
                <FooterContents>Privacy</FooterContents>
                <FooterContents>Terms</FooterContents>
            </FooterContentsArea>
        </Container>

    )

}