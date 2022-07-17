const {sum, subtract} = require('./algebra');


test('addition', ()=> {
    expect(sum(1,2)).toBe(3);
    expect(sum(2,2)).not.toBe(5);
})


const text = 'welcome to chucky'

test('string comparison test 1', ()=> {

  expect(text).toMatch(/chucky/);

});


test('string comparison test 2',()=>{

    expect(text).toMatch(new RegExp('chucky'));

});


test('string length',()=>{

   expect('abc').toHaveLength(3);

});



test('array length',()=>{

    expect([1,2,3]).toHaveLength(3);
});


const cheeches = ['dan','ghage','raff','hepp'];

test('check array contains ',()=>{

    expect(cheeches).toContain('dan');

})