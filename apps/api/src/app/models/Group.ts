import mongoose, { Mixed, StringSchemaDefinition } from "mongoose"

const Schema = mongoose.Schema

interface GroupInterface extends Document {
  _id: string
  name: string
  description: string
  owner: Mixed | StringSchemaDefinition
  members: (Mixed | StringSchemaDefinition)[]
}

const groupSchema = new Schema<GroupInterface>(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    members: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  { timestamps: true }
)

export default mongoose.model("Group", groupSchema)