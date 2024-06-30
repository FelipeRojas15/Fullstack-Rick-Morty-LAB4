import { useSelector } from "react-redux";

function Infoper(){
    let p = useSelector(state => state.infoAd);
    
    return(

        <div>
            <h1>Additional information about {p[3]}</h1>
            <img width="100px" height="80px" src={p[2]} />
            <h2>Origin</h2>
            <p>{p[0]}</p>
            <h2>Localization</h2>
            <p>{p[1]}</p>
        </div>

    );

}

export default Infoper;