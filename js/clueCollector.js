// clueCollector.js - 线索收集系统

window.ClueCollector = {
    // 已收集的线索代码片段
    collected: [],
    
    // 添加线索代码（玩家点击/查看关键内容时调用）
    add(codePiece) {
        if (!this.collected.includes(codePiece)) {
            this.collected.push(codePiece);
            localStorage.setItem('arg_collected_clues', JSON.stringify(this.collected));
            this.showToast('🔍 发现线索: ' + codePiece);
        }
    },
    
    // 获取当前收集的所有代码
    getCollected() {
        return this.collected;
    },
    
    // 获取拼接后的完整代码（按顺序）
    getFullCode() {
        return this.collected.join('');
    },
    
    // 加载保存的线索
    load() {
        let saved = localStorage.getItem('arg_collected_clues');
        if (saved) {
            try {
                this.collected = JSON.parse(saved);
            } catch(e) {}
        }
    },
    
    // 显示提示
    showToast(msg) {
        let toast = document.createElement('div');
        toast.innerText = msg;
        toast.style.cssText = 'position:fixed; bottom:80px; right:20px; background:#ff8200; color:#fff; padding:8px 16px; border-radius:8px; font-size:13px; z-index:10000; font-family:monospace; box-shadow:0 2px 8px rgba(0,0,0,0.2);';
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 2000);
    },
    
    // 重置（调试用）
    reset() {
        this.collected = [];
        localStorage.removeItem('arg_collected_clues');

    }
};

ClueCollector.load();