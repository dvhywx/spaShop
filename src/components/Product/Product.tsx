import clsx from "clsx";
import styles from "./Product.module.scss";

function Card() {
    return (
        <div className={clsx(styles.productCard)}>
            <img src="" alt="Ảnh" />
            <h3>Massage Mặt</h3>
            <p>
                Massage là "phương pháp trị liệu bằng cách sử dụng các động tác
                day, ấn là chủ yếu, tập trung vào các huyệt đạo.
            </p>
        </div>
    );
}

export default function Product() {
    return (
        <div className={clsx(styles.product)}>
            <h1>Các Dịch Vụ</h1>
            <div className={clsx(styles.productList)}>
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    );
}
