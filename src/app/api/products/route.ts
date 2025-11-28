import { createClient } from "@/utils/supabase/server";

export async function GET(): Promise<Response> {
    const supabase = await createClient();
    const { data, error } = await supabase.from('Product').select();

    if(error) {
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
    

    return new Response(JSON.stringify(data), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        },
    });
}