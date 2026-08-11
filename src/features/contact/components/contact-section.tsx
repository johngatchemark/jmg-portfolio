import { useState } from "react";
import Container from "../../../components/container";
import RaisedButton from "../../../components/raised-button";
import FakeMacWindow from "../../../components/fake-mac-window";
import { Mail, Check, ExternalLink, AlertCircle, Loader2 } from "lucide-react";

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  // Form Field State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Validation & Submission States
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [serverError, setServerError] = useState<string | null>(null);

  const CONTACT_EMAIL = "jmgatche@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONTACT_EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    const trimmedName = name.trim();
    if (!trimmedName) {
      newErrors.name = "Please enter your name.";
    }

    const trimmedEmail = email.trim();
    if (!trimmedEmail) {
      newErrors.email = "Please enter your email address.";
    } else if (!trimmedEmail.includes("@") || !trimmedEmail.includes(".")) {
      newErrors.email = "Please enter a valid email address (e.g., name@domain.com).";
    }

    const trimmedMessage = message.trim();
    if (!trimmedMessage) {
      newErrors.message = "Please enter a message.";
    } else if (trimmedMessage.length < 5) {
      newErrors.message = "Message must be at least 5 characters long.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();
    setSubmitStatus("idle");
    setServerError(null);

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Failed to deliver message. Please try again.");
      }

      setSubmitStatus("success");
      setName("");
      setEmail("");
      setMessage("");
      setErrors({});
    } catch (err: any) {
      console.error("Submission error:", err);
      setSubmitStatus("error");
      setServerError(
        err?.message || "Something went wrong while sending your message. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container>
      <div className="flex flex-col lg:flex-row justify-between align-center gap-10 md:gap-15 max-w-120 lg:max-w-6xl lg:w-full mx-5 lg:mx-0 lg:px-20">
        {/* Left Column: Intro & Info */}
        <div className="flex flex-col gap-6 flex-1 text-left w-full lg:w-1/2">
          <p className="text-left text-[12px]! font-mono text-jm-primary tracking-widest">
            &gt; sys.contact()
          </p>

          <h1 className="h1-stretched text-jm-fg text-left my-0! leading-none">
            Let's build
            <br />
            something great
          </h1>

          <p className="text-jm-muted-fg text-base max-w-md leading-relaxed font-sans">
            I'm open to full-time software engineering roles. Drop me a message
            or reach out directly.
          </p>

          {/* Email Badge Box */}
          <div
            onClick={handleCopyEmail}
            title="Click to copy email address"
            className="w-full sm:w-fit bg-white dark:bg-[#121218] border-2 border-jm-primary px-4 py-3 rounded-sm flex flex-wrap items-center justify-between gap-2 drop-shadow-[4px_4px_0px_var(--color-jm-primary)] dark:drop-shadow-[4px_4px_0px_var(--color-jm-shadow)] active:relative active:top-1 active:left-1 active:drop-shadow-none cursor-pointer transition-all group"
          >
            <div className="flex items-center gap-2.5">
              <Mail size={16} className="text-jm-primary" />
              <span className="font-mono text-xs sm:text-sm text-jm-primary font-semibold">
                {CONTACT_EMAIL}
              </span>
            </div>
            {copied ? (
              <span className="font-mono text-[10px] text-jm-primary flex items-center gap-1 bg-jm-primary/10 px-2 py-0.5 rounded">
                <Check size={12} /> Copied!
              </span>
            ) : (
              <span className="font-mono text-[10px] text-jm-muted-fg group-hover:text-jm-primary transition-colors">
                (Click to copy)
              </span>
            )}
          </div>

          {/* Social Links Row */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="https://linkedin.com/in/johnmarkgatche"
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline inline-block"
            >
              <RaisedButton
                color="bg"
                borderColor="fg"
                darkBorderColor="ui"
                textColor="fg"
                dropShadowColor="fg"
                hoverColor="#e4e4dd"
                darkHoverColor="#1e1f29"
                className="transition-none!"
              >
                <span>LinkedIn</span>
                <ExternalLink size={14} />
              </RaisedButton>
            </a>

            <a
              href="https://github.com/johngatchemark"
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline inline-block"
            >
              <RaisedButton
                color="bg"
                borderColor="fg"
                darkBorderColor="ui"
                textColor="fg"
                dropShadowColor="fg"
                hoverColor="#e4e4dd"
                darkHoverColor="#1e1f29"
                className="transition-none!"
              >
                <span>GitHub</span>
                <ExternalLink size={14} />
              </RaisedButton>
            </a>
          </div>
        </div>

        {/* Right Column: Compose Message Card */}
        <div className="flex flex-col flex-1 text-left w-full lg:w-1/2 min-w-0">
          <FakeMacWindow
            displayFilePath="> compose_message()"
            className="w-full"
          >
            <form onSubmit={handleSubmit} noValidate className="p-6 flex flex-col gap-4">
              {/* Name Field */}
              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-[11px] text-jm-muted-fg uppercase tracking-wider font-semibold">
                  NAME
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                  }}
                  placeholder="Your name"
                  className={`bg-[#f5f5f0] dark:bg-[#181920] border text-jm-fg px-4 py-2.5 rounded-xs font-sans text-sm outline-none transition-colors ${
                    errors.name
                      ? "border-red-500 dark:border-red-500 focus:border-red-500 bg-red-500/5"
                      : "border-jm-fg/80 dark:border-jm-ui focus:border-jm-primary"
                  }`}
                />
                {errors.name && (
                  <div className="flex items-center gap-1.5 mt-0.5 text-red-600 dark:text-red-400 text-xs font-mono bg-red-500/10 border border-red-500/30 px-2.5 py-1 rounded-xs animate-fadeIn">
                    <AlertCircle size={13} className="shrink-0 text-red-500" />
                    <span>{errors.name}</span>
                  </div>
                )}
              </div>

              {/* Email Field */}
              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-[11px] text-jm-muted-fg uppercase tracking-wider font-semibold">
                  EMAIL
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
                  }}
                  placeholder="your@email.com"
                  className={`bg-[#f5f5f0] dark:bg-[#181920] border text-jm-fg px-4 py-2.5 rounded-xs font-sans text-sm outline-none transition-colors ${
                    errors.email
                      ? "border-red-500 dark:border-red-500 focus:border-red-500 bg-red-500/5"
                      : "border-jm-fg/80 dark:border-jm-ui focus:border-jm-primary"
                  }`}
                />
                {errors.email && (
                  <div className="flex items-center gap-1.5 mt-0.5 text-red-600 dark:text-red-400 text-xs font-mono bg-red-500/10 border border-red-500/30 px-2.5 py-1 rounded-xs animate-fadeIn">
                    <AlertCircle size={13} className="shrink-0 text-red-500" />
                    <span>{errors.email}</span>
                  </div>
                )}
              </div>

              {/* Message Field */}
              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-[11px] text-jm-muted-fg uppercase tracking-wider font-semibold">
                  MESSAGE
                </label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                    if (errors.message) setErrors((prev) => ({ ...prev, message: undefined }));
                  }}
                  placeholder="What are you building?"
                  className={`resize-y bg-[#f5f5f0] dark:bg-[#181920] border text-jm-fg px-4 py-2.5 rounded-xs font-sans text-sm outline-none transition-colors ${
                    errors.message
                      ? "border-red-500 dark:border-red-500 focus:border-red-500 bg-red-500/5"
                      : "border-jm-fg/80 dark:border-jm-ui focus:border-jm-primary"
                  }`}
                />
                {errors.message && (
                  <div className="flex items-center gap-1.5 mt-0.5 text-red-600 dark:text-red-400 text-xs font-mono bg-red-500/10 border border-red-500/30 px-2.5 py-1 rounded-xs animate-fadeIn">
                    <AlertCircle size={13} className="shrink-0 text-red-500" />
                    <span>{errors.message}</span>
                  </div>
                )}
              </div>

              {/* Success Feedback Banner */}
              {submitStatus === "success" && (
                <div className="bg-jm-primary/10 border border-jm-primary text-jm-primary p-3 rounded-xs font-mono text-xs flex items-center justify-center gap-2">
                  <Check size={16} />
                  <span>Message sent successfully! I'll get back to you soon.</span>
                </div>
              )}

              {/* Server Error Feedback Banner */}
              {submitStatus === "error" && (
                <div className="bg-red-500/10 border border-red-500/50 text-red-600 dark:text-red-400 p-3 rounded-xs font-mono text-xs flex flex-col gap-1">
                  <div className="flex items-center gap-1.5 font-semibold">
                    <AlertCircle size={14} className="shrink-0 text-red-500" />
                    <span>Delivery Error</span>
                  </div>
                  <p className="m-0 text-[11px] opacity-90">{serverError}</p>
                </div>
              )}

              {/* Submit Button */}
              {submitStatus !== "success" && (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#1a1a24] dark:bg-jm-primary text-white dark:text-[#003820] font-mono py-3 rounded-xs hover:brightness-125 border border-jm-fg dark:border-jm-primary cursor-pointer active:relative active:top-0.5 active:left-0.5 transition-all text-xs font-semibold mt-2 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={14} className="animate-spin text-jm-primary dark:text-[#003820]" />
                      <span>Sending message...</span>
                    </>
                  ) : (
                    <span>Send Message &rarr;</span>
                  )}
                </button>
              )}
            </form>
          </FakeMacWindow>
        </div>
      </div>
    </Container>
  );
}
