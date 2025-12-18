const BASE_URL = "https://backend.ptdahliaglobalindo.id"; // ip be

export async function sendContactForm(data) {
  try {
    const response = await fetch(`${BASE_URL}/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Gagal mengirim pesan");
    }

    return result;
  } catch (error) {
    console.error("Error saat mengirim form:", error.message);
    throw error;
  }
}
