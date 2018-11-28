let workAddress = "http://172.18.31.12:8888";
let homeAddress = "http://192.168.31.86:8888";

function getBackUrl(relativePath) {
    return homeAddress + relativePath;
}

function route(data) {
    if (data.code === 1001 || data.code === 1002) {
        window.location.href = "/html/login.html";
    }
}

function logout() {
    $.ajax({
        type: "GET",
        url: getBackUrl("/logout"),
        dataType: "json",
        contentType: 'application/json',
        xhrFields: {withCredentials: true},
        success: function (data) {
            console.log(data.code);
            if (data.code == 0) {
                layer.msg("退出成功");
                window.location.href = "/html/index.html";
            }
            route(data);
        },
        error: function (event) {
            layer.msg("系统异常");
        }
    });
}

// function b64DecodeUnicode(str) {
//     return decodeURIComponent(atob(str).split('').map(function (c) {
//         return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
//     }).join(''));
// }
//
// function b64EncodeUnicode(str) {
//     return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
//         return String.fromCharCode('0x' + p1);
//     }));
// }

(function (arr, options) {
    if (!arr || !arr.length) {
        return;
    }
    let index = 0;
    document.documentElement.addEventListener('click', function (event) {
        let x = event.pageX, y = event.pageY;
        let eleText = document.createElement('span');
        eleText.className = 'text-popup';
        this.appendChild(eleText);
        if (arr[index]) {
            eleText.innerHTML = arr[index];
        } else {
            index = 0;
            eleText.innerHTML = arr[0];
        }
        // 动画结束后删除自己
        eleText.addEventListener('animationend', function () {
            eleText.parentNode.removeChild(eleText);
        });
        // 位置
        eleText.style.left = (x - eleText.clientWidth / 2) + 'px';
        eleText.style.top = (y - eleText.clientHeight) + 'px';
        // index递增
        index++;
    });
})(['富强', '民主', '文明', '和谐', '自由', '平等', '公正', '法治', '爱国', '敬业', '诚信', '友善']);