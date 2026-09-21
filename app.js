const WHATSAPP_NUMBER = "249124855533";

const form = document.getElementById("consultationForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(form);

  const fullName = formData.get("fullName") || "";
  const age = formData.get("age") || "غير مذكور";
  const phone = formData.get("phone") || "";
  const consultationType = formData.get("consultationType") || "";
  const medicationName = formData.get("medicationName") || "غير مذكور";
  const strength = formData.get("strength") || "غير مذكور";
  const dosage = formData.get("dosage") || "غير مذكورة";
  const reason = formData.get("reason") || "غير مذكور";
  const otherMedications =
    formData.get("otherMedications") || "لا توجد معلومات";
  const supplements = formData.get("supplements") || "لا توجد معلومات";
  const pregnancy = formData.get("pregnancy") || "غير مذكور";
  const allergies = formData.get("allergies") || "غير مذكورة";
  const question = formData.get("question") || "";

  const message = `
مرحبًا د. رؤى، أريد طلب استشارة دوائية.

الاسم: ${fullName}
العمر: ${age}
رقم التواصل: ${phone}
نوع الاستشارة: ${consultationType}

اسم الدواء: ${medicationName}
التركيز: ${strength}
الجرعة وطريقة الاستخدام: ${dosage}
سبب الاستخدام: ${reason}

الأدوية الأخرى:
${otherMedications}

المكملات والفيتامينات:
${supplements}

الحمل أو الرضاعة:
${pregnancy}

الحساسية من الأدوية:
${allergies}

تفاصيل الاستفسار:
${question}

سأرسل صورة الدواء أو الوصفة في المحادثة إذا لزم الأمر.
`.trim();

  const whatsappUrl =
    "https://wa.me/" +
    WHATSAPP_NUMBER +
    "?text=" +
    encodeURIComponent(message);

  formMessage.textContent =
    "تم تجهيز الرسالة، وسيتم فتح واتساب الآن.";

  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
});
