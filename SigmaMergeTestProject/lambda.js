exports.handler = function(event, context, callback) {

    const number = 15;
    
    callback(null, {"message": "Successfully executed" + number});
}