import mongoose, { Mixed, StringSchemaDefinition } from "mongoose"

const Schema = mongoose.Schema

interface CategoryInterface extends Document {
  _id: string
  name: string
  description: string
  color: string
  group: Mixed | StringSchemaDefinition
}

const CategorySchema = new Schema<CategoryInterface>(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    group: {
      type: Schema.Types.ObjectId,
      ref: "Group",
      required: true,
    },
  },
  { timestamps: true }
)

export default mongoose.model("Category", CategorySchema)