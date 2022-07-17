const { getData } = require("./data");


test(' example promise ',()=> {

    return getData('https://httpbin.org/get?name=wfng').then(data=>{
        expect(data.args.name).toBe('wfng');
    })

});