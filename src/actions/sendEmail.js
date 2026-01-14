'use server';

export async function sendEmail(formData) {
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');
  const newsletter = formData.get('newsletter') === 'on' ? true : false;
  
  const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL;

  if (!GOOGLE_SCRIPT_URL) {
    return { success: false, message: 'Server configuration error.' };
  }

  try {
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      body: JSON.stringify({ name, email, message, newsletter }),
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      },
    });

    if (response.ok) {
      return { success: true, message: 'Message sent successfully.' };
    } else {
      return { success: false, message: 'Failed to send message.' };
    }
  } catch (error) {
    console.error('Submission error:', error);
    return { success: false, message: 'Something went wrong.' };
  }
}
