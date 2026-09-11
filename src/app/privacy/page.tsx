import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: "Politique de confidentialité — Code Permis Bénin",
};

export default function PrivacyPage() {
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
            <span className="legal-eyebrow-label">
              Politique de confidentialité
            </span>
          </div>
          <h1>Politique de confidentialité</h1>
          <p className="legal-subtitle">Juillet 2026</p>
        </header>

        <div className="callout">
          <p>
            <strong>Déclaration APDP obligatoire</strong>
          </p>
          <p style={{ marginTop: 4 }}>
            Conformément à l&apos;article 405 du Code du numérique, BTC a
            effectué la déclaration de ce traitement de données personnelles
            auprès de l&apos;Autorité de Protection des Données Personnelles
            (APDP Bénin, apdp.bj). La référence de déclaration est disponible
            sur demande écrite à{" "}
            <a href="mailto:privacy@btcbenin.com">privacy@btcbenin.com</a>.
          </p>
        </div>

        <h2>1. Responsable du traitement</h2>
        <p>
          <strong>Identité du responsable (Art. 387–390)</strong>
        </p>
        <p>
          BÉNIN TECHNOLOGIE CONSULTING, Cotonou, République du Bénin.
          <br />
          Email DPO :{" "}
          <a href="mailto:privacy@btcbenin.com">privacy@btcbenin.com</a>
        </p>
        <p>
          BTC a désigné un Responsable de la Protection des Données (DPO)
          conformément aux obligations imposées par le Code du numérique pour les
          responsables de traitement traitant des données personnelles à grande
          échelle (Art. 393).
        </p>

        <hr className="legal-divider" />

        <h2>2. Données collectées</h2>
        <p>
          <strong>Nature des données traitées (Art. 379–386)</strong>
        </p>
        <p>
          <strong>Espace Élève (traitement anonymisé) :</strong>
        </p>
        <ul>
          <li>
            Identifiant technique d&apos;appareil (non nominatif, généré
            localement)
          </li>
          <li>
            Empreinte technique (modèle, OS version) : finalité anti-fraude
            uniquement
          </li>
          <li>
            Données comportementales de progression (scores, catégories,
            fréquence)
          </li>
          <li>
            Numéro de téléphone haché (uniquement lors de la vérification OTP
            anti-fraude)
          </li>
        </ul>

        <div className="callout">
          <p>
            <strong>Principe de minimisation des données</strong>
          </p>
          <p style={{ marginTop: 4 }}>
            Conformément à l&apos;article 396 du Code du numérique, BTC ne
            collecte que les données strictement nécessaires aux finalités
            déclarées. Aucune donnée sensible au sens de l&apos;article 400
            (santé, origine ethnique, convictions) n&apos;est collectée.
          </p>
        </div>

        <hr className="legal-divider" />

        <h2>3. Finalités du traitement</h2>
        <p>
          <strong>
            Pourquoi vos données sont traitées (Art. 394–395)
          </strong>
        </p>
        <ul>
          <li>
            Fourniture du service pédagogique de préparation au permis
          </li>
          <li>
            Gestion des accès premium et vérification des codes
            d&apos;activation
          </li>
          <li>
            Prévention de la fraude et sécurisation du système de comptage des
            essais
          </li>
          <li>
            Traitement des paiements via FedaPay (opérateur agréé en RB)
          </li>
          <li>
            Amélioration du contenu pédagogique (données agrégées et
            anonymisées)
          </li>
          <li>Gestion des réclamations et du support utilisateur</li>
        </ul>

        <div className="callout callout-red">
          <p>
            <strong>Aucune finalité commerciale tierce</strong>
          </p>
          <p style={{ marginTop: 4 }}>
            Conformément à l&apos;article 394 du Code du numérique, vos données
            ne sont pas utilisées à des fins autres que celles déclarées. BTC ne
            vend, ne loue et ne partage jamais vos données personnelles à des
            fins publicitaires ou commerciales avec des tiers.
          </p>
        </div>

        <hr className="legal-divider" />

        <h2>4. Droits des personnes concernées</h2>
        <p>
          <strong>Vos droits garantis par le Code du numérique</strong>
        </p>

        <Right title="Droit d'accès (Art. 437)">
          Obtenir une copie de toutes les données personnelles que nous détenons
          à votre sujet. Réponse sous 30 jours.
        </Right>
        <Right title="Droit à la portabilité (Art. 438)">
          Recevoir vos données dans un format structuré, couramment utilisé et
          lisible par machine.
        </Right>
        <Right title="Droit d'interrogation (Art. 439)">
          Savoir si des données vous concernant sont traitées par BTC et dans
          quel cadre.
        </Right>
        <Right title="Droit d'opposition (Art. 440)">
          Vous opposer à certains traitements de vos données, notamment à des
          fins de profilage.
        </Right>
        <Right title="Droit de rectification / suppression (Art. 441)">
          Corriger des données inexactes ou obtenir l&apos;effacement de données
          traitées de façon illicite.
        </Right>
          <Right title="Droit à l'oubli (Art. 443)">
          Demander l&apos;effacement de vos données après la durée de
          conservation légale.
        </Right>

        <p style={{ marginTop: 16 }}>
          Pour exercer ces droits, adressez votre demande à{" "}
          <a href="mailto:privacy@btcbenin.com">privacy@btcbenin.com</a>,
          accompagnée d&apos;une copie de votre pièce d&apos;identité. BTC
          s&apos;engage à répondre dans un délai de 30 jours conformément
          à l&apos;article 437 du Code du numérique.
        </p>

        <div className="callout">
          <p>
            <strong>Saisine de l&apos;APDP</strong>
          </p>
          <p style={{ marginTop: 4 }}>
            Si vous estimez que vos droits ne sont pas respectés, vous pouvez
            saisir l&apos;Autorité de Protection des Données Personnelles du
            Bénin (APDP) à l&apos;adresse : apdp.bj, tél. : +229 21 32 57 88.
          </p>
        </div>

        <hr className="legal-divider" />

        <h2>5. Hébergement, sécurité et transferts</h2>
        <p>
          <strong>Protection technique des données (Art. 405–414)</strong>
        </p>
        <p>
          Les données sont hébergées sur Supabase (chiffrement AES-256 au
          repos, protocole TLS/HTTPS en transit). Les données sensibles locales
          sont stockées via un stockage sécurisé chiffré sur l&apos;appareil.
        </p>
        <p>
          <em>
            Nous prenons des mesures raisonnables pour protéger vos données,
            mais aucun système n&apos;est totalement inviolable.
          </em>
        </p>

        <div style={{ margin: "12px 0", display: "flex", gap: 8, alignItems: "center" }}>
          <span>Statut du chiffrement</span>
          <span
            style={{
              display: "inline-block",
              padding: "2px 10px",
              borderRadius: 12,
              fontSize: ".8rem",
              fontWeight: 600,
              background: "var(--color-surface)",
              color: "var(--color-fg)",
              border: "1px solid var(--color-border)",
            }}
          >
            ACTIF
          </span>
        </div>

        <p>
          Les paiements sont traités par FedaPay, opérateur de paiement agréé
          en République du Bénin. BTC ne conserve aucune donnée de paiement.
        </p>

        <hr className="legal-divider" />

        <h2>6. Durées de conservation</h2>
        <p>
          <strong>Limitation de la conservation (Art. 396)</strong>
        </p>
        <ul>
          <li>
            Données élève : 24 mois après la dernière utilisation active
          </li>
          <li>
            Journaux de connexion : 12 mois maximum puis suppression automatique
          </li>
          <li>
            Données de paiement : conservées par FedaPay selon leurs propres
            politiques réglementaires
          </li>
        </ul>

        <div className="legal-contact">
          <p>
            <strong>
              Notre délégué à la protection des données (DPO) est à votre
              disposition pour toute précision.
            </strong>
          </p>
          <p>
            <a href="mailto:privacy@btcbenin.com">privacy@btcbenin.com</a>
          </p>
          <p>BÉNIN TECHNOLOGIE CONSULTING, Cotonou</p>
          <p>
            <a href="https://apdp.bj" target="_blank" rel="noopener noreferrer">
              apdp.bj
            </a>{" "}
            · +229 21 32 57 88
          </p>
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

function Right({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        margin: "12px 0",
        padding: 12,
        background: "var(--color-surface)",
        borderRadius: 8,
      }}
    >
      <p>
        <strong>{title}</strong>
      </p>
      <p style={{ marginTop: 4, fontSize: ".95rem" }}>{children}</p>
    </div>
  );
}
