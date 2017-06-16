//封装一个jq方法，实例化表单验证
$.fn.ajaxForm = function (option) {
    var options = { promptPosition: 'inline', addPromptClass: 'formError-white', maxErrorsPerField: 1, showOneMessage: false, scroll: false, };
    this.validationEngine($.extend(options, option));
}