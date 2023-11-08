import Image from 'next/image';
import logo from '../assets/acmlogo.png';
import styles from '../styles/Home.module.css'




export default function Home() {
  return (
    /* Each function in JSX can only return ONE DOM element, so we have one top-level div */
    <div className={styles.main}>
        <div className={styles.welcome}>
          
          <h1> Hello World! </h1>
          {/* Replace the heading, and add a short paragraph about your website here! */}
          <h2>Test your typing skills!</h2>
        </div>
      <div className={styles.image}>
        {/* Put the ACM logo here! */}
        <Image src={logo} width={200} height={200} alt='acmlogo'></Image>
        {/* Keep in mind that any images you want to use must be imported from the /assets folder */}
      </div>
    </div>
  )
}
