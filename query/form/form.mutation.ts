import Axios from '@/axios'

export default function CreateForm(data: any) {
  return Axios.post('/admin/form/add', data)
}

export function attachField(data: any) {
  return Axios.post('admin/form/attach-field', data)
}

export function editFieldSettings(data: any) {
return Axios.put('admin/form/edit-field-setting', data)
}

export function updateFieldPriority(data: any) {
return Axios.put('admin/form/update-field-priority', data)
}

export function sendData(data: any) {
return Axios.post('admin/form/add-answer', data)
}

