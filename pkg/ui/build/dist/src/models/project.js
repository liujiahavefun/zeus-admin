import { queryProjectNotice } from '@/services/api';
export default {
    namespace: 'project',
    state: {
        notice: [],
    },
    effects: {
        *fetchNotice(_, { call, put }) {
            const response = yield call(queryProjectNotice);
            yield put({
                type: 'saveNotice',
                payload: Array.isArray(response) ? response : [],
            });
        },
    },
    reducers: {
        saveNotice(state, action) {
            return Object.assign({}, state, { notice: action.payload });
        },
    },
};
//# sourceMappingURL=project.js.map