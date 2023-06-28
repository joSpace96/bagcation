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
    @ApiProperty()
    likecount: number;

}
export class LikeDataDto {
    @ApiProperty()
    user_id: number;
    @ApiProperty()
    review_id: number;
  }

  export class CommentDataDto {
    @ApiProperty()
    user_id: number;
    @ApiProperty()
    review_id: number;
    @ApiProperty()
    comment: string;
  }