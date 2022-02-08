import React from 'react';
import star from '../../img/Clothers/star.svg';
 
import './Star.css';


export default function Star() {
  const star = <input className="star-4" type="radio" name="stars" />;

  return (
     <div>
		 <input id="star-4" type="radio" name="stars"/>
		    
		    <input id="star-3" type="radio" name="stars" />
		     
		    
		    <input id="star-2" type="radio" name="stars"  />
		    <label title="Нормально" for="star-2">
		    	<i class="fas fa-star"></i>
		    </label>
		    <input id="star-1" type="radio" name="stars" checked="checked"/>
		    <label title="Плохо" for="star-1">
		    	<i class="fas fa-star"></i>
		    </label>
		    <input id="star-0" type="radio" name="stars"/>
		    <label title="Ужасно" for="star-0">
		    	<i class="fas fa-star"></i>
		    </label>
		 </div>
		 
		    
	 
        
      
  );
}
