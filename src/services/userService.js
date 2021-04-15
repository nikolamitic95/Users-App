import { baseAPI } from '../shared/baseAPI';
import { UserObj } from '../entities/userObj';

class UserService {
    getUsers() {
        return baseAPI.get(`users`)
            .then(response => response.data )
            .then(users => {
                let newUsers = users.map(user => new UserObj(user))
                return newUsers;
            })
            .catch(error => console.log(error))
    }

    getSingleUser(id) {
        return baseAPI.get(`users/${id}`)
            .then(response => console.log( response))
            .then(singleUser => new UserObj(singleUser))
            .catch(error => console.log(error))
    }
}

export const userService = new UserService();