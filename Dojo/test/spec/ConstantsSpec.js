
define(['js/constants'], function (c) {
    describe("c", function () {

        describe("test", function () {
            it("should be able to use a constant", function () {
                var result = c.AND;

                expect(result).toBe(" AND ");
            });
        });

    });
});

/*
require([
    "js/string-utils"
], 


});

*/
