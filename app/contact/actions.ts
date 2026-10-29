"use server";

export async function handleContact(
  _prevState: { success: boolean } | null,
  formData: FormData
): Promise<{ success: boolean }> {
  const data = {
    name: formData.get("name"),
    business: formData.get("business"),
    service: formData.get("service"),
    budget: formData.get("budget"),
    message: formData.get("message"),
  };

  console.log("Contact form submission:", data);

  // Simulate network latency (replace with real email / CRM later)
  await new Promise((r) => setTimeout(r, 600));

  return { success: true };
}
