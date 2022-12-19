# Workflow

Build angular app and wait for 1 second and the build serviceWorker and contentPage ( because is a watch can't be done sequentially)
```bash
npm run dev
```

# Compile chrome contentScript and ServiceWorker

1. Installing `webpack-cli` as dev-dep
2. Add npm commando to build contentScript and serviceWorker `"build:dev:service-worker": "webpack --config src/chrome/webpack.config",`
3. Add how to compile `contentScript` and `serviceWorker` with webpack specificated on `webpack.config.js` 

```typescript
const { join } = require("path");

module.exports = {
    mode: "development",
    devtool: "inline-source-map", // Add source map support
    entry: {
        contentPage: join(__dirname, "src/contentPage.ts"),
        serviceWorker: join(__dirname, "src/serviceWorker.ts"),
    },
    output: {
        path: join(__dirname, "../../dist/base-extension"),
        filename: "[name].js",
    },
    module: {
        rules: [{
            exclude: /node_modules/,
            test: /\.ts?$/,
        }, ],
    },
    plugins: [],
    resolve: {
        extensions: [".ts", ".js"],
    },
};
```
and the Typescript specification on `tsconfig.chrome-extension.json`
```json
{
  "compileOnSave": false,
  "compilerOptions": {
    "baseUrl": "./",
    "outDir": "./dist/out-tsc",
    "sourceMap": true,
    "declaration": false,
    "module": "esnext",
    "moduleResolution": "node",
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "importHelpers": true,
    "target": "es5",
    "typeRoots": ["node_modules/@types"],
    "lib": ["es2018", "dom"]
  },
  "angularCompilerOptions": {
    "fullTemplateTypeCheck": true,
    "strictInjectionParameters": true
  }
}
```

# Adding Angular to the build

## Add command and configuration

Adding the commando `build:dev:angular` on `package.json`:

```json
        "build:dev:angular": "ng build --configuration dev --watch --delete-output-path false",
```

Where `--delete-output-path false` avoid that `contentScript` and `serviceWorker` are deleted.

The configuration that it will use is dev ( see `angular.json` the path: `project.<project-name>.architect.build.configuration.development` )

## Add manifest

In order to any website work as chrome extension it requires a `manifest.json` file, we are using the last version `v3`.

This has 5 main sections:

### ContentPage Script

Is one of the files transpiled before, it will be executed on the context of a website, you specify which url do you want to execute the ContentPage Script

```json
...
 "content_scripts": [{
        "js": ["contentPage.js"],
...
```
### ServiceWorker

Is one of the files transpiled before, it will be executed on background when required, it start when need to do something and stop when finish. In order to keep state is needed to write on a persistence storage.

```json
...
 "background": {
        "service_worker": "serviceWorker.js"
    },

...
```

### Action Page ( Popup page)
 
 **NOTE**: In order to this page to work see section [Add RouterTestingModule](#Add-RouterTestingModule)

 This is executed when the button of the extension is clicked with right click

 The path has `#` because it dynamic, does not exist as file so in order to identified that is needed.

 The path specified there is: `"index.html?#/popup"`

### Option Page 

 **NOTE**: In order to this page to work see section [Add RouterTestingModule](#Add-RouterTestingModule)

This is executed when the button  of the extension is clicked with left click button

The path specified there is: `"index.html?#/options"`
### New Tab Page

 **NOTE**: In order to this page to work see section [Add RouterTestingModule](#Add-RouterTestingModule)

This is executed when a new tab is created

The path specified there is: `"index.html?#/new-tab"`
## Add RouterTestingModule

When you open those pages the url has the prefix `/index.html/` which means:

In order to access `/options` you need to have `/index.html` in every root as prefix also you need `#` in order to load dynamic content.

The first problem is that angular doesn't allow to declare an url with starting `/` so you need to specify the way you application will work, with respect to url, in this case we use the [HashLocationStrategy](https://angular.io/api/common/HashLocationStrategy#description)
 which is added on the `app-routing.module.ts` file:

link

```typescript
    // if you call location.go('/foo'), the browser's URL will become example.com#/foo.
    RouterModule.forRoot(routes, { useHash: true }),]
```

### Generate Popup

```bash
ng g module modules/popup --route popup --module app.module
```

### Generate Options

```
ng g module modules/options --route options --module app.module
```

### Generate new Tab Override

 ng g module modules/new-tab --route new-tab --module app.module
