var assert = require('assert');


describe('New member successfully register to the connect application with valid data',function(){

    before(function() {
        // runs before all tests in this block
    });

    after(function() {
        // runs after all tests in this block
    });

    beforeEach(function() {
        // runs before each test in this block
    });

    afterEach(function() {
        // runs after each test in this block
    });


   describe('#indexOf', function(){
       it('should return -1 when the value is not present', function(){
          assert.equal([1,2,3].indexOf(4),-1);
       });
   });

   describe('try done', function(){
       it('double done', function(done) {
           // Calling `done()` twice is an error
           setImmediate(done);
           // setImmediate(done);
       });
   });

});
