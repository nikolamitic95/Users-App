import { baseAPI } from '../shared/baseAPI';
import { UserObj } from '../entities/userObj';

class UserService {
    getUsers() {
        return baseAPI.get(`users`)
            .then(response => response.data)
            .then(users => {
                let newUsers = users.map(user => new UserObj(user))
                return newUsers;
            })
            .catch(() => alert("Something went wrong"))
    }

    getSingleUser(id) {
        return baseAPI.get(`users/${id}`)
            .then(response => response.data)
            .then(singleUser => new UserObj(singleUser))
            .catch(() =>  alert("Something went wrong"))
    }

    deleteUser(id, user) {
        return baseAPI.delete(`users/${id}`, user)
            .then(response => response.status)
            .catch(() =>  alert("Something went wrong"))
    }

    postUser(user) {
        return baseAPI.post(`users`, user)
            .then(response => response.status)
            .catch(() => alert("Something went wrong"))
    }
    
    editUser(user, id) {
        return baseAPI.patch(`users/${id}`, user)
            .then(response => response.status)
            .catch(() =>  alert("Something went wrong"))
    }
}

export const userService = new UserService();