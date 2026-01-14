'use client';

import { useState } from 'react';
import { sendEmail } from '../actions/sendEmail';
import Button from './Button';
import Text from './Text';

export default function ContactForm() {
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus('loading');
    
    const formData = new FormData(event.target);
    const result = await sendEmail(formData);
    
    if (result.success) {
      setStatus('success');
      event.target.reset();
    } else {
      setStatus('error');
    }
  }

  const inputClasses = "w-full bg-[var(--color-surface)] border border-[var(--color-border)] rounded px-4 py-3 text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-text-primary)] transition-colors";

  if (status === 'success') {
    return (
      <div className="p-6 rounded bg-surface border border-border text-center">
        <Text className="text-lg font-medium mb-2" as="h3">Message sent</Text>
        <Text variant="muted">Thanks for reaching out. I&apos;ll get back to you shortly.</Text>
        <button 
          onClick={() => setStatus('idle')} 
          className="mt-4 text-sm text-(--color-primary) hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      <div>
        <input 
          type="text" 
          name="name" 
          placeholder="Name" 
          required 
          className={inputClasses}
        />
      </div>
      
      <div>
        <input 
          type="email" 
          name="email" 
          placeholder="Email" 
          required 
          className={inputClasses}
        />
      </div>
      
      <div>
        <textarea 
          name="message" 
          placeholder="Message" 
          required 
          rows={4}
          className={`${inputClasses} resize-none`}
        />
      </div>

      <div className="flex items-center gap-2">
        <input 
          type="checkbox" 
          id="newsletter" 
          name="newsletter" 
          className="w-4 h-4 rounded border-border bg-surface text-(--color-primary) focus:ring-(--color-primary) cursor-pointer"
        />
        <label htmlFor="newsletter" className="text-sm text-text-secondary cursor-pointer select-none">
          Keep me updated on my work and learnings.
        </label>
      </div>

      <div className="pt-2">
        <Button className="w-full sm:w-auto">
          {status === 'loading' ? 'Sending...' : 'Send message'}
        </Button>
      </div>

      {status === 'error' && (
        <Text variant="muted" className="text-red-500 text-sm">
          Something went wrong. Please try again.
        </Text>
      )}
    </form>
  );
}
