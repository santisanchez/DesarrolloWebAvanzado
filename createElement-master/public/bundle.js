/**
 * @param  {string} tagName HTML tag
 * @param  {Object} attributes HTML attributes
 * @param  {Array} children HTML child elements
 * @return {HTMLElement} instance of HTMLElement
 * @example
 *
 * const el = createElement('span', { class: 'text' }, ['Hi createElement'])
 * console.log(el)
 * // => <span class="text">Hi createElement</span>
 */
function createElement(tagName, attributes, children) {
  if (typeof tagName !== 'string') throw new Error('tagName must be an string');
  var el = document.createElement(tagName);

  if (attributes) {
    if (Object.prototype.toString.call(attributes) !== '[object Object]') {
      throw new Error('attributes must be an object');
    }

    Object.keys(attributes).forEach(function (attr) {
      el.setAttribute(attr, attributes[attr]);
    });
  }

  if (!Array.isArray(children)) throw new Error('children must be an array');
  addchild(el, children);
  return el;
}
function addchild(parent, children) {
  if (!Array.isArray(children)) throw new Error('children must be an array');
  if (!(parent instanceof window.HTMLElement)) throw new Error('parent must be an instance of HTMLElement');
  children.forEach(function (child) {
    if (child instanceof window.HTMLElement) {
      parent.appendChild(child);
    } else {
      parent.innerHTML += child; // parent.innerHTML = parent.innerHTML + child
    }
  });
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var _typeof_1 = createCommonjsModule(function (module) {
  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      module.exports = _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      module.exports = _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  module.exports = _typeof;
});

function fetchImage(width, height) {
  if (typeof width !== 'number') throw new Error('width must be number');
  if (typeof height !== 'number') throw new Error('height must be number');
  var imagePromise = fetch("https://picsum.photos/".concat(width, "/").concat(height));
  if (_typeof_1(imagePromise) !== 'object') throw new Error('imagePromise must be an Object');
  return imagePromise;
}
function fetchImages() {
  return fetch('https://picsum.photos/v2/list?page=1&limit=10');
}

var $app = document.getElementById('app');
var images;
var elementImages;
fetchImages().then(function (response) {
  response.json().then(function (data) {
    images = data;
    elementImages = images.map(function (image, index) {
      return container.appendChild(createElement('img', {
        src: image.download_url,
        "class": "image_".concat(index)
      }, ['']));
    });
    changeRandomImage();
  })["catch"](function (error) {
    throw new Error(error);
  });
});
var container = createElement('div', {
  id: 'container'
}, ['']);
$app.appendChild(container);

var changeRandomImage = function changeRandomImage() {
  var randomIndex = Math.floor(Math.random() * 10);
  var replaceImage = elementImages[randomIndex];
  fetchImage(replaceImage.width, replaceImage.height).then(function (image) {
    replaceImage.src = image.url;
  });
  setTimeout(changeRandomImage, 5000);
};
