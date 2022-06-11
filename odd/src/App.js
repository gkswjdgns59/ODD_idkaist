// import components

import Test5 from './components/Test5/Test5';
import Test6 from './components/Test6/Test6';

function App() {
  const [response, setResponse] = useState({});
  
  useEffect(() => {
    const NOTION_PAGE_ID = 'be4ddb06be8d423785dcd8a4372d1e05';
    axios
      .get(`https://notion-api.splitbee.io/v1/page/${NOTION_PAGE_ID}`)
      .then(({data}) => {
        setResponse(data);
      })
  }, []);
  
  return (
    <div className="App">
      <Test5/>
      <Test6/>
      <Header/>
    </div>
  );
}



export default App;
