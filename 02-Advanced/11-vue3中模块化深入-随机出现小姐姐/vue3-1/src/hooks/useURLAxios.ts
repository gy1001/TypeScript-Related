/*
 * @Author: gaoyuan
 * @Date: 2020-10-29 18:49:33
 * @LastEditors: gaoyuan
 * @LastEditTime: 2020-10-30 10:17:59
 */
import { ref } from "vue";
import axios from "axios";

function useUrlAxios(url: string){
  const result = ref(null)
  const loading = ref(true)
  const loaded = ref(false)
  const error = ref(null)
  axios.get(url).then(res => {
    loading.value = false
    loaded.value = true
    result.value = res.data.message
  }).catch(e => {
    error.value = e
    loading.value = false
  })
  return {
    result,
    loading,
    loaded,
    error
  }
}

export default useUrlAxios