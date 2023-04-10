import { v4 as uuidv4 } from 'uuid';

export const reqUUID = () => {
    let uuid_token = sessionStorage.getItem('UUIDTOKEN')
    if(!uuid_token){
        console.log('uuid创建了')
        uuid_token = uuidv4();
        sessionStorage.setItem('UUIDTOKEN',uuid_token)
    }
    return uuid_token
}