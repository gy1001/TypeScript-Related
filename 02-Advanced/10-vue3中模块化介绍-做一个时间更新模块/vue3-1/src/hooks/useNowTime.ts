/*
 * @Author: gaoyuan
 * @Date: 2020-10-29 17:41:16
 * @LastEditors: gaoyuan
 * @LastEditTime: 2020-10-29 17:41:24
 */
import { ref } from "vue";

const nowTime = ref("00:00:00");
const getNowTime = () => {
    const now = new Date();
    const hour = now.getHours() < 10 ? "0" + now.getHours() : now.getHours();
    const minu =
        now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes();
    const sec =
        now.getSeconds() < 10 ? "0" + now.getSeconds() : now.getSeconds();
    nowTime.value = hour + ":" + minu + ":" + sec;

    setTimeout(getNowTime, 1000);
};

export { nowTime, getNowTime }