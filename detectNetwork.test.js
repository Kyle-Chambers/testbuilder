/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
// var FILL_ME_IN = 'Fill this value in';
//
// describe('Introduction to Mocha Tests - READ ME FIRST', function() {
//   // A Mocha test is just a function!
//   // If the function throws an error when run, it fails.
//   // If it doesn't throw an error when run, it doesn't fail.
//   // To read more about mocha, visit mochajs.org
//
//   // Once you've read and understood this section, please comment it out.
//   // You will not be able to proceed with a failing test.
//
//   it('Throws an error so it fails', function() {
//
//   });
//
//   it('Doesn\'t throw an error, so it doesn\'t fail', function() {
//     // This test doesn't really test anything at all! It will pass no matter what.
//     var even = function(num){
//       return num/2 === 0;
//     }
//     return even(10) === true;
//   });
//
//   // In tests, we want to compare the expected behavior to the actual behavior.
//   // A test should only fail if the expected behavior doesn't match the actual.
//   it('Throws an error when expected behavior does not match actual behavior', function() {
//     var even = function(num){
//       return num % 2 === 0;
//     }
//
//     if(even(10) !== true) {
//       throw new Error('10 should be even!');
//     }
//   });
// });

describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...
  var should = chai.should();

  it('has a prefix of 38 and a length of 14', function() {
    detectNetwork('38345678901234').should.equal('Diner\'s Club');
  });

  // it('has a prefix of 39 and a length of 14', function() {
  //   if (detectNetwork('3934567890123') === 'Diner\'s Club') {
  //     throw new Error('Test failed');
  //   }
  //
  // });
});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true.
  var should = chai.should();

  it('has a prefix of 34 and a length of 15', function() {
    detectNetwork('343456789012345').should.equal('American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    detectNetwork('373456789012345').should.equal('American Express');
  });
});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it.
  //   http://chaijs.com/
  var should = chai.should();


  it('has a prefix of 4 and a length of 13', function() {
    detectNetwork('4123456789012').should.equal('Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    detectNetwork('4123456789012345').should.equal('Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    detectNetwork('4123456789012345678').should.equal('Visa');
  });
});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others.
  // If you want to know more, check out the documentation.
  //   http://chaijs.com/api/bdd/
  var should = chai.should();

  it('has a prefix of 51 and a length of 16', function() {
    detectNetwork('5112345678901234').should.equal('MasterCard');
  });

  it('has a prefix of 52 and a length of 16', function() {
    detectNetwork('5212345678901234').should.equal('MasterCard');
  });

  it('has a prefix of 53 and a length of 16', function() {
    detectNetwork('5312345678901234').should.equal('MasterCard');
  });


  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten
  // these tests to pass using should syntax, refactor your tests to
  // use either expect or should, but not both.
  var should = chai.should();

  it('has a prefix of 54 and a length of 16', function() {
    detectNetwork('5412345678901234').should.equal('MasterCard');
  });

  it('has a prefix of 55 and a length of 16', function() {
    detectNetwork('5512345678901234').should.equal('MasterCard');
  })

});

describe('Discover', function() {
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
  var should = chai.should();

  it('has a prefix of 6011 and a length of 16', function(){
    detectNetwork('6011847104829485').should.equal('Discover');
  });

  it('has a prefix of 6011 and a length of 19', function(){
    detectNetwork('6011847104829485782').should.equal('Discover');
  });

  for (var prefix = 644; prefix <= 649; prefix++) {
    (function(prefix) {
      it('has a prefix of ' + prefix + ' and a length of 16', function(){
        detectNetwork( prefix + '9754873456782').should.equal('Discover');
      });
      it('has a prefix of ' + prefix + ' and a length of 19', function(){
        detectNetwork( prefix + '0649949742039857').should.equal('Discover');
      });
    })(prefix)
  }

  it('has a prefix of 6585 and a length of 19', function(){
    detectNetwork('6585937281937574976').should.equal('Discover');
  });

  it('has a prefix of 65 and a length of 16', function(){
    detectNetwork('6565439785432856').should.equal('Discover');
  });
});

describe('Maestro', function() {
  // Write full test coverage for the Maestro card
  var should = chai.should();

  var prefix = 5018;
  (function(prefix) {
    it('has a prefix of ' + prefix + ' and a length of 19', function(){
      detectNetwork(prefix + '748582638471634').should.equal('Maestro');
    });
    it('has a prefix of ' + prefix + ' and a length of 18', function(){
      detectNetwork(prefix + '94759273582739').should.equal('Maestro');
    });
    it('has a prefix of ' + prefix + ' and a length of 17', function(){
      detectNetwork(prefix + '3849293824346').should.equal('Maestro');
    });
    it('has a prefix of ' + prefix + ' and a length of 16', function(){
      detectNetwork(prefix + '384929384346').should.equal('Maestro');
    });
    it('has a prefix of ' + prefix + ' and a length of 15', function(){
      detectNetwork(prefix + '38493824346').should.equal('Maestro');
    });
    it('has a prefix of ' + prefix + ' and a length of 14', function(){
      detectNetwork(prefix + '3849293823').should.equal('Maestro');
    });
    it('has a prefix of ' + prefix + ' and a length of 13', function(){
      detectNetwork(prefix + '389293823').should.equal('Maestro');
    });
    it('has a prefix of ' + prefix + ' and a length of 12', function(){
      detectNetwork(prefix + '84938756').should.equal('Maestro');
    });
  })(prefix);

  var prefix = 5020;
  (function(prefix) {
    it('has a prefix of ' + prefix + ' and a length of 19', function(){
      detectNetwork(prefix + '748582638471634').should.equal('Maestro');
    });
    it('has a prefix of ' + prefix + ' and a length of 18', function(){
      detectNetwork(prefix + '94759273582739').should.equal('Maestro');
    });
    it('has a prefix of ' + prefix + ' and a length of 17', function(){
      detectNetwork(prefix + '3849293824346').should.equal('Maestro');
    });
    it('has a prefix of ' + prefix + ' and a length of 16', function(){
      detectNetwork(prefix + '384929384346').should.equal('Maestro');
    });
    it('has a prefix of ' + prefix + ' and a length of 15', function(){
      detectNetwork(prefix + '38493824346').should.equal('Maestro');
    });
    it('has a prefix of ' + prefix + ' and a length of 14', function(){
      detectNetwork(prefix + '3849293823').should.equal('Maestro');
    });
    it('has a prefix of ' + prefix + ' and a length of 13', function(){
      detectNetwork(prefix + '389293823').should.equal('Maestro');
    });
    it('has a prefix of ' + prefix + ' and a length of 12', function(){
      detectNetwork(prefix + '84938756').should.equal('Maestro');
    });
  })(prefix);

  var prefix = 5038;
  (function(prefix) {
    it('has a prefix of ' + prefix + ' and a length of 19', function(){
      detectNetwork(prefix + '748582638471634').should.equal('Maestro');
    });
    it('has a prefix of ' + prefix + ' and a length of 18', function(){
      detectNetwork(prefix + '94759273582739').should.equal('Maestro');
    });
    it('has a prefix of ' + prefix + ' and a length of 17', function(){
      detectNetwork(prefix + '3849293824346').should.equal('Maestro');
    });
    it('has a prefix of ' + prefix + ' and a length of 16', function(){
      detectNetwork(prefix + '384929384346').should.equal('Maestro');
    });
    it('has a prefix of ' + prefix + ' and a length of 15', function(){
      detectNetwork(prefix + '38493824346').should.equal('Maestro');
    });
    it('has a prefix of ' + prefix + ' and a length of 14', function(){
      detectNetwork(prefix + '3849293823').should.equal('Maestro');
    });
    it('has a prefix of ' + prefix + ' and a length of 13', function(){
      detectNetwork(prefix + '389293823').should.equal('Maestro');
    });
    it('has a prefix of ' + prefix + ' and a length of 12', function(){
      detectNetwork(prefix + '84938756').should.equal('Maestro');
    });
  })(prefix);

  var prefix = 6304;
  (function(prefix) {
    it('has a prefix of ' + prefix + ' and a length of 19', function(){
      detectNetwork(prefix + '748582638471634').should.equal('Maestro');
    });
    it('has a prefix of ' + prefix + ' and a length of 18', function(){
      detectNetwork(prefix + '94759273582739').should.equal('Maestro');
    });
    it('has a prefix of ' + prefix + ' and a length of 17', function(){
      detectNetwork(prefix + '3849293824346').should.equal('Maestro');
    });
    it('has a prefix of ' + prefix + ' and a length of 16', function(){
      detectNetwork(prefix + '384929384346').should.equal('Maestro');
    });
    it('has a prefix of ' + prefix + ' and a length of 15', function(){
      detectNetwork(prefix + '38493824346').should.equal('Maestro');
    });
    it('has a prefix of ' + prefix + ' and a length of 14', function(){
      detectNetwork(prefix + '3849293823').should.equal('Maestro');
    });
    it('has a prefix of ' + prefix + ' and a length of 13', function(){
      detectNetwork(prefix + '389293823').should.equal('Maestro');
    });
    it('has a prefix of ' + prefix + ' and a length of 12', function(){
      detectNetwork(prefix + '84938756').should.equal('Maestro');
    });
  })(prefix);


});


describe('China UnionPay', function() {
  var should = chai.should();

  for (var prefix = 622126; prefix <= 622925; prefix++) {
    (function(prefix) {
      it('has a prefix of ' + prefix + ' and a length of 16', function(){
        detectNetwork( prefix + '7548745782').should.equal('China UnionPay');
      });

      it('has a prefix of ' + prefix + ' and a length of 17', function(){
        detectNetwork( prefix + '97574456782').should.equal('China UnionPay');
      });

      it('has a prefix of ' + prefix + ' and a length of 18', function(){
        detectNetwork( prefix + '954874345562').should.equal('China UnionPay');
      });

      it('has a prefix of ' + prefix + ' and a length of 19', function(){
        detectNetwork( prefix + '0649497420857').should.equal('China UnionPay');
      });
    })(prefix)
  }


  for (var prefix = 624; prefix <= 626; prefix++) {
    (function(prefix) {
      it('has a prefix of ' + prefix + ' and a length of 16', function(){
        detectNetwork( prefix + '9754873456782').should.equal('China UnionPay');
      });

      it('has a prefix of ' + prefix + ' and a length of 17', function(){
        detectNetwork( prefix + '97548743456782').should.equal('China UnionPay');
      });

      it('has a prefix of ' + prefix + ' and a length of 18', function(){
        detectNetwork( prefix + '975487434556782').should.equal('China UnionPay');
      });

      it('has a prefix of ' + prefix + ' and a length of 19', function(){
        detectNetwork( prefix + '0649949742039857').should.equal('China UnionPay');
      });
    })(prefix)
  }


  for (var prefix = 6282; prefix <= 6288; prefix++) {
    (function(prefix) {
      it('has a prefix of ' + prefix + ' and a length of 16', function(){
        detectNetwork( prefix + '975487456782').should.equal('China UnionPay');
      });

      it('has a prefix of ' + prefix + ' and a length of 17', function(){
        detectNetwork( prefix + '9758743456782').should.equal('China UnionPay');
      });

      it('has a prefix of ' + prefix + ' and a length of 18', function(){
        detectNetwork( prefix + '97548743455682').should.equal('China UnionPay');
      });

      it('has a prefix of ' + prefix + ' and a length of 19', function(){
        detectNetwork( prefix + '064994974203857').should.equal('China UnionPay');
      });
    })(prefix)
  }

});

describe('Switch', function() {
  var should = chai.should();

  var prefix = 4903;
  (function(prefix) {
    it('has a prefix of ' + prefix + ' and a length of 19', function(){
      detectNetwork(prefix + '563987453768349').should.equal('Switch');
    });
    it('has a prefix of ' + prefix + ' and a length of 18', function(){
      detectNetwork(prefix + '94759273582739').should.equal('Switch');
    });
    it('has a prefix of ' + prefix + ' and a length of 16', function(){
      detectNetwork(prefix + '384929384346').should.equal('Switch');
    });
  })(prefix);

  var prefix = 4905;
  (function(prefix) {
    it('has a prefix of ' + prefix + ' and a length of 19', function(){
      detectNetwork(prefix + '563987453768349').should.equal('Switch');
    });
    it('has a prefix of ' + prefix + ' and a length of 18', function(){
      detectNetwork(prefix + '94759273582739').should.equal('Switch');
    });
    it('has a prefix of ' + prefix + ' and a length of 16', function(){
      detectNetwork(prefix + '384929384346').should.equal('Switch');
    });
  })(prefix);

  var prefix = 4911;
  (function(prefix) {
    it('has a prefix of ' + prefix + ' and a length of 19', function(){
      detectNetwork(prefix + '563987453768349').should.equal('Switch');
    });
    it('has a prefix of ' + prefix + ' and a length of 18', function(){
      detectNetwork(prefix + '94759273582739').should.equal('Switch');
    });
    it('has a prefix of ' + prefix + ' and a length of 16', function(){
      detectNetwork(prefix + '384929384346').should.equal('Switch');
    });
  })(prefix);

  var prefix = 4936;
  (function(prefix) {
    it('has a prefix of ' + prefix + ' and a length of 19', function(){
      detectNetwork(prefix + '563987453768349').should.equal('Switch');
    });
    it('has a prefix of ' + prefix + ' and a length of 18', function(){
      detectNetwork(prefix + '94759273582739').should.equal('Switch');
    });
    it('has a prefix of ' + prefix + ' and a length of 16', function(){
      detectNetwork(prefix + '384929384346').should.equal('Switch');
    });
  })(prefix);

  var prefix = 6333;
  (function(prefix) {
    it('has a prefix of ' + prefix + ' and a length of 19', function(){
      detectNetwork(prefix + '563987453768349').should.equal('Switch');
    });
    it('has a prefix of ' + prefix + ' and a length of 18', function(){
      detectNetwork(prefix + '94759273582739').should.equal('Switch');
    });
    it('has a prefix of ' + prefix + ' and a length of 16', function(){
      detectNetwork(prefix + '384929384346').should.equal('Switch');
    });
  })(prefix);

  var prefix = 6759;
  (function(prefix) {
    it('has a prefix of ' + prefix + ' and a length of 19', function(){
      detectNetwork(prefix + '563987453768349').should.equal('Switch');
    });
    it('has a prefix of ' + prefix + ' and a length of 18', function(){
      detectNetwork(prefix + '94759273582739').should.equal('Switch');
    });
    it('has a prefix of ' + prefix + ' and a length of 16', function(){
      detectNetwork(prefix + '384929384346').should.equal('Switch');
    });
  })(prefix);

  var prefix = 564182;
  (function(prefix) {
    it('has a prefix of ' + prefix + ' and a length of 19', function(){
      detectNetwork(prefix + '5639873768349').should.equal('Switch');
    });
    it('has a prefix of ' + prefix + ' and a length of 18', function(){
      detectNetwork(prefix + '947273582739').should.equal('Switch');
    });
    it('has a prefix of ' + prefix + ' and a length of 16', function(){
      detectNetwork(prefix + '3849294346').should.equal('Switch');
    });
  })(prefix);

  var prefix = 633110;
  (function(prefix) {
    it('has a prefix of ' + prefix + ' and a length of 19', function(){
      detectNetwork(prefix + '5639873768349').should.equal('Switch');
    });
    it('has a prefix of ' + prefix + ' and a length of 18', function(){
      detectNetwork(prefix + '947273582739').should.equal('Switch');
    });
    it('has a prefix of ' + prefix + ' and a length of 16', function(){
      detectNetwork(prefix + '3849294346').should.equal('Switch');
    });
  })(prefix);

});
