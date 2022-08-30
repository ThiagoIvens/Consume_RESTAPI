import { useState } from "react";
import "./style.scss";


export default function Search(props) {
    const [searchValue, setSearchValue] = useState('');

    return (
        <div className="searchContainer">
            <div>
                <input id="searchInput" type="search" placeholder="Search..." onKeyUp={(e) => e.key === 'Enter' ? props.search(searchValue) : setSearchValue((e.target).value) }/>
                <button onClick={() => props.search(searchValue)}>Buscar</button>
            </div>
        </div>
    )
}