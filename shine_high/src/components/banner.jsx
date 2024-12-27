import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'


export const Banner = ({Text}) => {
   return (
           <>
           <div className="container bannerimg">
           
            <h1>{Text}</h1>
           </div>

           </>
);
}
