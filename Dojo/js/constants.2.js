define(['dojo/_base/declare',
    'js/string-utils'], function(declare, stringUtils){
    return declare(null, {
        _utils: stringUtils;

        EXISTS_ID:  _utils.q('Y'),
        DOES_NOT_EXIST_ID:  _utils.q('N'),
        BUSINESS_ID:  _utils.q('001_B'),
        STRUCTURE_ID:  _utils.q('002_S'),
        WORSHIP_ID:  _utils.q('003_W'),
        NATURE_ID:  _utils.q('004_N'),
        MONUMENT_ID:  _utils.q('005_M'),
        ROAD_ID:  _utils.q('006_R'),

        AND:  " AND ",
        OR:  " OR ",
        IN:  " IN ",
        COMMA:  ",",

        NATURE_QUALIFIER:  "Nature",
        MONUMENT_QUALIFIER:  "Monument",
        ROAD_QUALIFIER:  "Road",
        STRUCTURE_QUALIFIER:  "Structure",
        WORSHIP_QUALIFIER:  "Worship",
        EXISTS_QUALIFIER:  "Exists",
        DOES_NOT_EXIST_QUALIFIER:  "Does Not Exist",
        TEXT_QUALIFIER:  "text",
    });
});
