require.config({
//	waitSeconds: 10, // 设置超时
	paths:{
		zepto:'plugin/zepto.min',
		mui:'plugin/mui.min',
		index:'template/index',
		a:'template/a',
		b:'template/b',
		c:'template/c',
	},
	shim:{
		// 加载非AMD规范js文件
		zepto: {
			exports: '$'
		},
		mui: {
			exports: 'mui'			
		},
	}
});

//加载相对应的文件夹的路劲
var path=document.getElementById('requirePath').dataset.path;
console.log(path);
require([path]);	