
import { createRoot } from 'react-dom/client'
import './index.css'
import AppRoutes from './routes/AppRoutes.jsx'
import { taskStore } from './app/store.js'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify/unstyled'

createRoot(document.getElementById('root')).render(
    <Provider store={taskStore}>
  <AppRoutes/>
  <ToastContainer/>
    </Provider>

)
