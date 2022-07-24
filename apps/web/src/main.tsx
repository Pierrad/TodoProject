import { StrictMode } from 'react'
import * as ReactDOM from 'react-dom/client'
import './app/i18n/i18n'
import App from './app/app'
import { store } from "@todo-project/redux";
import { Provider as ReduxProvider } from 'react-redux'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <StrictMode>
    <ReduxProvider store={store} >
      <App />
    </ReduxProvider>
  </StrictMode>
)
