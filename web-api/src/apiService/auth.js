import CONFIG from '../config/index.json';
import { RestCall } from './index'

export async function signUp(input = {}) {
    try {
        let url = `${CONFIG.api_config_v1.host}${CONFIG.api_config_v1.routes.sign_up}`;

        return await RestCall('POST', url, input);

    } catch (error) {
        console.error("Error in getProducts:", error);
        throw error;
    }
}

export async function signIn(input = {}) {
    try {
        let url = `${CONFIG.api_config_v1.host}${CONFIG.api_config_v1.routes.sign_in}`;

        return await RestCall('POST', url, input);

    } catch (error) {
        console.error("Error in getProducts:", error);
        throw error;
    }
}