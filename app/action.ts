"use server";

import { verifyCaptchaToken } from "@/lib/google/captcha";

export async function formAction(token: string | null) {
  console.log("delenchement:", token);
  if (!token) {
    console.log("pas de token");
    return {
      success: false,
      message: "Token introuvable",
    };
  }
  const captchaData = await verifyCaptchaToken(token);
  console.log("coucou2", captchaData);

  if (!captchaData) {
    return {
      success: false,
      message: "Vérification Captcha Failed",
    };
  }
  if (!captchaData.success || captchaData.score < 0.5) {
    return {
      success: false,
      message: "Token introuvable",
      errors: !captchaData.success ? captchaData["error-codes"] : null,
    };
  }
  return { success: true, message: "Action controlée et validée" };
}
