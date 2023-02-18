import clsx from "clsx";
import { AiOutlineClose } from "react-icons/ai";
import styles from "./Register.module.scss";

export default function Register({ setupLog }: any) {
    const handleRegister = () => {
        setupLog.setIsRegister(false);
    };

    const handleModal = (e: React.MouseEvent<HTMLFormElement, MouseEvent>) => {
        e.stopPropagation();
    };

    return (
        <div className={clsx(styles.form)} onClick={handleRegister}>
            <div className={clsx(styles.close)} onClick={handleRegister}>
                <AiOutlineClose />
            </div>
            <form className={clsx(styles.modal)} onClick={handleModal}>
                <h2>Đăng Kí</h2>
                <p>Tên tài khoản hoặc địa chỉ email *</p>
                <input
                    type="text"
                    name="account"
                    placeholder="Nhập Tên Tài Khoản "
                    required
                />
                <p>Mật khẩu *</p>
                <input
                    type="password"
                    name="password"
                    required
                    placeholder="Nhập Mật Khẩu "
                />

                <p>Nhập lại mật khẩu *</p>
                <input
                    type="password"
                    name="password"
                    required
                    placeholder="Nhập Lại Mật Khẩu "
                />

                <div className={clsx(styles.modalBottom)}>
                    <div>
                        <button type="submit">Đăng Kí</button>
                        <p>
                            <input type="checkbox" id="remember" />
                            <label htmlFor="remember">Ghi nhớ mật khẩu</label>
                        </p>
                    </div>
                </div>
            </form>
        </div>
    );
}
