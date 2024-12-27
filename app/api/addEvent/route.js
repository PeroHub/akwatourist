import dbConnect from "@/lib/mongoose";
import Event from "../../(models)/Event";
import { v2 as cloudinary } from "cloudinary";
import { NextResponse } from "next/server";

// Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(req) {
  try {
    // Parse form data
    const formData = await req.json();
    const { title, description, venue, category, picture, status } = formData;

    if (!title || !description || !venue || !category || !picture || !status) {
      return NextResponse.json(
        { error: true, message: "All fields are required" },
        { status: 400 }
      );
    }

    // Connect to MongoDB
    await dbConnect();

    // Upload image to Cloudinary
    const uploadResponse = await cloudinary.uploader.upload(picture, {
      folder: "events",
      resource_type: "image",
    });
    console.log("Cloudinary Upload Response:", uploadResponse);


    // Save event to the database
    const event = new Event({
      title,
      description,
      venue,
      category,
      picture: uploadResponse.secure_url,
      status,
    });

    const savedEvent = await event.save();

    return NextResponse.json(
      { message: "Event added successfully", event: savedEvent },
      { status: 201 }
    );
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: true, message: "Server error", details: error.message },
      { status: 500 }
    );
  }
}

// export async function GET(req) {
//     try {
//       // Connect to MongoDB
//       await dbConnect();
  
//       // Fetch all events from the database
//       const events = await Event.find();
  
//       return NextResponse.json(
//         { success: true, events },
//         { status: 200 }
//       );
//     } catch (error) {
//       console.error("API Error:", error);
//       return NextResponse.json(
//         { error: true, message: "Failed to fetch events", details: error.message },
//         { status: 500 }
//       );
//     }
//   }
