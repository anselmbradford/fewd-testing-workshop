/******************************************************
 * Credits:
 *  jasmine-fixture by Justin Searls (@searls)
 *****************************************************/

describe('App', function() {
  it('clears classification on startup', function() {
    var $classificationEl = affix('#classification.success'); // affix returns a jQuery object
    $classificationEl.text('');

    new App().start();

    expect($classificationEl.text()).toEqual('give me your best triangle');
  });
});
