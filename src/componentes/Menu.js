import { NavLink } from "react-router-dom"
function Menu(){
    return (
        <div>
            
            <nav>
                <NavLink className={({isActive}) => (isActive ? "activo" : null)}   to="/app">Personajes</NavLink>
                <NavLink className={({isActive}) => (isActive ? "activo" : null)} to="/epi">Episodios</NavLink>
                <NavLink className={({isActive}) => (isActive ? "activo" : null)} to="/inf">Informacion Adicional</NavLink>
            </nav>
        </div>

    );

}

export default Menu;