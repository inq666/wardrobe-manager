The project uses [Next.js](https://nextjs.org/) as the main framework, [Storybook](https://storybook.js.org/) for isolated development of UI components, and [Firebase](https://firebase.google.com/) for hosting, storage and cloud functions to deploy the app and send emails.

# **Getting Started**
First of all, install dependencies:
```bash
 npm install
```

Inside `package.json` scripts to develop the app:
```bash
 #development server
  "dev:client": "next src/client",
  "dev:server": "babel src/server --out-dir dist/server --source-maps --watch",
  "dev": "npm run dev:client & npm run dev:server",
 #storybook server
  "storybook": "start-storybook -p 6006",
```
If you launch `npm run dev` you will get a local deployment server with hot reloading.
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Inside `package.json` scripts to build the app:
```bash
 #development build
  "build:client": "next build src/client",
  "build:server": "babel src/server --out-dir dist/server --source-maps",
  "build": "npm run build:client && npm run build:server",
 #storybook build
  "build-storybook": "build-storybook",
```

# **Project architecture**

The project uses [Next.js](https://nextjs.org/) as the main framework and, accordingly, server rendering. [Redux](https://redux.js.org/) is used to manage state for applications.
Client development is done in `./src/client`.
Server development is done in `./src/server`.
[SASS](https://sass-lang.com/) is used to style custom components, as well as a modular system for isolating `.scss` files.

### Folder structure

- `./assets` - icons, illustrations, images.
- `./components` - project components.
- `./components/UI` - individual UI components.
- `./components/layout` - Layout page components.
- `./constants` - constants.
- `./data` - current data storage, in the future it should be stored on the server.
- `./helpers` - helper functions.
- `./layout` - containers for wrapping.
- `./pages` - required folder in next.js, which is used for routing.
- `./sass` - scss files, minions, constants.
- `./store` - application state [Redux](https://redux.js.org/).
- `./stories` - this folder is used for individual components used only in [Storybook](https://storybook.js.org/).
- `./utils` - currently contains only one file with a function for sending email.


##### Additional Information
`./sass/_media-query.scss` - used for automated work with breakpoints.

**Example**:
``` js
.container {
  @include media-query("sm") {
  //some property
   }
} 
```


`./src/client/next.config.js` - used to set up [Next.js](https://nextjs.org/) config.

The path of images in the project are indicated by a dash `require`.

==Example==:
``` js
  <img className={classes.image} src={`${require('assets/image.png')}`} alt="image" />
```

The project uses `path aliases`, the configuration file is`./src/client/jsconfig.json`.

# **Storybook**

[Storybook](https://storybook.js.org/) is used to create UI components.
To run [Storybook](https://storybook.js.org/) use:
```bash
  npm run storybook
```
Open http://localhost:6006 with your browser to see the result.

Files with stories are stored in the folder with the main component

**Example**:
```
components
│
└───UI
    │
    └──Input
      │  _input.module.scss
      │  Input.jsx
      │  Input.stories.jsx

```
Stories that are only used in [Storybook](https://storybook.js.org/) use a separate folder `.src/client/stories`

# **Deploy and Hosting**
 ### Firebase 
For hosting [Firebase Hosting](https://firebase.google.com/) is used, as well as [Firebase Functions](https://firebase.google.com/) which are used to deploy the application.
The project currently has **3** main sites:
`master` - https://7tam.net/
`develop` -  https://dev.7tam.net/
`storybook` - https://sb.7tam.net/

Configuration files [Firebase](https://firebase.google.com/) are located in the root folder of the project.

The following scripts are used to deploy the application snside `package.json`.
``` bash
 #develop or master
  "predeploy": "rimraf dist/ && npm run build",
  "deploy:master": "firebase deploy --only functions:serverProd,hosting:master",
  "deploy:develop": "firebase deploy --only functions:serverDev,hosting:develop",
 #storybook
  "build-storybook": "build-storybook",
  "deploy:storybook": "firebase deploy --only hosting:storybook"
```

First, you need to run the script for building the application, and then the script for deploying to [Firebase](https://firebase.google.com/)
**Example**:
For `master` or `develop`
```bash
  npm run predeploy
  npm run deploy:master
 #or
  npm run deploy:develop
```

For `storybook`
```bash
  npm run build-storybook
  npm run deploy:storybook
```

Firebase Functions are in `./src/server/index.js`
The following function allows you to deploy your application to a Firebase server

```js
admin.initializeApp();

const dev = false;
const app = next({
  dev,
  // the absolute directory from the package.json file that initialises this module
  // IE: the absolute path from the root of the Cloud Function
  conf: { distDir: 'dist/client' },
});
const handle = app.getRequestHandler();

exports.serverDev = functions.https.onRequest((request, response) => app.prepare().then(() => handle(request, response)));
exports.serverProd = functions.https.onRequest((request, response) => app.prepare().then(() => handle(request, response)));

```

 ### Auto deploy
Bitbucket pipelines are used for automatic deployment when changes are made to bitbucket. The pileline configuration file `bitbucket-pipelines.yml` is located in the root folder of the project.
When changes are made on the master branch, the deployment takes place at https://7tam.net/.
When changes are made on the develop branch, the deployment takes place at https://dev.7tam.net/.
With changes on all other branches, the deployment takes place at https://sb.7tam.net/.


 ### Sending emails
[Nodemailer](https://nodemailer.com/) is used to send email, as well as Firebase Functons. The function located in `./src/client/utils/sendEmail.js` calls the Firebase Functions located in`./src/server/index.js`, which in turn uses [Nodemailer](https://nodemailer.com /) to send emails.

 ### Google analytics
 The file for initializing **Google Analytics** is located in `./src/server/firebase.js` and is imported into the main application file `_app.jsx`. Import and initialization file are disabled on `develop` branch, because **Google analytics** should only be connected to the `master` branch only for analytics to work only on https://7tam.net/.
