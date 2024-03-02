import axios from '../utils/axios';
import { sha256 } from 'js-sha256';

function UserAPI() {
    return {
        signIn: (username: string, password: string) => axios.get('Users/signin', {
            params: {
                username,
                password
            }
        }),
        signUp: (username: string, password: string, email: string, address: string, type: string) => axios.post('Users/singup', {
            username,
            password,
            email,
            address,
            type
        })
    }
}

export default UserAPI();