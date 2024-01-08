import { collection, addDoc, writeBatch } from "firebase/firestore";
import { NextRequest, NextResponse } from "next/server";
import { data } from "@/utils/data";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    const response = {
      success: true,
      status: "200",
      body: body
    };
    return NextResponse.json(response);
  } catch (error) {
    return NextResponse
      .json({ success: false, status: "500", reason: error });
  }
}
