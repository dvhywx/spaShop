import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import clsx from "clsx";
import styles from "./Nav.module.scss";
import Login from "../../../pages/login/Login";
import Register from "../../../pages/register/Register";

export default function Nav() {
    const [isLogin, setIsLogin] = useState(false);
    const [isRegister, setIsRegister] = useState(false);

    const setupLog = {
        setIsLogin,
        setIsRegister,
    };

    return (
        <div className={clsx(styles.navbar)}>
            {isLogin && <Login setupLog={setupLog} />}
            {isRegister && <Register setupLog={setupLog} />}
            <div className={clsx(styles.logo)}></div>
            <div className={clsx(styles.navlist)}>
                <ul className={clsx(styles.navlist)}>
                    <li>
                        <NavLink to="/">Trang Chủ</NavLink>
                    </li>
                    <li>
                        <NavLink to="/introduce">Giới Thiệu</NavLink>
                    </li>
                    <li>
                        <NavLink to="/service">Dịch Vụ</NavLink>
                    </li>
                    <li>
                        <NavLink to="/service">Sản Phẩm</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">Liên Hệ</NavLink>
                    </li>
                    <li>
                        <NavLink to="#">
                            <FaSearch />
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className={clsx(styles.navlist)}>
                <ul className={clsx(styles.navlist)}>
                    <li>
                        <NavLink to="/" className={clsx(styles.cart)}>
                            <span>0$</span>
                            <FaShoppingCart />
                        </NavLink>
                    </li>
                    <li>
                        <div
                            className={clsx(styles.log)}
                            onClick={() => setIsLogin(!isLogin)}
                        >
                            Đăng Nhập
                        </div>
                    </li>

                    <li>
                        <div
                            className={clsx(styles.log)}
                            onClick={() => setIsRegister(!isRegister)}
                        >
                            Đăng Kí
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}
