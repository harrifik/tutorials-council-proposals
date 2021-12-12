"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VoteHistory = void 0;
const tslib_1 = require("tslib");
const assert_1 = (0, tslib_1.__importDefault)(require("assert"));
class VoteHistory {
    constructor(id) {
        this.id = id;
    }
    async save() {
        let id = this.id;
        (0, assert_1.default)(id !== null, "Cannot save VoteHistory entity without an ID");
        await store.set('VoteHistory', id.toString(), this);
    }
    static async remove(id) {
        (0, assert_1.default)(id !== null, "Cannot remove VoteHistory entity without an ID");
        await store.remove('VoteHistory', id.toString());
    }
    static async get(id) {
        (0, assert_1.default)((id !== null && id !== undefined), "Cannot get VoteHistory entity without an ID");
        const record = await store.get('VoteHistory', id.toString());
        if (record) {
            return VoteHistory.create(record);
        }
        else {
            return;
        }
    }
    static async getByProposalHashId(proposalHashId) {
        const records = await store.getByField('VoteHistory', 'proposalHashId', proposalHashId);
        return records.map(record => VoteHistory.create(record));
    }
    static async getByCouncillorId(councillorId) {
        const records = await store.getByField('VoteHistory', 'councillorId', councillorId);
        return records.map(record => VoteHistory.create(record));
    }
    static create(record) {
        (0, assert_1.default)(typeof record.id === 'string', "id must be provided");
        let entity = new VoteHistory(record.id);
        Object.assign(entity, record);
        return entity;
    }
}
exports.VoteHistory = VoteHistory;
