describe('Address Book', function() {
    var addressBook;
    var thisContact;

    beforeEach(function(){
        addressBook = new AddressBook();
        thisContact = new Contact();
    });


    it('should be able to add a contact', function (){
        addressBook.addContact(thisContact);
        expect(addressBook.getContact(0)).toBe(thisContact);
    });

    it ('Should be able to delete a contact', function(){
        addressBook.addContact(thisContact);
        addressBook.deleteContact(0);

        expect(addressBook.getContact(0)).not.toBeDefined();
    })
});

describe('Async Address Book', function(){
    var addressBook = new AddressBook();
    beforeEach(function(done){
        addressBook.getInitialContacts(function(){
            done();
       });
    });
    it('should grab initial contacts', function(done){
        expect(addressBook.initialComplete).toBe(true);
        done();
    });
});
describe("A spy", function() {
    var foo, bar = null;
  
    beforeEach(function() {
      foo = {
        setBar: function(value) {
          bar = value;
        }
      };
  
      spyOn(foo, 'setBar');
  
      foo.setBar(123);
      foo.setBar(456, 'another param');
    });  
    it("tracks that the spy was called", function() {
      expect(foo.setBar).toHaveBeenCalled();
    });
  
    xit("tracks that the spy was called x times", function() {
      expect(foo.setBar).toHaveBeenCalledTimes(2);
    });
  
    it("tracks all the arguments of its calls", function() {
      expect(foo.setBar).toHaveBeenCalledWith(123);
      expect(foo.setBar).toHaveBeenCalledWith(456, 'another param');
    });
  
    it("stops all execution on a function", function() {
      expect(bar).toBeNull();
    }); 
    it("tracks if it was called at all", function() {
      foo.setBar();
  
      expect(foo.setBar.calls.any()).toEqual(true);
    });
  });
  describe('very important information', function (){
    var addressBook;
    var jQuery;
    var path;

    beforeEach(function(){
        addressBook = new AddressBook();
        thisContact = new Contact();

        jQuery = {
            ajax: function(value){
             path = value;
            }
        }
    });

      it ("should be sent", function (){
          spyOn(jQuery, "ajax");

          addressBook.send({"I am ": "the walrus"});

          expect(jQuery.ajax).toHaveBeenCalledWith({
              method: "POST",
              url: "/important_information",
              data: {"I am ": "the walrus"}
          });
      });
  });
