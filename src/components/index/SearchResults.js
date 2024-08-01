import React from "react";
import "./SearchResults.css"
import { SearchResult } from "./SearchResult";

export const SearchResults = ({results}) => {
    return(
        <div className="results" >
            {results.map((result, IdArbol) => {
                return <SearchResult result={result} key={IdArbol}/>
            })}
        </div>
    )
}