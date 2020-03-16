import React from 'react';
import image1 from '../images/image1.jpg'
import image2 from '../images/image2.jpg'
import image3 from '../images/image3.png'
import image4 from '../images/image4.png'
import image5 from '../images/image5.png'

function Startups(){

    return(
       <div>
       <div className="container">
       <div className="row">
          <div className="col-lg-1"> </div>
         <div className="col-lg-10 search1">
         <form>
           <div className="input-group">
           <input type="text" className="form-control" name="query" placeholder="search Startup by name or industry"/>
           <div className="input-group-btn">
             <button className="btn btn-primary" type="search">
             <span className="glyphicon glyphicon-search"> Search</span>
             </button>
         </div>
       </div>
     </form>
        
         <div className="col-lg-1"> </div>
     

     
       <div className="col-lg-12">
            <div className="col-lg-2">
              <img src={image1} className="img-responsive" alt="new"/>
            </div>

           <div className="col-lg-10">
               <h2>Tatahub</h2>
               <p>a website for tutorials</p>
               <p>
                 <a href={url}>
                   <button className="btn btn-default btn-sm">See full details</button>
                 </a>
               </p>
               <hr/>
             </div>

             <div className="col-lg-2">
              <img src={image2} className="img-responsive" alt="new" />
            </div>

             <div className="col-lg-10">
               <h2>Anditer</h2>
               <p>Anditer is a tech blog</p>
               <p>
                 <a href={url}>
                   <button className="btn btn-default btn-sm">See full details</button>
                 </a>
               </p>
               <hr/>
             </div>

             <div className="col-lg-2">
              <img src={image3} className="img-responsive" alt="new" />
            </div>

             <div className="col-lg-10">
               <h2>Think and Zoom</h2>
               <p>Providing solutions for the visually impaired, such as mind-controlled zooming, and wearable controlled zooming.</p>
               <p>
                 <a href={url}>
                   <button className="btn btn-default btn-sm">See full details</button>
                 </a>
               </p>
               <hr/>
             </div>

             <div className="col-lg-2">
              <img src={image4} className="img-responsive" alt="new" />
            </div>

             <div className="col-lg-10">
               <h2>Slatecube</h2>
               <p>Slatecube helps job seekers develop job-relevant skills, gain work experience, and land well paying jobs through world-className up-skilling courses and virtual internships.</p>
               <p>
                 <a href={url}>
                   <button className="btn btn-default btn-sm">See full details</button>
                 </a>
               </p>
               <hr/>
             </div>

             <div className="col-lg-2">
              <img src={image5}  className="img-responsive" alt="new" />
            </div>

             <div className="col-lg-10">
               <h2>Sleekjob Academy</h2>
               <p>Trains world className software developers in Ghana and matches them to employment opportunities</p>
               <p>
                 <a href={url}>
                   <button className="btn btn-default btn-sm">See full details</button>
                 </a>
               </p>
               <hr/>
             </div>
        </div> 
     </div>
   </div>


        </div>
        </div>
    )
}

const url= "/";

export default Startups;
