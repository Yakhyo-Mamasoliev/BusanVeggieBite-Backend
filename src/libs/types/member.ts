import { ObjectId } from "mongoose";
import { MemberStatus, MemberType } from "./../enums/member.enum";

export interface Member {
  _id: ObjectId;
  memberType: MemberType;
  MemberStatus: MemberStatus;
  memberNick: string;
  memberPhone: string;
  memberPassword?: string; // ? (cos we hide the password)
  memberAddress?: string;
  memberDesc?: string;
  memberImage?: string;
  memberPoints: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface MemberInput {
  memberType?: MemberType;
  MemberStatus?: MemberStatus;
  memberNick: string;
  memberPhone: string;
  memberPassword: string;
  memberAddress?: string;
  memberDesc?: string;
  memberImage?: string;
  memberPoints?: number;
}
