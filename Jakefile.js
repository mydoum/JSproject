(function()
{
    desc("Default build");
    task('default', [ "version" ] , function () {
        var app = require("./app");
        app.hello();
    });
    
    desc("Check Node version")
    task('version', function () {
        var packageJson = require("./package.json");
        var expectedVersion = "v" + packageJson.engines.node;
        var currVersion = process.version;

        if (expectedVersion !== currVersion) {
            fail("Node version doesn't match, expected " + expectedVersion + ", but was " + currVersion);
        }
    })
}());