export declare class Plan {
    idx: number;
    user_idx: number;
    title: string;
    theme: string;
    period: string;
    startdate: Date;
    views: number;
    likecount: number;
    save: boolean;
    travelNations: Travel_Nation[];
    planSchedules: Plan_Schedule[];
}
export declare class Travel_Nation {
    idx: number;
    plan: Plan;
    nation: string;
    city: string;
    lat: number;
    lng: number;
}
export declare class Plan_Schedule {
    idx: number;
    plan: Plan;
    city: string;
    datetime: string;
    time: string;
    content: string;
}
