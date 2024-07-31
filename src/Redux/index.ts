import { 
    configureStore, 
    createListenerMiddleware, 
    ListenerEffectAPI, 
    TypedAddListener, 
    TypedStartListening, 
    addListener 
  } from '@reduxjs/toolkit';
  
  import { applyMiddleware } from 'redux';
  import thunk from 'redux-thunk';
  import promiseMiddleware from 'redux-promise-middleware';
  import { persistStore, persistReducer } from 'redux-persist';
  import  reducers  from './reducers'
  import { composeWithDevTools } from '@redux-devtools/extension';
  import REDUX_PERSIST from '../Config/reduxPersists';
  //import REDUX_PERSIST from '@pp/Config/ReduxPersist';
 // import { authApi } from '@pp/Services/auth';
 // import { claimsApi } from '@pp/Services/claim';
  
  
  
  const persistedReducer = persistReducer(REDUX_PERSIST.storeConfig, reducers);
  const listenerMiddleware = createListenerMiddleware()
  
  export const store = configureStore({
    reducer: persistedReducer,
    //reducer: reducers,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: {
        warnAfter: 350
      },
    }).prepend(
      listenerMiddleware.middleware
    )
    .concat([
      //authApi.middleware,
      //claimsApi.middleware,
    ]),
    enhancers: [composeWithDevTools(applyMiddleware(thunk, promiseMiddleware))]
  });
  
  export const persistor = persistStore(store)
  
  // Infer the `RootState` and `AppDispatch` types from the store itself
  export type RootState = ReturnType<typeof store.getState>
  // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
  export type AppDispatch = typeof store.dispatch
  
  export type AppListenerEffectAPI = ListenerEffectAPI<RootState, AppDispatch>
  
  // @see https://redux-toolkit.js.org/api/createListenerMiddleware#typescript-usage
  export type AppStartListening = TypedStartListening<RootState, AppDispatch>
  export type AppAddListener = TypedAddListener<RootState, AppDispatch>
  
  export const startAppListening = listenerMiddleware.startListening as AppStartListening
  export const addAppListener = addListener as AppAddListener
  
  