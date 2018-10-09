(function () {

    function _DynamicURL(_path) {
        if (_path.indexOf('./') == 0)
            _path = _path.substring(2); //remove "./"

        let path = location.pathname.split('/').length;
        if (path > 2) {
            for (let i = 0; i < path - 2; i++)
                _path = '../' + _path;
        }
        return _path;
    }; //@Function: _DynamicURL(_path)

    function RouteVendorScript(_targer, _list) {
        _list.forEach(function (val) {
            let script = document.createElement("script");
            script.src = _DynamicURL(val);
            script.async = false;
            if (_targer == "head")
                document.head.appendChild(script);
            else
                document.body.appendChild(script);
        });
    }; //@Function: RouteVendorScript(_targer, _list)

    function RouteVendorStyle(_targer, _list) {
        _list.forEach(function (val) {
            let style = document.createElement("link");
            style.href = _DynamicURL(val);
            style.rel = "stylesheet";
            if (_targer == "head")
                document.head.appendChild(style);
            else
                document.body.appendChild(style);
        });
    }; //@Function: RouteVendorStyle(_targer, _list)


    //befor every things start load Ned-route
    document.addEventListener("readystatechange", function () {
        //this code invoke before "DOMContentLoaded"
        if (document.readyState == "interactive") {
            RouteVendorScript("head", NedConfig.static.script.head);
            RouteVendorStyle("head", NedConfig.static.style.head);
        }
    });

    document.addEventListener("DOMContentLoaded", function (event) {
        RouteVendorScript("body", NedConfig.static.script.body);
    });


})();