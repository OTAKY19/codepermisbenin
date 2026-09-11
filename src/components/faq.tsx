"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Comment préparer l'examen du permis de conduire au Bénin ?",
    answer:
      "Code Permis Bénin te permet de t'entraîner avec des quiz interactifs, des examens blancs chronométrés et un suivi de progression. L'application contient toutes les questions officielles de l'examen du code de la route au Bénin, avec des explications détaillées pour chaque réponse.",
  },
  {
    question: "L'application est-elle gratuite ?",
    answer:
      "L'application offre 7 quizzes gratuits pour commencer. Pour un accès illimité à tous les quiz, examens blancs et cours, un abonnement premium à 5 000 XOF pour 90 jours est disponible via MTN MoMo, Moov Money ou Celtiis.",
  },
  {
    question: "Combien de questions comporte l'examen du code au Bénin ?",
    answer:
      "L'examen officiel du code de la route au Bénin comprend 30 questions. Le seuil de réussite est de 65% (20 bonnes réponses minimum). Code Permis Bénin te permet de t'entraîner sur l'ensemble du questionnaire avec des examens blancs fidèles à la réalité.",
  },
  {
    question: "Quels sont les moyens de paiement acceptés ?",
    answer:
      "Nous acceptons le paiement par mobile money via FedaPay, un opérateur agréé en République du Bénin : MTN MoMo, Moov Money et Celtiis. Le paiement est sécurisé et tes données bancaires ne sont jamais conservées.",
  },
  {
    question: "L'application fonctionne-t-elle hors connexion ?",
    answer:
      "Oui ! Les quiz et cours téléchargés sont disponibles hors connexion. Les questions audio et images sont mises en cache automatiquement pour une utilisation sans connexion internet.",
  },
  {
    question: "Comment fonctionne le système de codes d'activation ?",
    answer:
      "Les auto-écoles partenaires peuvent acheter des codes d'activation en lots. Ces codes sont distribués aux élèves pour activer l'accès premium. C'est un moyen pratique pour les écoles de fournir l'accès à leurs étudiants.",
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="px-5 py-20 md:py-24" id="faq">
      <div className="mx-auto max-w-[720px]">
        <div className="mb-12 max-w-[560px]">
          <div className="mb-3 flex items-center gap-2 font-mono text-[.72rem] font-medium uppercase tracking-[.2em] text-brand">
            <span aria-hidden="true" className="opacity-85">
              {"//"}
            </span>
            <span>Aide</span>
          </div>
          <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-[580] leading-[1.1] tracking-[-.03em] text-fg">
            Questions fréquentes
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-2xl border border-border bg-surface overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between p-5 text-left text-[.95rem] font-medium text-fg hover:bg-surface-hover transition-colors"
                aria-expanded={openIndex === i}
              >
                <span>{faq.question}</span>
                <svg
                  className={`h-5 w-5 shrink-0 transition-transform duration-200 ${
                    openIndex === i ? "rotate-180 text-brand" : "text-muted"
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {openIndex === i && (
                <div className="px-5 pb-5 text-[.92rem] leading-relaxed text-fg-secondary border-t border-border pt-4">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
