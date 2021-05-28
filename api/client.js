import { create } from "apisauce";

let apiClient = create({
  baseURL: 'http://tsbcab.com/admin/public/api/',
  headers: {
    'x-api-key': 'WzXiux3SkPgm7bZe',
  },
});
export const getRandString = () => {
	let r = Math.random().toString(36).substring(7);
	return r;
}
export const getCurrentAddress = (lat , long) => {
	return new Promise((resolve , reject) => {
		apiClient.get('https://services.gisgraphy.com/reversegeocoding/search?format=json&lat='+lat+'&lng='+long).then((response) => {
			resolve(response);
		});
	})
}
export const imagePre= 'http://tsbcab.com/admin/public/'; 
export const register = (data) => {
    return new Promise( (resolve , reject) => {
		apiClient.post('register' , data).then((response) => 
			{
				console.log(response.data);
				if(response.data.status == true){
					resolve(response);
				}else{
					reject(response);
				}
			}
		);
	});
}
export const login = (data) => {
    return new Promise( (resolve , reject) => {
		apiClient.post('login' , data).then((response) => {
			console.log(response);
			// if(response.data.status == true){
			// 	resolve(response);
			// }else{
			// 	reject(response);
			// }
		});
	});
}

export const uploadAttachments = (data) => {
    return new Promise( (resolve , reject) => {
		apiClient.post('upload/driver/attachment' , data).then((response) => 
			{
				console.log(response);
				if(response.data.status == true){
					resolve(response);
				}else{
					reject(response);
				}
			}
		);

	});
}

export const getCabs = () => {
    return new Promise( (resolve , reject) => {
		apiClient.get('cab/types').then((response) => {
			if(response.data.status == "true"){
				resolve(response);
			}else{
				reject(response);
			}
		});
	});
}