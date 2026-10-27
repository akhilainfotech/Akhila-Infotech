export interface BlueprintData {
  title: string;
  desc: string;
  deliverables: string[];
  kpi: string;
}

export const BLUEPRINTS: Record<string, BlueprintData> = {
  cloud: {
    title: 'Cloud Architecture & Migration',
    desc: 'Comprehensive multi-cloud infrastructure modernization across AWS, Azure, or GCP with automated landing zones, network micro-segmentation, and zero-downtime cutover.',
    deliverables: [
      'Modular Terraform landing zones with strict IAM controls',
      'Kubernetes (EKS/AKS/GKE) clusters with autoscaling',
      'Automated multi-region disaster recovery replication',
      'Cloud FinOps cost attribution dashboard and alerting',
    ],
    kpi: '99.98% SLA Availability & 35% Cloud Cost Reduction',
  },
  ai: {
    title: 'Enterprise AI & Automation',
    desc: 'Private, governed deployment of retrieval-augmented generation (RAG) models, vector embeddings, and real-time inference pipelines without enterprise IP leakage.',
    deliverables: [
      'Air-gapped LLM orchestration & enterprise search pipelines',
      'Snowflake / Databricks centralized analytics data lakehouse',
      'Automated RPA business process integration',
      'Strict AI guardrails against hallucination and data leakage',
    ],
    kpi: '4.2x Faster Knowledge Discovery & 100% Data Sovereignty',
  },
  security: {
    title: 'Zero-Trust Cybersecurity & Compliance',
    desc: 'End-to-end security architecture encompassing identity micro-segmentation, automated threat monitoring, penetration testing, and compliance readiness.',
    deliverables: [
      'Okta / Azure AD Zero-Trust IAM & conditional access policies',
      'SOC 2 Type II, ISO 27001, and HIPAA compliance audit evidence',
      'Offensive penetration testing and remediation playbooks',
      'Cloud DevSecOps automated vulnerability scanning gates',
    ],
    kpi: '100% First-Cycle Audit Compliance & Zero Perimetric Gaps',
  },
  engineering: {
    title: 'Full-Stack Enterprise Engineering',
    desc: 'Modernization of mission-critical systems into high-throughput asynchronous microservices, GraphQL APIs, and responsive customer-facing web platforms.',
    deliverables: [
      'Event-driven asynchronous messaging mesh with Apache Kafka',
      'Distributed caching architectures with Redis and CDN edge caching',
      'Domain-Driven Design (DDD) decoupling of core databases',
      'High-resilience REST and GraphQL federated APIs',
    ],
    kpi: '< 35ms P99 Latency & 10x Throughput Scaling',
  },
  devops: {
    title: 'DevOps & SRE Automation',
    desc: 'Complete deployment workflow overhaul utilizing GitOps, continuous compliance policies, OpenTelemetry distributed tracing, and automated auto-healing.',
    deliverables: [
      'Declarative ArgoCD & GitHub Actions CI/CD deployment pipelines',
      'OpenTelemetry, Prometheus & Grafana distributed observability',
      'Chaos engineering testing playbooks and automated rollback',
      'Automated container image signing and SBOM generation',
    ],
    kpi: 'Zero Deployment Downtime & MTTR < 15 Minutes',
  },
  advisory: {
    title: 'Strategic Digital Advisory',
    desc: 'Fractional CTO/CISO leadership and vendor-neutral architectural roadmaps for executive teams navigating acquisitions, migrations, and tech debt reduction.',
    deliverables: [
      'Technical M&A due diligence and risk assessment report',
      'Legacy monolith strangler-fig migration roadmap',
      'Enterprise software licensing and vendor audit review',
      'Board-level technology risk & investment presentation',
    ],
    kpi: 'Clear Multi-Year Roadmap & 40% Technical Debt Elimination',
  },
};
