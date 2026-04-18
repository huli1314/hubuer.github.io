// unlock.js - 平台访问记录与解锁

(function() {
    let path = window.location.pathname;
    let platform = null;
    
    if (path.includes('weibo')) platform = 'weibo';
    else if (path.includes('xiaohongshu')) platform = 'xiaohongshu';
    else if (path.includes('tieba')) platform = 'tieba';
    else if (path.includes('zhihu')) platform = 'zhihu';
    else if (path.includes('douban')) platform = 'douban';
    else if (path.includes('gongzhonghao')) platform = 'gongzhonghao';
    else if (path.includes('wechat')) platform = 'wechat';
    else if (path.includes('encrypted')) platform = 'encrypted';
    else if (path.includes('profile')) platform = 'profile';
    
    if (platform) {
        let visited = JSON.parse(localStorage.getItem('arg_visited_platforms') || '[]');
        if (!visited.includes(platform)) {
            visited.push(platform);
            localStorage.setItem('arg_visited_platforms', JSON.stringify(visited));
        }
    }
})();