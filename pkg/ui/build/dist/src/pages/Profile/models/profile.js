import { queryBasicProfile, queryAdvancedProfile } from '@/services/api';
export default {
    namespace: 'profile',
    state: {
        basicGoods: [],
        advancedOperation1: [],
        advancedOperation2: [],
        advancedOperation3: [],
    },
    effects: {
        *fetchBasic({ payload }, { call, put }) {
            const response = yield call(queryBasicProfile, payload);
            yield put({
                type: 'show',
                payload: response,
            });
        },
        *fetchAdvanced(_, { call, put }) {
            const response = yield call(queryAdvancedProfile);
            yield put({
                type: 'show',
                payload: response,
            });
        },
    },
    reducers: {
        show(state, { payload }) {
            return Object.assign({}, state, payload);
        },
    },
};
//# sourceMappingURL=profile.js.map