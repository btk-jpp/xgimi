/* 
gulp.task(taskname,callback):创建任务  taskname任务名称  callback执行的回调
gulp.src(url):设置引入文件的路径
gulp.dest():输出文件设置(如果不存在目录名，自动生成)
pipe():管道流(将任务链式连接起来)
gulp 任务名   -- 执行任务
*/

const gulp = require('gulp'); //引入gulp，生成一个gulp对象
const html = require('gulp-minify-html'); //引入html压缩插件  html函数方法
const css = require('gulp-clean-css'); //引入css压缩插件  css函数方法
const sass = require('gulp-sass'); //引入sass编译插件 
const connect = require("gulp-connect");
//sass
const sourcemaps = require('gulp-sourcemaps'); //引入生成.map文件模块
const plugins = require('gulp-load-plugins')(); //生成.map文件 返回的是一个函数体。需要再次执行。
const script = require('gulp-uglify'); //压缩js的插件


// //es6转es5的三个模块
// //gulp-babel@7   babel-core       babel-preset-es2015
const babel = require('gulp-babel'); //主要
const babelcore = require('babel-core');
const es2015 = require('babel-preset-es2015');


const imagemin = require('gulp-imagemin'); //图片压缩
const watch = require('gulp-watch'); //gulp监听

gulp.task("server", done => {
    connect.server({
      root: "dist",
      livereload: true
    });
    done();
  });

//2.复制文件
gulp.task('copyfile', done => {
     gulp.src('src/thirdplugins/*.js')
        .pipe(gulp.dest('dist/thirdplugins'));
    done();
});

gulp.task('copyfile1', done => {
     gulp.src('src/fonts/*.woff')
        .pipe(gulp.dest('dist/fonts'));
        done();
});

//3.压缩html文件 - 引入插件包
gulp.task('uglifyhtml', done => {
     gulp.src('src/*.html')
        .pipe(html()) //执行html插件包
        .pipe(gulp.dest('dist/'));
        done();
});

//4.压缩css文件 - 引入插件包
// gulp.task('uglifycss', () => {
//      gulp.src('src/css/*.css')
//         .pipe(css()) //执行css插件包
//         .pipe(gulp.dest('dist/css'));
// });

//5.sass编译成css - 引入插件包
gulp.task('compilesass', done => {
     gulp.src('src/sass/*.scss')
        .pipe(plugins.sourcemaps.init()) //初始化gulp-sourcemaps插件
        .pipe(plugins.sass({
            outputStyle: 'compressed' //压缩
        }))
        .pipe(plugins.sourcemaps.write('.')) //通过sourcemaps,生成.map文件
        .pipe(gulp.dest('dist/css/'));
        done();
});


//6.压缩js文件 - 引入插件包
gulp.task('uglifyjs', done => {
     gulp.src('src/script/*.js')
        .pipe(babel({ //先将es6转换成es5
            presets: ['es2015'] //es2015->es6  es2016->es7...
        }))
        .pipe(script()) //执行js压缩
        .pipe(gulp.dest('dist/script'));
        done();
});

//7.图片压缩 - jpg/gif/bmp/webp/ [png] - imagemin
gulp.task('uglifyimg', done => {
     gulp.src('src/img/*.{jpg,png,gif}')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'))
        done();
});

//8.监听
// 监听插件-gulp-watch()
// 参1:监听的目录，数组的形式
// 参2:通过gulp.parallel()并行监听任务名。
// 监听的任务必须先执行一次，再能进行监听。

// gulp.task('default', () => {
//     watch(['src/thirdplugins/*.js', 'src/*.html', 'src/sass/*.scss', 'src/script/*.js', 'src/img/*.{jpg,png,gif}'], gulp.parallel('copyfile', 'uglifyhtml', 'compilesass', 'uglifyjs', 'uglifyimg'));
// });

gulp.task("watch", done => {
    //实时监听scss和html文件的变化，让源文件和dist目录的文件自动保持一致
    gulp.watch("src/sass/*.scss", gulp.series("compilesass"));
    gulp.watch("src/script/*.js", gulp.series("uglifyjs"));
    gulp.watch("src/*.html", gulp.series("uglifyhtml"));
    done();
  });
gulp.task("default", gulp.parallel("server", "watch")); //建立默认任务，同时执行sever和watch两个任务