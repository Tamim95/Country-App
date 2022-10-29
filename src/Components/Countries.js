
import React from "react";
import Country from "./Country";
import {v4 as uuidv4 } from "uuid";
import style from "./countries.module.css"

const Countries =(props)=>{ //props receiving data
    return (
        <section className={style.countries}>
      {/* will mapping from props here one by one */}
            {props.countries.map((country)=>{
                // creating new object for getting object from url link
               const countryNew={country,id: uuidv4()};
    // will return ,will pass data by countries to Country.js component
    // wiill pass countryNew ,(... mean all props pass country,id )
    //therfore we want to create country so will need uqnique key this is id 
    return ( < Country {...countryNew}  key={countryNew.id} 
    onRemoveCountry={props.onRemoveCountry}
    /> );
           })}
             </section>
    );
};
export default Countries;