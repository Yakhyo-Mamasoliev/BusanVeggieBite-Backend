import MemberModel from "../schema/Member.model";
import { Member, MemberInput } from "../libs/types/member";
import Errors, { HttpCode, Message } from "../libs/Errors";
import { MemberType } from "../libs/enums/member.enum";

class MemberService {
  private readonly memberModel;

  constructor() {
    this.memberModel = MemberModel; // memberModel is class, exception for lowercase names
    // Import Member model from models folder
  } // Constructor method

  public async processSignup(input: MemberInput): Promise<Member> {
    const exist = await this.memberModel
      .findOne({ memberType: MemberType.RESTAURANT })
      .exec(); // exec() is chain query method, 
    console.log("exist: ", exist);
    if (exist) throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
    try {
      const result = await this.memberModel.create(input);
      result.memberPassword = "";
      // just for testing if memberSchemaModel is class
      // const tempResult = new this.memberModel(input);
      // const result = await tempResult.save();

      // if you need string you can write string not void
      // Promise is used when method is asynchronous
      return result;
    } catch (err) {
      throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
    }
  }
}

export default MemberService; // Export the MemberService class
