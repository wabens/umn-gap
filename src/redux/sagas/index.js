import { all } from 'redux-saga/effects';
import loginSaga from './loginSaga';
import registrationSaga from './registrationSaga';
import userSaga from './userSaga';
import waterSetup from './waterSetup';
import cropSetup from './cropSetup';

import setupSaga from './setupSaga';
import getLabelCodeSaga from './getLabelCodeSaga';
import setupManureSaga from './setupManureSaga';
import personSaga from './personSaga';
import harvestSaga from './harvestLogSaga';

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(),
    registrationSaga(),
    userSaga(),
    waterSetup(),
    cropSetup(),
    getLabelCodeSaga(),
    setupSaga(),
    setupManureSaga(),
    personSaga(),
    harvestSaga()

  ]);
}
