const answers = {
  pricing: {
    title: "Why did we change pricing last quarter?",
    body: "Sample notes say the team moved from a single monthly seat to usage bands after a customer asked for a cheaper entry and a clearer overage path. The answer is labeled simulated because these notes were not pulled from a live CRM.",
    sources: "Source cards: pasted pricing memo · pasted support note. Owner on the open decision: whoever the pasted notes name — not a live directory.",
  },
  hire: {
    title: "Who owns onboarding for new hires?",
    body: "In the demo notes, onboarding sits with the operator who wrote the latest runbook, not with an HR system. CortexHQ will not invent an owner if the pasted text does not name one.",
    sources: "Source cards: pasted runbook excerpt. Timeline: one run, one question, no live Slack history.",
  },
  conflict: {
    title: "Where do the docs disagree with later notes?",
    body: "The simulator is built to surface disagreement instead of averaging it away. If a pasted doc says one thing and a later note says another, both stay visible.",
    sources: "Source cards: older doc · newer note. Staleness is a flag, not a silent rewrite.",
  },
};

document.getElementById("ask-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const key = new FormData(event.target).get("q");
  const item = answers[key];
  const node = document.getElementById("answer");
  node.hidden = false;
  node.innerHTML = `<h3>${item.title}</h3><p>${item.body}</p><p>${item.sources}</p><p><strong>Simulated.</strong> No live customer data.</p>`;
});

document.getElementById("request-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(event.target);
  const subject = encodeURIComponent("CortexHQ simulator walkthrough");
  const body = encodeURIComponent(
    `Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("note")}`,
  );
  const status = document.getElementById("request-status");
  status.hidden = false;
  status.textContent =
    "This page does not send mail. Your mail client will open with a draft.";
  window.location.href = `mailto:?subject=${subject}&body=${body}`;
});
