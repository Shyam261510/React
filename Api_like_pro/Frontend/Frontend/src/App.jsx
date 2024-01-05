import axios from 'axios';
import {useEffect} from "react"
function App() {
  useEffect(() => {
    (() => {
      const response = axios.get('/api/products');
      console.log(response.data);
    })();
  });
  return (
    <div>
      <h1>Chai kesi he</h1>
    </div>
  );
}
export default App;
