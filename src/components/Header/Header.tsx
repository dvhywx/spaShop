import React from "react";
import { FaHome, FaPhone, FaFacebook, FaInstagram } from "react-icons/fa";
import clsx from "clsx";
import styles from "./Header.module.scss";
import Nav from "./Nav/Nav";
import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <div>
            <div className={clsx(styles.headerTop)}>
                <p>
                    <NavLink to="/">
                        <FaHome className={clsx(styles.headerIcon)} />
                    </NavLink>
                    HOME: K8 - Khu Đô Thị Đồng Nguyên,P.Đồng Nguyên,TP.Từ
                    Sơn,Tỉnh Bắc Ninh
                </p>
                <p>
                    <FaPhone className={clsx(styles.headerIcon)} />
                    HOTLINE: 01003020323
                    <NavLink to="/">
                        <FaFacebook style={{ marginRight: 0 }} />
                    </NavLink>
                    <NavLink to="/">
                        <FaInstagram />
                    </NavLink>
                </p>
            </div>
            <Nav />
        </div>
    );
}
