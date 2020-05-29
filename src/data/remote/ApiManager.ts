import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";

export const BASE_URL = "https://api.sell-up.co.kr"; //서비스 서버
// export const BASE_URL = "http://sellupdemo-env.tkyrzpp4rq.ap-northeast-2.elasticbeanstalk.com"; // 테스트 서버
// export const BASE_URL = "http://10.130.105.238:5000"; // 로컬 테스트

export const URL_INVOICE = "invoices";
export const URL_ORDER = "orders";
export const URL_RETAILER = "retailers";
export const URL_WHOLESALER = "wholesalers";
export const URL_USER = "users";
export const URL_TASKS = "tasks";
export const URL_BUILDINGS = "buildings";
export const URL_IN_STORE_CREDIT = "in_store_credit";
export const URL_TAX_INVOICE_REQUEST = "tax_invoice_request";
export const URL_DATE = "date";
export const URL_SEND = "notifications";
export const URL_RESEND = "re_notifications";
export const URL_SEND_EACH = "notification"
export const URL_UPDATE = "update";
export const URL_SUMMARY = "summary";
export const URL_FLOORS = "floors";

const ApiManager = () => {

}

const normalClient: AxiosInstance = axios.create({
    baseURL: BASE_URL,
})

const authClient: AxiosInstance = axios.create({
    baseURL: BASE_URL
})

authClient.interceptors.request.use((config: AxiosRequestConfig) => {
    const accessKeyStr = localStorage.getItem("accessKey");
    const accessKey = accessKeyStr == null ? null : JSON.parse(accessKeyStr);
    const userKey = localStorage.getItem("userKey");
    const now = Date.now();

    // console.log(now);
    // console.log(userKey);
    // console.log(accessKey.expiredAt);

    if (userKey != undefined) {
        if (accessKey != null && accessKey.expiredAt > now) {
            const payload = { ...config, headers: { ...config.headers, accessKey: accessKey.accessKey } };
            return payload;
        } else {
            return axios.request({
                baseURL: BASE_URL,
                url: "/key/" + userKey,
                method: "get"
            })
                .then((response: AxiosResponse) => {
                    localStorage.setItem("accessKey", JSON.stringify(response.data));
                    // console.log("set session");
                    // console.log(localStorage.getItem("accessKey"));
                    const payload = { ...config, headers: { ...config.headers, accessKey: response.data.accessKey } };
                    return payload;
                })
                .catch((error: AxiosError) => {
                    // console.log(error);
                    return Promise.reject(error.response || error.message);
                })
        }
    } else {
        const err: AxiosError = {
            name: "NoUserKey",
            message: "NoUserKey",
            config: config,
            isAxiosError: true
        };
        return Promise.reject(err);
    }
}, (error) => {
    // console.log(error);
})

export const request = (config: AxiosRequestConfig, auth?: boolean) => {

    const client = auth == null ? authClient : auth ? authClient : normalClient;

    const onSuccess = (response: AxiosResponse) => {
        return response.data
    }

    const onError = (error: AxiosError) => {
        // console.log("send to intro?");
        // console.log(error);

        if (error.message === "Expired key") {
            const userKey = localStorage.getItem("userKey");

            axios.request({
                baseURL: BASE_URL,
                url: "/key/" + userKey,
                method: "get"
            })
                .then((response: AxiosResponse) => {
                    localStorage.setItem("accessKey", JSON.stringify(response.data));
                    // console.log("set session");
                    // console.log(localStorage.getItem("accessKey"));
                    const payload = { ...config, headers: { ...config.headers, accessKey: response.data.accessKey } };
                    return payload;
                })
                .catch((error: AxiosError) => {
                    // console.log(error);
                    return Promise.reject(error.response || error.message);
                })
        }

        return Promise.reject(error.response || error.message)
    }

    return client(config)
        .then(onSuccess)
        .catch(onError);
};

export default ApiManager;