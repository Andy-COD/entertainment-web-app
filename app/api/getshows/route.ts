import { NextResponse } from "next/server";
import { collection, doc, getDocs } from "firebase/firestore";
import { db } from "@/app/firebase/firebaseConfig";
import { MovieData } from "@/utils/data";


export async function GET() {
  try {
    const docRef = collection(db, "shows");
    const docsSnap = await getDocs(docRef);
    let shows:MovieData[] = [];
    docsSnap.forEach((doc) => {
        shows.push(doc.data())
    });
    const response = {
      success: true,
      status: "200",
      body: shows,
    };
    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json({ success: false, status: "500", reason: error });
  }
}
