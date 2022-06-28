import { IsNotEmpty } from "class-validator"

export class UpdateBlogDto {
  @IsNotEmpty()
  readonly slug: string

  @IsNotEmpty()
  readonly content: string

  @IsNotEmpty()
  readonly draft: boolean
}