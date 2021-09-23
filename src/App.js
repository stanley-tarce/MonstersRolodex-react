import { useEffect } from 'react';
import './App.css';
import Cardlist from './ComponentsV2/Cardlist';
import SearchButton from './ComponentsV2/SearchButton';
import Hooker from './ComponentsV2/Hooker';



function App() {
  const { search, data, setSearch, setData } = Hooker()
  useEffect(() => {
    console.log('Cardlist component rendered')
    fetch(`https://jsonplaceholder.typicode.com/users/`)
      .then(response => response.json())
      .then(data => { setData(data) })
      .catch(error => console.log(error))
  }
    , [setData])


  return (

    <div className="App">
      <h1>Monsters Rolodex </h1>
      <SearchButton handleChange={(e) => setSearch(e.target.value)}
        placeholder={'Search Here'} />
      <Cardlist datas={data
        .filter(user => user.name.toLowerCase().includes(search.toLowerCase()))} />
    </div>




  );
}

export default App;

