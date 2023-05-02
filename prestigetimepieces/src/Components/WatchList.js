import React from "react";
import WatchItem from "./WatchItem";

function WatchList ({watchData}){
    
    return (
        <section>
            {watchData.map((watch)=>{
                return <WatchItem watch={watch} key={watch.id} /> 
            })}
        </section>
    );
}

export default WatchList;