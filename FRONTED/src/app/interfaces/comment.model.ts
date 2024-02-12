import { User } from "./user.model";

export interface Comment{
    id: number;
    rating: number;
    opinion: string;
    user: User;
}