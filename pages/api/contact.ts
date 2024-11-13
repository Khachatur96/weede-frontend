import type { NextApiRequest, NextApiResponse } from 'next';

type ContactFormData = {
    fullName: string;
    subject: string;
    phone: string;
    message: string;
}

type ApiResponse = {
    success: boolean;
    message: string;
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ApiResponse>
) {
    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, message: 'Method not allowed' });
    }

    try {
        const { fullName, subject, phone, message } = req.body as ContactFormData;

        // Validate required fields
        if (!fullName || !subject || !phone || !message) {
            return res.status(400).json({
                success: false,
                message: 'All fields are required'
            });
        }

        // Here you would typically:
        // 1. Send an email
        // 2. Store in database
        // 3. Forward to CRM
        // For now, we'll just simulate success

        return res.status(200).json({
            success: true,
            message: 'Message sent successfully!'
        });
    } catch (error) {
        console.error('Contact form error:', error);
        return res.status(500).json({
            success: false,
            message: 'Something went wrong. Please try again later.'
        });
    }
} 