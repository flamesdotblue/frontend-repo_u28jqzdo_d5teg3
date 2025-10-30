import React from 'react';
import Header from './components/Header';
import SectionNav from './components/SectionNav';
import Section from './components/Section';
import KPIGrid from './components/KPIGrid';
import { Book, Layers, Shield, ClipboardList } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <Header />

      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex gap-6">
          <SectionNav />

          <div className="flex-1 space-y-6">
            <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white shadow-sm">
              <h2 className="text-2xl font-semibold">Part I: The Strategic Framework — Context and Vision</h2>
              <p className="mt-2 max-w-3xl text-sm opacity-90">
                A comprehensive blueprint for a cloud-native, multi-tenant SaaS platform to transform disaster management and
                citizen engagement across Andhra Pradesh—driving speed, transparency, and trust.
              </p>
            </div>

            <KPIGrid />

            <Section
              id="part-i"
              title="Executive Summary"
              subtitle="Project goals, objectives, impact, and headline outcomes"
              icon={Book}
            >
              <ul>
                <li>Transform disaster management with a secure, cloud-native platform that unifies data, workflows, and analytics.</li>
                <li>Projected savings: ₹120–₹180 Cr over 5 years through reduced leakages, optimized procurement, and cloud efficiencies.</li>
                <li>Service improvements: 60–70% faster delivery, 90%+ transparency with audit trails, and 3–5x operational throughput.</li>
              </ul>

              <h4>Project Background and Rationale</h4>
              <ul>
                <li>Initiated by Government of Andhra Pradesh; implemented by a state digital services agency with certified partners.</li>
                <li>Aligned with NeGP and Digital India—open standards, India Stack, and interoperable APIs.</li>
                <li>Justifications: economic (leakage reduction), technical (microservices), social (inclusive access), regulatory (data residency, CERT-In).</li>
              </ul>

              <h4>Problem Statement and Opportunity</h4>
              <ul>
                <li>Current gaps: siloed systems, manual approvals, limited visibility, and inconsistent data quality.</li>
                <li>Opportunity: reengineer processes with digital identity, eSign, consented data sharing, and real-time analytics.</li>
              </ul>

              <h4>Goals and SMART Objectives</h4>
              <ul>
                <li>Reduce case processing time by 60% within 12 months of rollout.</li>
                <li>Achieve 90%+ auditability for transactions and fund flows.</li>
                <li>Improve system uptime to 99.9% with autoscaling and proactive monitoring.</li>
              </ul>

              <h4>Scope of Work</h4>
              <ul>
                <li>Activities: platform development, integrations, data migration, training, and change management.</li>
                <li>Deliverables: SaaS platform, APIs, documentation, training kits, and operations playbook.</li>
                <li>Stakeholders: citizens, district officials, state departments, NGOs, and emergency services.</li>
              </ul>
            </Section>

            <Section
              id="part-ii"
              title="Proposed Technical Solution"
              subtitle="Platform architecture, modules, and integrations"
              icon={Layers}
            >
              <h4>Proposed Solution Overview</h4>
              <p>
                A modular, multi-tenant, cloud-native SaaS built on microservices, event-driven messaging, and API-first design.
                Integrates securely with India Stack and departmental systems using standards-based interfaces.
              </p>

              <h4>Platform Modules and Features</h4>
              <ul>
                <li>Citizen Service Portal: applications, status tracking, notifications, multilingual UI, accessibility compliant.</li>
                <li>Departmental Workflow Engine: configurable rules, SLAs, escalations, and eOffice-style approvals.</li>
                <li>Reporting & Analytics: real-time dashboards, anomaly detection, and audit-ready exports.</li>
                <li>Integration Hub: API gateway, adapters for Aadhaar, eSign, DigiLocker, and payment rails.</li>
              </ul>

              <h4>Business Process Reengineering (BPR)</h4>
              <p>Digitize end-to-end processes with eKYC, templated forms, automated validations, and guided assisted-service flows.</p>

              <h4>Service Delivery Channels</h4>
              <ul>
                <li>Self-service: responsive web and mobile-first PWA.</li>
                <li>Assisted service: district counters and call-center consoles.</li>
                <li>Departmental service: caseworker, supervisor, and auditor workbenches.</li>
              </ul>

              <h4>Solution Architecture and Technology Stack</h4>
              <ul>
                <li>Microservices on Kubernetes with autoscaling, service mesh, and GitOps CI/CD.</li>
                <li>Data: relational OLTP, time-series for telemetry, object storage for documents.</li>
                <li>Advanced tech (use-appropriate): AI for triage and forecasting, blockchain for tamper-evident logs, IoT for sensor feeds.</li>
              </ul>
            </Section>

            <Section
              id="part-iii"
              title="Project Execution and Governance"
              subtitle="Phased plan, governance, and rollout strategy"
              icon={ClipboardList}
            >
              <h4>Implementation Plan and Methodology</h4>
              <p>Hybrid Agile across seven phases: inception, discovery, design, build, integrate, pilot, and scale.</p>

              <h4>Project Phases</h4>
              <ol>
                <li>Inception & mobilization</li>
                <li>Discovery & BPR</li>
                <li>Experience & solution design</li>
                <li>Build & test</li>
                <li>Integrations & data migration</li>
                <li>Pilot & feedback</li>
                <li>State-wide rollout & hypercare</li>
              </ol>

              <h4>Rollout Strategy</h4>
              <p>Pilot in a representative district, iterate rapidly, then expand in waves with readiness checks and training.</p>

              <h4>Project Management</h4>
              <p>Steering committee, PMO, weekly sprints, monthly milestones, and KPIs tracked via realtime dashboards.</p>
            </Section>

            <Section
              id="part-iv"
              title="Financial and Commercial Proposal"
              subtitle="Costing, pricing, and benefits"
              icon={Book}
            >
              <h4>Detailed Project Cost</h4>
              <p>Balanced CAPEX and OPEX over a 5-year lifecycle covering build, cloud, support, and continuous improvement.</p>

              <h4>Proposed SaaS Pricing Model</h4>
              <p>Enterprise Agreement with tiered pricing based on population served and transaction volume.</p>

              <h4>Cost-Benefit Analysis</h4>
              <ul>
                <li>Quantifiable: reduction in leakages, faster disbursements, lower infra costs via autoscaling.</li>
                <li>Qualitative: transparency, citizen trust, and improved accountability.</li>
              </ul>
            </Section>

            <Section
              id="part-v"
              title="Compliance, Security, and Legal"
              subtitle="Compliance by design, cybersecurity, DPDP, and SLAs"
              icon={Shield}
            >
              <h4>Compliance by Design</h4>
              <p>Adherence to CERT-In, DPDP Act, data residency, accessibility, and security baselines from day one.</p>

              <h4>Cybersecurity and Information Security</h4>
              <ul>
                <li>Encryption in transit and at rest; strong identity and access management.</li>
                <li>Regular VA/PT, threat modeling, and continuous monitoring.</li>
              </ul>

              <h4>Data Protection and Privacy</h4>
              <p>Consent-based processing, fiduciary responsibilities, retention policies, and secure deletion.</p>

              <h4>Risk and Mitigation</h4>
              <ul>
                <li>Change resistance → comprehensive change management and training.</li>
                <li>Security incidents → layered defenses, rapid response playbooks.</li>
              </ul>

              <h4>Service Levels</h4>
              <ul>
                <li>Availability: 99.9%+</li>
                <li>Performance: sub-second UI latency targets under normal load</li>
                <li>Incident response: defined RTO/RPO and on-call rotations</li>
              </ul>
            </Section>

            <Section
              id="part-vi"
              title="Appendices and Formalities"
              subtitle="Applicant profile, declarations, and document checklist"
            >
              <ul>
                <li>About the Applicant: legal standing, leadership, past gov-tech experience.</li>
                <li>Declarations & undertakings: eligibility, commitment, authenticity.</li>
                <li>Checklist: DPR, eligibility documents, registrations, and certifications.</li>
              </ul>
            </Section>

            <Section
              id="part-vii"
              title="Sustainability and Future Enhancements"
              subtitle="Long-term operations, capacity building, and innovation roadmap"
            >
              <ul>
                <li>Sustainability: proactive maintenance, SRE practices, capacity building.</li>
                <li>Future: AI-driven insights, IoT device integration, and cross-border collaboration for disaster response.</li>
                <li>M&E: continuous feedback loops, data-driven governance, and outcome tracking.</li>
              </ul>
            </Section>

            <Section
              id="part-viii"
              title="Final Remarks and Approval Request"
              subtitle="Formal request to begin pilot and allocate funds"
            >
              <ul>
                <li>Approval request for pilot commencement and budget allocation.</li>
                <li>Acknowledgments for contributors and partner agencies.</li>
                <li>Contact details for further communication and coordination.</li>
              </ul>
            </Section>

            <Section
              id="part-ix"
              title="Conclusion and Strategic Vision"
              subtitle="Resilient, scalable, and citizen-centric future"
            >
              <p>
                A scalable, future-proof system that elevates response times, optimizes resources, and strengthens citizen trust—
                setting a benchmark for Andhra Pradesh and beyond.
              </p>
            </Section>

            <Section
              id="part-x"
              title="Final Approval and Next Steps"
              subtitle="Kickoff, pilot, rollout, and post-go-live support"
            >
              <ol>
                <li>Project kickoff: finalize plan, form team, and align vendors.</li>
                <li>Pilot launch: select district, test, and incorporate feedback.</li>
                <li>Full-scale rollout: phased statewide deployment.</li>
                <li>Post-go-live: operations, maintenance, and continuous improvements.</li>
              </ol>
            </Section>

            <Section
              id="part-xi"
              title="The Path Forward"
              subtitle="Long-term impact and integration opportunities"
            >
              <ul>
                <li>Growth & scalability: modular extensions, national integrations.</li>
                <li>Digital transformation: responsible use of AI, IoT, and secure ledgers.</li>
                <li>Long-term impact: resilient services, public trust, and data-driven governance.</li>
              </ul>
            </Section>
          </div>
        </div>
      </main>

      <footer className="border-t border-slate-200 py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-slate-500">
            © {new Date().getFullYear()} Disaster Management Digital Platform — Strategic Proposal Overview
          </p>
        </div>
      </footer>
    </div>
  );
}
