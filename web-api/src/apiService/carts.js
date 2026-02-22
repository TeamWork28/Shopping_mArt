import CONFIG from '../config/index.json';
import { RestCall } from './index';
import { getCookie } from '../helper/cookie';


export async function getCarts(input = {}) {
    try {
        const queryParams = new URLSearchParams(input).toString();

        let url = `${CONFIG.api_config_v1.host}${CONFIG.api_config_v1.routes.get_carts}?${queryParams}`;
        let headers = {
            "Content-Type": "application/json",
            "token": getCookie('token')
        };

        return await RestCall('GET', url, false, headers);

    } catch (error) {
        console.error("Error in getProducts:", error);
        throw error;
    }
}

export async function addCarts(input = {}) {
    try {

        let url = `${CONFIG.api_config_v1.host}${CONFIG.api_config_v1.routes.add_carts}`;
        let headers = {
            "Content-Type": "application/json",
            "token": getCookie('token')
        };
        return await RestCall('POST', url, input, headers);

    } catch (error) {
        console.error("Error in getCategories:", error);
        throw error;
    }
}