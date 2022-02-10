import React from 'react';

import { ClotherInfo } from './ClotherInfo/ClotherInfo';


export const Clothers = ({itemList}) => {
	return (
		<div>
			<ClotherInfo itemList={itemList.women} clotherName={"Women's"} />
			<ClotherInfo itemList={itemList.men} clotherName={"Men's"}/>
		</div>
	)
}
