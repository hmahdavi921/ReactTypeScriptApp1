import bellsvg from '../assets/svg/bell.svg';
import logo from '../assets/image/logo.png';
import burgermenusvg from '../assets/svg/burger-menu.svg';
import { useEffect, useState } from 'react';

const Header = () => {

    const [userData, setUserData] = useState({
        id: String,
        email: String
    });

    useEffect(() => {
        fetch('/home/User')
            .then(response => response.json())
            .then((response) => {
                setUserData(response);
                //console.log(userData);
            }).catch(error => {
                // Handle any errors that occurred during the fetch
                console.error('Fetch error:', error);
            });

        //console.log(layoutcontext)

    }, []);

    return (
        <header className="navbar flex-md-nowrap p-0" data-bs-theme="light">
            <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-7 text-white" href="/">
                <img src={logo} />
                <span className="d-none d-md-inline">&nbsp; سیستم کنترل هوشمند شرکت اتصال مکانیک</span>
            </a>
            <ul className="navbar-nav flex-row">
                <li className="nav-item dropdown">
                    <a className="dropdown-item mt-lg-2 mt-2 mb-3 fs-7 d-none d-lg-block" href="#">
                        <span id="user-name" className="d-inline">
                            کاربر حسین مهدوی
                        </span>
                    </a>
                </li>
                {/*<li className="nav-item dropdown">*/}
                {/*    <a className="nav-link  text-white me-lg-5" href="#" data-bs-toggle="dropdown" aria-expanded="false">*/}
                {/*        <div className="position-relative">*/}
                {/*            <img src={bellsvg} width="21" height="21" />*/}
                {/*            <span className="indicator">4</span>*/}
                {/*        </div>*/}
                {/*    </a>*/}
                {/*    <ul className="dropdown-menu">*/}
                {/*        <li>*/}
                {/*            <a className="dropdown-item" href="#">*/}
                {/*                <div className="alert alert-primary" role="alert">*/}
                {/*                    A simple primary alert—check it out!*/}
                {/*                </div>*/}
                {/*            </a>*/}
                {/*        </li>*/}
                {/*        <li>*/}
                {/*            <a className="dropdown-item" href="#">*/}
                {/*                <div className="alert alert-primary d-flex align-items-center" role="alert">*/}
                {/*                    <img src={bellsvg} width="21" height="21" />*/}
                {/*                    <div>*/}
                {/*                        An example alert with an icon*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </a>*/}
                {/*        </li>*/}
                {/*        <li>*/}
                {/*            <a className="dropdown-item" href="#">*/}
                {/*                <div className="alert alert-success" role="alert">*/}
                {/*                    A simple success alert—check it out!*/}
                {/*                </div>*/}
                {/*            </a>*/}
                {/*        </li>*/}
                {/*    </ul>*/}
                {/*</li>*/}
                 <li className="nav-item d-md-none">
                    <button className="nav-link px-3" type="button" data-bs-toggle="offcanvas"
                        data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false"
                        style={{ marginLeft: "13px", marginBottom: "4px" }}>
                        <img width="25" height="25" decoding="async"
                            data-nimg="1" src={burgermenusvg} className="text-white" />
                    </button>
                </li>
            </ul>
        </header>
    );
}

export default Header;