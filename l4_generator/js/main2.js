import co from 'co';



co(function *(){
    var a = yield Promise.resolve(1);
    var b = yield Promise.resolve(2);
    throw "fuck"
}).then(function(returnValue){
    alert(returnValue);
}).catch(function(e){
    alert(e);
});
