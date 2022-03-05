import React from "react";
import ReactDom from "react-dom";


const Mailto = ({ email, subject = '', body = '', children }) => {
    let params = subject || body ? '?' : '';
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;
  
    return <a className="mail" href={`mailto:${email}${params}`}>{children}</a>;
  };
  
    
    
  


  export default Mailto