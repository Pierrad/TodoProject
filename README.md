# TODO multiplatform app

## Functionality

- Account management (account, SSO…)
- Advanced todo list management
- Dashboard view (number of todo completed, badge…)
- User can create a group and add todos to this group
    - Others users can subscribe to this group so that all todos from the group are copied into their account and they can manage the todo at their convenience.
        - Useful for students

## Tech architecture

### Monorepo with [NX](http://nx.dev)

- Web → [React](https://reactjs.org/)
- Mobile → [React-Native](https://reactnative.dev/)
- Back → [Express](https://expressjs.com/fr/) [node](https://nodejs.org/en/) app with [MongoDB](https://www.mongodb.com/fr-fr) and [GraphQL](https://graphql.org/) API
- Bonus
    - [Raycast](https://www.raycast.com/) extension to manage tasks

### What we can share

- Helpers (basic function and hooks)
- Services (API connection)
- Store ([Redux](https://redux.js.org/) store)
- Models (types and interface)
- Translations ([i18n](https://react.i18next.com/) translations files)
- Basic theme files (colors)

### What we cannot share

- UI components → React uses web elements but React-Native uses mobile native elements
    - We could use a UI library that can share components between React & React-Native (like [NativeBase](https://nativebase.io/)) but it’s quite buggy and not very performant
- Environment file between React and React Native

### Others

- [MUI](https://mui.com/) for React web app
- [React-Native paper](https://callstack.github.io/react-native-paper/) for React-Native web app
- [Styled-components](https://styled-components.com/) for styling in React & React-Native
- [React-Spring](https://react-spring.dev/) to animate React & React-Native apps

## Tasks architecture

![Architecture](https://github.com/Pierrad/TodoProject/blob/main/assets/Architecture.png)