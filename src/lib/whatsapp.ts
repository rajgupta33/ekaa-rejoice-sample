// IMPORTANT: Verify this provisional Ekaa parent number is the dedicated Ekaa Rejoice WhatsApp inbox before production launch.
export const WHATSAPP_NUMBER = "971562046096";
export const WHATSAPP_DISPLAY = "+971 56 204 6096";

export type EventEnquiry = {
  service: string;
  eventType?: string;
  date?: string;
  location?: string;
  guests?: string;
  budget?: string;
  idea?: string;
};

export function buildWhatsAppEnquiry({
  service,
  eventType = "",
  date = "",
  location = "",
  guests = "",
  budget = "",
  idea = "",
}: EventEnquiry): string {
  const lines = [
    "Hello Ekaa Rejoice!",
    `I'm interested in ${service}.`,
    "",
  ];

  if (eventType) lines.push(`Event type: ${eventType}`);
  lines.push(`Preferred date: ${date}`);
  lines.push(`Location / area: ${location}`);
  lines.push(`Estimated guests: ${guests}`);
  if (budget) lines.push(`Approximate budget: ${budget}`);
  lines.push(`Ideas / theme: ${idea}`);
  lines.push("");
  lines.push("Could you please share the next steps and availability?");

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
}
