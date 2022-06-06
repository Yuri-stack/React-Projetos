import styles from './styles.module.scss'

export default function About() {
    return (
        <section className={styles.about}>
            <div className={styles.main}>
                <img src="" alt="" />

                <div className={styles.about_text}>
                    <h2>About Me</h2>
                    <h5>Developer <span>& Instructor</span></h5>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, sint cumque magni incidunt nemo rem ad odit neque earum perferendis veritatis tempora quo impedit dicta accusantium, iste commodi? Harum, a.
                        Facere, nesciunt? Id beatae impedit aspernatur fuga et, quas aut! Natus in, delectus voluptatibus molestiae sequi placeat assumenda ea quis dicta itaque, autem non incidunt cumque! Eius reiciendis in neque?
                        Doloribus eum veniam pariatur odio ex at et enim natus temporibus, unde corporis quod omnis dolores cumque fugiat hic nulla inventore! Quo eos magnam iusto et modi qui ex debitis?
                    </p>
                    <button type='button'>Let's Talk</button>
                </div>
            </div>
        </section>
    )
}
