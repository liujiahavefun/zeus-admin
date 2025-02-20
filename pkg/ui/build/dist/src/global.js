var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import React from 'react';
import { notification, Button, message } from 'antd';
import { formatMessage } from 'umi-plugin-react/locale';
import defaultSettings from './defaultSettings';
const { pwa } = defaultSettings;
// if pwa is true
if (pwa) {
    // Notify user if offline now
    window.addEventListener('sw.offline', () => {
        message.warning(formatMessage({ id: 'app.pwa.offline' }));
    });
    // Pop up a prompt on the page asking the user if they want to use the latest version
    window.addEventListener('sw.updated', e => {
        const reloadSW = () => __awaiter(this, void 0, void 0, function* () {
            // Check if there is sw whose state is waiting in ServiceWorkerRegistration
            // https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration
            const worker = e.detail && e.detail.waiting;
            if (!worker) {
                return Promise.resolve();
            }
            // Send skip-waiting event to waiting SW with MessageChannel
            yield new Promise((resolve, reject) => {
                const channel = new MessageChannel();
                channel.port1.onmessage = event => {
                    if (event.data.error) {
                        reject(event.data.error);
                    }
                    else {
                        resolve(event.data);
                    }
                };
                worker.postMessage({ type: 'skip-waiting' }, [channel.port2]);
            });
            // Refresh current page to use the updated HTML and other assets after SW has skiped waiting
            window.location.reload(true);
            return true;
        });
        const key = `open${Date.now()}`;
        const btn = (React.createElement(Button, { type: "primary", onClick: () => {
                notification.close(key);
                reloadSW();
            } }, formatMessage({ id: 'app.pwa.serviceworker.updated.ok' })));
        notification.open({
            message: formatMessage({ id: 'app.pwa.serviceworker.updated' }),
            description: formatMessage({ id: 'app.pwa.serviceworker.updated.hint' }),
            btn,
            key,
            onClose: () => __awaiter(this, void 0, void 0, function* () { }),
        });
    });
}
else if ('serviceWorker' in navigator) {
    // eslint-disable-next-line compat/compat
    navigator.serviceWorker.ready.then(registration => {
        registration.unregister();
    });
}
//# sourceMappingURL=global.js.map