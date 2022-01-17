import mongoose from "mongoose";

const TournamentSchema = new mongoose.Schema({
  host: {
    type: mongoose.Types.ObjectId,
    trim: true,
    required: "Host is required",
  },
  name: {
    type: String,
    trim: true,
    required: "Tournament name is required",
  },
  uniqueId: {
    type: String,
    trim: true,
    required: "Tournament URL is required",
  },
  description: {
    type: String,
    trim: true,
    required: "Tournament description is required",
  },
  game: {
    type: String,
    trim: true,
    required: "Game is required for tournament",
  },
  participants: {
    type: Array,
    default: [],
  },
  numberOfParticipants: {
    type: Number,
    required: "Number of participants in tournament is required!",
  },
  time: {
    type: String,
    trim: true,
    required: "Date and time of tournament is required!",
  },
});

export default mongoose.model("Tournament", TournamentSchema);
