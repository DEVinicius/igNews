import styles from './styles.module.scss'
import { SubscribeButton } from './SubscribeButton'

interface MainProps {
    price: number;
    priceId: string;
}

export function Main({
    price,
    priceId
}:MainProps) {
    return (
        <main className={styles.contentContainer}>
            <section className={styles.hero}>
                <span>Hey, Welcome</span>
                <h1>News about the <span>React</span> world</h1>
                <p>
                    Get access to all publications <br />
                    <span>for {
                        Intl.NumberFormat("en-US", {
                            style:"currency",
                            currency: "USD"
                        }).format(price)    
                    } month</span>
                </p>
                <SubscribeButton 
                    priceId={priceId}
                />
            </section>

            <img src="/images/avatar.svg" alt="Girl Coding" />
        </main>
    )
}