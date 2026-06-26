"use client";

import React, { useState } from "react";

const faqs = [
  {
    id: "faq-1",
    question: "How does DataPulse handle schema evolution?",
    answer: "Our AI Schema Detection automatically infers changes in your source data and non-destructively maps new fields to your destination tables without interrupting active pipelines or requiring manual migrations.",
  },
  {
    id: "faq-2",
    question: "Is my data stored on your servers?",
    answer: "No. DataPulse acts as a pass-through processing engine. We transiently process events in memory to apply transformations and immediately flush them to your designated destinations. We do not persist your payload data.",
  },
  {
    id: "faq-3",
    question: "What happens if a destination API goes down?",
    answer: "DataPulse features built-in automated backpressure management and exponential backoff retries. If a destination is unreachable, events are safely queued in our dead-letter persistence layer until the endpoint recovers.",
  },
  {
    id: "faq-4",
    question: "Can I write custom transformation logic?",
    answer: "Yes. While our no-code builder handles 90% of use cases, you can inject custom JavaScript or Python snippets into any pipeline stage for complex, proprietary transformations.",
  },
  {
    id: "faq-5",
    question: "Is there a limit to how many events I can process?",
    answer: "Our Enterprise tier offers truly unlimited throughput, running on dedicated single-tenant clusters. For Pro users, soft limits apply but we scale automatically to absorb unexpected traffic spikes without dropping events.",
  },
];

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(faqs[0].id);

  return (
    <section id="faq" className="py-24 px-6 bg-oceanic-noir border-t border-mystic-mint/10 reveal-up">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[length:var(--text-section)] font-bold font-display text-arctic mb-4 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="font-body text-arctic/60 text-lg">
            Everything you need to know about the product and billing.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className={`border border-mystic-mint/10 rounded-xl overflow-hidden transition-colors duration-300 ${
                  isOpen ? "bg-nocturnal shadow-lg shadow-black/20" : "bg-transparent hover:bg-nocturnal/50"
                }`}
              >
                <button
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-forsythia focus-visible:ring-inset"
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                >
                  <span className="font-display font-bold text-lg text-arctic pr-8">
                    {faq.question}
                  </span>
                  <div
                    className={`relative w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                      isOpen ? "bg-forsythia text-oceanic-noir" : "bg-mystic-mint/10 text-forsythia"
                    }`}
                  >
                    {/* Creative Plus/Minus Animation */}
                    <span
                      className={`absolute block w-3.5 h-[2px] bg-current transition-transform duration-300 ease-smooth ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                    <span
                      className={`absolute block w-3.5 h-[2px] bg-current transition-transform duration-300 ease-smooth ${
                        isOpen ? "rotate-180 opacity-0" : "rotate-90"
                      }`}
                    />
                  </div>
                </button>

                <div
                  id={`faq-answer-${faq.id}`}
                  className="grid transition-[grid-template-rows] duration-300 ease-smooth"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 pt-1 font-body text-arctic/70 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
