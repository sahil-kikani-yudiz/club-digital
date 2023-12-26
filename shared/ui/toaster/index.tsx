import { ToastOptions, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

type ToastType = 'success' | 'error'

export const showToast = (type: ToastType, message: string) => {
  const options: ToastOptions = {
    position: 'top-right',
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true
  }

  switch (type) {
    case 'success':
      toast.success(message, options)
      break
    case 'error':
      toast.error(message, options)
      break
    default:
      break
  }
}
