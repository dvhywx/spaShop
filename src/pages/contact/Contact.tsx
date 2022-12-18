import clsx from "clsx";
import { Link } from "react-router-dom";
import Address from "../../components/Address/Address";
import styles from "./Contact.module.scss";

export default function Contact() {
    return (
        <>
            <div className={clsx(styles.contact)}>
                <div className={clsx(styles.banner)}>
                    <h1>Liên Hệ</h1>
                    <h2>
                        <Link to="/">Trang Chủ </Link>
                        <span>/</span> Liên Hệ
                    </h2>
                </div>
                <div className={clsx("container", styles.content)}>
                    <div className={clsx(styles.map)}>
                        <iframe src=""></iframe>
                    </div>
                    <form className={clsx(styles.info)}>
                        <div className={clsx(styles.address)}>
                            <Address />
                        </div>
                        <div className={clsx(styles.form)}>
                            <h1>Liên hệ với chúng tôi</h1>
                            <div className={clsx(styles.formInput)}>
                                <input
                                    type="text"
                                    placeholder="Họ và tên"
                                    required
                                />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    required
                                />
                            </div>
                            <div className={clsx(styles.formInput)}>
                                <input
                                    type="text"
                                    placeholder="Số điện thoại"
                                    required
                                />
                                <input
                                    type="text"
                                    placeholder="Địa chỉ"
                                    required
                                />
                            </div>
                            <div>
                                <textarea placeholder="Lời nhắn"></textarea>
                            </div>
                            <button type="submit">Gửi</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
