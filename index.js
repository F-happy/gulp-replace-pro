/**
 * Created by fuhuixiang on 16-6-12.
 */
'use strict';
const through = require('through2');

module.exports = (replaceObj, replaceStr)=> {
    let searchObj = {};
    if (typeof replaceObj === 'string') {
        searchObj[replaceObj] = replaceStr;
    } else {
        searchObj = replaceObj;
    }
    let keys     = Object.keys(searchObj),
        dataKeys = keys.map((v)=> {
            return new RegExp(v, "g");
        });

    return through.obj(function (file, enc, cb) {
        let src = file.contents.toString();

        keys.forEach((v, i)=> {
            src = src.replace(dataKeys[i], searchObj[v]);
        });

        file.contents = new Buffer(src);
        this.push(file);
        cb();
    });
};
