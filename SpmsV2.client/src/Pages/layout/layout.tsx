import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutLink from '../../Components/LogoutLink';
import aboutsvg from '../../assets/svg/about.svg';
import calendersvg from '../../assets/svg/calender.svg';
import chartsvg from '../../assets/svg/chart.svg';
import exitsvg from '../../assets/svg/exit.svg';
import homesvg from '../../assets/svg/home.svg';
import powersvg from '../../assets/svg/power.svg';
import settingsvg from '../../assets/svg/setting.svg';
import 'bootstrap/dist/css/bootstrap.rtl.css';
import '../../assets/css/dashboard.rtl.css';
import '../../assets/js/bootstrap.bundle.min.js';
import StationInfo from '../../Components/StationInfo.tsx';
import Header from '../../Components/Header.tsx';
 



function Layout(_props: { children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) {



    //useEffect(() => {
    //    //console.log(layoutcontext)
    //}, []);



    return (
        <React.Fragment>
            <Header />
            <StationInfo />
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

                        {_props.children}

                    </main>
                </div>
            </div>
            <footer>
                <div className="container-fluid">
                    <p className="text-center m-0">
                        کلیه حقوق این سیستم متعلق به <a href="https://emtco.ir/">« شرکت اتصال مکانیک »</a> می باشد
                    </p>
                </div>
            </footer>
        </React.Fragment>
    )
}

export default Layout