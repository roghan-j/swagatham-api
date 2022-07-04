import { FamilyEntity } from "src/modules/donor/family.entity";

export interface FamilyOccasionInterface {
  donor: string,
  relation: string,
  family_member: string,
  mobile: string,
  donorMobie: string,
  dob: Date,
  anniversary: Date,
  occasion: string
}