// setCookie.js
export function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value}; expires=${expires.toUTCString()}; path=/; secure; samesite=strict`;
    console.log(document.cookie)
};

// getCookie.js
export function getCookie(name) {
    const cookies = document.cookie.split("; ");

    for (let cookie of cookies) {
        const [key, value] = cookie.split("=");
        if (key === name) return value;
    }

    return null;
};

export function deleteCookie(name) {
    document.cookie = `${name}=; Max-Age=0; path=/`;
};