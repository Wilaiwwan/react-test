
import './App.css';
import CountSmile from './components/countSmile';
import FindTheOddInt from './components/findTheOddInt';
import Permutations from './components/permutations';

function App() {

  const inputString = "aabb";
  const inputIntList = [1,2,2,3,3,3,4,3,3,3,2,2,1]
  const inputFace = [';]', ':[', ';*', ':$', ';-D'];


  return (
    <div>
      <Permutations inputString={inputString} />
      <FindTheOddInt inputIntList={inputIntList} />
      <CountSmile inputFace={inputFace}/>
    </div>
  );
}

export default App;
