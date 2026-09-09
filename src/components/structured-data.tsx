export function StructuredData() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Code Permis Bénin",
    url: "https://codepermisbenin.vercel.app",
    description:
      "Application de préparation à l'examen du code de la route au Bénin. Quiz interactifs, examens blancs chronométrés et suivi de progression.",
    applicationCategory: "EducationalApplication",
    operatingSystem: "Android",
    offers: {
      "@type": "Offer",
      price: "5000",
      priceCurrency: "XOF",
      description: "Premium 90 jours",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "1200",
      bestRating: "5",
    },
    author: {
      "@type": "Organization",
      name: "Bénin Technologie Consulting",
      url: "https://codepermisbenin.vercel.app",
    },
    inLanguage: "fr",
    screenshot: "https://codepermisbenin.vercel.app/screenshot-app.jpg",
    featureList: [
      "Quiz interactifs avec audio",
      "Examens blancs chronométrés",
      "Suivi de progression",
      "Cours et séries par chapitre",
      "Révision ciblée des erreurs",
    ],
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Bénin Technologie Consulting",
    url: "https://codepermisbenin.vercel.app",
    logo: "https://codepermisbenin.vercel.app/logo_pastel.png",
    contactPoint: {
      "@type": "ContactPoint",
      email: "privacy@btcbenin.com",
      contactType: "customer service",
      availableLanguage: "French",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Comment préparer l'examen du permis de conduire au Bénin ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Code Permis Bénin te permet de t'entraîner avec des quiz interactifs, des examens blancs chronométrés et un suivi de progression. L'application contient toutes les questions officielles de l'examen du code de la route au Bénin.",
        },
      },
      {
        "@type": "Question",
        name: "L'application est-elle gratuite ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "L'application offre 7 quizzes gratuits. Pour un accès illimité à tous les quiz, examens blancs et cours, un abonnement premium à 5 000 XOF pour 90 jours est disponible via MTN MoMo, Moov ou Celtiis.",
        },
      },
      {
        "@type": "Question",
        name: "Combien de questions comporte l'examen du code au Bénin ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "L'examen officiel du code de la route au Bénin comprend 30 questions. Le seuil de réussite est de 65%. Code Permis Bénin te permet de t'entraîner sur l'ensemble des questions avec des examens blancs simulés.",
        },
      },
      {
        "@type": "Question",
        name: "Quels sont les moyens de paiement acceptés ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nous acceptons le paiement par mobile money via FedaPay : MTN MoMo, Moov Money et Celtiis. Le paiement est sécurisé et traité par un opérateur agréé en République du Bénin.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
