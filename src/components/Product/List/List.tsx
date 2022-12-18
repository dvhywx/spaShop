import clsx from "clsx";
import styles from "./List.module.scss";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Card from "../Card/Card";

export default function List() {
    return (
        <div className={clsx(styles.listContainer)}>
            <h1>Giá Các Gói Dịch Vụ</h1>
            <div className={clsx(styles.list)}>
                <div className={clsx(styles.prev)}>
                    <IoIosArrowBack />
                </div>
                <div className={clsx(styles.listCard)}>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
                <div className={clsx(styles.next)}>
                    <IoIosArrowForward />
                </div>
            </div>
        </div>
    );
}
