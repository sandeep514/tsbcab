import { create } from "apisauce";

let apiClient = create({
  baseURL: 'http://tsbcab.com/admin/public/api/',
  headers: {
    'x-api-key': 'WzXiux3SkPgm7bZe',
  },
});

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