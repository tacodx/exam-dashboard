import type { Topic } from './types'

export const TOPICS: Topic[] = [
  // --- Diagnose & Störungsbeseitigung ---
  {
    id: 'stoerungen-lokalisieren',
    label: 'Störungen in der Infrastruktur lokalisieren und eingrenzen',
    section: 'diagnose',
    subtopics: [
      'Störungen in der Gesamtinfrastruktur lokalisieren und eingrenzen',
      'Lösungsmaßnahmen einleiten und umsetzen',
      'Soft- und Hardware zur Sicherstellung des Betriebs einsetzen',
      'Testergebnisse auswerten',
    ],
  },
  {
    id: 'stoerungsbeseitigung-hw-sw',
    label: 'Soft- und Hardware zur Störungsbeseitigung, Testergebnisse auswerten',
    section: 'diagnose',
    subtopics: [
      'Debugging-Methoden und Werkzeuge',
      'Statische und dynamische Testverfahren',
      'Black Box / White Box Tests',
      'Testergebnisse dokumentieren und auswerten',
      'Komponententest, Integrationstest, Systemtest',
    ],
  },
  {
    id: 'diagnose-prozessdaten',
    label: 'Diagnose- und Prozessdaten auswerten und Maßnahmen ableiten',
    section: 'diagnose',
    subtopics: [
      'Diagnose- und Prozessdaten analysieren',
      'Maßnahmen aus Diagnosedaten ableiten',
      'Monitoring-Tools und Ergebnisinterpretation',
      'SNMP, S.M.A.R.T., Systemlastanalyse',
      'Standard Operation Procedures (SOP)',
    ],
  },
  {
    id: 'it-sicherheit-massnahmen',
    label: 'IT-Sicherheitsmaßnahmen konfigurieren und implementieren',
    section: 'diagnose',
    subtopics: [
      'Kunden- und anwendungsspezifische IT-Sicherheitsmaßnahmen konfigurieren',
      'Schwachstellen bewerten und Maßnahmen einleiten',
      'Penetrationstests, Device Security Check',
      'Identity & Access Management',
      'Schwachstellenanalyse',
      'Bedrohungsszenarien: Man-in-the-Middle, SQL-Injection, DDoS',
    ],
  },
  // --- Betrieb und Erweiterung vernetzter Systeme ---
  {
    id: 'netzwerke-osi',
    label: 'Netzwerke & OSI/TCP-IP Schichtenmodell',
    section: 'betrieb',
    subtopics: [
      'OSI-Schichtenmodell (7 Schichten) und TCP/IP-Modell',
      'IPv4 / IPv6, MAC-Adressen',
      'Routing, Switching, ARP',
      'TCP / UDP',
      'HTTP / HTTPS',
      'Netzwerkkomponenten: Switch, Bridge, Router, Firewall',
      'Netzwerktopologien: LAN, WAN, MAN, GAN',
    ],
  },
  {
    id: 'vlan-vpn-dns-dhcp',
    label: 'VLAN / VPN / DNS / DHCP / RADIUS',
    section: 'betrieb',
    subtopics: [
      'VLAN-Konzepte und Konfiguration',
      'VPN-Modelle: Tunneling, IPsec, SSL-VPN',
      'DNS: Namensauflösung, Zonendateien',
      'DHCP: Adressvergabe, Lease-Zeit',
      'RADIUS / Kerberos: Zugangskontrolle im Netz',
      'Strukturierte Verkabelung',
      'Drahtlos: WLAN, Bluetooth, Sicherheit in Drahtlosnetzen',
    ],
  },
  {
    id: 'speicherloesungen',
    label: 'Speicherlösungen (RAID, NAS, SAN, iSCSI)',
    section: 'betrieb',
    subtopics: [
      'RAID-Level: 0, 1, 5, 6, 10',
      'NAS (Network Attached Storage)',
      'SAN (Storage Area Network)',
      'iSCSI, SMB, NFS, FibreChannel',
      'On-Premises vs. Cloud-Speicher',
      'SaaS, IaaS, PaaS',
      'Berechtigungskonzepte und Zugriffsschutz',
      'Datenaustauschformate: XML, JSON, CSV',
    ],
  },
  {
    id: 'iot-cps',
    label: 'IoT / Cyber-physische Systeme / MQTT / OPC-UA',
    section: 'betrieb',
    subtopics: [
      'IoT-Referenzmodell, ETSI M2M',
      'Cyber-physische Systeme (CPS)',
      'Protokolle: MQTT, OPC-UA, LoRa, ZigBee, Bluetooth',
      'Sensoren und Aktoren',
      'REST-API, SOAP',
      'Signal- und Datenübertragungseinrichtungen',
      'Industrie 4.0, Gebäudeautomatisierung',
    ],
  },
  {
    id: 'monitoring-verfuegbarkeit',
    label: 'Monitoring & Systemverfügbarkeit (SNMP, MTBF, SLA)',
    section: 'betrieb',
    subtopics: [
      'Monitoring-Tools: SNMP, S.M.A.R.T.',
      'MTBF / AFR: Ausfallwahrscheinlichkeiten',
      'Hochverfügbarkeit und Redundanzen',
      'USV (Unterbrechungsfreie Stromversorgung)',
      'Service Level Agreement (SLA), Service Level 1-3',
      'Incident Management, Ticketsystem',
      'Disaster Recovery, Notfallkonzept',
      'PDCA-Zyklus, Predictive Maintenance',
    ],
  },
  {
    id: 'programmierung',
    label: 'Programmierung (Algorithmen, SQL, Shell/Python, UML)',
    section: 'betrieb',
    subtopics: [
      'Algorithmen in Pseudocode darstellen',
      'Kontrollstrukturen: Verzweigung, Schleife',
      'UML: Klassendiagramm, Aktivitätsdiagramm, Sequenzdiagramm, Use-Case',
      'SQL: SELECT, JOIN, GROUP BY, ORDER BY, Aggregatfunktionen',
      'Datenbankmodellierung: ER-Modell, Normalformen 1-3',
      'Shell-Scripting (Bash, PowerShell)',
      'Python-Grundlagen für Automatisierung',
      'Black Box / White Box Tests, TDD',
    ],
  },
  {
    id: 'it-sicherheit-normen',
    label: 'IT-Sicherheit (ISO 27000, BSI Grundschutz, Firewalls, DMZ)',
    section: 'betrieb',
    subtopics: [
      'ISO 2700x: Informationssicherheits-Managementsystem (ISMS)',
      'BSI IT-Grundschutz: Bausteine, Schutzbedarfsanalyse',
      'Schutzziele: Vertraulichkeit, Integrität, Verfügbarkeit',
      'Firewall-Regelwerk, DMZ-Konzepte',
      'Verschlüsselung: symmetrisch, asymmetrisch, hybrid',
      'Hashwerte, Zertifikate, digitale Signaturen',
      'Authentifizierung: Zweifaktor, Passwort-Policy',
      'DSGVO: personenbezogene Daten, Rechte der Betroffenen',
    ],
  },
  {
    id: 'cloud-industrie40',
    label: 'Cloud / Edge / Fog Computing / Industrie 4.0',
    section: 'betrieb',
    subtopics: [
      'Cloud-Modelle: Public, Private, Hybrid Cloud',
      'Edge Computing und Fog Computing',
      'Data Mining, Big Data',
      'Blockchain-Technologie (Grundlagen)',
      'Threat Model Analysis',
      'Industrie 4.0: vernetzte Produktion',
      'RAMS: Reliability, Availability, Maintainability, Safety',
      'Systemauslastung überwachen und dokumentieren',
    ],
  },
  // --- Wirtschafts- und Sozialkunde ---
  {
    id: 'arbeitsrecht',
    label: 'Arbeits- und Tarifrecht (BBiG, Arbeitsschutzgesetz)',
    section: 'wiso',
    subtopics: [
      'Berufsbildungsgesetz (BBiG): Rechte und Pflichten',
      'Ausbildungsvertrag: Inhalte, Dauer, Probezeit',
      'Kündigungsbedingungen',
      'Grundsätze des Individual- und Kollektivarbeitsrechts',
      'Tarifverträge, Tarifautonomie, Schlichtung',
      'Lohn- und Gehaltsformen, Brutto/Netto',
      'Sozialversicherung, Lohnsteuer',
      'Betriebsverfassungsgesetz, Betriebsrat',
    ],
  },
  {
    id: 'betriebsorganisation',
    label: 'Betriebsorganisation & Rechtsformen',
    section: 'wiso',
    subtopics: [
      'Rechtsformen: GmbH, AG, GbR, KG, Einzelunternehmen',
      'Organisationsstrukturen: Einlinien-, Mehrlinien-, Matrixsystem',
      'Wirtschaftliche Verflechtungen: Konzern, Kartell, Fusion',
      'Ziele von Betrieben: Produktivität, Wirtschaftlichkeit, Rentabilität',
      'Globalisierung, Soziale Marktwirtschaft',
      'Projektmanagement: Gantt, Netzplan, kritischer Weg, SMART',
      'Kaufvertrag, Handelsrecht, Eigentumsvorbehalt',
      'Verbraucherschutz',
    ],
  },
  {
    id: 'umweltschutz',
    label: 'Umweltschutz & Arbeitsschutz',
    section: 'wiso',
    subtopics: [
      'Umweltschutzziele und gesetzliche Grundlagen',
      'Energieeffizienz, Green IT',
      'Entsorgung und Recycling (ElektroG)',
      'Arbeitsschutzgesetz (ArbSchG)',
      'Gefährdungsbeurteilung',
      'Ergonomie am Arbeitsplatz',
    ],
  },
  {
    id: 'digitale-kommunikation',
    label: 'Vernetztes Zusammenarbeiten / Datenschutz / Netiquette',
    section: 'wiso',
    subtopics: [
      'Kollaborationstools: Wiki, Ticketsystem, Chat',
      'Datenschutz: DSGVO, personenbezogene Daten',
      'Netiquette und professionelle Kommunikation',
      'Urheberrecht, Lizenzen (Open Source, Creative Commons)',
      'Informationelle Selbstbestimmung',
    ],
  },
]

export const TOPIC_IDS = TOPICS.map(t => t.id)

export function getTopic(id: string): Topic | undefined {
  return TOPICS.find(t => t.id === id)
}

export const SECTIONS = ['diagnose', 'betrieb', 'wiso'] as const

export const SECTION_LABELS: Record<string, string> = {
  diagnose: 'Diagnose & Störungsbeseitigung',
  betrieb: 'Betrieb vernetzter Systeme',
  wiso: 'Wirtschafts- & Sozialkunde',
}
