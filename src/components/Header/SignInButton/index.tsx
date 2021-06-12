import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import styles from './styles.module.scss';
import { signIn, useSession, signOut } from 'next-auth/client'

export function SignInButton() {
    const [session] = useSession();
    
    return session ? (
        <button 
            className={styles.signInButton}
            type="button"
        >
            <FaGithub color="04d361"/>
            {session.user.name}
            <FiX 
                color="737380"
                className={styles.closeIcon}
                onClick={() => signOut()}
            />
        </button>
    ) : (
        <button 
            className={styles.signInButton}
            type="button"
            onClick={() => signIn("github")}
        >
            <FaGithub color="eba417"/>
            Sign In With GitHub
        </button>
    )
}