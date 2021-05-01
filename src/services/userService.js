import { baseAPI } from '../shared/baseAPI';
import { UserObj } from '../entities/userObj';
import { PostObj } from '../entities/postObj';
import { AlbumObj } from '../entities/albumObj';

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
            .catch(() => alert("Something went wrong"))
    }

    deleteUser(id, user) {
        return baseAPI.delete(`users/${id}`, user)
            .then(response => response.status)
            .catch(() => alert("Something went wrong"))
    }

    postUser(user) {
        return baseAPI.post(`users`, user)
            .then(response => response.status)
            .catch(() => alert("Something went wrong"))
    }

    editUser(user, id) {
        return baseAPI.patch(`users/${id}`, user)
            .then(response => response.status)
            .catch(() => alert("Something went wrong"))
    }

    getPosts(id) {
        return baseAPI.get(`users/${id}/posts`)
            .then(response => response.data)
            .then(posts => {
                let newPosts = posts.map(post => new PostObj(post))
                return newPosts;
            })
            .catch(() => alert("Something"))
    }
    
    getAlbums(id) {
        return baseAPI.get(`users/${id}/albums`)
            .then(response => response.data)
            .then(albums => {
                let newAlbums = albums.map(album => new AlbumObj(album))
                return newAlbums;
            })
            .catch(() => alert("Something"))
    }
}

export const userService = new UserService();