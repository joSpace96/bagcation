export declare class TravelNationDataDto {
    nation: string;
    city: string;
    lat: number;
    lng: number;
}
export declare class PlanScheduleDataDto {
    city: string;
    datetime: string;
    time: string;
    content: string;
}
export declare class CreatePlanDto {
    title: string;
    user_idx: number;
    theme: string;
    period: string;
    startdate: Date;
    views: number;
    likecount: number;
    save: boolean;
    travelNations: TravelNationDataDto[];
    planSchedules: PlanScheduleDataDto[];
}
