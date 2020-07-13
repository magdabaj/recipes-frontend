import "@babel/polyfill"
it("async test 1", done=>{
    setTimeout(done, 100)
})

it('should test 2', function () {
    return new Promise(resolve => setTimeout(resolve,1500))
});