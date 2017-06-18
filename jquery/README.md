## jQuery library let us easily perform following functions:

#### `note: avoid using javascript for these operations as jquery offers a cleaner way.`

```
- HTML/DOM manipulation
- CSS manipulation
- HTML event methods
- Effects and animations
- AJAX
- Utilities
```

### Google CDN
`src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"`

### Microsoft CDN
`src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.2.1.min.js"`

### jquery selectors (important ones only)
```
- $("tag").doSomething();
- $("#id").doSomething();
- $(".class").doSomething();
- $(this).doSomething();
- $("[attribute]").doSomething();
- $("tag.class").doSomething();
- $("tag:first").doSomething(); => Selects the first <tag> element
- $("tag:odd").doSomething();   => Selects all even  <tag> elements
- $("tag:even").doSomething();  => Selects all even  <tag> elements
```

### jquery DOM events:
| Mouse Events  | Keyboard Events | Form Events  | Document/Window Events |
| ------------- | -------------   | ------------ | ---------------------- |
| click         | keypress        | submit       | load                   |
| dblclick      | keydown         | change       | resize                 |
| mouseenter    | keyup           | focus        | scroll                 |
| mouseleave    |                 | blur         | unload                 |

### animate - using queue functionality
- If you write multiple animate() calls after each other, jQuery creates an "internal" queue with these method calls. Then it runs the animate calls ONE by ONE.
```
$("button").click(function(){
    var div = $("div");
    div.animate({height: '300px', opacity: '0.4'}, "slow");
    div.animate({width: '300px', opacity: '0.8'}, "slow");
    div.animate({height: '100px', opacity: '0.4'}, "slow");
    div.animate({width: '100px', opacity: '0.8'}, "slow");
});
```

### To change css with jquery
```
    $("#id").css({
        property1: 'value1',
        property2: 'value2'
    });
```

### pending [https://www.w3schools.com/jquery/default.asp]
* jquery html
* jquery traversing DOM
* jquery ajax

### info
* The UI is build using `Bootstrap`.
* To keep code separate I have placed all the jquery code is in script.js
