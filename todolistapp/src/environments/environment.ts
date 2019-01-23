// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase : {
    apiKey: "AIzaSyAnDEjoWm5v-gsub_mQhbgNiPuPeYKqcLA",
    authDomain: "todolistapp-c54ea.firebaseapp.com",
    databaseURL: "https://todolistapp-c54ea.firebaseio.com",
    projectId: "todolistapp-c54ea",
    storageBucket: "todolistapp-c54ea.appspot.com",
    messagingSenderId: "89855956424"
  }
};
