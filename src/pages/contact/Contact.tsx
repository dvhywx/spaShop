import clsx from "clsx";
import { Link } from "react-router-dom";
import Address from "../../components/Address/Address";
import styles from "./Contact.module.scss";
const linkMap =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4478791335196!2d106.65261921472937!3d10.77696826213081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ed189fa855d%3A0xf63e15bfce46baef!2sC%C3%B4ng+ty+TNHH+-+MONA+MEDIA!5e0!3m2!1svi!2s!4v1524639789314";

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
                        <iframe src={linkMap}></iframe>
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
