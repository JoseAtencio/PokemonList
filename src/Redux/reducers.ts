import { persistCombineReducers } from 'redux-persist'
//import ReduxPersist from '@pp/Config/ReduxPersist'
import ReduxPersist from '../Config/reduxPersists'
import { Reducer } from 'redux'
import { PersistConfig } from 'redux-persist/es/types'
import generalSlice from './features/generalSlice'


const config: PersistConfig<{}> = ReduxPersist.storeConfig

const reducers: Reducer = persistCombineReducers(config, {
    general: generalSlice,
  //[authApi.reducerPath]: authApi.reducer,
  //[claimsApi.reducerPath]: claimsApi.reducer,
})

export default reducers
