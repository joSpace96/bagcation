import { ApiProperty } from "@nestjs/swagger";

export class CreateReviewDto {
    @ApiProperty()
    user_idx: number;
    @ApiProperty()
    title: string;
    @ApiProperty()
    user_nick: string;
    @ApiProperty()
    content: string;
    @ApiProperty()
    images: string;

}
