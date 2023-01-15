
import axios from 'axios';
export default {
    
        async createVisitorCheckIn(params)  {
            return await axios.post(`visitor_check_in/create` , params)
        },
        async createVisitorCheckInList(params)  {
            return await axios.post(`visitor_check_in/create/list` , params)
        },
        async updateVisitorCheckInColumn(column , value , data)  {
            return await axios.put(`visitor_check_in/update_list?${column}=${value}` , data)
        },
        async deleteVisitorCheckInList(list)  {
            return await axios.delete(`visitor_check_in/delete_list` , {
                data: {
                    list:list
                }
            })
        },
        async reportVisitorCheckIn(column , value)  {
            return await axios.get(`visitor_check_in/report?${column}=${value}`)
        },
        async getAllVisitorCheckIn()  {
            return await axios.get(`visitor_check_in/all`)
        },
        async getOneVisitorCheckIn(visitor_check_in_id)  {
            return await axios.get(`visitor_check_in/all/${visitor_check_in_id}`)
        },
        async getVisitorCheckInByColumn(column , value)  {
            return await axios.get(`visitor_check_in/filter?column=${column}&value=${value}`)
        },
        async deleteVisitorCheckIn(visitor_check_in_id)  {
            return await axios.delete(`visitor_check_in/delete/${visitor_check_in_id}`)
        },
        async updateVisitorCheckIn(visitor_check_in_id , params)  {
            return await axios.put(`visitor_check_in/update/${visitor_check_in_id}` , params)
        },
}
        