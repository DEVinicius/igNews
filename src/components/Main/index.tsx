import styles from './styles.module.scss'
import { SubscribeButton } from './SubscribeButton'

export function Main() {
    return (
        <main className={styles.contentContainer}>
            <section className={styles.hero}>
                <span>Hey, Welcome</span>
                <h1>News about the <span>React</span> world</h1>
                <p>
                    Get access to all publications <br />
                    <span>for $9.90 month</span>
                </p>
                <SubscribeButton />
            </section>

            <img src="/images/avatar.svg" alt="Girl Coding" />
        </main>
    )
}