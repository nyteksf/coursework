let url = require('url');
let http = require('http');
let portNum = Number(process.argv[2]);


let server = http.createServer(function (req, res) {
    if (req.method !== "GET") {
        return "Error: Only http 'GET' requests accepted! Please try again.";
    }

    if (req.method === "GET") {
        let queryKey = "";
        let urlObj = url.parse(req.url, true);
        let isISOStr = urlObj.query;

        res.writeHead(200, {'Content-Type': 'application/json'});

        for (key in isISOStr) {
            if (key === "iso") {
                let outputDateObj = {};
                queryStr = new Date(isISOStr[key]);

                if (urlObj.pathname === "/api/parsetime") {
                        outputDateObj["hour"] = queryStr.getHours();
                        outputDateObj["minute"] = queryStr.getMinutes();
                        outputDateObj["second"] = queryStr.getSeconds();
                } else if (urlObj.pathname === "/api/unixtime") {
                    outputDateObj["unixtime"] = queryStr.getTime();
                }
                res.end(JSON.stringify(outputDateObj));
            }
            return "Error: invalid input string format. Please try again.";
        }
    }
});

server.listen(portNum);

