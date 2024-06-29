import React, { useState, useEffect, createContext, Component } from 'react';
import { NavLink, Navigate } from 'react-router-dom';
import aboutsvg from '../../assets/svg/about.svg';
import bellsvg from '../../assets/svg/bell.svg';
import burgermenusvg from '../../assets/svg/burger-menu.svg';
import calendersvg from '../../assets/svg/calender.svg';
import chartsvg from '../../assets/svg/chart.svg';
import exitsvg from '../../assets/svg/exit.svg';
import homesvg from '../../assets/svg/home.svg';
import hourglasssvg from '../../assets/svg/hourglass.svg';
import passwordsvg from '../../assets/svg/password.svg';
import powersvg from '../../assets/svg/power.svg';
import refreshsvg from '../../assets/svg/refresh.svg';
import settingsvg from '../../assets/svg/setting.svg';
import signalerrorsvg from '../../assets/svg/signal-error.svg';
import signallostsvg from '../../assets/svg/signal-lost.svg';
import signaloksvg from '../../assets/svg/signal-ok.svg';
import logo from '../../assets/image/logo.png';


function Layout({ children }) {

    //const [user, setUser] = useState({});
    //const { id } = useParams();

    useEffect(() => {
        console.info('layout -> useEffect');
        console.info(children);
    }, [])

    const handleOnFocus = () => {
        blur();
    };

    return (
        <React.Fragment>
            <body>
                <div className="navbar flex-md-nowrap p-0" data-bs-theme="light">

                    <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-7 text-white" href="/">
                        <img src={logo} />
                        <span className="d-none d-md-inline">سیستم کنترل هوشمند شرکت اتصال مکانیک</span>
                    </a>
                    <ul className="navbar-nav flex-row">
                        <li className="nav-item dropdown">
                            <a className="dropdown-item mt-lg-2 mt-2 fs-7 d-none d-lg-block" href="#">
                                <span className="d-inline">
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
                                    data-nimg="1" src={burgermenusvg} className="text-white">
                            </button>
                        </li>
                    </ul>


                </div>
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
                                    <span className="offcanvas-title" id="sidebarMenuLabel fs-7">سیستم کنترل هوشمند شرکت اتصال مکانیک</span>
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
                                            <NavLink className="nav-link align-items-center gap-2 text-center" to='/home'>
                                                <img src={homesvg} height="35" width="35" />
                                                <span className="d-block">مرکز کنترل</span>
                                            </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link align-items-center gap-2 text-center" href="#">
                                                <img src={calendersvg} height="28" width="28" />
                                                <span className="d-block">برنامه روزانه</span>
                                            </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link align-items-center gap-2 text-center" href="#">
                                                <img src={settingsvg} height="30" width="30" />
                                                <span className="d-block">تنظیمات</span>
                                            </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link align-items-center gap-2 text-center" href="#">
                                                <img src={chartsvg} height="30" width="30" />
                                                <span className="d-block">گزارشات</span>
                                            </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link align-items-center gap-2 text-center" href="#">
                                                <img src={aboutsvg} height="30" width="30" />
                                                <span className="d-block">درباره نرم افزار</span>
                                            </NavLink>
                                        </li>
                                        <li id="exit-menu" className="nav-item">
                                            <NavLink className="nav-link align-items-center gap-2 text-center" href="#">
                                                <img src={exitsvg} height="30" width="30" />
                                                <span className="d-block">خروج</span>
                                            </NavLink>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </div>

                        <main id="main" className="col-md-9 ms-sm-auto col-lg-11 px-md-4">

                            <div id="package-wrapper">
                                <div className="card mt-1 mt-lg-3">
                                    <div className="card-header bg-success-subtle text-start">
                                        <span id="station-status">وضعیت کلی دستگاه : </span>
                                        <img id="connection-status-signal-ok" src="../assets/icon/signal-ok.svg" height="24" width="24" className="float-end" />
                                        <img id="connection-status-signal-lost" src="../assets/icon/signal-lost.svg" height="24" width="24" className="float-end" />
                                        <img id="connection-status-signal-error" src="../assets/icon/signal-error.svg" height="24" width="24" className="float-end" />
                                        <img id="connection-status-hourglass" src="../assets/icon/hourglass.svg" height="24" width="24" className="float-end" />
                                    </div>
                                    <div className="card-body row">
                                        <div className="col-sm-12 col-lg-2">
                                            <div className="card" style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "15px" }}>
                                                <table className="fs-7 table table-borderless table-sm align-middle">
                                                    <tbody>
                                                        <tr>
                                                            <td style={{ width: "32%" }} >
                                                                <label className="label-title">برنامه کاری</label>
                                                            </td>
                                                            <td>
                                                                <select className="form-select form-select-sm fs-7" id="work-plan">
                                                                    <option value="1">برنامه روزانه</option>
                                                                    <option value="2">فشار اتوماتیک</option>
                                                                    <option selected value="3">کنترل دستی</option>
                                                                </select>
                                                            </td>
                                                            <td>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td><label className="label-title">کنترل فاز</label></td>
                                                            <td><label className="label-value bg-success-subtle w-100" id="power-control">✔️</label></td>
                                                            <td>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td><label className="label-title">پمپ تخلیه</label></td>
                                                            <td><label className="label-value w-100" id="evacuation-pump">---</label></td>
                                                            <td>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td><label className="label-title">آبگرفتگی</label></td>
                                                            <td><label className="label-value bg-success-subtle w-100" id="inundation">✔️</label></td>
                                                            <td>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td><label className="label-title">توان</label></td>
                                                            <td><label className="label-value w-100" id="power-consumed">0.0</label>  </td>
                                                            <td>
                                                                KW
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td><label className="label-title">دبی</label></td>
                                                            <td><label className="label-value w-100" id="db">0.0</label>  </td>
                                                            <td>
                                                                l/s
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td><label className="label-title">بازده</label></td>
                                                            <td><label className="label-value w-100" id="efficiency">62.0</label>  </td>
                                                            <td>
                                                                %
                                                            </td>
                                                        </tr>
                                                        <tr id="wraper-output-pressure">
                                                            <td><label className="label-title">فشار رانش</label></td>
                                                            <td>
                                                                <div className="input-group input-group-sm w-100">
                                                                    <div className="input-group-text" data-operation="-">-</div>
                                                                    <input id="output-pressure" type="number" className="form-control" disabled>
                                                                        <div className="input-group-text" data-operation="+">+</div>
                                                                        <label></label>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                Bar
                                                            </td>
                                                        </tr>
                                                        <tr id="wraper-auto-pressure">
                                                            <td><label className="label-title">فشار رانش</label></td>
                                                            <td>
                                                                <div className="input-group input-group-sm w-100">
                                                                    <div className="input-group-text" data-operation="-">-</div>
                                                                    <input id="auto-pressure" type="number" className="form-control" data-value="" onFocus={handleOnFocus} />
                                                                    <div className="input-group-text" data-operation="+">+</div>
                                                                    <label></label>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                Bar
                                                            </td>
                                                        </tr>
                                                        <tr id="wraper-frequency">
                                                            <td><label className="label-title">فرکانس</label></td>
                                                            <td>
                                                                <div className="form-group">
                                                                    <div className="input-group input-group-sm">
                                                                        <div className="input-group-text" data-operation="-">-</div>
                                                                        <input id="frequency" type="number" className="form-control" data-value="" onFocus={handleOnFocus} />
                                                                        <div className="input-group-text" data-operation="+">+</div>
                                                                        <label></label>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                HZ
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-lg-10 text-center">
                                            <img src="../assets/Package5.png" className="img-fluid" />
                                            <br />
                                            <label id="suction-pressure" className="fs-6">1.1 Bar</label>
                                            <label id="thrust-pressure" className="fs-6">16 Bar</label>
                                            <label id="work-pump1">کارکرد پمپ 1 : 12121.2 ساعت</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <br />

                            <div id="pump-data-wrapper">
                                <div className="row">
                                    <div className="col ">
                                        <div className="card mb-3 border-success">
                                            <div className="card-header text-center">
                                                پمپ شماره <span className="badge bg-success">5</span>
                                            </div>
                                            <div className="card-body">
                                                <table className="table table-sm table-borderless">
                                                    <tbody>
                                                        <tr>
                                                            <td><label className="label-title">وضعیت </label></td>
                                                            <td>
                                                                <div className="form-check form-switch">
                                                                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked1" checked >
                                                                        <label className="form-check-label" for="flexSwitchCheckChecked1"></label>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td><label className="label-title">فرکانس </label></td>
                                                            <td><label id="frequency-pump2" className="label-value">0</label> HZ </td>
                                                        </tr>
                                                        <tr>
                                                            <td><label className="label-title">توان </label></td>
                                                            <td><label id="power-consumed-pump2" className="label-value">0</label> KW </td>
                                                        </tr>
                                                        <tr>
                                                            <td><label className="label-title">دبی </label></td>
                                                            <td><label id="db-pump2" className="label-value">0</label> L/S </td>
                                                        </tr>
                                                        <tr>
                                                            <td><label className="label-title">جریان </label></td>
                                                            <td><label id="current-pump2" className="label-value">0</label> A </td>
                                                        </tr>
                                                        <tr>
                                                            <td><label className="label-title">زمان کل کارکرد </label></td>
                                                            <td><label id="TotalWorkingTime-pump2" className="label-value">0.3</label> H </td>
                                                        </tr>
                                                        <tr>
                                                            <td><label className="label-title">خطای درایو </label></td>
                                                            <td><label id="Fault-pump2" className="label-value bg-danger-subtle AnimationOpacity">6</label></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card mb-3 border-success">
                                            <div className="card-header text-center">
                                                پمپ شماره <span className="badge bg-success">4</span>
                                            </div>
                                            <div className="card-body">
                                                <table className="table table-sm table-borderless">
                                                    <tbody>
                                                        <tr>
                                                            <td><label className="label-title">وضعیت </label></td>
                                                            <td>
                                                                <div className="form-check form-switch">
                                                                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked2" checked >
                                                                        <label className="form-check-label" for="flexSwitchCheckChecked2"></label>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td><label className="label-title">فرکانس </label></td>
                                                            <td><label id="frequency-pump2" className="label-value">0</label> HZ </td>
                                                        </tr>
                                                        <tr>
                                                            <td><label className="label-title">توان </label></td>
                                                            <td><label id="power-consumed-pump2" className="label-value">0</label> KW </td>
                                                        </tr>
                                                        <tr>
                                                            <td><label className="label-title">دبی </label></td>
                                                            <td><label id="db-pump2" className="label-value">0</label> L/S </td>
                                                        </tr>
                                                        <tr>
                                                            <td><label className="label-title">جریان </label></td>
                                                            <td><label id="current-pump2" className="label-value">0</label> A </td>
                                                        </tr>
                                                        <tr>
                                                            <td><label className="label-title">زمان کل کارکرد </label></td>
                                                            <td><label id="TotalWorkingTime-pump2" className="label-value">0.3</label> H </td>
                                                        </tr>
                                                        <tr>
                                                            <td><label className="label-title">خطای درایو </label></td>
                                                            <td><label id="Fault-pump2" className="label-value bg-danger-subtle AnimationOpacity">6</label></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card mb-3 border-success">
                                            <div className="card-header text-center">
                                                پمپ شماره <span className="badge bg-success">3</span>
                                            </div>
                                            <div className="card-body">
                                                <table className="table table-sm table-borderless">
                                                    <tbody>
                                                        <tr>
                                                            <td><label className="label-title">وضعیت </label></td>
                                                            <td>
                                                                <div className="form-check form-switch">
                                                                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked3" checked >
                                                                        <label className="form-check-label" for="flexSwitchCheckChecked3"></label>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td><label className="label-title">فرکانس </label></td>
                                                            <td><label id="frequency-pump2" className="label-value">0</label> HZ </td>
                                                        </tr>
                                                        <tr>
                                                            <td><label className="label-title">توان </label></td>
                                                            <td><label id="power-consumed-pump2" className="label-value">0</label> KW </td>
                                                        </tr>
                                                        <tr>
                                                            <td><label className="label-title">دبی </label></td>
                                                            <td><label id="db-pump2" className="label-value">0</label> L/S </td>
                                                        </tr>
                                                        <tr>
                                                            <td><label className="label-title">جریان </label></td>
                                                            <td><label id="current-pump2" className="label-value">0</label> A </td>
                                                        </tr>
                                                        <tr>
                                                            <td><label className="label-title">زمان کل کارکرد </label></td>
                                                            <td><label id="TotalWorkingTime-pump2" className="label-value">0.3</label> H </td>
                                                        </tr>
                                                        <tr>
                                                            <td><label className="label-title">خطای درایو </label></td>
                                                            <td><label id="Fault-pump2" className="label-value bg-danger-subtle AnimationOpacity">6</label></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card mb-3 border-success">
                                            <div className="card-header text-center">
                                                پمپ شماره <span className="badge bg-success">2</span>
                                            </div>
                                            <div className="card-body">
                                                <table className="table table-sm table-borderless">
                                                    <tbody>
                                                        <tr>
                                                            <td><label className="label-title">وضعیت </label></td>
                                                            <td>
                                                                <div className="form-check form-switch">
                                                                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked4" checked >
                                                                        <label className="form-check-label" for="flexSwitchCheckChecked4"></label>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td><label className="label-title">فرکانس </label></td>
                                                            <td><label id="frequency-pump2" className="label-value">0</label> HZ </td>
                                                        </tr>
                                                        <tr>
                                                            <td><label className="label-title">توان </label></td>
                                                            <td><label id="power-consumed-pump2" className="label-value">0</label> KW </td>
                                                        </tr>
                                                        <tr>
                                                            <td><label className="label-title">دبی </label></td>
                                                            <td><label id="db-pump2" className="label-value">0</label> L/S </td>
                                                        </tr>
                                                        <tr>
                                                            <td><label className="label-title">جریان </label></td>
                                                            <td><label id="current-pump2" className="label-value">0</label> A </td>
                                                        </tr>
                                                        <tr>
                                                            <td><label className="label-title">زمان کل کارکرد </label></td>
                                                            <td><label id="TotalWorkingTime-pump2" className="label-value">0.3</label> H </td>
                                                        </tr>
                                                        <tr>
                                                            <td><label className="label-title">خطای درایو </label></td>
                                                            <td><label id="Fault-pump2" className="label-value bg-danger-subtle AnimationOpacity">6</label></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card mb-3 border-success">
                                            <div className="card-header text-center">
                                                پمپ شماره <span className="badge bg-success">1</span>
                                            </div>
                                            <div className="card-body">
                                                <table className="table table-sm table-borderless">
                                                    <tbody>
                                                        <tr>
                                                            <td><label className="label-title">وضعیت </label></td>
                                                            <td>
                                                                <div className="form-check form-switch">
                                                                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked5" checked >
                                                                        <label className="form-check-label" for="flexSwitchCheckChecked5"></label>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td><label className="label-title">فرکانس </label></td>
                                                            <td><label id="frequency-pump2" className="label-value">0</label> HZ </td>
                                                        </tr>
                                                        <tr>
                                                            <td><label className="label-title">توان </label></td>
                                                            <td><label id="power-consumed-pump2" className="label-value">0</label> KW </td>
                                                        </tr>
                                                        <tr>
                                                            <td><label className="label-title">دبی </label></td>
                                                            <td><label id="db-pump2" className="label-value">0</label> L/S </td>
                                                        </tr>
                                                        <tr>
                                                            <td><label className="label-title">جریان </label></td>
                                                            <td><label id="current-pump2" className="label-value">0</label> A </td>
                                                        </tr>
                                                        <tr>
                                                            <td><label className="label-title">زمان کل کارکرد </label></td>
                                                            <td><label id="TotalWorkingTime-pump2" className="label-value">0.3</label> H </td>
                                                        </tr>
                                                        <tr>
                                                            <td><label className="label-title">خطای درایو </label></td>
                                                            <td><label id="Fault-pump2" className="label-value bg-danger-subtle AnimationOpacity">6</label></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </main>
                    </div>
                </div>
            </body>

        </React.Fragment >
    )

}

export default Layout