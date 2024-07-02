import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import LogoutLink from '../../Components/LogoutLink';
import aboutsvg from '../../assets/svg/about.svg';
import burgermenusvg from '../../assets/svg/burger-menu.svg';
import calendersvg from '../../assets/svg/calender.svg';
import chartsvg from '../../assets/svg/chart.svg';
import exitsvg from '../../assets/svg/exit.svg';
import homesvg from '../../assets/svg/home.svg';
import powersvg from '../../assets/svg/power.svg';
import settingsvg from '../../assets/svg/setting.svg';
//import hourglasssvg from '../../assets/svg/hourglass.svg';
//import bellsvg from '../../assets/svg/bell.svg';
//import passwordsvg from '../../assets/svg/password.svg';
//import refreshsvg from '../../assets/svg/refresh.svg';
//import signalerrorsvg from '../../assets/svg/signal-error.svg';
//import signallostsvg from '../../assets/svg/signal-lost.svg';
//import signaloksvg from '../../assets/svg/signal-ok.svg';
import logo from '../../assets/image/logo.png';
import 'bootstrap/dist/css/bootstrap.rtl.css';
import '../../assets/css/dashboard.rtl.css';




function Layout({ children }) {

    //const [user, setUser] = useState({});
    //const { id } = useParams();

    useEffect(() => {
        console.info('layout -> useEffect');
        //console.info(children);
    }, [])

    const handleOnFocus = () => {
        blur();
    };

    return (
        <React.Fragment>
            <header className="navbar flex-md-nowrap p-0" data-bs-theme="light">
                <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-7 text-white" href="/">
                    <img src={logo} />
                    <span className="d-none d-md-inline">&nbsp; سیستم کنترل هوشمند شرکت اتصال مکانیک</span>
                </a>
                <ul className="navbar-nav flex-row">
                    <li className="nav-item dropdown">
                        <a className="dropdown-item mt-lg-2 mt-2 fs-7 d-none d-lg-block" href="#">
                            <span id="user-name" className="d-inline">
                                کاربر حسین مهدوی
                            </span>
                        </a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link  text-white me-lg-5" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                            <div className="position-relative">
                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                    className="feather feather-bell align-middle">
                                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                                    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                                </svg>
                                <span className="indicator">4</span>
                            </div>
                        </a>
                        <ul className="dropdown-menu">
                            <li>
                                <a className="dropdown-item" href="#">
                                    <div className="alert alert-primary" role="alert">
                                        A simple primary alert—check it out!
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                    <div className="alert alert-primary d-flex align-items-center" role="alert">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="none"
                                            className="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img"
                                            aria-label="Warning:">
                                            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                        </svg>
                                        <div>
                                            An example alert with an icon
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                    <div className="alert alert-success" role="alert">
                                        A simple success alert—check it out!
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </li>


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
            <div id="company-info-wraper" className="d-none d-lg-block">
                <div className=" text-center">
                    <p id="company-name">آب منطقه ای چهارمحال و بختیاری</p>
                    <p id="package-name" style={{ fontWeight: "600" }}>پروژه بن بروجن ایستگاه شماره 1</p>
                    <p id="package-code">( P18 + p6 ) ( 14020901)</p>
                </div>
            </div>
            <div id="main-container" className="container-fluid">
                <div className="row">
                    <div className="sidebar col-md-3 col-lg-1 p-0">
                        <div className="offcanvas-md offcanvas-end" id="sidebarMenu"
                            aria-labelledby="sidebarMenuLabel">
                            <div className="offcanvas-header">
                                <span className="offcanvas-title" id="sidebarMenuLabel">سیستم کنترل هوشمند شرکت اتصال مکانیک</span>
                                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#sidebarMenu"></button>
                            </div>
                            <div className="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
                                <ul className="nav flex-column">
                                    <li className="nav-item d-lg-none">
                                        <span className="d-flex gap-2" aria-current="page">
                                            <span>کاربر حسین مهدوی</span>
                                        </span>
                                    </li>
                                    <li className="nav-item" id="power-menu">
                                        <a className="nav-link align-items-center gap-2 text-center bg-danger" >
                                            <img src={powersvg} height="30" width="30" />
                                            <span className="d-block text-white">خاموش / روشن</span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link align-items-center gap-2 text-center" to='/'>
                                            <img src={homesvg} height="35" width="35" />
                                            <span className="d-block">مرکز کنترل</span>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link align-items-center gap-2 text-center" to="#">
                                            <img src={calendersvg} height="28" width="28" />
                                            <span className="d-block">برنامه روزانه</span>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link align-items-center gap-2 text-center" to="#">
                                            <img src={settingsvg} height="30" width="30" />
                                            <span className="d-block">تنظیمات</span>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link align-items-center gap-2 text-center" to="#">
                                            <img src={chartsvg} height="30" width="30" />
                                            <span className="d-block">گزارشات</span>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link align-items-center gap-2 text-center" to="#">
                                            <img src={aboutsvg} height="30" width="30" />
                                            <span className="d-block">درباره نرم افزار</span>
                                        </NavLink>
                                    </li>
                                    <li id="exit-menu" className="nav-item">
                                        <LogoutLink className="nav-link align-items-center gap-2 text-center">
                                            <img src={exitsvg} height="30" width="30" />
                                            <span className="d-block">خروج</span>
                                        </LogoutLink>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </div>

                    <main id="main" className="col-md-9 ms-sm-auto col-lg-11 px-md-4">
                        {children}
                    </main>
                </div>
            </div>
            <footer>
                <div className="container-fluid">
                    <p className="text-center m-0">
                        کلیه حقوق این سیستم متعلق به <a href="http://ettesalmechanic.com">« شرکت اتصال مکانیک »</a> می باشد
                    </p>
                </div>
            </footer>
        </React.Fragment>
    )
}

export default Layout