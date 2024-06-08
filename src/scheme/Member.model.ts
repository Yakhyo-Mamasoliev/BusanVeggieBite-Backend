import mongoose, { Schema } from "mongoose";
import { MemberType, MemberStatus } from "../libs/enums/member.enum";

// Schema first & Code first (two ways of using schemas)

const memberSchema = new Schema(
  {
    memberType: {
      type: String,
      enum: MemberType,
      default: MemberType.USER,
    },

    memberStatus: {
      type: String,
      enum: MemberStatus,
      default: MemberStatus.ACTIVE,
    },

    memberNick: {
      type: String,
      index: { unique: true, sparse: true }, // index-nickname should be unique
    },

    memberPhone: {
      type: String,
      index: { unique: true, sparse: true },
      required: true, // have to insert number
    },

    memberPassword: {
      type: String,
      select: false, // by default no autofill
      required: true,
    },

    memberAddress: {
      type: String,
    },

    memberDesc: {
      type: String,
    },

    memberImage: {
      type: String,
    },

    memberPoints: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true } // updatedAt, createdAt
);

// creating schema model
export default mongoose.model("Member", memberSchema);
