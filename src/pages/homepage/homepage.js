import React from "react";

import { HomePageContainer } from "./homepage.styles";

import Directory from "../../components/directory/directory";


export const HomePage = () => {

    return (
        <HomePageContainer>
            <Directory />
        </HomePageContainer>
    )
}