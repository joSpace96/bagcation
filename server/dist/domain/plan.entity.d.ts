export declare class Plan {
    idx: number;
    user_idx: number;
    title: string;
    OD: boolean;
    period: string;
    theme: string;
    season: string;
    date: Date;
    views: string;
    likecount: number;
}
export declare class Days {
    idx: number;
    plan_idx: number;
    day: number;
}
export declare class Location {
    idx: number;
    days_idx: number;
    location: string;
}
export declare class local {
    idx: number;
    location_idx: number;
    day: number;
    lat: number;
    lng: number;
    localname: string;
    sequence: number;
}
