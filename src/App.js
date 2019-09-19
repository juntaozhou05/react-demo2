import React from 'react';
import useGlobal from './store'

 
const App = () => {
  const [globalState, globalActions] = useGlobal();
  return (
    <div>
      <p>
        counter:
        {globalState.counter}
      </p>
      <button type="button" onClick={() => globalActions.addToCounter(2)}>
        +2 to global
      </button>
    </div>
  );
};
 
export default App;