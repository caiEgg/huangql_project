import Vue from 'vue'
import VeeValidate, { Validator } from 'vee-validate'
import zh from 'vee-validate/dist/locale/zh_CN' // 引入中文文件
Validator.addLocale(zh)
const config = {
    locale: 'zh_CN',
    fieldsBagName: 'fieldBags'
}
Vue.use(VeeValidate, config)

// 自定义validate
const dictionary = {
    zh_CN: {
        messages: {
            required: (field) => '请' + field,
            number: (field) => field + '必须为数值',
            confirmed:(field) => field + '',
        },
        attributes: {
            userName: '输入用户昵称',
            mobile: '输入手机号码',
            authCode: '输入您收到的验证码（6位）',
            loginPwd: '输入登录密码（6~18位',
            isSee: '阅读用户协议，并同意',
            npwdLog: '输入新的登录密码',
            qrwdLog: '必须与密码相同'
        }
    }
}
Validator.updateDictionary(dictionary)




// 3.用户昵称
Validator.extend('name', {
    messages: {
        zh_CN: field => '用户昵称不允许特殊符号'
    },
    validate: value => {
        return /^[\u4e00-\u9fa5A-Za-z0-9]*$/.test(value)
    }
})

// 4.用户昵称
Validator.extend('phone', {
    messages: {
        zh_CN: field => '手机号格式不正确'
    },
    validate: value => {
        return /^1[2-9]\d{9}$/.test(value)
    }
})


// 6.验证码
Validator.extend('code', {
    messages: {
        zh_CN: field => '验证码格式不正确'
    },
    validate: value => {
        return /^\d{6}$/.test(value)
    }
})

// 6.登录密码
Validator.extend('logpwd', {
    messages: {
        zh_CN: field => '登录密码格式不正确'
    },
    validate: value => {
        return /^\S{6,18}$/.test(value)
    }
})



// 9.用户协议
Validator.extend('see', {
    messages: {
        zh_CN: field => '请阅读用户协议，并同意'
    },
    validate: value => {
        return true
    }
})

// 10.忘记密码，新的登录密码
Validator.extend('npwd', {
    messages: {
        zh_CN: field => '登录密码格式不正确[6~18位]'
    },
    validate: value => {
        return /^\S{6,18}$/.test(value)
    }
})

