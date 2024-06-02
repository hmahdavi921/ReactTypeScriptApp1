import WeatherForecast from "../Components/WeatherForecast.tsx";
import LogoutLink from "../Components/LogoutLink.tsx";
import AuthorizeView, { AuthorizedUser } from "../Components/AuthorizeView.tsx";
import { NavLink } from "react-router-dom";

function Home() {
    return (
        <>
            <AuthorizeView>
                <span>
                    <LogoutLink>Logout <AuthorizedUser value="email" /></LogoutLink>
                </span>
                <WeatherForecast />
            </AuthorizeView>
            <NavLink className="nav-link" to="/">
                Home
            </NavLink>
        </>
    );
}

export default Home;