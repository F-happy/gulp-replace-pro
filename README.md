# gulp-replace-pro
[![Build Status](https://travis-ci.org/F-happy/gulp-replace-pro.svg?branch=master)](https://travis-ci.org/F-happy/gulp-replace-pro)
[![npm](https://img.shields.io/npm/v/gulp-replace-pro.svg?style=flat)](https://www.npmjs.com/package/gulp-replace-pro)
[![npm](https://img.shields.io/npm/l/gulp-replace-pro.svg?style=flat)](https://www.npmjs.com/package/gulp-replace-pro)
> 这是一个加强版的 gulp-replace 插件

### 安装：
```
npm install --save-dev gulp-replace-pro
```
接下来就可以编辑你的 gulpfile 文件了。

### 传入字符串
```javascript
var replace = require('gulp-replace-pro');

gulp.task('templates', function(){
  gulp.src(['file.txt'])
    .pipe(replace('bar', 'foo'))
    .pipe(gulp.dest('build/file.txt'));
});
```

### 传入对象
```javascript
var replace = require('gulp-replace-pro');

gulp.task('templates', function(){
  gulp.src(['file.txt'])
    .pipe(replace({
    	'bar': 'foo',
    	'foo': 'bar'
    }))
    .pipe(gulp.dest('build/file.txt'));
});
```

## API
> gulp-replace-pro 可以接受一个字符串或者正则表达式又或者是一个字符串对象。

### replace(string, replaceStr)

* string | regex

Type：string

这是需要被匹配的字符串或者是一个正则表达式

* replaceStr

Type：string

这是替换的字符串

### replace({string, replaceStr})

* object

Type：object

这是传入的一个对象，在对象中可以通过 key/value 的形式传入需要替换的内容。