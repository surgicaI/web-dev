# Commands and Instructions:

### Find Angular JS DOCS [here](https://angular.io/docs)

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

### Different type of selectors are available: (file-app.component.ts)
```
@Component({
  // standard selector, mainly used for components. eg: <app-root></app-root>
  selector: 'app-root',

  // attribute selector, mainly used for directives. eg: <div app-root></div>
  selector: '[app-root]',

  // class selector. eg: <div class="app-root"></div>
  selector: '.app-root',

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
```

## Data Bindings
#### String Interpolations:
- Define the variable or function in typescript file, such as the result is a string(or anything that can be converted into a string). eg: `name = "Brad Pitt"`
- Use syntax `<h1> Hello {{ name }} ! </h1>` to use string interpolation.

#### Property binding:
- Using property binding we are able to directly bind to the native property of DOM elements(does not bind to the attributes).
- Define variable in typescript, such that it returns the same type as required by certain property. eg: `btn-disabled=true`
- Then bind that to some property in html using following syntax.  
`<button [disabled]="btn-disabled">My Button</buton>`

#### Event binding:
- Define a function in typescript file, which will be triggered by the event eg:  
`mouseJustClicked(){`  
`// do something.`  
`}`
- Then we can bind to events using following syntax:  
`<button (click)="mouseJustClicked()">`  
`My Button`  
`</button>`

### Two way bindings.
- Whenever we want to one event to effect other we use two way binding.
- Need following imports in "app.modules.ts" for this example  
`import { FormsModule } from '@angular/forms';`  
`imports: [BrowserModule, FormsModule]`
- Example:
```
<input type="text" [(ngModel)]="yourName" placeholder="Enter your name here">
<h2>Hello {{yourName}}!</h2>
```

## Directives
### Built-in Directives:
- ngIf
- ngIf-else
- ngStyle
- ngClass
- ngFor
