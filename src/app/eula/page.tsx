import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: "Conditions d'utilisation — Code Permis Bénin",
};

export default function EulaPage() {
  return (
    <>
      <Navbar />
      <div className="legal-page">
      <div className="legal-inner">
        <header style={{ marginBottom: 40 }}>
          <div className="legal-eyebrow">
            <span className="legal-eyebrow-slash" aria-hidden="true">
              {"//"}
            </span>
            <span className="legal-eyebrow-label">Licence d&apos;utilisation</span>
          </div>
          <h1>Conditions d&apos;utilisation</h1>
          <p className="legal-subtitle">Juillet 2026</p>
        </header>

        <h2>1. Accord</h2>
        <p>
          Les présentes conditions constituent un contrat entre vous et{" "}
          <strong>BÉNIN TECHNOLOGIE CONSULTING</strong> (&laquo; BTC &raquo;,
          &laquo; nous &raquo;, &laquo; notre &raquo;) régissant
          l&apos;utilisation de l&apos;application <strong>Code Permis Bénin</strong> sur
          Android et sur le web. En utilisant Code Permis Bénin, vous acceptez
          ces conditions.
        </p>

        <hr className="legal-divider" />

        <h2>2. Licence</h2>
        <p>
          Nous vous accordons une licence <strong>personnelle</strong>,{" "}
          <strong>non transférable</strong> et <strong>révocable</strong>
          d&apos;utilisation de Code Permis Bénin sur les appareils et comptes
          que vous contrôlez. Cette licence ne transfère pas la
          propriété du logiciel.
        </p>

        <hr className="legal-divider" />

        <h2>3. Restrictions</h2>
        <p>
          <strong>Vous vous engagez à ne pas :</strong>
        </p>
        <ul>
          <li>
            Faire de la rétro-ingénierie, décompiler ou désassembler
            l&apos;application
          </li>
          <li>
            Modifier, porter ou créer des œuvres dérivées
          </li>
          <li>
            Louer, donner en sous-licence ou revendre l&apos;application
          </li>
          <li>
            Supprimer ou altérer les mentions de copyright ou la marque
          </li>
        </ul>

        <hr className="legal-divider" />

        <h2>4. Propriété intellectuelle</h2>
        <p>
          Le nom Code Permis Bénin, le logo, le design, l&apos;application et le
          code source sont la propriété de <strong>BTC</strong>. Les présentes
          conditions ne vous confèrent aucun droit sur la marque ou le code
          au-delà de l&apos;utilisation de l&apos;application telle que prévue.
        </p>

        <hr className="legal-divider" />

        <h2>5. Comportements interdits</h2>
        <p>
          <strong>Sont strictement interdits :</strong>
        </p>
        <ul>
          <li>
            Utiliser l&apos;application à des fins frauduleuses ou
            illicites
          </li>
          <li>
            Tenter de contourner le système premium ou les codes
            d&apos;activation
          </li>
          <li>
            Créer des comptes fictifs ou utiliser des identifiants
            appartenant à des tiers
          </li>
          <li>
            Interférer avec le bon fonctionnement de
            l&apos;application
          </li>
        </ul>

        <div className="callout callout-red">
          <p>
            <strong>Sanctions</strong>
          </p>
          <p style={{ marginTop: 4 }}>
            Conformément à l&apos;article 573 du Code du numérique, tout acte
            de fraude informatique est puni de peines d&apos;emprisonnement et
            d&apos;amendes. BTC se réserve le droit de suspendre tout compte
            suspecté de fraude et de signaler les faits aux autorités
            compétentes.
          </p>
        </div>

        <hr className="legal-divider" />

        <h2>6. Responsabilité</h2>
        <p>
          Code Permis Bénin est fourni <strong>&laquo; en l&apos;état &raquo;</strong>.
          Nous ne garantissons pas qu&apos;il sera ininterrompu, exempt
          d&apos;erreurs ou adapté à un usage particulier. Dans la limite de la
          loi applicable, toutes les garanties sont exclues — y compris la
          garantie de qualité marchande, d&apos;adéquation à un usage
          particulier et de non-contrefaçon.
        </p>

        <hr className="legal-divider" />

        <h2>7. Limitation de responsabilité</h2>
        <p>
          Dans la mesure permise par la loi, BTC ne saurait être tenu responsable
          des dommages indirects, accessoires, spéciaux, consécutifs ou
          punitifs découlant de votre utilisation (ou de
          l&apos;impossibilité d&apos;utiliser) Code Permis Bénin. Notre
          responsabilité totale est limitée au montant que vous nous avez payé
          pour l&apos;application, le cas échéant.
        </p>

        <hr className="legal-divider" />

        <h2>8. Paiements et remboursements</h2>
        <p>
          Les transactions financières sont traitées par{" "}
          <strong>FedaPay</strong>, opérateur de paiement agréé en République du
          Bénin. BTC ne conserve aucune donnée de paiement.
        </p>
        <p>
          Les conditions de remboursement sont celles de FedaPay et des
          plateformes de distribution (Google Play). Pour toute réclamation
          relative à un paiement, contactez-nous à{" "}
          <a href="mailto:privacy@btcbenin.com">privacy@btcbenin.com</a>.
        </p>

        <hr className="legal-divider" />

        <h2>9. Modifications</h2>
        <p>
          BTC peut modifier ces conditions à tout moment. En cas de modification
          substantielle, la date d&apos;effet en sera mise à jour. La
          continuation de l&apos;utilisation de Code Permis Bénin après cette
          modification vaut acceptation des nouvelles conditions.
        </p>

        <hr className="legal-divider" />

        <h2>10. Résiliation</h2>
        <p>
          Cette licence reste en vigueur jusqu&apos;à ce que vous supprimiez
          votre compte ou que BTC le suspende pour violation des présentes
          conditions. En cas de résiliation par BTC, votre droit
          d&apos;utiliser Code Permis Bénin prend fin immédiatement.
        </p>

        <hr className="legal-divider" />

        <h2>11. Droit applicable</h2>
        <p>
          Les présentes conditions sont régies par les lois de la{" "}
          <strong>République du Bénin</strong>, sans égard aux principes de
          conflit de lois. Tout litige sera soumis aux tribunaux compétents de{" "}
          <strong>Cotonou</strong>.
        </p>

        <hr className="legal-divider" />

        <h2>12. Protection des données</h2>
        <p>
          Vos données personnelles sont traitées conformément à notre{" "}
          <a href="/privacy">Politique de confidentialité</a> et au Code du
          numérique de la République du Bénin.
        </p>

        <div className="legal-contact">
          <p>
            <strong>
              Des questions ? Contactez-nous :
            </strong>
          </p>
          <p>
            <a href="mailto:privacy@btcbenin.com">privacy@btcbenin.com</a>
          </p>
          <p>BÉNIN TECHNOLOGIE CONSULTING, Cotonou</p>
        </div>

        <div style={{ marginTop: 40 }}>
          <Link
            href="/"
            className="text-sm"
            style={{
              color: "var(--color-muted)",
              textDecoration: "underline",
              textUnderlineOffset: 3,
              textDecorationColor: "var(--color-border-hover)",
            }}
          >
            ← Retour à l&apos;accueil
          </Link>
        </div>
      </div>
      </div>
    </>
  );
}
