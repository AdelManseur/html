var maktaba = (function () {
    // Private helper function for internal use
    function validateElementName(name, options = {}) {
      const { id = 'maktaba', className = 'gray', innerHTML = " ", isCreated = true } = options;
  
      if (typeof name !== 'string') {
        throw new Error('Input must be a string');
      }
  
      if (typeof id !== 'string') {
        throw new Error('ID must be a string');
      }
  
      if (className !== undefined) {
        if (typeof className === 'string') {
          // Valid case for a single class
        } else if (Array.isArray(className)) {
          // Valid case for an array of classes
          className.forEach((cls) => {
            if (typeof cls !== 'string') {
              throw new Error('Class must be a string or an array of strings');
            }
          });
        } else {
          throw new Error('Class must be a string or an array of strings');
        }
      }
  
      if (typeof innerHTML !== 'string') {
        throw new Error('innerHTML must be a string');
      }
  
      if (typeof isCreated !== 'boolean') {
        throw new Error('isCreated must be a boolean');
      }
    }
  
    // Public methods exposed in the library
    return {
      create: function (name, options = {}) {
        validateElementName(name, options);
        const { id = 'maktaba', className = 'gray', innerHTML = " ", isCreated = true } = options;
  
        let createdElement;
  
        switch (name) {
          case 'button':
            createdElement = document.createElement('button');
            break;
          case 'textarea':
            createdElement = document.createElement('textarea');
            break;
          case 'div':
            createdElement = document.createElement('div');
            break;
         case 'a':
            createdElement = document.createElement('a');
            break;
         case 'input':
            createdElement = document.createElement('input');
            break;
         case 'output':
            createdElement = document.createElement('output');
            break;
         case 'br':
            createdElement = document.createElement('br');
            break;
         case 'p':
            createdElement = document.createElement('p');
            break;
         case 'h1':
            createdElement = document.createElement('h1');
            break;
         case 'h2':
            createdElement = document.createElement('h2');
            break;
         case 'h3':
            createdElement = document.createElement('h3');
            break;
         case 'h4':
            createdElement = document.createElement('h4');
            break;
         case 'h5':
            createdElement = document.createElement('h5');
            break;
         case 'h6':
            createdElement = document.createElement('h6');
            break;
         case 'strong':
            createdElement = document.createElement('strong');
            break;
         case 'em':
            createdElement = document.createElement('em');
            break;
         case 'span':
            createdElement = document.createElement('span');
            break;
         case 'q':
            createdElement = document.createElement('q');
            break;
         case 'abbr':
            createdElement = document.createElement('abbr');
            break;
         case 'cite':
            createdElement = document.createElement('cite');
            break;
         case 'code':
            createdElement = document.createElement('code');
            break;
         case 'blockquote':
            createdElement = document.createElement('blockquote');
            break;
          default:
            throw new Error(`Unsupported element type: ${name}`);
        }
  
        createdElement.setAttribute('id', id);
  
        if (className !== undefined) {
          if (typeof className === 'string') {
            createdElement.classList.add(className);
          } else if (Array.isArray(className)) {
            createdElement.classList.add(...className);
          }
        }
  
        createdElement.innerHTML = innerHTML;
        document.body.appendChild(createdElement);
  
        if (!isCreated) {
          createdElement.remove();
        }
  
        console.log('Type:', name);
        console.log('ID:', id);
        console.log('Class:', className);
        console.log('innerHTML:', innerHTML);
        console.log('isCreated:', isCreated);
      },
     remove: function (id) {
          const elementToRemove = document.getElementById(id);
      if(elementToRemove){
       elementToRemove.remove();
      }
      else{
       console.warn(`Element with ID: '${id}', not found.`);
      }
     }
    };
  })();