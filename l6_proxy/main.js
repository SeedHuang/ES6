!function(){
    var obj = {};

    var proxyObj = new Proxy(obj, {
        get (target, property) {
            if(property == "time") {
                return "We haven't time!";
            }
            return target[property];
        },
        set (target, property) {
            if(property == "name") {
                target[property] = "I'm Seed Huang"
            }
        }
    });

    console.log(proxyObj.time);
    proxyObj.name = "What's your name";
    console.log(proxyObj.name);
}();

// proxy construct
!function(){
    var ProxyFunc = new Proxy(function(firstName, lastName){
        this.name = firstName + lastName;
    }, {
        construct:function AA(){
            console.log(arguments)
            return {"Full":"SSS" }
        }
    });

    var pryObj = new ProxyFunc("Seed", "Chunhua");
    console.log(pryObj);
}();


// proxy deleteProperty
!function(){
    var proxyObj = {
        firstName: "Seed",
        lastName: "Huang"
    };

    var obj = new Proxy(proxyObj, {
        deleteProperty(target, property){
            return true;
        }
    });
    console.log(delete obj.firstName);
    console.log(obj.firstName);
}();


// proxy deleteProperty
console.log("proxy deleteProperty ---------------");
!function(){
    var proxyObj = {
        firstName: "Seed",
        lastName: "Huang"
    };

    let {proxy, revoke} = Proxy.revocable(proxyObj, {
        deleteProperty(target, property){
            return true;
        }
    });


    console.log(delete proxy.firstName);
    console.log(proxy.firstName);
    revoke();
    console.log(proxy);
    // console.log(delete proxy.firstName);
    // Uncaught TypeError: Cannot perform 'deleteProperty' on a proxy that has been revoked
    // console.log(proxy.firstName);
    // main.js:76 Uncaught TypeError: Cannot perform 'get' on a proxy that has been revoked
}();

// proxy has
console.log("proxy has ---------------");
!function(){
    var obj = {
        "firstName": "Seed",
        "lastName": "Huang"
    };

    var proxyObj = new Proxy(obj, {
        has:function(target, property){
            console.log("run in has");
            if(property == "firstName") {
                return false;
            }
            else {
                return true;
            }
        }
    });

    console.log('firstName' in proxyObj);
    // false
    console.log(proxyObj.firstName)
    // Seed
}();

// proxy ownKeys
console.log("proxy ownKeys ---------------");
!function(){
    var obj = {
        "firstName": "Seed",
        "lastName": "Huang"
    };

    var proxyObj = new Proxy(obj, {
        ownKeys:function(target, property){
            return ['firstName'];
        }
    });

    console.log(Object.keys(proxyObj));


    for(var field in proxyObj) {
        console.log(field);
    }
}();
