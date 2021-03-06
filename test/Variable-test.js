import { Variable, Term } from '../src/';

describe('Variable', function () {
  describe('The Variable module', function () {
    it('should be a function', function () {
      Variable.should.be.a('function');
    });

    it('should be a Variable constructor', function () {
      new Variable().should.be.an.instanceof(Variable);
    });

    it('should be a Term constructor', function () {
      new Variable().should.be.an.instanceof(Term);
    });
  });

  describe('A Variable instance created from a name', function () {
    var variable;
    before(function () { variable = new Variable('v1'); });

    it('should be a Variable', function () {
      variable.should.be.an.instanceof(Variable);
    });

    it('should be a Term', function () {
      variable.should.be.an.instanceof(Term);
    });

    it('should have term type "Variable"', function () {
      variable.termType.should.equal('Variable');
    });

    it('should have the name as value', function () {
      variable.should.have.property('value', 'v1');
    });

    it('should have "?name" as id value', function () {
      variable.should.have.property('id', '?v1');
    });

    it('should equal a Variable instance with the same name', function () {
      variable.equals(new Variable('v1')).should.be.true;
    });

    it('should equal an object with the same term type and value', function () {
      variable.equals({
        termType: 'Variable',
        value: 'v1',
      }).should.be.true;
    });

    it('should not equal a falsy object', function () {
      variable.equals(null).should.be.false;
    });

    it('should not equal a Variable instance with another name', function () {
      variable.equals(new Variable('v2')).should.be.false;
    });

    it('should not equal an object with the same term type but a different value', function () {
      variable.equals({
        termType: 'Variable',
        value: 'v2',
      }).should.be.false;
    });

    it('should not equal an object with a different term type but the same value', function () {
      variable.equals({
        termType: 'NamedNode',
        value: 'v1',
      }).should.be.false;
    });

    it('should provide a JSON representation', function () {
      variable.toJSON().should.deep.equal({
        termType: 'Variable',
        value: 'v1',
      });
    });
  });
});
