// 'use client'

export async function GetTemplatesAll(){
    const res = await fetch("/api/templates");
    return await res.json();
}
