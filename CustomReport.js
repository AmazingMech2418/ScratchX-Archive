var hat = false;
var rtrn = "NA";
(function(ext) {
    // When Scratch closes, do this
    ext._shutdown = function() {
        // Nothing here at the moment...
    };
 
    // Tell Scratch if the extension is ready to do stuff
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'}; // Status 1 = Red, Error // Status 1 = Yellow, Not Ready // Status 2 = Green, Ready
    };
 
    // Blocks to add to Scratch
    var descriptor = {
        blocks: [
            // Block type, block name, function name
            ['R', 'Custom reporter 1', 'creport'],
            ['h', 'define Custom reporter 1', 'chat'],
            [' ', 'return %s', 'lollol', '']
        ],
menus: {
txt: ['hi','bye','how are you?'],
superMath: ['radian sine', 'radian cosine', 'radian tangent', 'asin', 'atan', 'acos', 'power'],
geo: ['latitude','longitude']
}
    };
 
    // What blocks do go here
    ext.creport = function() {
    hat = true;
    rtrn = "NA";
    var lol = rtrn;
    while(lol !== "NA") {
    lol = rtrn;
    }
    return lol;
    };
    ext.chat = function() {
    return hat;
    hat = false;
    };
    ext.lollol = function(xxdd) {
    rtrn = xxdd;
    };
    // Name of Scratch Extension goes here
    ScratchExtensions.register('Custom Reporters', descriptor, ext); 
     // The name is 'Hello, World!''
})({});
