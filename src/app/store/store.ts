import {


  createStore,
  applyMiddleware,
  compose,
  GenericStoreEnhancer
  } from 'redux';
  import { reducer } from './reducer';
  import { IAppState } from './app.state';
  import deepFreeze from './deepFreeze';
import { ActionSequence } from 'protractor';
import { ActivationStart } from '@angular/router';
import { Action } from 'rxjs/scheduler/Action';

  declare var window: any;

  const devToolsExtension: GenericStoreEnhancer = (window.devToolsExtension)
  ? window.devToolsExtension() : (f) => f;

 const test2 = compose(applyMiddleware(deepFreeze), devToolsExtension) as GenericStoreEnhancer;
  export const store = createStore(reducer, test2);

  // export const store = createStore<IAppState>(reducer,
  // compose(
  //   applyMiddleware(deepFreeze),
  //   devToolsExtension) as GenericStoreEnhancer);
