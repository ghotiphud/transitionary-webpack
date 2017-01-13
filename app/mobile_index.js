import "./service.js";

function component () {
  var element = document.createElement('div');

  /* lodash is required for the next line to work */
  element.innerHTML = $.map(['Hello','mobile','webpack'], function(item){
    return item + ' ';
  });

  return element;
}

document.body.appendChild(component());