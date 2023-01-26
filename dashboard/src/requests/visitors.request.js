
import axios from 'axios';
export default {
    
        async createVisitors(params)  {
            return await axios.post(`visitors/create` , params)
        },
        async createVisitorsAndCheck(params)  {
            return await axios.post(`visitors/create_and_check` , params)
        },
        async createVisitorsList(params)  {
            return await axios.post(`visitors/create/list` , params)
        },
        async updateVisitorsColumn(column , value , data)  {
            return await axios.put(`visitors/update_list?${column}=${value}` , data)
        },
        async deleteVisitorsList(list)  {
            return await axios.delete(`visitors/delete_list` , {
                data: {
                    list:list
                }
            })
        },
        async reportVisitors(column , value)  {
            return await axios.get(`visitors/report?${column}=${value}`)
        },
        async getAllVisitors()  {
            return await axios.get(`visitors/all`)
        },
        async getOneVisitors(visitor_id)  {
            return await axios.get(`visitors/all/${visitor_id}`)
        },
        async getVisitorsByColumn(column , value)  {
            return await axios.get(`visitors/filter?column=${column}&value=${value}`)
        },
        async deleteVisitors(visitor_id)  {
            return await axios.delete(`visitors/delete/${visitor_id}`)
        },
        async updateVisitors(visitor_id , params)  {
            return await axios.put(`visitors/update/${visitor_id}` , params)
        },
}
        