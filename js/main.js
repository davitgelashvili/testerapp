function viewImage(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('.upload__design--img').attr('src', e.target.result);
            console.log(e.target.result)
            addItem(e.target.result);
            // $(".upload__descign--img").show();
            // displayAreas(areas);
        };

        reader.readAsDataURL(input.files[0]);
    }
}



var addItem = function (img, url) {
    var oldItems = JSON.parse(localStorage.getItem('itemsArray')) || [];
    
    var newItem = {
        'img': img,
        'url': url,
    };
    
    oldItems.push(newItem);
    
    localStorage.setItem('itemsArray', JSON.stringify(oldItems));
};

// addItem('../img.jpg', 'https://m.crocobet.com');

let data = JSON.parse(localStorage.getItem('itemsArray'))


const linkInput = $('.upload__form--link');
const linkview = $('.upload__live--iframe');

linkInput.change(updateValue);

function updateValue(e) {
    linkview.attr('src', e.target.value)


    addItem('', e.target.value);












    (function (exports) {
        function urlsToAbsolute(nodeList) {
            if (!nodeList.length) {
                return [];
            }
            var attrName = 'href';
            if (nodeList[0].__proto__ === HTMLImageElement.prototype || nodeList[0].__proto__ === HTMLScriptElement.prototype) {
                attrName = 'src';
            }
            nodeList = [].map.call(nodeList, function (el, i) {
                var attr = el.getAttribute(attrName);
                if (!attr) {
                    return;
                }
                var absURL = /^(https?|data):/i.test(attr);
                if (absURL) {
                    return el;
                } else {
                    return el;
                }
            });
            return nodeList;
        }
    
        function screenshotPage() {
            urlsToAbsolute(document.images);
            urlsToAbsolute(document.querySelectorAll("link[rel='stylesheet']"));
            var screenshot = document.documentElement.cloneNode(true);
            var b = document.createElement('base');
            b.href = document.location.protocol + '//' + location.host;
            var head = screenshot.querySelector('.upload__live--iframe');
            head.insertBefore(b, head.firstChild);
            screenshot.style.pointerEvents = 'none';
            screenshot.style.overflow = 'scroll';
            screenshot.style.webkitUserSelect = 'none';
            screenshot.style.mozUserSelect = 'none';
            screenshot.style.msUserSelect = 'none';
            screenshot.style.oUserSelect = 'none';
            screenshot.style.userSelect = 'none';
            screenshot.dataset.scrollX = window.scrollX;
            screenshot.dataset.scrollY = window.scrollY;
            var script = document.createElement('script');
            script.textContent = '(' + addOnPageLoad_.toString() + ')();';
            screenshot.querySelector('.upload__live--iframe');
            var blob = new Blob([screenshot.outerHTML], {
                type: 'text/html'
            });
            return blob;
        }
    
        function addOnPageLoad_() {
            querySelector('.upload__live--iframe').addEventListener('DOMContentLoaded', function (e) {
                var scrollX = document.documentElement.dataset.scrollX || 0;
                var scrollY = document.documentElement.dataset.scrollY || 0;
                querySelector('.upload__live--iframe').scrollTo(scrollX, scrollY);
            });
        }
    
        function generate() {
            window.URL = window.URL || window.webkitURL;
            window.open(window.URL.createObjectURL(screenshotPage()));
        }
        generate()
        exports.screenshotPage = screenshotPage;
        exports.generate = generate;
    })(window);
    

}