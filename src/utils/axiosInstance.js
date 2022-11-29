import axios from 'axios';

export const BASE_URL = 'https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/';
export const SERVICE_KEY = 'kPUf4MZCTwCgH5J/qybnA3Yv5JS44w++mgysE62dzG7CEnbdZDPmjhsq2wQsnsu3YhprvUTXemGSmtUFL5eaUQ==';

export default axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
});