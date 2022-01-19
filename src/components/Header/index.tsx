import Image from "next/image"
import { SignInButton } from "../SignInButton"
import styles from "./style.module.scss"

export const Header = () => {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <Image src="/images/logo.svg" alt="Logo ignews" width="110" height="31" />
                <nav>
                    <a className={styles.active}>Home</a>
                    <a>Post</a>
                </nav>
                <SignInButton />
            </div>
        </header>
    )
}