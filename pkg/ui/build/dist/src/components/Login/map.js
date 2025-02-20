import React from 'react';
import { Icon } from 'antd';
import styles from './index.less';
export default {
    UserName: {
        props: {
            size: 'large',
            id: 'userName',
            prefix: React.createElement(Icon, { type: "user", className: styles.prefixIcon }),
            placeholder: 'admin',
        },
        rules: [
            {
                required: true,
                message: 'Please enter username!',
            },
        ],
    },
    Password: {
        props: {
            size: 'large',
            prefix: React.createElement(Icon, { type: "lock", className: styles.prefixIcon }),
            type: 'password',
            id: 'password',
            placeholder: '888888',
        },
        rules: [
            {
                required: true,
                message: 'Please enter password!',
            },
        ],
    },
    Mobile: {
        props: {
            size: 'large',
            prefix: React.createElement(Icon, { type: "mobile", className: styles.prefixIcon }),
            placeholder: 'mobile number',
        },
        rules: [
            {
                required: true,
                message: 'Please enter mobile number!',
            },
            {
                pattern: /^1\d{10}$/,
                message: 'Wrong mobile number format!',
            },
        ],
    },
    Captcha: {
        props: {
            size: 'large',
            prefix: React.createElement(Icon, { type: "mail", className: styles.prefixIcon }),
            placeholder: 'captcha',
        },
        rules: [
            {
                required: true,
                message: 'Please enter Captcha!',
            },
        ],
    },
};
//# sourceMappingURL=map.js.map