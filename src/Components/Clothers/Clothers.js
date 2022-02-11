import React from 'react';

import { ClotherInfo } from './ClotherInfo/ClotherInfo';


export const Clothers = ({itemList}) => {
	return (
		<div>
			<ClotherInfo itemList={itemList.women} clotherName={"women"} />
			<ClotherInfo itemList={itemList.men} clotherName={"men"}/>
		</div>
	)
}
