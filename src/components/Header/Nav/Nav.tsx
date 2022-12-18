import React from "react";
import { NavLink } from "react-router-dom";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import clsx from "clsx";
import styles from "./Nav.module.scss";

export default function Nav() {
    return (
        <div className={clsx(styles.navbar)}>
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
                        <NavLink to="/">Đăng Nhập</NavLink>
                    </li>

                    <li>
                        <NavLink to="/">Đăng Kí</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
}
