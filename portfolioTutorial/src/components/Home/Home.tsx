import styles from './styles.module.scss'

export default function Home() {
  return (
    <main className={ styles.container }>
      <div className={ styles.content }>
        <h4>Hello, my name is</h4>
        <h1>Yuri <span>Oliveira</span></h1>
        <h3>I'm a Web Developer</h3>

        <div className={ styles.newslatter }>
            <form>
                <input type="email" name='email' id='email' placeholder='Enter with your email'/> 
                <input type="submit" name='submit' value="Lets Start"/> 
            </form>
        </div>
    </div>
    </main>
  )
}
