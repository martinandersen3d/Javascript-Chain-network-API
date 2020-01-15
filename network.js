
var axios = require('axios')

// Only for developement - Start
    // run localstorage headless with node
    // https://github.com/lmaccherone/node-localstorage
    if (typeof localStorage === "undefined" || localStorage === null) {
        var LocalStorage = require('node-localstorage').LocalStorage;
        localStorage = new LocalStorage('./scratch');
      }
      
      // quokka delay
      ( {
        "delay": 1100
    })
// Only for developement - End



// _____________________________________________ Main function 

var network = function() 
{
    // Values
    this.action=null // get or set
    this.q=[] // query
    this.url=null
    this.state='first time'
    this.arguments
    this.length
    this.counterTotal=0; // count numer bliver talt op færste gang.
    this.counter = 0
    this.continue; ///pause=true/false
    this.resultObj={}
    
}
"".toString()
// ____________________________________________ Extend
var n_ =  network.prototype;

n_.get      = function(s) {
    if('first time' == this.state )
    { 
        this.action = 'get'
        this.url=s
        var t = this.templateQ()
        t.type='get'
        t.succes=null
        t.request=s
        t.respond=null
        this.q.push(t)
        this.counterTotal++
    }
    if('second time' == this.state ) {
        //
    }
    return this          }

n_.set      = function(s) {
    if('first time' === this.state )
    { 
        this.action = 'set'
        this.url=s
        var t = this.templateQ()
        t.type='set'
        t.succes=null
        t.request=s
        t.respond=null
        this.q.push(t)
        this.counterTotal++
    }
    return this; 
           
}
// LOCAL STORAGE 
n_.ls      = function(s) {
    if('first time' == this.state )
    { 
        var t = this.templateQ()
        t.type='ls'
        t.succes=null
        t.request=s
        t.respond=null
        this.q.push(t)
        this.counterTotal++
    }
    if('second time' === this.state ) 
    {
        var v = localStorage.getItem(url)
        if(v !== null ){
            // jason parse
        }
        else{}
    }
    return this
}

n_.server   = function(s) {
    if('first time' == this.state ){ 
        // http://echo.jsontest.com/key/value/one/two
        if (this.action == 'get') {
                axios.get('http://echo.jsontest.com/key/value/one/two')
                .then(function (response) {
                // console.log(response.data);
                })
                .catch(function (error) {
                // console.log(error);
                });
        }
        this.counterTotal++
    }
    return this
}

n_.result   = function(s) {

    this.state = "second time"

    return this.q
};
// ______________________________________________ internal
n_.templateQ      = function(s) {
    var t = {
        type:null,
        succes:null,
        request:null,
        respond:null
    }
    return this             };

// ______________________________________________ Test


var f = new network()
var res = f.get('http://echo.jsontest.com/key/value/one/two').ls().result()

console.log(res); 
// console.log('______obj_______-');
// console.log(res[0]);


// localStorage.setItem('val', 'tst')

/* ______________________________________________ To Do 
  
- axios set base url

*/



/* ______________________________________________ Code
  
shorthand:
n_.s   = function(color) {
    
        return this.server()
};


.ls()
    .ls().ls().ls().ls().ls()
    .ls()
    .ls().ls().ls()
            .ls()
            .ls().ls().ls().ls().ls();
                            .ls()
                            .ls()
                            .ls()
*/