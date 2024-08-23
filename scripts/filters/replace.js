hexo.extend.filter.register('after_render:html', function(data) {

    if (hexo.theme.config.replace) {
        hexo.theme.config.replace.forEach(e => {
            let s = e.split(" => ")
            let a = s[0]
            let b = s[1]
            data = data.replace(new RegExp(a,"g"), b);
        });
    }
    data = data.replace(new RegExp('https://unpkg.com',"g"), 'https://npm.elemecdn.com');
    return data;
},999999999999);
