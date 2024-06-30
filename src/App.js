
import {useState, useEffect} from "react";
import Episodios from "./componentes/Episodios"; 
import Infoper from "./componentes/Infoper"; 
import { useDispatch } from "react-redux";
import {setInc} from './action';
import {setEps} from './action';
import {setInfoAd} from './action';
function App() {


  const [info, setInfo] = useState([]);
  

  

  let disp = useDispatch();

  async function getData() {
    try {
      const rta = await fetch( 'https://rickandmortyapi.com/api/character', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      } ) ;

      if( !rta.ok ) {
        throw new Error( "Er:" + rta.error ) ;
      }

      let datos = await rta.json() ;
      console.log(JSON.stringify(datos.results));
      
      setInfo(datos.results) ;
      
    } catch (error) {
      console.log( "ERROR:" + error ) ;
    }
    
  } ;
  useEffect( () => {getData();}, []);

 

  
  
  return (
    <div className="App">
      <h1>Rick & Morty</h1>
      <div>
      <table border="5" cellPadding="10" cellSpacing="20">
			<thead >
				<tr>
        <th>ID</th>
					<th>IMAGE</th>
          <th>NAME</th>
          <th>SPECIE</th>
          <th>EPISODE</th>
          <th>STATUS</th>
          

				</tr>
			</thead>
     
        <tbody>
        {info.map(
          (d,i) => (
          <tr  key={i}>
            <td>{d.id}</td>
            <td><img width="100px" height="70px" src={d.image} /></td>
            <td>{d.name}</td>
            <td>{d.species}</td>
            <td><button onClick= {() => {disp(setEps(d.episode)); disp(setInfoAd([d.location.name,d.location.url,d.image,d.name])); }}>Episodes</button></td>
            <td><button onClick= {() => {disp(setEps(d.episode)); disp(setInfoAd([d.location.name,d.location.url,d.image,d.name])); }}>{d.status}</button></td>
            
          </tr>     
           )
           )}
        </tbody>
        
       
          </table>
      </div>
      
    </div>
  );
}

export default App;
