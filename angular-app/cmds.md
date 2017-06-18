# Commands and Instructions:

### Install latest version of [Node JS](https://nodejs.org/en/)

### Command to install [Angular CLI](https://cli.angular.io/)
- `npm install -g @angular/cli`

### Command to create new angular app
- `ng new my-angular-app`

### Command to integrate with bootstrap
- `npm install ngx-bootstrap bootstrap --save`
- Don't forget to add `../node_modules/bootstrap/dist/css/bootstrap.min.css` in "styles" inside ".angular-cli.json" file.

### Command to create new component
- `ng generate component app-component_name`
- `ng g c app-component_name` [shortcut for above command]

### Command to start server
- `ng serve`
- the default port is 4200, but you can change this port by adding following snippet in ".angular-cli.json" file.
```
"defaults": {
    "serve":{
        "port":8000
    }
}
```
