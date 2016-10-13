/**
 * Created by fuhuixiang on 16-10-13.
 */
"use strict";
let task          = require('gulp'),
    replacePlugin = require('../index');

task.src(`${__dirname}/test.json`)
    .pipe(replacePlugin('testString1', 'testOver1'))
    .pipe(replacePlugin({
        testString2: 'testOver2',
        testString3: 'testOver3'
    }))
    .pipe(task.dest(`${__dirname}/dist`))
    .on('finish', ()=> {
        let distStr = require('./dist/test.json');
        if (distStr.test1 !== 'testOver1') {
            throw new Error('replace err');
        }
        if (distStr.test2 !== 'testOver2') {
            throw new Error('replace err');
        }
        if (distStr.test3 !== 'testOver3') {
            throw new Error('replace err');
        }
        console.log('replace successfully');
    });