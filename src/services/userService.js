import httpService from './httpService'

export const register = (data) => {
   return httpService.post(data);
}

export default { register }