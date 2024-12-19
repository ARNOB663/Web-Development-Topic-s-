# AJAX

AJAX is a developer's dream because you can:
- Update a web page without reloading the page
- Request data from a server after the page has loaded
- Receive data from a server after the page has loaded
- Send data to a server in the background
- Work asynchronously, meaning you can perform other tasks while waiting for the response

## AJAX Packages
- The `XMLHttpRequest` object built-in with JavaScript
- `fetch` API supported by modern browsers
- `axios` package
- `jQuery.ajax`
- `superagent`

## Example Usage

### Using XMLHttpRequest
```javascript
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.example.com/data", true);
xhr.onreadystatechange = function () {
  if (xhr.readyState == 4 && xhr.status == 200) {
    console.log(xhr.responseText);
  }
};
xhr.send();