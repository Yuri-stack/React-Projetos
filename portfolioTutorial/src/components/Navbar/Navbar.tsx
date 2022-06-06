import styles from './styles.module.scss'

export default function Navbar() {
    return (
        // <div className={ styles.hero }>
            <nav>
                <h2 className={ styles.logo }>Portfo<span>lio</span></h2>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Service</a></li>
                    <li><a href="#">Skills</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <a href="#" className={ styles.btn }>Subscribe</a>
            </nav>
        // </div>
    )
}
