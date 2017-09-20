define(['mui','zepto'],function(mui,$){
	mui.init();
	var page = $('.mui-title').html();
	mui('.mui-content')[0].innerHTML = page + '已经被模块化加载'
})