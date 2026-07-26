export const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mykrbdgo';

export async function submitToFormspree(data: Record<string, unknown>): Promise<{ success: boolean; error?: string }> {
  try {
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      return { success: true };
    } else {
      const result = await response.json().catch(() => ({}));
      const errorMessage = result?.errors?.[0]?.message || 'Failed to submit form to Formspree';
      return { success: false, error: errorMessage };
    }
  } catch (err: any) {
    console.error('Formspree submission error:', err);
    return { success: false, error: err?.message || 'Network error submitting form' };
  }
}
