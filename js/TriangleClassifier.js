var TriangleClassifier = function() {

  this.classify = function(a,b,c) {
    if ( !_isValidTriangle(a,b,c) ) throw new ArgumentError();
    if ( _isScalene(a,b,c) )        return 'scalene';
    if ( _isIsosceles(a,b,c) )      return 'isosceles';
    if ( _isEquilateral(a,b,c) )    return 'equilateral';
  };
};

function _isValidTriangle(a,b,c) {
  if ( a + b > c && a + c > b && b + c > a )
    return true;
  else
    return false;
}

function _isScalene(a,b,c) {
  if ( a !== b && b !== c && a !== c ) return true;
  else return false;
}

function _isIsosceles(a,b,c) {
  if ( (a === b && b !== c) ||
       (a === c && b !== c) ||
       (b === c && b !== a) ) return true;
  else return false;
}

function _isEquilateral(a,b,c) {
  if ( a === b && b === c ) return true;
  else return false;
}
