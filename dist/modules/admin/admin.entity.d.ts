export declare class AdminEntity {
    id: number;
    username: string;
    phone: string;
    password: string;
    hashPassword(): Promise<void>;
}
