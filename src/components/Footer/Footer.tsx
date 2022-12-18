import React from "react";
import clsx from "clsx";
import styles from "./Footer.module.scss";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { TbSend } from "react-icons/tb";
import Address from "../Address/Address";

export default function Footer() {
    return (
        <div className={clsx(styles.footer)}>
            <div className={clsx(styles.footerOverlay)}>
                <div className={clsx(styles.footerBox)}>
                    <Address />
                </div>
                <div className={clsx(styles.footerBox, styles.boxMid)}>
                    <h3>MENU</h3>
                    <ul>
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
                    </ul>
                </div>
                <div className={clsx(styles.footerBox, styles.boxRight)}>
                    <h3>Đăng Kí</h3>
                    <p>
                        Đăng ký để nhận được được thông tin mới nhất từ chúng
                        tôi.
                    </p>
                    <input type="text" placeholder="Nhập Email ... " />
                    <button type="button">
                        <TbSend />
                    </button>
                    <div>
                        <FaFacebook style={{ marginRight: 0 }} />
                        <FaInstagram />
                    </div>
                </div>
            </div>
        </div>
    );
}
