import { TimerIcon } from 'lucide-react';
import { Heading } from './components/Heading';

import './styles/global.css';
import './styles/theme.css';

export function App() {
  return (
    <>
      <Heading>
        Hi!
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni aut libero ipsum perspiciatis velit, animi, culpa
        qui accusantium debitis numquam fugit. Voluptatum incidunt consequatur est labore blanditiis quisquam earum
        sapiente.
      </p>
    </>
  );
}
