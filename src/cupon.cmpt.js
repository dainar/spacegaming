import React from 'react';
import { ReactComponent as Palomita } from './img/tick.svg';
import { ReactComponent as Reloj } from './img/clock.svg';
import { ReactComponent as Lock } from './img/lock.svg';

const Cupon = (cupones) => {
	console.log(cupones)
	return(
	 <div className="cupon">
	    <div className="left-cupon">
	    <h3>{cupones.bonuses && 
	    	cupones.bonuses.title ? cupones.bonuses.title :"" }</h3>
	    	{cupones.bonuses && 
	    	cupones.bonuses.title ? (<button className="rosa">{cupones.bonuses.button}</button>) :"" }
	    	<h3>{cupones.offers && 
	    	cupones.offers.title ? cupones.offers.title :"" }</h3>
            <h3>{cupones.offers && 
	    	cupones.offers.title ? (<button className="green">{cupones.offers.button}</button>) :"" }</h3>

	    	<h3>{cupones.blocked && 
	    	cupones.blocked.title ? cupones.blocked.title :"" }</h3>
	    	<h3 className="segundo">{cupones.blocked && 
	    	cupones.blocked.title ? cupones.blocked.subtitle :"" }</h3>
	    </div>
	    <div className="right-cupon">
             {cupones.bonuses && 
             cupones.bonuses.type == "bonus" ? <Palomita/> : ""}
             {
             	cupones &&
             	cupones.offers &&
             cupones.offers.type =="offer" ? <Reloj width="50px" height="50px"/> : ""}
             {
             	cupones &&
             	cupones.blocked &&
             cupones.blocked.type =="blocked" ? <Lock/> : ""}
	    </div>
 </div>
 
);
}

export default Cupon;