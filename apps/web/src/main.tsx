import { StrictMode } from 'react'
import * as ReactDOM from 'react-dom/client'
import { Provider as ReduxProvider } from 'react-redux'
import { ApolloProvider } from '@apollo/client';


import App from './app/app'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { i18n } from '@todo-project/i18n'
import { store } from "@todo-project/redux";
import { getClient } from '@todo-project/redux'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <StrictMode>
    <ReduxProvider store={store} >
      <ApolloProvider client={getClient(process.env['API_GRAPHQL_ENDPOINT'] ?? '')}>
        <App />
      </ApolloProvider>
    </ReduxProvider>
  </StrictMode>
)
