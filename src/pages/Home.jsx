import React from 'react';



function Home(){

    return(
     
      
      <div className="main">

       <div className="container-fluid">
         <div className="row content">
           <div className="col-md-3 text-center"></div>
           <div className="col-md-6 text-center">
             <h1>KAWOLEGAL</h1>
             <h3>A collaborative ecosystem for problem solvers and support for Startups.</h3>
     
             <a href={url} className="button2 btn btn-info">REGISTER NOW</a>
     
           </div>
           <div className="col-md-3 text-center"></div>
           
     
         </div>
         
       </div>
  
     
     </div>
    )
}

const url ='/register';

export default Home;


