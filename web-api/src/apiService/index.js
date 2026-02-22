export async function RestCall(method, url, body = false, headers = { "Content-Type": "application/json" }) {
    try {

        let option = {};

        if (method) option["method"] = method;
        if (headers) option["headers"] = headers;
        if (body) option["body"] = JSON.stringify(body);

        let response = await fetch(url, option);

        if (!response.ok) throw new Error("Failed to fetch products");
        
        let data = await response.json();

        return data;

    } catch (error) {
        console.log("@RestCall :: Error",error);
    }
}