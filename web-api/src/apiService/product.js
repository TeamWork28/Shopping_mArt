import CONFIG from '../config/index.json';
import { RestCall } from './index';
import { getCookie } from '../helper/cookie';


export async function getProducts(input = {}) {
    try {
        const queryParams = new URLSearchParams(input).toString();

        let url = `${CONFIG.api_config_v1.host}${CONFIG.api_config_v1.routes.get_products}?${queryParams}`;
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

export async function getCategories(input = {}) {
    try {
        const queryParams = new URLSearchParams(input).toString();

        let url = `${CONFIG.api_config_v1.host}${CONFIG.api_config_v1.routes.get_categories}?${queryParams}`;
        let headers = {
            "Content-Type": "application/json",
            "token": getCookie('token')
        };
        return await RestCall('GET', url, false, headers);

    } catch (error) {
        console.error("Error in getCategories:", error);
        throw error;
    }
}