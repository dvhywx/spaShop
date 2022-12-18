import clsx from "clsx";
import { GiRotaryPhone } from "react-icons/gi";
import { GoLocation, GoMail } from "react-icons/go";
import styles from "./Address.module.scss";

export default function Address() {
    return (
        <>
            <div className={clsx(styles.address)}>
                <GoLocation style={{ marginRight: "10px" }} />
                <p>
                    K8 - Khu Đô Thị Đồng Nguyên,P.Đồng Nguyên,TP.TừSơn,Tỉnh Bắc
                    Ninh
                </p>
            </div>

            <div className={clsx(styles.address)}>
                <GiRotaryPhone />
                <p>01003020323</p>
            </div>
            <div className={clsx(styles.address)}>
                <GoMail />
                <p>anonymous@gmail.com</p>
            </div>
        </>
    );
}
