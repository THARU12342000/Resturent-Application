import mongoose from "mongoose";

// Define reservation schema
const ReservationSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    phone: { type: String, required: true },
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

// Create and export the model based on the schema
const Reservation = mongoose.model("Reservation", ReservationSchema);

export default Reservation;
