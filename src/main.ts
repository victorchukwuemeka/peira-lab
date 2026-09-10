const io = new IntersectionObserver(
  (entries) => {
    for (const e of entries) {
      if (e.isIntersecting) e.target.classList.add("visible");
    }
  },
  { threshold: 0.1 }
);

document
  .querySelectorAll(".item, .step, .stat, .contact-card")
  .forEach((el) => {
    el.classList.add("reveal");
    io.observe(el);
  });

const chips = document.querySelectorAll<HTMLButtonElement>(".chip");
const items = document.querySelectorAll<HTMLElement>(".item");

chips.forEach((chip) => {
  chip.addEventListener("click", () => {
    chips.forEach((c) => c.classList.remove("active"));
    chip.classList.add("active");
    const filter = chip.dataset.filter ?? "all";
    items.forEach((item) => {
      const status = item.dataset.status ?? "";
      item.classList.toggle("hidden", filter !== "all" && status !== filter);
    });
  });
});

export {};