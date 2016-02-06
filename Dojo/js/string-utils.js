define(function () {
    return {
         paren: function (s) {
             return "(" + s + ")";
         },

         q: function (s) {
             return "'" + s + "'";
         },

         dq: function (s) {
             return '"' + s + '"';
         }
    };
});
