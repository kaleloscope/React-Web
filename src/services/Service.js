import axios from "axios";

const DISTRICT_BASE_URL = "http://localhost:8080/district/";
class Service {
    getDistrict() {
        return axios.get(DISTRICT_BASE_URL);
    }

    createDistrict(district){
        return axios.post(DISTRICT_BASE_URL, district);
    }

    getDistrictById(districtId){
        return axios.get(DISTRICT_BASE_URL + '/' + districtId)
    }

    updateDistrict(district, districtId){
        return axios.put(DISTRICT_BASE_URL + '/' + districtId, district)
    }
}

export default new Service()