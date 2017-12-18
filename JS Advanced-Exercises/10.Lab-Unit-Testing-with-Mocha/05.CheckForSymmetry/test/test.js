 let expect = require('chai').expect;
 let isSymmetric = require('../check-for-symmetry.js').isSymmetric;

 describe('isSymmetric(arr)', function() {
     it('should return true for [1,2,3,3,3,2,1]', function() {
         let symmetric = isSymmetric([1, 2, 3, 3, 3, 2, 1]);
         expect(symmetric).to.be.equal(true);
     });
     it('should return true for [1,2,3,3,2,1]', function() {
         let symmetric = isSymmetric([1, 2, 3, 3, 2, 1]);
         expect(symmetric).to.be.equal(true);
     });
     it('should return false for [1,2,3,3,4,2,1]', function() {
         let symmetric = isSymmetric([1, 2, 3, 3, 4, 2, 1]);
         expect(symmetric).to.be.equal(false);
     });
     it('should return true for [-1,2,3,3,3,2,-1]', function() {
         let symmetric = isSymmetric([-1, 2, 3, 3, 3, 2, -1]);
         expect(symmetric).to.be.equal(true);
     });

     it('should return false for [-1,2,3,2,1]', function() {
         let symmetric = isSymmetric([-1, 2, 3, 2, 1]);
         expect(symmetric).to.be.equal(false);
     });

 })