import clsx from "clsx";
import styles from "./List.module.scss";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Card from "../Card/Card";
import card1 from "../../../assets/images/card1.jpg";
import card2 from "../../../assets/images/card2.jpg";
import card3 from "../../../assets/images/card3.jpg";
import card4 from "../../../assets/images/card4.jpg";

type CardProduct = {
    img: string;
    title: string;
    initPrice: string;
    lastPrice: string;
    discount: string;
};

export const data1: CardProduct = {
    img: card1,
    title: "Gói chăm sóc da",
    initPrice: "750.000 đ",
    lastPrice: "500.000 đ",
    discount: "-33%",
};

export const data2: CardProduct = {
    img: card2,
    title: "Gói chăm sóc da",
    initPrice: "750.000 đ",
    lastPrice: "500.000 đ",
    discount: "-33%",
};

export const data3: CardProduct = {
    img: card3,
    title: "Gói chăm sóc da",
    initPrice: "750.000 đ",
    lastPrice: "500.000 đ",
    discount: "-33%",
};

export const data4: CardProduct = {
    img: card4,
    title: "Gói chăm sóc da",
    initPrice: "750.000 đ",
    lastPrice: "500.000 đ",
    discount: "-33%",
};

export default function List() {
    return (
        <div className={clsx(styles.listContainer)}>
            <h1>Giá Các Gói Dịch Vụ</h1>
            <div className={clsx(styles.list)}>
                <div className={clsx(styles.prev)}>
                    <IoIosArrowBack />
                </div>
                <div className={clsx(styles.listCard)}>
                    <Card data={data1} />
                    <Card data={data2} />
                    <Card data={data3} />
                    <Card data={data4} />
                </div>
                <div className={clsx(styles.next)}>
                    <IoIosArrowForward />
                </div>
            </div>
        </div>
    );
}
