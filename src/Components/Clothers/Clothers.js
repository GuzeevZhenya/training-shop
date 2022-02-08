import React from 'react';
import { clothersItems } from './ClothersBd';
import { ClotherItem } from './ClotherItem/ClotherItem';


export const Clothers = () => {
	
	
	return (
		<div>
			<ClotherItem itemList={clothersItems.women} clotherName={"Women's"} />
			<ClotherItem itemList={clothersItems.men} clotherName={"Men's"}/>
		</div>
	)
}
