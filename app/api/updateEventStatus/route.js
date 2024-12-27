import dbConnect from "@/lib/mongoose";
import Event from "../../(models)/Event";
import { NextResponse } from "next/server";

export async function PATCH(req) {
  try {
    // Parse the request body
    const { id, status } = await req.json();

    if (!id || !status) {
      return NextResponse.json(
        { error: true, message: "Event ID and status are required" },
        { status: 400 }
      );
    }

    // Connect to MongoDB
    await dbConnect();

    // Find the event and update its status
    const updatedEvent = await Event.findByIdAndUpdate(
      id,
      { status },
      { new: true } // Return the updated document
    );

    if (!updatedEvent) {
      return NextResponse.json(
        { error: true, message: "Event not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Event status updated successfully", event: updatedEvent },
      { status: 200 }
    );
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: true, message: "Server error", details: error.message },
      { status: 500 }
    );
  }
}
