import Image from 'next/image';

import styles from '../styles/Home.module.css';
import homeLogo from '../assets/bongoCat.jpg';


function Home() {

  return (
    <div className={styles.main}>
        <div className={styles.welcome}>

          <h2>Typing Racer</h2>
          <p>
            Navigate to <i>Game Page</i> to test your typing skills. 
          </p>
            
          <p>
          View all your past games in <i>History</i>!
          </p>
      </div>
      <div className={styles.image}><Image src={homeLogo} width={200} height={200} alt="homelogo"/>

      </div>
      
    </div>
  );
}

export default Home;
