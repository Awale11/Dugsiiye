"use server";

export type FormState = {
    success: boolean;
    error: string;
    message: string;

}
export async function greet(prevState: FormState, formData:FormData) : Promise<FormState> {

    const email = formData.get('email')?.toString();
    
    const password = formData.get('password')?.toString();

    const firstName = formData.get('firstName')?.toString();
    const lastName = formData.get('lastName')?.toString();

    
    // Email Validation
    if(!email || email.trim() === '') {
        return {
            success: false,
            message: '',
            error: 'Email is required'
        }
    }

    // Log email on server
    console.log('email:', email);

    // Password Validation
    if(!password || password.length < 6) {
        return {
            success: false,
            message: '',
            error: 'Password must be at least 6 characters'
        }
    }

    // Full name validation 
    if(!firstName || !lastName ) {
        return {
            success: false,
            message: '',
            error: 'first name and last name are required'
        }
    }
    return {
        success: true,
        message: `Hello, ${firstName} ${lastName}! Thanks for submitting!`,
        error: ''
    }
    
    
}