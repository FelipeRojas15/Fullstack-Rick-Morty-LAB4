import { useSelector } from "react-redux";

function Episodios(){
    
    let c = useSelector(state => state.cont);
    let p = useSelector(state => state.episodios);
    let h = useSelector(state => state.infoAd);
    return(
        <div>
            <h1>Episodes about - {h[3]}</h1>
            <ul>
                {p.map((d,index) => (
                    <li key = {index}>
                        <span >{d}</span>
                    </li>

                ))}

            </ul>
        </div>

    );


}

export default Episodios;