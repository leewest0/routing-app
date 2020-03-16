import React from 'react';

function Regsiter(){

    return(
       <div>
       <div className="container">
       <div className="row">
           <div className="col-lg-2"></div>
   
           <div className="col-lg-8">
               <br/>
               <br/>
               <h3>Join KawoLegal. Sign up to get your Startup listed now!</h3>
               <br/>
               <form>
                   <h4>Full Name</h4>
               <div className="input-group">
                     <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                     <input id="name" type="text" className="form-control" name="full-name" placeholder="Fullname"/>
               </div>
               <br/>
   
               <h4>Email Address</h4>
               <div className="input-group">
                     <span className="input-group-addon"><i className="glyphicon glyphicon-folder-close"></i></span>
                     <input id="email" type="text" className="form-control" name="email" placeholder="Email Address"/>
               </div>
               <br/>
               
               <h4>Password</h4>
               <div className="input-group">
                     <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
                     <input id="password" type="password" className="form-control" name="password" placeholder="Password"/>
               </div>
               <br/>
               
               <h4>Confirm Password</h4>
               <div className="input-group">
                     <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
                     <input id="c-password" type="c-password" className="form-control" name="c-password" placeholder="Confirm Password"/>
               </div>
               <br/>
   
               <div className="input-group">
                    <button type="submit" className="btn btn-primary">Sign Up</button>
               </div>
               <br/>
               
                 </form>
           </div>
   
           <div className="col-lg-2"></div>
       
   
       </div>
   </div>
   
   
        </div>
    )
}


export default Regsiter;


