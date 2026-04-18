// meta.js - 轻微meta行为

window.addEventListener('DOMContentLoaded', function() {
    let scrollTriggered = false;
    
    window.addEventListener('scroll', function() {
        if (!scrollTriggered && (window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100) {
            scrollTriggered = true;
            let msg = document.createElement('div');
            msg.innerText = '你翻到了底部。你记得自己是怎么来的吗？';
            msg.style.cssText = 'position:fixed; bottom:20px; right:20px; background:#333; color:#fff; padding:8px 16px; border-radius:8px; font-size:12px; z-index:9999; opacity:0.8; font-family:monospace;';
            document.body.appendChild(msg);
            setTimeout(function() { msg.remove(); }, 4000);
        }
    });
});