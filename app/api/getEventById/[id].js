import dbConnect from "@/lib/mongoose";
import Event from "../../(models)/Event";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const { id } = params;

  try {
    await dbConnect();

    // Find the event by ID
    const event = await Event.findById(id);

    if (!event) {
      return NextResponse.json(
        { error: true, message: "Event not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ event }, { status: 200 });
  } catch (error) {
    console.error("Error fetching event:", error);
    return NextResponse.json(
      { error: true, message: "Failed to fetch event", details: error.message },
      { status: 500 }
    );
  }
}
