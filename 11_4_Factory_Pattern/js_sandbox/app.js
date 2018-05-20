// Way of creating an interface for creating objects but we can let subclasses define which classes to instantiate
// often used to manage, maintain, and manipulate collections of objects that are different but have common characteristics
// An example would be a membership website

function MemberFactory() {
  this.createMember = function(name, type) {
    let member;

    if(type === 'simple') {
      member = new SimpleMembership(name);
    } else if (type === 'standard') {
      member = new StandardMembership(name);
    } else if (type === 'super') {
      member = new SuperMembership(name);
    }

    member.type = type;
    // This will spit out the name, type and cost of membership
    member.define =  function() {
      console.log(`${this.name} (${this.type}): ${this.cost}`);
    }

    return member;
  }
}

const SimpleMembership = function(name) {
  this.name = name;
  this.cost = '$5';
}

const StandardMembership = function(name) {
  this.name = name;
  this.cost = '$15';
}

const SuperMembership = function(name) {
  this.name = name;
  this.cost = '$25';
}

const members = [];
const factory = new MemberFactory();
// Here we can add members
members.push(factory.createMember('John Doe', 'simple'));
members.push(factory.createMember('Chris Jackson', 'super'));
members.push(factory.createMember('Janice Williams', 'simple'));
members.push(factory.createMember('Tom Smith', 'standard'));

// console.log(members);

members.forEach(function(member) {
  member.define();
});
