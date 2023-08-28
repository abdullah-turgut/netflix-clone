import prismadb from '@/lib/prismadb';
import { NextResponse } from 'next/server';
export async function GET(req) {
  try {
    const list = await prismadb.movie.findMany();

    return NextResponse.json(list);
  } catch (error) {
    return new NextResponse('Internal Error', { status: 500 });
  }
}
