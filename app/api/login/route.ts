import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { username, password } = body;
  let user=null;
    if( "test" === username && "Test@12345" === password)
      {
        const token = jwt.sign({ username: "test" }, 'secret', {
          expiresIn: '1h',
        });
      
        return NextResponse.json({ token });
        
      }
      else{
         return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
      }
}