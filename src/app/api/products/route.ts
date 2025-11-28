import { createClient } from "@/utils/supabase/server";

export async function GET(): Promise<Response> {
    const supabase = await createClient();
    
    // Intentamos leer la tabla.
    // OJO: Verifica si tu tabla en Supabase es 'product' o 'products'
    const { data, error } = await supabase.from('product').select(); 

    // --- AGREGAMOS ESTOS LOGS PARA VER EL ERROR EN LA TERMINAL ---
    console.log("--- DEBUG API ---");
    console.log("Data recibida:", data);
    console.log("Error recibido:", error);
    console.log("-----------------");

    if(error) {
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    return new Response(JSON.stringify(data), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    });
}