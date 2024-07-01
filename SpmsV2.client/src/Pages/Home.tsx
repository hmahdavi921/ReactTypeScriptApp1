import WeatherForecast from "../Components/WeatherForecast.tsx";
import LogoutLink from "../Components/LogoutLink.tsx";
import AuthorizeView, { AuthorizedUser } from "../Components/AuthorizeView.tsx";
import { NavLink } from "react-router-dom";
import React from "react";

function Home() {
    return (
        <React.Fragment>
            <AuthorizeView>
                {/*<span>*/}
                {/*    <LogoutLink>Logout <AuthorizedUser value="email" /></LogoutLink>*/}
                {/*</span>*/}
                <WeatherForecast/>
            </AuthorizeView>

            <NavLink className="nav-link" to="/package">
                package
            </NavLink>
        </React.Fragment>
    );
}

export default Home;