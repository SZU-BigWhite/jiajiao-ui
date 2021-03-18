function checkPhone(rule, value, callback) {
    //手机号表达式
    const regPhone=/^1[3456789]\d{9}$/

    if (value === '') {
        callback(new Error('手机号不能为空'));
    }
    else if(regPhone.test(value)){
        callback();
    }
    else{
        callback(new Error('请输入合法的手机号'));
    }
}

export {checkPhone}