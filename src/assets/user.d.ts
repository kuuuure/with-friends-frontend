/**
 * 用户类别
 */
export type userType = {
    id?: number;
    username?: string;
    avatarUrl?: string;
    userAccount?: string;
    gender?:number;
    email?: string;
    phone?: string;
    userRole?: number;
    userStatus?: number;
    tags: string[];
    profile?:string;
    createTime:Date;
};