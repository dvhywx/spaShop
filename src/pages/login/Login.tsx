import clsx from "clsx";
import { Link } from "react-router-dom";
import styles from "./Login.module.scss";
import { AiOutlineClose } from "react-icons/ai";

export default function Login({ setupLog }: any) {
    const handleLogin = () => {
        setupLog.setIsLogin(false);
    };

    const handleModal = (e: React.MouseEvent<HTMLFormElement, MouseEvent>) => {
        e.stopPropagation();
    };

    const handleRegister = () => {
        setupLog.setIsLogin(false);
        setupLog.setIsRegister(true);
    };

    return (
        <div className={clsx(styles.form)} onClick={handleLogin}>
            <div className={clsx(styles.close)} onClick={handleLogin}>
                <AiOutlineClose />
            </div>
            <form className={clsx(styles.modal)} onClick={handleModal}>
                <h2>Đăng Nhập</h2>
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

                <div className={clsx(styles.modalBottom)}>
                    <div>
                        <button type="submit">Đăng Nhập</button>
                        <p>
                            <input type="checkbox" id="remember" />
                            <label htmlFor="remember">Ghi nhớ mật khẩu</label>
                        </p>
                    </div>
                    <Link to="#">Quên mật khẩu ? </Link>
                    <label htmlFor="register">Bạn chưa có tài khoản . </label>
                    <Link to="#" id="register" onClick={handleRegister}>
                        Đăng kí ngay .
                    </Link>
                </div>
            </form>
        </div>
    );
}
