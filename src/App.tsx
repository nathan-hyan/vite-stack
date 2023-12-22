import About from './screens/About';
import Home from './screens/Home';
import Information from './screens/Information';
import Tracks from './screens/Tracks';

import '~scss/app.scss';

function App() {
  return (
    <div>
      <Home />
      <Information />
      <Tracks />
      <About />
    </div>
  );
}

export default App;
