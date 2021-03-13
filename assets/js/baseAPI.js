// 注意：每次调用 $.get() 或 $.post() 或 $.ajax() 的时候，
// 会先调用 ajaxPrefilter 这个函数
// 在这个函数中，可以拿到我们给Ajax提供的配置对象
// 1.开发环境服务器地址
let baseURL = 'http://api-breakingnews-web.itheima.net';
// 2.测试环境服务器地址
// let baseURL = 'http://api-breakingnews-web.itheima.net';
// 3.生产环境服务器地址
// let baseURL = 'http://api-breakingnews-web.itheima.net';
$.ajaxPrefilter(function(option) {
    option.url = baseURL + option.url;
    console.log(option.url);

})