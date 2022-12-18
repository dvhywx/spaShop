import clsx from "clsx";
import styles from "./Card.module.scss";

export default function Card() {
    return (
        <div className={clsx(styles.listCard)}>
            <div className={clsx(styles.img)}>
                <img src="" alt="Ảnh" />
            </div>
            <div className={clsx(styles.discount)}>-30%</div>
            <div>
                <p>Gói Massage</p>
                <p>
                    <span>400.000đ</span>350.000 đ
                </p>
                <div className={clsx(styles.button)}>
                    <button type="button">Thêm Vào Giỏ</button>
                </div>
            </div>
        </div>
    );
}
