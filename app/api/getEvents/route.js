import dbConnect from "@/lib/mongoose";
import Event from "../../(models)/Event";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    // Connect to MongoDB
    await dbConnect();

    // Fetch all events from the database
    const events = await Event.find();

    return NextResponse.json(
      { success: true, events },
      { status: 200 }
    );
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: true, message: "Failed to fetch events", details: error.message },
      { status: 500 }
    );
  }
}
