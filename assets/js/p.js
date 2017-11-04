(function () {
    function load(url, callback) {
        var f = function () {}
        if (callback !== undefined) {
           f = callback;
        }
        try {
            var image = document.createElement('img');
            image.onload = f;
            image.src = url;
            window.document.body.appendChild(image);
        } catch (e) {
            f();
        }
    }

    var url = window.location.href
    if (window.location != window.parent.location) {
    	url = document.referrer;
    }

    var url = document.referrer;
	window.setTimeout(500, load("//my.rtmark.net/img.gif?f=sync&partner=f0d4c5223bfd8ce0bacd9877075f9ec9b4b2e2a967ef205904619a9e5d7a3f4f&ttl=&rurl=" + url))
})();
