import { ApiProperty } from '@nestjs/swagger';

export class TravelNationDataDto {
    @ApiProperty()
    nation: string;
    @ApiProperty()
    city: string;
    @ApiProperty()
    lat: number;
    @ApiProperty()
    lng: number;
  }


  
export class PlanScheduleDataDto {
    @ApiProperty()
    city: string;
    @ApiProperty()
    datetime: string;
    @ApiProperty()
    time: string;
    @ApiProperty()
    content: string;
  }

export class CreatePlanDto {
  @ApiProperty()
  title: string;
  @ApiProperty()
  user_idx: number;
  @ApiProperty()
  theme: string;
  @ApiProperty()
  period: string;
  @ApiProperty()
  startdate: Date;
  @ApiProperty()
  views: number;
  @ApiProperty()
  likecount: number;
  @ApiProperty()
  save: boolean;
  @ApiProperty({ type: [TravelNationDataDto] })
  travelNations: TravelNationDataDto[];
  @ApiProperty({ type: [PlanScheduleDataDto] })
  planSchedules: PlanScheduleDataDto[];
}

export class LikeDataDto {
  @ApiProperty()
  userIdx: number;
  @ApiProperty()
  planIdx: number;
}
