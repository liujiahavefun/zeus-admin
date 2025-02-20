import React from 'react';
import { formatMessage } from 'umi-plugin-react/locale';
import Link from 'umi/link';
import Exception from '@/components/Exception';
const Exception500 = () => (React.createElement(Exception, { type: "500", desc: formatMessage({ id: 'app.exception.description.500' }), linkElement: Link, backText: formatMessage({ id: 'app.exception.back' }) }));
export default Exception500;
//# sourceMappingURL=500.js.map