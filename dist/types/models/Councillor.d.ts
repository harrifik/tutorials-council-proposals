import { Entity, FunctionPropertyNames } from "@subql/types";
export declare class Councillor implements Entity {
    constructor(id: string);
    id: string;
    numberOfVotes?: number;
    save(): Promise<void>;
    static remove(id: string): Promise<void>;
    static get(id: string): Promise<Councillor | undefined>;
    static create(record: Partial<Omit<Councillor, FunctionPropertyNames<Councillor>>> & Entity): Councillor;
}
