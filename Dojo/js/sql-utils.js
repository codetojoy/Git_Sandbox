define(function () {
    return {
         f: function (s) {
         }, 

function whereClause(field, operator, value) {
    return '"' + q(field) + ' ' + operator + ' ' + q(value) + '"'; 
}

function clause(field, operator, value) {
    return q(field) + ' ' + operator + ' ' + q(value); 
}

function buildTextWhereClause(qualifiers) {
    var whereClause = "";
    
    if (qualifiers[TEXT_QUALIFIER]) {
        whereClause = clause('Name','LIKE','%' + qualifiers[TEXT_QUALIFIER].trim() + '%'); 
    };

    return whereClause;
}

function buildExistsWhereClause(qualifiers) {
    var whereClause = "";
    var values = "";

    if (qualifiers[EXISTS_QUALIFIER]) {
        values = EXISTS_ID;
    } 
    if (qualifiers[DOES_NOT_EXIST_QUALIFIER]) {
        values = addOperatorAsNeeded(values, COMMA, DOES_NOT_EXIST_ID);
    } 

    if (values) {
        whereClause = q('Exists') + IN + paren(values);
    }

    return whereClause;
}

function addOperatorAsNeeded(a, operator, b) {
    var result = b;

    if (a != "") {
        result = a + operator + b;
    }

    return result;
}

function buildTypeWhereClause(qualifiers) {
    var whereClause = "";
    var values = "";
 
    if (qualifiers[BUSINESS_QUALIFIER]) {
        values = BUSINESS_ID;
    } 
    if (qualifiers[NATURE_QUALIFIER]) {
        values = addOperatorAsNeeded(values, COMMA, NATURE_ID);
    } 
    if (qualifiers[MONUMENT_QUALIFIER]) {
        values = addOperatorAsNeeded(values, COMMA, MONUMENT_ID);
    } 
    if (qualifiers[ROAD_QUALIFIER]) {
        values = addOperatorAsNeeded(values, COMMA, ROAD_ID);
    } 
    if (qualifiers[STRUCTURE_QUALIFIER]) {
        values = addOperatorAsNeeded(values, COMMA, STRUCTURE_ID);
    } 
    if (qualifiers[WORSHIP_QUALIFIER]) {
        values = addOperatorAsNeeded(values, COMMA, WORSHIP_ID);
    }
    
    if (values) {
        whereClause = q('Type') + IN + paren(values);
    }

    return whereClause;
}

function buildWhereClause(qualifiers) {
    var existsWhereClause = buildExistsWhereClause(qualifiers);
    var typeWhereClause = buildTypeWhereClause(qualifiers);
    var textWhereClause = buildTextWhereClause(qualifiers);

    var whereClauseStr = addOperatorAsNeeded(existsWhereClause, AND, typeWhereClause);
    whereClauseStr = addOperatorAsNeeded(textWhereClause, AND, whereClauseStr);

    whereClauseStr = dq(whereClauseStr);

    return whereClauseStr;
}


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
