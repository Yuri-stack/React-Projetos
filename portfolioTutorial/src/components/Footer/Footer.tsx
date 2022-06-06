import styles from './styles.module.scss'

export default function Footer() {
  return (
    <footer>
        <p>Yuri Oliveira</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto similique aperiam vel.</p>

        <div className={styles.social}>
            <a href="#"><i className='fab fa-facebook-f'></i></a>
            <a href="#"><i className='fab fa-instagram'></i></a>
            <a href="#"><i className='fab fa-dribbble'></i></a>
        </div>

        <p className={styles.end}>Copyright By Yuri Oliveira</p>
    </footer>
  )
}
