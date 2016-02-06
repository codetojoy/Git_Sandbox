define(['js/string-utils'], function (stringUtils) {
    describe("stringUtils", function () {

        describe("paren", function () {
            it("should be able to wrap parens", function () {
                var result = stringUtils.paren("abc");

                expect(result).toBe("(abc)");
            });
        });

        describe("q", function () {
            it("should be able to single-quote", function () {
                var result = stringUtils.q("abc");

                expect(result).toBe("'abc'");
            });
        });

        describe("dq", function () {
            it("should be able to double-quote", function () {
                var result = stringUtils.dq("abc");

                expect(result).toBe("\"abc\"");
            });
        });
    });
});
