import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ProblemProvider from './store/ProblemProvider.jsx'

createRoot(document.getElementById('root')).render(
  <ProblemProvider>
    <App />
  </ProblemProvider>,
)