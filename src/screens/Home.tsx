import world from '~assets/world.png';
import styles from '~scss/home.module.scss';

import Container from '../Components/Container';

export default function Home() {
  return (
    <Container>
      <div className={styles.home}>
        <div className={styles.leftHome}>
          <h1>
            YOUR <span>JOURNEY</span> BEGINS HERE
          </h1>
          <button type='button'>START NOW.</button>
        </div>

        <div className={styles.rightHome}>
          <img src={world} height='150' alt='World' />
          <p>
            millions of competitors around the world are already warming-up for
            the biggest event of <strong>their lives.</strong>
          </p>
        </div>
        <div className={styles.coloredBg} />
      </div>
    </Container>
  );
}
