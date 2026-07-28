import mongoose from "mongoose";

const designSchema = new mongoose.Schema(
  {
    clerkId: {
      type: String,
      required: true,
      index: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    category: {
      type: String,
      required: true,
      trim: true,
    },

    prompt: {
      type: String,
      default: "",
    },

    enhancedPrompt: {
      type: String,
      default: "",
    },

    imageURL: {
      type: String,
      default: "",
    },

    details: {
      type: Object,
      default: {},
    },
  },
  {
    timestamps: true,
  }
);

// Compound index for efficient user queries
designSchema.index({
  clerkId: 1,
  createdAt: -1,
});

export default mongoose.model("Design", designSchema);