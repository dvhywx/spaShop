import clsx from "clsx";
import React from "react";
import { BsPhoneVibrate } from "react-icons/bs";
import { GoLocation, GoCalendar } from "react-icons/go";

import styles from "./Section.module.scss";

export default function Section() {
    return (
        <div className={clsx(styles.section)}>
            <div className={clsx(styles.sectionBox)}>
                <BsPhoneVibrate />
                <span>01003020323</span>
                <a>anonymous@gmail.com</a>
            </div>
            <div className={clsx(styles.sectionBox)}>
                <GoLocation />
                <span>K11- Khu đô thị Đồng Nguyên,</span>
                <a>TP.Từ Sơn ,Tỉnh Bắc Ninh</a>
            </div>
            <div className={clsx(styles.sectionBox)}>
                <GoCalendar />
                <span>8h - 19h</span>
                <a>Thứ 2 - Chủ Nhật</a>
            </div>
            <div>
                <button type="button">Xem Dịch Vụ</button>
            </div>
        </div>
    );
}
