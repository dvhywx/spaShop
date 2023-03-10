import clsx from "clsx";
import styles from "./About.module.scss";
import spa1 from "../../assets/images/spa1.jpg";
import spa2 from "../../assets/images/spa2.jpg";

export default function About() {
    return (
        <div className={clsx(styles.about)}>
            <h1>Về Chúng Tôi</h1>

            <p>
                Tọa lạc tại địa chỉ K8 - Khu Đô Thị Đồng Nguyên, Phường Đồng
                Nguyên, TP Từ Sơn , Tỉnh Bắc Ninh, MONA Spa & Beauty Salon là
                địa chỉ làm đẹp đáng tin cậy với công nghệ và các chuyên gia
                hàng đầu về thẩm mĩ, thuận tiện cho khách hàng lui tới thăm khám
                và trải nghiệm dịch vụ.
            </p>

            <div className="d-flex">
                <button type="button">Xem Thêm</button>
            </div>
            <div className={clsx(styles.aboutBot)}>
                <div>
                    <img src={spa1} alt="Ảnh" />
                </div>
                <div>
                    <img src={spa2} alt="Ảnh" />
                </div>
            </div>
        </div>
    );
}
