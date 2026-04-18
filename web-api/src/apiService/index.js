export async function RestCall(method, url, body = false, headers = { "Content-Type": "application/json" }) {
    try {

        let option = {};

        if (method) option["method"] = method;
        if (headers) option["headers"] = headers;
        if (body) option["body"] = JSON.stringify(body);

        let response = await fetch(url, option);

        if (!response.ok) {
            let message = "Request failed";
            try {
                const errorData = await response.json();
                message = errorData?.message || errorData?.error || message;
            } catch (parseError) {
                // Keep the generic message when the response body is not JSON.
            }

            return {
                status: false,
                message,
            };
        }

        let data = await response.json();

        return data;

    } catch (error) {
        console.log("@RestCall :: Error",error);
        return {
            status: false,
            message: error.message || "Network error",
        };
    }
}
