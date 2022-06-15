export declare class AdminEntity {
    id: number;
    username: string;
    phone: string;
    password: string;
    createdBy: string;
    hashPassword(): Promise<void>;
}
