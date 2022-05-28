import * as config from './config';
export const hireFormAction = async (reqBody): Promise<any> => {
	const resp = await fetch(config.sheetsURL);
	const data = await resp.json();
	console.log(data);
};
