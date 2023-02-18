import clsx from "clsx";
import { useState } from "react";
import styles from "./DetailProduct.module.scss";
import logoVCB from "../../assets/images/logo-vcb.jpg";
import logoTCB from "../../assets/images/logo-techcombank.jpg";
import logoMC from "../../assets/images/logo-mastercard.jpg";
import List, {
    data1,
    data2,
    data3,
    data4,
} from "../../components/Product/List/List";
import Card from "../../components/Product/Card/Card";

export default function DetailProduct({ data }: any) {
    const [quantity, setQuantity] = useState(1);
    const [tabSwitch, setTabSwitch] = useState(false);

    const decrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuantity(Number(e.target.value));
    };

    return (
        <div className={clsx("container", styles.content)}>
            <div className={styles.contentTop}>
                <div className={styles.leftSide}>
                    <img src={(data && data.img) || data1.img} alt="" />
                </div>
                <div className={styles.rightSide}>
                    <div className={styles.title}>
                        <h2>Trang chủ </h2>
                        <span>/</span>
                        <h2>Gói combo spa</h2>
                    </div>
                    <h3>{(data && data.title) || " Tên Sản Phẩm"}</h3>
                    <div className={styles.price}>
                        <span>{(data && data.initPrice) || "500,000"} đ</span>
                        {(data && data.lastPrice) || "750,000"} đ
                    </div>
                    <p className={styles.descriptionContent}>
                        {(data && data.description) || "Chưa có mô tả"}
                    </p>
                    <div className={styles.payment}>
                        <div className={styles.paymentBox}>
                            <input type="button" value="-" onClick={decrease} />
                            <input
                                type="number"
                                name=""
                                step="1"
                                min={1}
                                max={100}
                                title="SL"
                                value={quantity}
                                inputMode="numeric"
                                onChange={handleQuantity}
                            />
                            <input
                                type="button"
                                value="+"
                                onClick={() => setQuantity(quantity + 1)}
                            />
                            <button>Thêm vào giỏ</button>
                        </div>
                        <div className={styles.paymentBox}>
                            <p>Tính phí ship tự động</p>
                            <p>Thanh toán</p>
                        </div>
                        <div className={styles.paymentMethod}>
                            <div>
                                <img src={logoVCB} alt="" />
                            </div>
                            <div>
                                <img src={logoTCB} alt="" />
                            </div>
                            <div>
                                <img src={logoMC} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.contentBottom}>
                <ul>
                    <li
                        className={!tabSwitch ? styles.active : ""}
                        onClick={() => setTabSwitch(false)}
                    >
                        Mô tả
                    </li>
                    <li
                        className={tabSwitch ? styles.active : ""}
                        onClick={() => setTabSwitch(true)}
                    >
                        Đánh giá ({(data && data.voteNumber) || 0})
                    </li>
                </ul>
                <div className={styles.wrapperBottom}>
                    {!tabSwitch && (
                        <div className={styles.description}>
                            <p>
                                – Spa chuyên về các dịch vụ làm đẹp, thư giãn:
                                massage body, massage foot, tắm trắng, trị liệu
                                da mụn – khô – nám – lão hóa, giảm mỡ bằng muối
                                gừng, gội đầu, nail, wax,…
                            </p>
                            <p>
                                – Spa sử dụng các sản phẩm tinh túy từ thiên
                                nhiên và các sản phẩm của thương hiệu lớn cùng
                                với kỹ thuật chăm sóc da điêu luyện mang đến cho
                                khách hàng vẻ đẹp thanh xuân, tự nhiên.
                            </p>
                        </div>
                    )}
                    {tabSwitch && (
                        <div className={styles.votePanel}>
                            <div className={styles.voteContent}>
                                <h3>Đánh giá</h3>
                                <p>Chưa có đánh giá nào.</p>
                            </div>
                            <div className={styles.voteForm}>
                                <h4>
                                    Hãy là người đầu tiên nhận xét "
                                    {(data && data.title) || "Tên sản phẩm"}"
                                </h4>
                                <label>Đánh giá của bạn</label>
                                <div className={styles.voteStars}>
                                    <div className={styles.star}></div>
                                    <div className={styles.star}></div>
                                    <div className={styles.star}></div>
                                </div>
                                <label htmlFor="comment">
                                    Nhận xét của bạn *
                                </label>
                                <textarea id="comment"></textarea>
                                <button>Gửi đi</button>
                            </div>
                        </div>
                    )}
                </div>

                <div className={styles.anotherProduct}>
                    <h3>sản phẩm tương tự</h3>
                    <div className={styles.listCard}>
                        <div className={styles.card}>
                            <Card data={data2} />
                        </div>
                        <div className={styles.card}>
                            <Card data={data1} />
                        </div>
                        <div className={styles.card}>
                            <Card data={data3} />
                        </div>{" "}
                        <div className={styles.card}>
                            <Card data={data4} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
