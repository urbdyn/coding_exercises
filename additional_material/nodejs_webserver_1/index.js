/**
 * API Server for Project X
 */

'use strict';

const fs = require('fs');
const express = require('express');

function main(cliArgs){

    // Verify args
    let configFile;
    if(cliArgs.length != 1){
        console.log("Error: Please provide only one argument, the path to config file.");
        process.exit(1);
    } else {
        configFile = cliArgs[0];
    }

    // Load config file
    let configData;
    try {
        const rawdata = fs.readFileSync(configFile);
        configData = JSON.parse(rawdata);
    } catch (error) {
        console.log(`Failed to read config file at: ${configFile}`);
        console.log(error);
        process.exit(1);
    }

    // Verify config file
    if (!("address" in configData) || !("port" in configData) || !("file_serve_dir" in configData)) {

    }

    // Setup express
    var app = express();

    app.get('/api/v1/hello', (req, res) => {
        res.send("Hello!!!!!!!!!!!");
    });
    app.get('/api/v1/echo', (req, res) => {
        res.send(req.body);
    });
    app.use('/files', express.static(configData.file_serve_dir));

    // Run express
    var server = app.listen(configData.port, configData.address, function () {
        console.log(`Running at http://${configData.address}:${configData.port}`)
    });
}

// Run server only if this is run as an executable.
if (typeof require !== 'undefined' && require.main === module) {
    // Run main with cli arguments after node and script.
    main(process.argv.slice(2));
}
