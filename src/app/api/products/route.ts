import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

export async function GET() {
  const supabase = createClient();

  // Ahora consultamos directamente la tabla "products"
  const { data: products, error } = await supabase.from("products").select();

  if (error) {
    console.error("🔥 ERROR DE SUPABASE:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(products, { status: 200 });
}
