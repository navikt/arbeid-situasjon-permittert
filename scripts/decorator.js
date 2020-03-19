const https = require('https');

/*
* This is just to get vars inside your render app to connect to NAV env variables from external source
* */
const requestDecorator = callback => {
    // https://appres-q1.nav.no
    // https://appres.nav.no
    const url = `https://appres.nav.no/common-html/v4/navno?header-withmenu=true&styles=true&scripts=true&footer=true`;

    let body = '';
    const request = https.get(url, response => {
        response.setEncoding('utf8');

        response.on('data', chunk => {
            if (chunk) {
                body += chunk;
            }
        });

        response.on('end', () => {
            // console.log('body', chunks);
            return callback(response, body);
        });
    });

    request.end();
};

const getDecorator = () =>
    new Promise((resolve, reject) => {
        const callback = (response, body) => {
            if (response.statusCode >= 200 && response.statusCode < 400) {
                const data = {
                    NAV_SCRIPTS: body.match(/<div id="scripts">(.*?)<h2 class="divider">/is)[1],
                    NAV_STYLES: body.match(/<div id="styles">(.*?)<\/div>/i)[1],
                    NAV_HEADING: body.match(/<div id="header-withmenu">(.*?)<h2 class="divider">/is)[1],
                    NAV_FOOTER: body.match(/<div id="footer">(.*?)<h2 class="divider">/is)[1],
                    NAV_MENU_RESOURCES: body.match(/<div id="megamenu-resources">(.*?)<h2 class="divider">/is)[1],
                };
                resolve(data);
            } else {
                console.log(response.statusCode);
                reject(new Error(response.statusCode));
            }
        };

        requestDecorator(callback);
    });



module.exports = getDecorator;
