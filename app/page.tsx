"use client";

import { useState, Fragment } from "react";

const content = {
  he: {
    dir: "rtl",
    intro: `היי, אני ענת.\n\n15 שנה בונה מוצרים. עברתי יבשות, פתחתי עסקים, \nגידלתי שלושה ילדים. \nכל פעם בניתי דברים שעוזרים לאנשים.\n\nועכשיו אני רואה דבר אחד שאני לא יכולה לעזוב:\nנשים שאני מכירה, חכמות, מוכשרות, רצות בלי סוף — \nפותחות את ChatGPT פעם, מקבלות תשובה גנרית, ומתייאשות.\n\nזה לא הן. זה הכלי.\n\nאני בונה סדנה שבה לומדות להשתמש ב-AI \nבדרך שמתאימה לנו — לחיים שלנו, לקצב שלנו, לשפה שלנו.\nבלי מונחים טכניים. בלי להרגיש טיפשות. בלי להתחרות באף אחד.\n\nלפני שאני מתחילה — אני רוצה לשמוע ממך.\n4 דקות. שלוש-עשרה שאלות.\n\nמוכנה?`,
    time: "⏱ 4 דקות בלבד",
    about_title: "זה מרגיש לך מוכר? 💭",
    about_intro: "אם את מזדהה עם אחד מאלה — הסדנה הזו בשבילך:",
    pains: [
      { icon: "😅", text: "\"כולם מדברים על AI ואני מרגישה שאני נשארת מאחור\"" },
      { icon: "⏰", text: "\"אין לי זמן לשבת על טוטוריאלים באנגלית עם מונחים טכניים\"" },
      { icon: "📝", text: "\"אני טובעת במשימות קטנות — מיילים, טפסים, תכנון, הודעות\"" },
      { icon: "💼", text: "\"אני רוצה לחזור לעבודה / לפתח קריירה ולא יודעת מאיפה להתחיל\"" },
      { icon: "🙈", text: "\"אני פוחדת לשאול שאלות טיפשיות במקום שבו אין עוד נשים כמוני\"" }
    ],
    about_outro: "זה בדיוק מה שהסדנה באה לפתור — AI פרקטי, בעברית, בקצב שלך, במרחב בטוח של נשים.",
    aspiration: "✨ אני רוצה להיות הגרסה הטובה ביותר של עצמי — לעשות יותר, בפחות זמן.",
    submit: "שלחי את הסקר ✨",
    ty_title: "תודה רבה! 🎉",
    ty_msg: "התשובות שלך עוזרות לי לבנות סדנה שבאמת מתאימה לנשים כמוך. אדאג לעדכן אותך כשהסדנה תצא!",
    tools: {
      label: "שאלה נוספת",
      text: "באילו כלים את משתמשת באופן קבוע?",
      options: ["ChatGPT", "Gemini", "Claude", "Copilot"],
      otherOption: "אחר (כתבי בעצמך)",
      otherPlaceholder: "ספרי לי איזה כלי..."
    },
    questions: [
      { id: "name", label: "שאלה 1", type: "text", text: "איך קוראים לך?", placeholder: "השם שלך...", required: true },
      { id: "who", label: "שאלה 2", type: "radio", text: "מי את?", options: ["אמא בבית (Stay-at-home mom)", "עצמאית / פרילנסרית", "שכירה", "אחר"] },
      { id: "age", label: "שאלה 3", type: "radio", text: "בת כמה את?", options: ["25–34", "35–44", "45–54", "55+"] },
      { id: "familiarity", label: "שאלה 4", type: "radio", text: "כמה את מכירה כלי AI כמו ChatGPT?", options: ["מעולם לא השתמשתי", "ניסיתי פעם-פעמיים אבל לא הבנתי", "משתמשת לפעמים, לא בטוחה שנכון", "משתמשת באופן קבוע"] },
      { id: "pain", label: "שאלה 5", type: "radio", text: "מה הכי מאתגר אותך ביומיום?", options: ["אין לי מספיק זמן לעצמי", "יותר מדי ניירת — מכתבים, טפסים", "כתיבת תוכן / פוסטים לוקחת המון זמן", "תכנון (ארוחות, לוח זמנים, חופשות)", "קשה לי לחזור לעבודה / לפתח קריירה", "קשה למצוא מידע מהיר ואמין"] },
      { id: "outcome", label: "שאלה 6", type: "text", text: "אחרי הסדנה, מה היית רוצה להיות מסוגלת לעשות?", placeholder: "כתבי בחופשיות... (זו השאלה הכי חשובה בשבילי 💫)" },
      { id: "alternatives", label: "שאלה 7", type: "radio", text: "כשאת תקועה עם אחד מהדברים האלה היום — מה את בדרך כלל עושה?", options: ["מנסה להבין לבד", "שואלת חברה או בן משפחה", "משתמשת במקורות חינמיים ביוטיוב או גוגל", "משלמת למישהו שיעזור לי", "פשוט דוחה או מוותרת"] },
      { id: "format", label: "שאלה 8", type: "radio", text: "אם היית צריכה לבחור — איזה פורמט הכי מתאים לך?", options: ["מפגשים פנים אל פנים", "מפגשים חיים אונליין (Zoom)", "סרטונים מוקלטים — מתי שנוח לי", "שילוב — מפגשים חיים + סרטונים", "קבוצת WhatsApp עם למידה שוטפת"] },
      { id: "timing", label: "שאלה 9", type: "checkbox", text: "מתי נוח לך ללמוד?", options: ["בוקר (9–12)", "אחה״צ (12–16)", "ערב (20–22)", "סוף שבוע"] },
      { id: "duration", label: "שאלה 10", type: "radio", text: "מה היה מרגיש לך הכי נכון?", options: ["סדנה חד-פעמית (2–3 שעות)", "סדרה קצרה (3 מפגשים של כ-1.5 שעות)", "סדרה ארוכה יותר (5–6 מפגשים של כ-1.5 שעות)", "סרטונים מוקלטים, בקצב שלי", "עדיין לא בטוחה — עזרי לי להחליט"] },
      { id: "price", label: "שאלה 11", type: "radio", text: "היית משקיעה בסדנה כזו?", options: ["כן, בטוח", "כן, תלוי בפורמט ובמחיר", "אולי", "רק אם זה בחינם"] },
      { id: "likely", label: "שאלה 12", type: "scale", text: "כמה סביר שתצטרפי לסדנה כזו?", low: "ממש לא סביר", high: "בטוח שכן!" },
      { id: "open", label: "שאלה 13", type: "text", text: "יש משהו שחשוב לך שאדע? (רשות)", placeholder: "כתבי כאן..." }
    ]
  },
  en: {
    dir: "ltr",
    intro: `Hi, I'm Anat.\n\n15 years building products. Crossed continents, \nstarted businesses, raised three kids. \nEvery time — I built things that help people.\n\nAnd now there's one thing I can't let go of:\nWomen I know — smart, capable, running without stop — \nopen ChatGPT once, get a generic answer, give up.\n\nIt's not them. It's the tool.\n\nI'm building a workshop where we learn to use AI \nthe way it fits us — our lives, our pace, our language.\nNo jargon. No feeling stupid. No competing with anyone.\n\nBefore I start — I want to hear from you.\n4 minutes. Thirteen questions.\n\nReady?`,
    time: "⏱ Only 4 minutes",
    about_title: "Does this sound like you? 💭",
    about_intro: "If any of these feel familiar — this workshop is for you:",
    pains: [
      { icon: "😅", text: "\"Everyone's talking about AI and I feel like I'm falling behind\"" },
      { icon: "⏰", text: "\"I don't have time for English tutorials full of technical jargon\"" },
      { icon: "📝", text: "\"I'm drowning in small tasks — emails, forms, planning, messages\"" },
      { icon: "💼", text: "\"I want to return to work / grow my career and don't know where to start\"" },
      { icon: "🙈", text: "\"I'm afraid to ask 'dumb' questions in spaces without other women like me\"" }
    ],
    about_outro: "This is exactly what the workshop is built to solve — practical AI, in your language, at your pace, in a safe space of women.",
    aspiration: "✨ I want to be the best version of myself — getting more done, in less time.",
    submit: "Submit Survey ✨",
    ty_title: "Thank you! 🎉",
    ty_msg: "Your answers help me build a workshop that truly works for women like you. I'll update you when the workshop launches!",
    tools: {
      label: "Follow-up",
      text: "Which AI tools do you use regularly?",
      options: ["ChatGPT", "Gemini", "Claude", "Copilot"],
      otherOption: "Other (tell me)",
      otherPlaceholder: "Tell me which tool..."
    },
    questions: [
      { id: "name", label: "Question 1", type: "text", text: "What's your name?", placeholder: "Your name...", required: true },
      { id: "who", label: "Question 2", type: "radio", text: "Which best describes you?", options: ["Stay-at-home mom", "Freelancer / self-employed", "Employed outside the home", "Other"] },
      { id: "age", label: "Question 3", type: "radio", text: "How old are you?", options: ["25–34", "35–44", "45–54", "55+"] },
      { id: "familiarity", label: "Question 4", type: "radio", text: "How familiar are you with AI tools like ChatGPT?", options: ["Never used them", "Tried once or twice but didn't get it", "Use sometimes, not sure I'm doing it right", "Use regularly"] },
      { id: "pain", label: "Question 5", type: "radio", text: "What is your biggest daily challenge?", options: ["Not enough time for myself", "Too much admin — letters, forms, paperwork", "Writing content/posts takes too long", "Planning (meals, schedules, vacations)", "Hard to get back to work / develop career", "Hard to find quick, reliable info"] },
      { id: "outcome", label: "Question 6", type: "text", text: "After the workshop, what would you want to be able to do?", placeholder: "Write freely... (this is the most important question for me 💫)" },
      { id: "alternatives", label: "Question 7", type: "radio", text: "When you feel stuck with these things today, what do you usually do?", options: ["Figure it out on my own", "Ask a friend or family member", "Use free online resources (YouTube, Google)", "Pay someone to help", "Honestly, give up or postpone it"] },
      { id: "format", label: "Question 8", type: "radio", text: "If you had to pick one — which format fits you best?", options: ["In-person meetings", "Live online sessions (Zoom)", "Recorded videos — watch anytime", "Hybrid — live + recordings", "WhatsApp group with ongoing learning"] },
      { id: "timing", label: "Question 9", type: "checkbox", text: "When is it most convenient to learn?", options: ["Morning (9am–12pm)", "Afternoon (12–4pm)", "Evening (8–10pm)", "Weekend"] },
      { id: "duration", label: "Question 10", type: "radio", text: "What would feel right for you?", options: ["A one-time workshop (2–3 hours)", "A short series (3 meetings of ~1.5 hours)", "A longer series (5–6 meetings of ~1.5 hours)", "Self-paced recorded videos", "Still not sure — help me decide"] },
      { id: "price", label: "Question 11", type: "radio", text: "Would you invest in a workshop like this?", options: ["Yes, definitely", "Yes, depending on the format and price", "Maybe", "Only if it's free"] },
      { id: "likely", label: "Question 12", type: "scale", text: "How likely are you to join such a workshop?", low: "Not likely at all", high: "Definitely yes!" },
      { id: "open", label: "Question 13", type: "text", text: "Anything else you want me to know? (optional)", placeholder: "Write here..." }
    ]
  }
};

export default function Survey() {
  const [lang, setLang] = useState<"he" | "en">("he");
  const [answers, setAnswers] = useState<Record<string, string | string[] | number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbxoUV0VErcW0UTqz7cxohajaPmg6HBVp1kvkk7I7DakZ87M5783ioL-jlfjQxjpbuAgPQ/exec";

  const c = content[lang];
  const nonTextCount = c.questions.filter(q => q.type !== "text").length;
  const showTools = answers.familiarity === "משתמשת באופן קבוע" || answers.familiarity === "Use regularly";

  const answered = c.questions.filter(q => {
    if (q.type === "text") return false;
    const a = answers[q.id];
    if (!a) return false;
    if (Array.isArray(a)) return a.length > 0;
    return true;
  }).length;

  const pct = Math.round((answered / nonTextCount) * 100);

  function handleRadio(id: string, val: string) {
    setAnswers(prev => ({ ...prev, [id]: val }));
  }

  function handleCheckbox(id: string, val: string) {
    setAnswers(prev => {
      const cur = (prev[id] as string[]) || [];
      return { ...prev, [id]: cur.includes(val) ? cur.filter(v => v !== val) : [...cur, val] };
    });
  }

  function handleScale(id: string, val: number) {
    setAnswers(prev => ({ ...prev, [id]: val }));
  }

  function handleText(id: string, val: string) {
    setAnswers(prev => ({ ...prev, [id]: val }));
  }

  async function handleSubmit() {
    if (submitting) return;
    setSubmitError(null);

    if (!answers.name || !(answers.name as string).trim()) {
      setSubmitError(lang === "he" ? "אנא מלאי את שמך 😊" : "Please enter your name 😊");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    setSubmitting(true);
    try {
      const payload: Record<string, string | string[] | number> = { ...answers, lang };
      c.questions.forEach(q => {
        if (q.otherOption && Array.isArray(payload[q.id])) {
          const arr = payload[q.id] as string[];
          const otherText = payload[`${q.id}_other`] as string;
          if (arr.includes(q.otherOption) && otherText) {
            payload[q.id] = arr.map(v =>
              v === q.otherOption ? `${q.otherOption}: ${otherText}` : v
            );
          }
          delete payload[`${q.id}_other`];
        }
      });

      // Handle tools "other" option
      if (Array.isArray(payload.tools) && (payload.tools as string[]).includes(c.tools.otherOption)) {
        const otherText = payload.tools_other as string;
        if (otherText) {
          payload.tools = (payload.tools as string[]).map(v =>
            v === c.tools.otherOption ? `${c.tools.otherOption}: ${otherText}` : v
          );
        }
        delete payload.tools_other;
      }

      await fetch(WEBHOOK_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(payload)
      });
      setSubmitted(true);
    } catch (err) {
      setSubmitError(lang === "he" ? "משהו השתבש, נסי שוב" : "Something went wrong, please try again");
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div style={{ minHeight: "100vh", background: "#FAFAF8", display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
        <div style={{ textAlign: "center", maxWidth: 400 }}>
          <div style={{ fontSize: 64, marginBottom: 16 }}>🎉</div>
          <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 12, color: "#1E1B2E" }}>{c.ty_title}</h2>
          <p style={{ fontSize: 16, color: "#6B6880", lineHeight: 1.7 }}>{c.ty_msg}</p>
        </div>
      </div>
    );
  }

  return (
    <>
    <style>{`
      @keyframes fadeSlideIn {
        from { opacity: 0; transform: translateY(-10px); }
        to   { opacity: 1; transform: translateY(0); }
      }
      .tools-followup { animation: fadeSlideIn 0.3s ease forwards; }
    `}</style>
    <div style={{ direction: c.dir as "ltr" | "rtl", minHeight: "100vh", background: "#FAFAF8", fontFamily: "Segoe UI, Arial, sans-serif", color: "#1E1B2E", padding: "24px 16px 60px" }}>
      <div style={{ maxWidth: 580, margin: "0 auto" }}>

        {/* Language toggle */}
        <div style={{ display: "flex", justifyContent: "center", gap: 8, marginBottom: 28 }}>
          {(["he", "en"] as const).map(l => (
            <button key={l} onClick={() => setLang(l)} style={{
              padding: "8px 22px", borderRadius: 20, border: "2px solid",
              borderColor: lang === l ? "#E8637A" : "#E8E5F0",
              background: lang === l ? "#E8637A" : "#fff",
              color: lang === l ? "#fff" : "#6B6880",
              fontWeight: 600, fontSize: 14, cursor: "pointer"
            }}>
              {l === "he" ? "🇮🇱 עברית" : "🇺🇸 English"}
            </button>
          ))}
        </div>

        {/* Hero image */}
        <div style={{ borderRadius: 20, overflow: "hidden", marginBottom: 28 }}>
          <img
            src="https://raw.githubusercontent.com/katzanat/wai/main/hero_survey.png"
            alt=""
            style={{ width: "100%", display: "block" }}
          />
        </div>

        {/* Personal intro */}
        <div style={{ marginBottom: 20 }}>
          <p style={{
            fontSize: 16,
            lineHeight: 1.85,
            color: "#1E1B2E",
            whiteSpace: "pre-line",
            margin: 0
          }}>{c.intro}</p>
        </div>

        {/* Time pill */}
        <div style={{ textAlign: "center", marginBottom: 28 }}>
          <span style={{ display: "inline-block", background: "#EDE8F8", color: "#7C5CBF", fontSize: 13, fontWeight: 600, padding: "4px 14px", borderRadius: 20 }}>{c.time}</span>
        </div>

        {/* Pain points section */}
        <div style={{ background: "#fff", borderRadius: 20, padding: "24px 20px", marginBottom: 28, border: "1px solid #E8E5F0", boxShadow: "0 2px 10px rgba(0,0,0,0.04)" }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 6, color: "#1E1B2E" }}>{c.about_title}</h2>
          <p style={{ fontSize: 14, color: "#6B6880", marginBottom: 16 }}>{c.about_intro}</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {c.pains.map((p, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                <span style={{ fontSize: 18, flexShrink: 0 }}>{p.icon}</span>
                <span style={{ fontSize: 14, lineHeight: 1.6, color: "#3D3A52" }}>{p.text}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 14, color: "#6B6880", marginTop: 16, marginBottom: 12, lineHeight: 1.6 }}>{c.about_outro}</p>
          <p style={{ fontSize: 14, fontWeight: 600, color: "#E8637A", margin: 0 }}>{c.aspiration}</p>
        </div>

        {/* Progress bar */}
        <div style={{ marginBottom: 28 }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, color: "#6B6880", marginBottom: 6 }}>
            <span>{lang === "he" ? `ענית על ${answered} מתוך ${nonTextCount} שאלות` : `${answered} of ${nonTextCount} answered`}</span>
            <span>{pct}%</span>
          </div>
          <div style={{ height: 6, background: "#E8E5F0", borderRadius: 6, overflow: "hidden" }}>
            <div style={{ height: "100%", width: `${pct}%`, background: "linear-gradient(90deg,#E8637A,#7C5CBF)", borderRadius: 6, transition: "width 0.3s" }} />
          </div>
        </div>

        {c.questions.map((q) => (
          <Fragment key={q.id}>
          <div style={{ background: "#fff", borderRadius: 16, padding: "24px 20px", marginBottom: 16, border: "1px solid #E8E5F0", boxShadow: "0 2px 10px rgba(0,0,0,0.04)" }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: "#E8637A", textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 6 }}>{q.label}</div>
            <div style={{ fontSize: 16, fontWeight: 600, marginBottom: 16, lineHeight: 1.4 }}>{q.text}</div>

            {q.type === "radio" && (
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {(q.options ?? []).map(opt => {
                  const sel = answers[q.id] === opt;
                  return (
                    <div key={opt} onClick={() => handleRadio(q.id, opt)} style={{
                      display: "flex", alignItems: "center", gap: 12,
                      padding: "12px 16px", borderRadius: 12, cursor: "pointer",
                      border: `2px solid ${sel ? "#E8637A" : "#E8E5F0"}`,
                      background: sel ? "#FDE8EC" : "#FAFAF8",
                      transition: "all 0.15s"
                    }}>
                      <div style={{
                        width: 18, height: 18, borderRadius: "50%", border: `2px solid ${sel ? "#E8637A" : "#ccc"}`,
                        background: sel ? "#E8637A" : "#fff", flexShrink: 0,
                        display: "flex", alignItems: "center", justifyContent: "center"
                      }}>
                        {sel && <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#fff" }} />}
                      </div>
                      <span style={{ fontSize: 14, lineHeight: 1.4 }}>{opt}</span>
                    </div>
                  );
                })}
              </div>
            )}

            {q.type === "checkbox" && (
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {(q.options ?? []).map(opt => {
                  const sel = (answers[q.id] as string[] || []).includes(opt);
                  return (
                    <div key={opt} onClick={() => handleCheckbox(q.id, opt)} style={{
                      display: "flex", alignItems: "center", gap: 12,
                      padding: "12px 16px", borderRadius: 12, cursor: "pointer",
                      border: `2px solid ${sel ? "#E8637A" : "#E8E5F0"}`,
                      background: sel ? "#FDE8EC" : "#FAFAF8",
                      transition: "all 0.15s"
                    }}>
                      <div style={{
                        width: 18, height: 18, borderRadius: 4, border: `2px solid ${sel ? "#E8637A" : "#ccc"}`,
                        background: sel ? "#E8637A" : "#fff", flexShrink: 0,
                        display: "flex", alignItems: "center", justifyContent: "center"
                      }}>
                        {sel && <span style={{ color: "#fff", fontSize: 11, fontWeight: 700 }}>✓</span>}
                      </div>
                      <span style={{ fontSize: 14, lineHeight: 1.4 }}>{opt}</span>
                    </div>
                  );
                })}

                {q.otherOption && (() => {
                  const otherKey = `${q.id}_other`;
                  const sel = (answers[q.id] as string[] || []).includes(q.otherOption as string);
                  return (
                    <>
                      <div onClick={() => handleCheckbox(q.id, q.otherOption as string)} style={{
                        display: "flex", alignItems: "center", gap: 12,
                        padding: "12px 16px", borderRadius: 12, cursor: "pointer",
                        border: `2px solid ${sel ? "#E8637A" : "#E8E5F0"}`,
                        background: sel ? "#FDE8EC" : "#FAFAF8",
                        transition: "all 0.15s"
                      }}>
                        <div style={{
                          width: 18, height: 18, borderRadius: 4, border: `2px solid ${sel ? "#E8637A" : "#ccc"}`,
                          background: sel ? "#E8637A" : "#fff", flexShrink: 0,
                          display: "flex", alignItems: "center", justifyContent: "center"
                        }}>
                          {sel && <span style={{ color: "#fff", fontSize: 11, fontWeight: 700 }}>✓</span>}
                        </div>
                        <span style={{ fontSize: 14, lineHeight: 1.4 }}>{q.otherOption as string}</span>
                      </div>
                      {sel && (
                        <input
                          type="text"
                          value={(answers[otherKey] as string) || ""}
                          onChange={e => handleText(otherKey, e.target.value)}
                          placeholder={lang === "he" ? "ספרי לי איזה נושא..." : "Tell me what topic..."}
                          autoFocus
                          style={{
                            width: "100%", padding: "12px 14px", borderRadius: 12, fontSize: 14,
                            border: "2px solid #E8637A", background: "#fff",
                            fontFamily: "inherit", direction: c.dir as "ltr" | "rtl", outline: "none", color: "#1E1B2E"
                          }}
                        />
                      )}
                    </>
                  );
                })()}
              </div>
            )}

            {q.type === "scale" && (
              <div>
                <div style={{ display: "flex", gap: 8 }}>
                  {[1, 2, 3, 4, 5].map(n => {
                    const sel = answers[q.id] === n;
                    return (
                      <button key={n} onClick={() => handleScale(q.id, n)} style={{
                        flex: 1, padding: "12px 4px", borderRadius: 10, cursor: "pointer",
                        border: `2px solid ${sel ? "#E8637A" : "#E8E5F0"}`,
                        background: sel ? "#FDE8EC" : "#FAFAF8",
                        color: sel ? "#E8637A" : "#6B6880",
                        fontWeight: 700, fontSize: 16, transition: "all 0.15s"
                      }}>{n}</button>
                    );
                  })}
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: "#6B6880", marginTop: 6 }}>
                  <span>{q.low}</span>
                  <span>{q.high}</span>
                </div>
              </div>
            )}

            {q.type === "text" && (
              q.id === "name" ? (
                <input
                  type="text"
                  placeholder={q.placeholder}
                  value={answers[q.id] || ""}
                  onChange={e => handleText(q.id, e.target.value)}
                  style={{
                    width: "100%", padding: "12px 14px", borderRadius: 12, fontSize: 14,
                    border: "2px solid #E8E5F0", background: "#FAFAF8",
                    fontFamily: "inherit", direction: c.dir as "ltr" | "rtl", outline: "none", color: "#1E1B2E"
                  }}
                />
              ) : (
                <textarea
                  rows={4}
                  placeholder={q.placeholder}
                  value={answers[q.id] || ""}
                  onChange={e => handleText(q.id, e.target.value)}
                  style={{
                    width: "100%", padding: "12px 14px", borderRadius: 12, fontSize: 14,
                    border: "2px solid #E8E5F0", background: "#FAFAF8", resize: "vertical",
                    fontFamily: "inherit", direction: c.dir as "ltr" | "rtl", outline: "none", color: "#1E1B2E"
                  }}
                />
              )
            )}
          </div>

          {q.id === "familiarity" && showTools && (
            <div className="tools-followup" style={{ background: "#fff", borderRadius: 16, padding: "24px 20px", marginBottom: 16, border: "2px solid #7C5CBF", boxShadow: "0 2px 10px rgba(124,92,191,0.1)" }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: "#7C5CBF", textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 6 }}>{c.tools.label}</div>
              <div style={{ fontSize: 16, fontWeight: 600, marginBottom: 16, lineHeight: 1.4 }}>{c.tools.text}</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {c.tools.options.map(opt => {
                  const sel = (answers.tools as string[] || []).includes(opt);
                  return (
                    <div key={opt} onClick={() => handleCheckbox("tools", opt)} style={{
                      display: "flex", alignItems: "center", gap: 12,
                      padding: "12px 16px", borderRadius: 12, cursor: "pointer",
                      border: `2px solid ${sel ? "#7C5CBF" : "#E8E5F0"}`,
                      background: sel ? "#EDE8F8" : "#FAFAF8",
                      transition: "all 0.15s"
                    }}>
                      <div style={{
                        width: 18, height: 18, borderRadius: 4, border: `2px solid ${sel ? "#7C5CBF" : "#ccc"}`,
                        background: sel ? "#7C5CBF" : "#fff", flexShrink: 0,
                        display: "flex", alignItems: "center", justifyContent: "center"
                      }}>
                        {sel && <span style={{ color: "#fff", fontSize: 11, fontWeight: 700 }}>✓</span>}
                      </div>
                      <span style={{ fontSize: 14, lineHeight: 1.4 }}>{opt}</span>
                    </div>
                  );
                })}
                {(() => {
                  const sel = (answers.tools as string[] || []).includes(c.tools.otherOption);
                  return (
                    <>
                      <div onClick={() => handleCheckbox("tools", c.tools.otherOption)} style={{
                        display: "flex", alignItems: "center", gap: 12,
                        padding: "12px 16px", borderRadius: 12, cursor: "pointer",
                        border: `2px solid ${sel ? "#7C5CBF" : "#E8E5F0"}`,
                        background: sel ? "#EDE8F8" : "#FAFAF8",
                        transition: "all 0.15s"
                      }}>
                        <div style={{
                          width: 18, height: 18, borderRadius: 4, border: `2px solid ${sel ? "#7C5CBF" : "#ccc"}`,
                          background: sel ? "#7C5CBF" : "#fff", flexShrink: 0,
                          display: "flex", alignItems: "center", justifyContent: "center"
                        }}>
                          {sel && <span style={{ color: "#fff", fontSize: 11, fontWeight: 700 }}>✓</span>}
                        </div>
                        <span style={{ fontSize: 14, lineHeight: 1.4 }}>{c.tools.otherOption}</span>
                      </div>
                      {sel && (
                        <input
                          type="text"
                          value={(answers.tools_other as string) || ""}
                          onChange={e => handleText("tools_other", e.target.value)}
                          placeholder={c.tools.otherPlaceholder}
                          autoFocus
                          style={{
                            width: "100%", padding: "12px 14px", borderRadius: 12, fontSize: 14,
                            border: "2px solid #7C5CBF", background: "#fff",
                            fontFamily: "inherit", direction: c.dir as "ltr" | "rtl", outline: "none", color: "#1E1B2E"
                          }}
                        />
                      )}
                    </>
                  );
                })()}
              </div>
            </div>
          )}

          </Fragment>
        ))}

        {submitError && (
          <div style={{
            background: "#FEE", border: "1px solid #E8637A",
            borderRadius: 12, padding: "12px 16px", marginBottom: 12,
            color: "#8B2A3F", fontSize: 14, textAlign: "center", fontWeight: 500
          }}>
            {submitError}
          </div>
        )}

        <button
          onClick={handleSubmit}
          disabled={submitting}
          style={{
            width: "100%", padding: 16,
            background: submitting ? "#B8A8C8" : "linear-gradient(135deg,#E8637A,#7C5CBF)",
            color: "#fff", border: "none", borderRadius: 14,
            fontSize: 17, fontWeight: 700,
            cursor: submitting ? "not-allowed" : "pointer",
            marginTop: 4, opacity: submitting ? 0.8 : 1,
            transition: "opacity 0.2s"
          }}
        >
          {submitting ? (lang === "he" ? "שולחת..." : "Sending...") : c.submit}
        </button>

      </div>
    </div>
    </>
  );
}
