import React from "react";

import { Text, StyledButton, HorizontalContainer, BoldText, GreyText, CardContainer, CardTitle, CardContents, CardTitleContainer } from "./styled";

export const Card = ({ props }) => {

    return (
        <CardContainer>
            <CardTitleContainer>
                <CardTitle>{props.title}</CardTitle>
            </CardTitleContainer>
            <CardContents>
                <HorizontalContainer>
                    <BoldText>
                        {"$"}{props.nedan}
                    </BoldText>
                    <GreyText>/</GreyText>
                    <GreyText>mo</GreyText>
                </HorizontalContainer>
                <Text>
                    {props.userNumber}
                    {"users included"}<br />
                    {props.gigabyte}
                    {"GB of storage"}<br />
                    {props.discribe}<br />
                    {"Help center access"}
                </Text>
                <StyledButton
                    style={{
                        backgroundColor: props.title === "Free" ? "white" : "#007BFF",
                        color: props.title === "Free" ? "#007BFF" : "white",

                    }}>{props.buttonContents}</StyledButton>
            </CardContents>
        </CardContainer >
    )


}
