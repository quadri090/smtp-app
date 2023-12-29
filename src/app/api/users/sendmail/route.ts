import { NextRequest, NextResponse } from "next/server";
import { sendMail } from "@/helpers/mailer";

export async function POST(request: NextRequest) {
    try {
        
        const reqBody = await request.json()
        const {server, portnumber, username, password, subject, mailcontent, recipient} = reqBody
        // console.log(reqBody)
    
        await sendMail({server, portnumber, username, password, subject, mailcontent, recipient});

        return NextResponse.json({message: "Password reset link sent to email", success: true});

    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }

}