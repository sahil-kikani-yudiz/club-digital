import Axios from '@/axios'

type paramsType = {  
    nSkip: number
    nLimit?: number
    sSortBy?: string
    nOrder?: number  
}

export function getToolList() {
  return Axios.get(`manager/category/list`)
}
