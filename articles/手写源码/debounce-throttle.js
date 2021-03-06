/**
 * js 函数的节流与防抖
 * 函数防抖：在事件被触发 n 秒后再执行回调，如果在这 n 秒内事件又被触发，则重新计时。
 * 函数节流：规定一个单位时间，在这个单位时间内，只能有一次触发事件的回调函数执行，如果在同一单位时间内某事件被触发多次，只有一次能生效
 */
// 函数防抖的实现
function debounce (fn, wait) {
  var timer = null;

  return function () {
    var context = this
    var args = arguments

    // 如果此时存在定时器的话，则取消之前的定时器重新记时
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }

    // 设置定时器，使事件间隔指定事件后执行
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, wait);
  };
}

// 函数节流的实现;
function throttle (fn, delay) {
  var preTime = Date.now();

  return function () {
    var context = this,
      args = arguments,
      nowTime = Date.now();

    // 如果两次时间间隔超过了指定时间，则执行函数。
    if (nowTime - preTime >= delay) {
      preTime = Date.now();
      return fn.apply(context, args);
    }
  };
}