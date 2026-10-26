import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Index } from "@/routes/index";
import { copy } from "@/lib/content";

// The English wording below is the user's own brief; it must stay verbatim.
const BRIEF_EN = {
  headline: "Tailored Learning Plans: Empowering Your Child to Speak Chinese with Confidence!",
  subhead:
    "100% Premium Native Teachers. Specialized in Chinese Education for Overseas Youth, with Custom Adult Programs.",
  cta: "Get Your Free Trial Lesson",
  feature1: "No gimmicks. Unlimited free trials until you find the perfect teacher.",
  feature3: "Free cancellation up to 15 mins before class. No forced large packages. Learn on your terms.",
  directorHeading: "The quality of education lies in the unseen details.",
  directorBody:
    "Hello, I'm the Director of EduFlex. Here, \"personalized learning\" is more than just a buzzword. Every tailored study plan is the result of careful collaboration between me and our frontline teachers. I personally guarantee the quality of your child's education.",
  path4: "Tailored to your real life and career goals. Skip rigid textbooks. We match practical scenarios so every conversation adds value to your life.",
  contactHeading: "Book a Free Trial",
  submit: "Book Now",
};

function renderPage() {
  return render(<Index />);
}

function toEnglish() {
  fireEvent.click(screen.getByRole("button", { name: "EN", exact: true }));
}

describe("Language toggle", () => {
  it("opens in Chinese and swaps the whole page to the supplied English copy", () => {
    renderPage();

    expect(screen.getByText("量身定制专属方案，")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "立即预约" })).toBeInTheDocument();

    toEnglish();

    const h1 = screen.getByRole("heading", { level: 1 });
    expect(h1.textContent).toContain("Tailored Learning Plans:");
    expect(h1.textContent).toContain("Empowering Your Child to Speak Chinese with Confidence!");
    expect(screen.getByText(BRIEF_EN.subhead)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: BRIEF_EN.submit })).toBeInTheDocument();
    expect(screen.queryByText("立即预约")).not.toBeInTheDocument();
    expect(document.documentElement.lang).toBe("en");
  });

  it("keeps the supplied English wording verbatim", () => {
    const hero = `${copy.en.hero.titleA} ${copy.en.hero.titleB1}${copy.en.hero.titleAccent}${copy.en.hero.titleB2}`;
    expect(hero).toBe(BRIEF_EN.headline);
    expect(copy.en.hero.cta).toBe(BRIEF_EN.cta);
    expect(copy.en.features[0].desc).toBe(BRIEF_EN.feature1);
    expect(copy.en.features[2].desc).toBe(BRIEF_EN.feature3);
    expect(copy.en.director.heading).toBe(BRIEF_EN.directorHeading);
    expect(copy.en.director.body).toBe(BRIEF_EN.directorBody);
    expect(copy.en.paths.list[3].desc).toBe(BRIEF_EN.path4);
    expect(copy.en.contact.heading).toBe(BRIEF_EN.contactHeading);
  });

  it("switches booking-form validation messages to English", async () => {
    renderPage();
    toEnglish();

    fireEvent.click(screen.getByRole("button", { name: BRIEF_EN.submit }));

    await waitFor(() =>
      expect(screen.getByText("Please enter your name")).toBeInTheDocument(),
    );
  });
});
