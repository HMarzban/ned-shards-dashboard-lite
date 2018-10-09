(() => {

    const express = require('express'),
        ip = require('ip'),
        app = express(),
        path = require('path'),
        chalk = require('chalk'),
        PORT = process.env.PORT || 600;


    app.use('/', express.static(path.join(__dirname, 'app/src')));


    // handle every other route with index.html, which will contain
    // a script tag to your application's JavaScript file(s).
    app.all('*', function (request, response) {
        response.sendFile(path.resolve(__dirname, './app/src/index.html'));
    });


    app.listen(PORT, () => {
        console.log(`
            Server ready to serve,You Can access it:
            ------------------------------------
            External: ${chalk.blueBright(`http://${ip.address()}:${PORT}`)}
            Local:    ${chalk.blueBright(`http://localhost:${PORT}`)}
            ------------------------------------
        `);
    });

})();