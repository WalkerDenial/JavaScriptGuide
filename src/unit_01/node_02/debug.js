// 在 document 中的一个指定的区域输出调试信息
// 如果 document 不存在这样一个区域，则创建一个
function debug(msg) {
    // 通过查看 HTML 元素 id 属性来查找文档的调试部分
    var log = document.getElementById('debuglog');

    // 如果这个元素不存在，则创建一个
    if (!log) {
        log = document
            .createElement('div');
        log.id = 'debuglog';
        log.innerHTML = '<h1>Debug Log</h1>';
        document.body.appendChild(log);
    }

    // 将消息包装在 <pre> 中，并添加至 log 中
    var pre = document.createElement('pre'); // 创建 <pre> 标签
    var text = document.createTextNode(msg); // 将 msg 包装在一个文本结点中
    pre.appendChild(text); // 将文本添加至 <pre>
    log.appendChild(pre); // 将 <pre> 添加至 log
}