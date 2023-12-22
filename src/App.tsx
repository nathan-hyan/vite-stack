import { useState } from 'react';

import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';

import styles from './app.module.scss';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href='https://vitejs.dev' target='_blank' rel='noreferrer'>
          <img src={viteLogo} className={styles.viteLogo} alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank' rel='noreferrer'>
          <img src={reactLogo} className={styles.reactLogo} alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <button
          onClick={() => setCount((prevState) => prevState + 1)}
          type='button'
        >
          count is {count}
        </button>
        <p>
          This might get some kind of <b>error!</b>
        </p>
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
