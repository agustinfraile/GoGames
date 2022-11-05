import React from 'react';
import "./paginate.css"

const Paginate = ({gamesPage, allGames, paginate}) => {

    const pageNumbers = []; 

    for (let i = 0; i < Math.ceil(allGames/gamesPage); i++) {
        pageNumbers.push(i+1);
    }



    return(
        <nav>
            <ul className="nav-paginate">
                {
                    pageNumbers?.map( num => {
                        return(
                            <li className="nav-paginate-cnt" key={num}>
                                <button className="nav-paginate-cnt--list" onClick={()=> paginate(num)}>
                                    {num}
                                </button>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}

export default Paginate