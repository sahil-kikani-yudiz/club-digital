import Axios from '@/axios'
import { addQueryParams } from '@/shared/utils'

export function getFormById(id: string) {
  return Axios.get(`/admin/form/get-form/${id}`)
}

export function getFormList(params : any){
  return Axios.get(`admin/form/list?${addQueryParams(params)}`)
}

export function grtDynamicFieldValue(data: any) {
  return Axios.post('admin/form/get-dynamic-field_val', data)
}