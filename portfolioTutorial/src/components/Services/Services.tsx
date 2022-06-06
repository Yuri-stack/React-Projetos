import styles from './styles.module.scss'

export default function Services() {
    return (
        <section className={styles.service}>
            <div className={styles.title}>
                <h2>Our Services</h2>
            </div>

            <div className={styles.box}>
                <div className={styles.card}>
                    <i className='fas fa-bars'></i>
                    <h5>Web Development</h5>

                    <div className={styles.pra}>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et sunt repudiandae porro nam illo mollitia obcaecati asperiores ullam ab tenetur voluptatem iure eos ut expedita corporis, amet reprehenderit? Corrupti, dicta!
                        </p>

                        <p style={{ textAlign: 'center' }}>
                            <a className={styles.button} href="#">Read More</a>
                        </p>
                    </div>
                </div>

                <div className={styles.card}>
                    <i className='far fa-user'></i>
                    <h5>Web Development</h5>

                    <div className={styles.pra}>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et sunt repudiandae porro nam illo mollitia obcaecati asperiores ullam ab tenetur voluptatem iure eos ut expedita corporis, amet reprehenderit? Corrupti, dicta!
                        </p>

                        <p style={{ textAlign: 'center' }}>
                            <a className={styles.button} href="#">Read More</a>
                        </p>
                    </div>
                </div>

                <div className={styles.card}>
                    <i className='far fa-bell'></i>
                    <h5>Web Development</h5>

                    <div className={styles.pra}>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et sunt repudiandae porro nam illo mollitia obcaecati asperiores ullam ab tenetur voluptatem iure eos ut expedita corporis, amet reprehenderit? Corrupti, dicta!
                        </p>

                        <p style={{ textAlign: 'center' }}>
                            <a className={styles.button} href="#">Read More</a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
