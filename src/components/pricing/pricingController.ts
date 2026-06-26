import { buildPricingMatrix, CurrencyCode, BillingCycle, TierId } from "@/lib/pricingMatrix";

const matrix = buildPricingMatrix();

let currentCurrency: CurrencyCode = "INR";
let currentBilling: BillingCycle = "monthly";

let priceNodes: HTMLElement[] = [];
let cycleNodes: HTMLElement[] = [];
let annualBadgeNode: HTMLElement | null = null;
let billingPillContainer: HTMLElement | null = null;
let currencySelectText: HTMLElement | null = null;

export function initPricing() {
  priceNodes = Array.from(document.querySelectorAll("[data-price-node]"));
  cycleNodes = Array.from(document.querySelectorAll("[data-cycle-node]"));
  annualBadgeNode = document.querySelector("[data-savings-badge]");
  billingPillContainer = document.querySelector("[data-active-billing]");
  currencySelectText = document.querySelector("[data-currency-selected-text]");

  window.addEventListener("datapulse:currency-change", handleCurrencyChange as EventListener);
  window.addEventListener("datapulse:billing-change", handleBillingChange as EventListener);
}

export function cleanupPricing() {
  window.removeEventListener("datapulse:currency-change", handleCurrencyChange as EventListener);
  window.removeEventListener("datapulse:billing-change", handleBillingChange as EventListener);
}

export function setCurrency(currency: CurrencyCode) {
  window.dispatchEvent(new CustomEvent("datapulse:currency-change", { detail: currency }));
}

export function setBilling(billing: BillingCycle) {
  window.dispatchEvent(new CustomEvent("datapulse:billing-change", { detail: billing }));
}

function handleCurrencyChange(e: CustomEvent<CurrencyCode>) {
  if (currentCurrency === e.detail) return;
  currentCurrency = e.detail;
  updateDOM();
}

function handleBillingChange(e: CustomEvent<BillingCycle>) {
  if (currentBilling === e.detail) return;
  currentBilling = e.detail;
  updateDOM();
}

function updateDOM() {
  priceNodes.forEach((node) => {
    const tier = node.getAttribute("data-tier") as TierId;
    if (matrix[tier]) {
      node.textContent = matrix[tier][currentCurrency][currentBilling];
      node.setAttribute("data-currency", currentCurrency);
      node.setAttribute("data-billing", currentBilling);
    }
  });

  cycleNodes.forEach((node) => {
    node.textContent = currentBilling === "annual" ? "/month, billed annually" : "/month";
  });

  if (annualBadgeNode) {
    if (currentBilling === "annual") {
      annualBadgeNode.style.opacity = "1";
      annualBadgeNode.style.transform = "translateY(0) scale(1)";
    } else {
      annualBadgeNode.style.opacity = "0";
      annualBadgeNode.style.transform = "translateY(10px) scale(0.95)";
    }
  }

  if (billingPillContainer) {
    billingPillContainer.setAttribute("data-active-billing", currentBilling);
  }

  if (currencySelectText) {
    const symbols: Record<CurrencyCode, string> = { INR: "₹", USD: "$", EUR: "€" };
    currencySelectText.textContent = `${currentCurrency} (${symbols[currentCurrency]})`;
  }
}
