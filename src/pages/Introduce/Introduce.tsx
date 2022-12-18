import styles from "./Introduce.module.scss";
import clsx from "clsx";
import { Link } from "react-router-dom";
import {
    FcAssistant,
    FcDepartment,
    FcMoneyTransfer,
    FcInspection,
} from "react-icons/fc";

export default function Introduce() {
    return (
        <div className={clsx(styles.introduce)}>
            <div className={clsx(styles.banner)}>
                <h1>Giới Thiệu</h1>
                <h2>
                    <Link to="/">Trang Chủ </Link>
                    <span>/</span> Giới Thiệu
                </h2>
            </div>
            <div className="container">
                <div className={clsx(styles.info)}>
                    <h1>Mona Spa & Beauty Salon</h1>
                    <p>
                        Với sự đầu tư lên tới 10 tỷ đầu hiện là cơ sở MONA Spa &
                        Beauty salon với hạ tầng được trang bị cao cấp nhất để
                        mang đến cho khách hàng niềm thư giãn thoải mái nhất khi
                        đến MONA Spa & Beauty salon.
                    </p>
                </div>

                <div className={clsx(styles.details)}>
                    <div className={clsx(styles.detailBox)}>
                        <div className={clsx(styles.detailCard)}>
                            <FcInspection />
                            <h3>Dịch vụ tốt nhất</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetuer
                                adipiscing elit, sed diam nonummy nibh euismod
                                tincidunt.
                            </p>
                        </div>
                        <div className={clsx(styles.detailCard)}>
                            <FcAssistant />
                            <h3>Nhân viên tận tình</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetuer
                                adipiscing elit, sed diam nonummy nibh euismod
                                tincidunt.
                            </p>
                        </div>
                    </div>
                    <div className={clsx(styles.detailImg)}></div>
                    <div className={clsx(styles.detailBox)}>
                        <div className={clsx(styles.detailCard)}>
                            <FcDepartment />
                            <h3>Cơ Sở Chất Lượng</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetuer
                                adipiscing elit, sed diam nonummy nibh euismod
                                tincidunt.
                            </p>
                        </div>
                        <div className={clsx(styles.detailCard)}>
                            <FcMoneyTransfer />
                            <h3>Giá cả phải chăng</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetuer
                                adipiscing elit, sed diam nonummy nibh euismod
                                tincidunt.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
