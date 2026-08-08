import { useState } from "react";
import Container from "../../../components/container";
import RaisedButton from "../../../components/raised-button";
import FakeMacWindow from "../../../components/fake-mac-window";
import { Mail, Check, ExternalLink } from "lucide-react";

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("johngatchemark@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
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
            I'm open to full-time roles, research collaborations, and
            interesting side projects. Drop me a message or reach out directly.
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
                johngatchemark@gmail.com
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
            <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-[11px] text-jm-muted-fg uppercase tracking-wider font-semibold">
                  NAME
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  className="bg-[#f5f5f0] dark:bg-[#181920] border border-jm-fg/80 dark:border-jm-ui text-jm-fg px-4 py-2.5 rounded-xs font-sans text-sm outline-none focus:border-jm-primary transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-[11px] text-jm-muted-fg uppercase tracking-wider font-semibold">
                  EMAIL
                </label>
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  className="bg-[#f5f5f0] dark:bg-[#181920] border border-jm-fg/80 dark:border-jm-ui text-jm-fg px-4 py-2.5 rounded-xs font-sans text-sm outline-none focus:border-jm-primary transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-[11px] text-jm-muted-fg uppercase tracking-wider font-semibold">
                  MESSAGE
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="What are you building?"
                  className="resize-y bg-[#f5f5f0] dark:bg-[#181920] border border-jm-fg/80 dark:border-jm-ui text-jm-fg px-4 py-2.5 rounded-xs font-sans text-sm outline-none focus:border-jm-primary transition-colors"
                />
              </div>

              {submitted ? (
                <div className="bg-jm-primary/10 border border-jm-primary text-jm-primary p-3 rounded-xs font-mono text-xs text-center">
                  &check; Message sent successfully! I'll get back to you soon.
                </div>
              ) : (
                <button
                  type="submit"
                  className="w-full bg-[#1a1a24] dark:bg-jm-primary text-white dark:text-[#003820] font-mono py-3 rounded-xs hover:brightness-125 border border-jm-fg dark:border-jm-primary cursor-pointer active:relative active:top-0.5 active:left-0.5 transition-all text-xs font-semibold mt-2"
                >
                  Send Message &rarr;
                </button>
              )}
            </form>
          </FakeMacWindow>
        </div>
      </div>
    </Container>
  );
}
