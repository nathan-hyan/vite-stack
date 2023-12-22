import styles from '~scss/about.module.scss';

import Container from '../Components/Container';

function About() {
  return (
    <Container>
      <div className={styles.aboutUsSection}>
        <div className={styles.titleCard}>
          <h1>MOUSTRACK</h1>
          <p>YOUR GO-TO TRAVEL MANAGER</p>
        </div>

        <div className={styles.text}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            dolor qui nesciunt tempore error illum officiis dicta sunt
            repellendus recusandae.Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Doloribus quis nisi iste a quos illo quam natus
            fuga quaerat dolore?
          </p>
        </div>
      </div>
    </Container>
  );
}
export default About;
