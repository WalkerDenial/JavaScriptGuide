function hide(e, reflow) { // 通过 JavaScript 操纵样式来隐藏元素 e
    if (reflow) { // 如果第二个参数是 true
        e.style.display = 'none'; // 隐藏这个元素，其所占的空间也随之消失
    } else { // 否则
        e.style.visibility = 'hidden'; // 将 e 隐藏，但是保留其所占的空间
    }
}

function highLight(e) { // 通过设置 CSS 类来高亮显示 e
    if (!e.className) e.className = 'hilite'; // 简单地定义或追加 HTML 类属性
    else e.className += 'hilite';
}