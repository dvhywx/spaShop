import clsx from "clsx";
import styles from "./Product.module.scss";
import product1 from "../../assets/images/product1.png";
import product2 from "../../assets/images/product2.jpg";
import product3 from "../../assets/images/product3.jpg";

interface Product {
    img: string;
    title: string;
    description: string;
}

const productVer1: Product = {
    img: product1,
    title: "Massage mặt",
    description: "",
};

const productVer2: Product = {
    img: product2,
    title: "Massage toàn thân",
    description: "",
};

const productVer3: Product = {
    img: product3,
    title: "Massage bằng đá nóng",
    description: "",
};

function Card({ data }: any) {
    return (
        <div className={clsx(styles.productCard)}>
            <div>
                <img src={data.img} alt="Ảnh" />
                <h3>{data.title}</h3>

                <p>
                    Massage là phương pháp trị liệu bằng cách sử dụng các động
                    tác day, ấn là chủ yếu, tập trung vào các huyệt đạo.
                </p>
            </div>
        </div>
    );
}

export default function Product() {
    return (
        <div className={clsx(styles.product)}>
            <h1>Các Dịch Vụ</h1>
            <div className={clsx(styles.productList)}>
                <Card data={productVer1} />
                <Card data={productVer2} />
                <Card data={productVer3} />
            </div>
        </div>
    );
}
