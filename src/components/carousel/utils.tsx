import React from "react";

/**
 * Parses markdown-style links in the form "[text to display](url)" within a text string
 * and returns React nodes with formatted, underlined <a> elements.
 */
export function parseSubcaptionLinks(text?: string): React.ReactNode {
  if (!text) return null;

  const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const elements: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    // Append plain text before match
    if (match.index > lastIndex) {
      elements.push(text.substring(lastIndex, match.index));
    }

    const [, linkText, url] = match;

    elements.push(
      <a
        key={`${match.index}-${url}`}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="underline underline-offset-2 text-jm-primary dark:text-jm-accent hover:opacity-80 transition-opacity font-medium"
        onClick={(e) => e.stopPropagation()}
      >
        {linkText}
      </a>
    );

    lastIndex = regex.lastIndex;
  }

  // Append remaining plain text after last match
  if (lastIndex < text.length) {
    elements.push(text.substring(lastIndex));
  }

  return elements.length > 0 ? elements : text;
}
