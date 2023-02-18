import clsx from "clsx";
import { Link } from "react-router-dom";
import styles from "./Card.module.scss";

export default function Card({ data }: any) {
    return (
        <div className={clsx(styles.listCard)}>
            <div className={clsx(styles.img)}>
                <Link to="/product">
                    <img src={data && data.img} alt="Ảnh" />
                </Link>
            </div>
            <div className={clsx(styles.discount)}>{data && data.discount}</div>
            <div className={clsx(styles.detail)}>
                <Link className={clsx(styles.link)} to="/product">
                    {data && data.title}
                </Link>
                <p>
                    <span>{data && data.initPrice}</span>
                    {data && data.lastPrice}
                </p>
                <div className={clsx(styles.button)}>
                    <button type="button">Thêm Vào Giỏ</button>
                </div>
            </div>
        </div>
    );
}
