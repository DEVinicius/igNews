import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import styles from './styles.module.scss';

export function SignInButton() {
    const isUserLoggedIn = true;
    
    return isUserLoggedIn ? (
        <button 
            className={styles.signInButton}
            type="button"
        >
            <FaGithub color="04d361"/>
            Vinicius Pereira
            <FiX 
                color="737380"
                className={styles.closeIcon}
            />
        </button>
    ) : (
        <button 
            className={styles.signInButton}
            type="button"
        >
            <FaGithub color="eba417"/>
            Sign In With GitHub
        </button>
    )
}