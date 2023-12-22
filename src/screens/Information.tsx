import styles from '~scss/information.module.scss';

import Container from '../Components/Container';

export default function Information() {
  return (
    <Container>
      <div className={styles.infoSection}>
        <div className={styles.centerBox}>
          <div className={styles.innerText}>
            <h1>
              NEW ROADS AWAITS<span> YOU </span>
            </h1>
            <p>
              From mountains to urbanization, <br />
              moustrack tours are full of wonderful
              <br />
              natural and artificial settings.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
