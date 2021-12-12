import { Entity, FunctionPropertyNames } from "@subql/types";
export declare class Proposal implements Entity {
    constructor(id: string);
    id: string;
    index: string;
    account?: string;
    hash?: string;
    voteThreshold?: string;
    block?: bigint;
    save(): Promise<void>;
    static remove(id: string): Promise<void>;
    static get(id: string): Promise<Proposal | undefined>;
    static create(record: Partial<Omit<Proposal, FunctionPropertyNames<Proposal>>> & Entity): Proposal;
}
