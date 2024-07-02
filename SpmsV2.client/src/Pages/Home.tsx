//import WeatherForecast from "../Components/WeatherForecast.tsx";
//import LogoutLink from "../Components/LogoutLink.tsx";
import AuthorizeView from "../Components/AuthorizeView.tsx";
//import { NavLink } from "react-router-dom";
import React from "react";
import Layout from "./Layout/Layout.tsx";
import Package5 from "../Components/Package5.tsx";

function Home() {
    return (
        <React.Fragment>
            <Layout >
                <AuthorizeView>
                    <Package5 />
                </AuthorizeView>
            </Layout>
        </React.Fragment>
    );
}

export default Home;