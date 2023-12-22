import europe from '~assets/europe.png';
import north from '~assets/north.png';
import south from '~assets/south.png';
import styles from '~scss/tracks.module.scss';

import Card from '../Components/Card';
import Container from '../Components/Container';

export default function Tracks() {
  return (
    <Container>
      <div className={styles.tracksSection}>
        <div className={styles.centerGrid}>
          <Card
            image={south}
            title='South'
            onButtonClick={() => console.log('south')}
          />
          <Card
            image={north}
            title='North'
            onButtonClick={() => console.log('north')}
          />
          <Card
            image={europe}
            title='Europe'
            onButtonClick={() => console.log('europe')}
          />

          <div className={styles.mobile}>
            <h1>FIND ROUTES NEAR YOU</h1>

            <button type='button'>SOUTH</button>
            <button type='button'>NORTH</button>
            <button type='button'>EUROPE</button>
          </div>
        </div>
      </div>
    </Container>
  );
}
