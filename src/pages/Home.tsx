import Form from '../components/forms/form'
import Picture from '../components/picture/picture'
import styles from './Home.module.css'
const Home = () => {
    return (
        <div className={styles.homepage}>
            <section className={styles.heroSection} id='hero-section'>
                <div className={styles.header}>
                    Managing your Communities & Events just got 10x easier with Loft.
                </div>
                <div className={styles.smalltext}>
                    A free multiplatform residential estate management software.
                </div>
                <div className={styles.form}>
                    <Form />
                </div>
            </section>
            <section className={styles.screnshotSection} id='screenshot-section'>
                <div className={styles.screenshotWrapper}>
                    <Picture
                        sources={[
                            { srcSet: '/Mobile-screenshot.png', media: '(max-width: 44rem)' },
                            { srcSet: '/Tablet-screenshot.png', media: '(min-width: 45rem)' },
                            { srcSet: '/Desktop-screenshot.png', media: '(min-width: 65rem)' }

                        ]}
                        imgSrc="/Monile-screenshot.png"
                        className={styles.screenshot}
                    />
                </div>
            </section>

        </div>
    )
}

export default Home
