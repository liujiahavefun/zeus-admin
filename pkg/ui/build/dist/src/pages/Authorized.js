import React from 'react';
import Redirect from 'umi/redirect';
import pathToRegexp from 'path-to-regexp';
import { connect } from 'dva';
import Authorized from '@/utils/Authorized';
import { getAuthority } from '@/utils/authority';
import Exception403 from '@/pages/Exception/403';
function AuthComponent({ children, location, routerData }) {
    const auth = getAuthority();
    const isLogin = auth && auth[0] !== 'guest';
    const getRouteAuthority = (path, routeData) => {
        let authorities;
        routeData.forEach(route => {
            // match prefix
            if (pathToRegexp(`${route.path}(.*)`).test(path)) {
                authorities = route.authority || authorities;
                // get children authority recursively
                if (route.routes) {
                    authorities = getRouteAuthority(path, route.routes) || authorities;
                }
            }
        });
        return authorities;
    };
    return (React.createElement(Authorized, { authority: getRouteAuthority(location.pathname, routerData), noMatch: isLogin ? React.createElement(Exception403, null) : React.createElement(Redirect, { to: "/user/login" }) }, children));
}
export default connect(({ menu: menuModel }) => ({
    routerData: menuModel.routerData,
}))(AuthComponent);
//# sourceMappingURL=Authorized.js.map