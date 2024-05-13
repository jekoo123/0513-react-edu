import React from "react";
import { LayOut, CardArea, TitleContainer, Title, TitleDescription } from "./styled";
import { Card } from "../card/card";

const CardDummy = [
    {
        title: "Free",
        nedan: 0,
        userNumber: 10,
        gigabyte: 2,
        discribe: "Email support",
        buttonContents: "Sign up for free"
    },
    {
        title: "Pro",
        nedan: 15,
        userNumber: 20,
        gigabyte: 10,
        discribe: "Priority email support",
        buttonContents: "Get started",
    },
    {
        title: "Enterprise",
        nedan: 29,
        userNumber: 30,
        gigabyte: 15,
        discribe: "Phone and email support",
        buttonContents: "Contact us",
    }
]


export const Main = () => {
    return (
        <LayOut>
            <TitleContainer>
                <Title>Pricing</Title>
                <TitleDescription>
                    Quickly build an effective pricing table for your potential customers with this Bootstrap example. It's built with default Bootstrap components and utilities with little customization.
                </TitleDescription>
            </TitleContainer>
            <CardArea>
                {CardDummy.map((e, i) => {
                    return (
                        <Card props={e} key={i} />
                    )
                })
                }
            </CardArea>
        </LayOut>

    )


}   