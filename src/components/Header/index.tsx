import Image from "next/image";
import { ActiveLink } from "../ActiveLink";
import { SignInButton } from "../SignInButton";
import styles from "./style.module.scss";

export const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image
          src="/images/logo.svg"
          alt="Logo ignews"
          width="110"
          height="31"
        />
        <nav>
          <ActiveLink activeClasseName={styles.active} href="/">
            <a>Home</a>
          </ActiveLink>
          <ActiveLink activeClasseName={styles.active} href="/posts">
            <a>Post</a>
          </ActiveLink>
        </nav>
        <SignInButton />
      </div>
    </header>
  );
};
