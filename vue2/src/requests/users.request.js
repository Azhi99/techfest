
import axios from 'axios';
export default {
    
        async createUsers(params)  {
            return await axios.post(`users/create` , params)
        },
        async createUsersList(params)  {
            return await axios.post(`users/create/list` , params)
        },
        async updateUsersColumn(column , value , data)  {
            return await axios.put(`users/update_list?${column}=${value}` , data)
        },
        async deleteUsersList(list)  {
            return await axios.delete(`users/delete_list` , {
                data: {
                    list:list
                }
            })
        },
        async reportUsers(column , value)  {
            return await axios.get(`users/report?${column}=${value}`)
        },
        async getAllUsers()  {
            return await axios.get(`users/all`)
        },
        async getOneUsers(user_id)  {
            return await axios.get(`users/all/${user_id}`)
        },
        async getUsersByColumn(column , value)  {
            return await axios.get(`users/filter?column=${column}&value=${value}`)
        },
        async deleteUsers(user_id)  {
            return await axios.delete(`users/delete/${user_id}`)
        },
        async updateUsers(user_id , params)  {
            return await axios.put(`users/update/${user_id}` , params)
        },
}
        