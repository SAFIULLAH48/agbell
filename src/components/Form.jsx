import React from 'react';


const EmailFormComponent = (props) => {
  return (
    
      

 
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm " htmlFor="email">
            {props.label}
          </label>
          <div className="flex items-center ">
        
            <input
            
              className=" border rounded w-60 p-2 text-gray-300 text-xs leading-tight focus:outline-none focus:shadow-outline"
        
              id="email"
              name="email"
              type={props.type}
            
               placeholder={props.placeholder}
             
            />
          </div>
      
        </div>
      </form>
    
  );
};

export default EmailFormComponent;
