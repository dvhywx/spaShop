import styles from "./Service.module.scss";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { BsSortDown, BsSortDownAlt } from "react-icons/bs";
import Card from "../../components/Product/Card/Card";

export default function Service() {
    return (
        <>
            <div className="container">
                <div className={clsx(styles.banner)}>
                    <div>
                        <h2>
                            <Link to="/">Trang Chủ </Link>
                            <span>/</span> Dịch Vụ
                        </h2>
                    </div>
                    <div className={clsx(styles.filter)}>
                        <p>Hiển thị một kết quả duy nhất</p>
                        <select>
                            <option value="">Thứ Tự Mặc Định</option>
                            <option value="">
                                Thứ Tự Theo Mức Độ Phổ Biến
                            </option>
                            <option value="">Thứ Tự Theo Điểm Đánh Giá</option>
                            <option value="">Mới Nhất</option>
                        </select>
                        <div>
                            <BsSortDownAlt />
                            <BsSortDown />
                        </div>
                    </div>
                </div>

                <div className={clsx(styles.wapper)}>
                    <div className={clsx(styles.layout)}>
                        <div>
                            <h2>Danh Mục Sản Phẩm</h2>
                            <ul>
                                <li>Gói COMBO Spa</li>
                                <li>Mỹ Phẩm</li>
                                <li>Khác</li>
                            </ul>
                        </div>
                        <div>
                            <h2>Lọc Theo Giá</h2>
                            <div className={clsx(styles.sliderRange)}>
                                <span></span>
                                <span></span>
                            </div>
                            <div className={clsx(styles.price)}>
                                <button type="button">Lọc</button>
                                <div>
                                    <p>
                                        Giá
                                        <span className={clsx(styles.from)}>
                                            150,000 đ
                                        </span>
                                        <span className={clsx(styles.to)}>
                                            - 750,000 đ
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={clsx(styles.listSide)}>
                            <h3>Sản Phẩm</h3>
                            <ul>
                                <li>
                                    <img src="" alt="" />
                                    <div>
                                        <p>Bấm huyệt đạo thư giãn</p>
                                        <span>150,000 đ</span>
                                        <span>750,000 đ</span>
                                    </div>
                                </li>
                                <li>
                                    <img src="" alt="" />
                                    <div>
                                        <p>Bấm huyệt đạo thư giãn</p>
                                        <span>150,000 đ</span>
                                        <span>750,000 đ</span>
                                    </div>
                                </li>
                                <li>
                                    <img src="" alt="" />
                                    <div>
                                        <p>Bấm huyệt đạo thư giãn</p>
                                        <span>150,000 đ</span>
                                        <span>750,000 đ</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={clsx(styles.content)}>
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </div>
            </div>
            <div></div>
        </>
    );
}
