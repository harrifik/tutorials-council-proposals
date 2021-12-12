import { Entity, FunctionPropertyNames } from "@subql/types";
export declare class VoteHistory implements Entity {
    constructor(id: string);
    id: string;
    proposalHashId?: string;
    approvedVote: boolean;
    councillorId?: string;
    votedYes?: number;
    votedNo?: number;
    block?: number;
    save(): Promise<void>;
    static remove(id: string): Promise<void>;
    static get(id: string): Promise<VoteHistory | undefined>;
    static getByProposalHashId(proposalHashId: string): Promise<VoteHistory[] | undefined>;
    static getByCouncillorId(councillorId: string): Promise<VoteHistory[] | undefined>;
    static create(record: Partial<Omit<VoteHistory, FunctionPropertyNames<VoteHistory>>> & Entity): VoteHistory;
}
