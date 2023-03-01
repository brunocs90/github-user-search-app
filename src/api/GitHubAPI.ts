import axios from 'axios';

const BASE_URL = 'https://api.github.com/users/';

export class GitHubAPI {
    static async fetchUsers(username: string) {
        if (username === '') return;
        const response = await axios.get(`${BASE_URL}${username}`);
        return response.data;
    }
}
