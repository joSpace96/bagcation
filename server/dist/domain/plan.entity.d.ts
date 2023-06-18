export declare class Plan {
    idx: number;
    title: string;
    period: string;
    theme: string;
    startdate: Date;
    days: Days[];
    views: string;
    likecount: number;
    save: boolean;
}
export declare class Days {
    idx: number;
    plan: Plan;
    locations: Location[];
    day: number;
}
export declare class Location {
    idx: number;
    day: Days;
    locals: Local[];
    location: string;
}
export declare class Local {
    idx: number;
    location: Location;
    day: number;
    lat: number;
    lng: number;
    localname: string;
    sequence: number;
}
