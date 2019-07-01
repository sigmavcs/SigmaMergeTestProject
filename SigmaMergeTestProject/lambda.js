exports.handler = function(event, context, callback) {

    const i = 15;
    
    callback(null, {"message": "Successfully executed" + i});
}