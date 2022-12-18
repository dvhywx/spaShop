import clsx from "clsx";
import styles from "./Banner.module.scss";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Banner() {
    return (
        <div className={clsx(styles.banner)}>
            <img src="" alt="Banner" className={clsx(styles.bannerImage)} />
            <div>
                <FaArrowLeft className={clsx(styles.bannerArrow)} />
            </div>
            <div className={clsx(styles.textBanner)}>
                <h3>Welcome to Mona Spa & Beauty Salon</h3>
                <span>Cam Kết Hài Lòng 100%</span>
                <span>Mọi Khách Hàng</span>
                <button type="button">
                    <span>Trải Nghiệm Ngay</span>
                </button>
            </div>
            <div>
                <FaArrowRight className={clsx(styles.bannerArrow)} />
            </div>
        </div>
    );
}
