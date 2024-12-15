import { NextResponse } from 'next/server';
import { getSession } from 'next-auth/react';
import { NextRequest } from 'next/server'; 
export async function middleware(req: NextRequest) {
  try {
    const session = await getSession({ req : req as any });
    if (!session) {
      if (req.url.includes('/api')) {
        return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
      }
      return NextResponse.redirect(new URL('/login', req.url));
    }
    return NextResponse.next();
  } catch (error) {
    console.error('Error checking session:', error);
    return NextResponse.json({ message: 'Error occurred during authentication check.' }, { status: 500 });
  }
}
