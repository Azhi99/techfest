
import axios from 'axios';
export default {
    
        async createCities(params)  {
            return await axios.post(`cities/create` , params)
        },
        async createCitiesList(params)  {
            return await axios.post(`cities/create/list` , params)
        },
        async updateCitiesColumn(column , value , data)  {
            return await axios.put(`cities/update_list?${column}=${value}` , data)
        },
        async deleteCitiesList(list)  {
            return await axios.delete(`cities/delete_list` , {
                data: {
                    list:list
                }
            })
        },
        async reportCities(column , value)  {
            return await axios.get(`cities/report?${column}=${value}`)
        },
        async getAllCities()  {
            return await axios.get(`cities/all`)
        },
        async getOneCities(city_id)  {
            return await axios.get(`cities/all/${city_id}`)
        },
        async getCitiesByColumn(column , value)  {
            return await axios.get(`cities/filter?column=${column}&value=${value}`)
        },
        async deleteCities(city_id)  {
            return await axios.delete(`cities/delete/${city_id}`)
        },
        async updateCities(city_id , params)  {
            return await axios.put(`cities/update/${city_id}` , params)
        },
}
        