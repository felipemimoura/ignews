import { FaGithub } from 'react-icons/fa'

import { FiX } from 'react-icons/fi'
import styles from './styles.module.scss'
export function SignInButton() {
    const userIsLogged = true
    return userIsLogged ? (
        (
            <button type='button' className={styles.signInButton}>
                <FaGithub color="#04D361" />
                Sing in with GitHub
                <FiX className={styles.CloseIcon} />
            </button>
        )
    ) : (
        (
            <button type='button' className={styles.signInButton}>
                <FaGithub color="#EBA417" />
                Sing in with GitHub
            </button>
        )
    )
}