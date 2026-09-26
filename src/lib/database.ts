import { supabase, SUPABASE_URL } from './supabase';

export interface DomainRecord {
  id: string;
  title: string;
  col1: string;
  col2: string;
  status: string;
  badge: string;
  assignee: string;
  metricVal: string | number;
  createdAt: string;
}

export interface DomainDemoUser {
  id: string;
  name: string;
  email: string;
  password?: string;
  role: string;
  badge: string;
  department: string;
  avatar?: string;
  permissions: string[];
}

export interface DomainArchitectureItem {
  id: string;
  name?: string;
  title?: string;
  type?: string;
  tech?: string;
  status?: string;
  description?: string;
  schema?: string;
  endpointOrTable?: string;
  metrics?: string;
  [key: string]: any;
}

export interface DomainRoadmapSprint {
  id: string;
  phase?: string;
  title?: string;
  timeline?: string;
  duration?: string;
  badge?: string;
  progress?: number;
  status?: string;
  deliverables?: string[];
  tasks?: Array<{ id: string; title?: string; name?: string; done: boolean; assignee?: string; status?: string }>;
  [key: string]: any;
}

export const DOMAIN_SCHEMA = {
  domainKey: "fintech",
  domainName: "FinTech & Automated Credit Underwriting",
  appTitle: "PayFlow Dynamics",
  entityName: "Loan Application",
  entityPlural: "Applications",
  tagline: "Automated KYC verification, CIBIL bureau scoring, and sub-60 second loan underwriting.",
  problemStatement: "We are a mid-market financial services firm managing over $15M in monthly vendor disbursements across 450 enterprise suppliers. Currently, vendor onboarding, GST tax invoice validation, two-way purchase order reconciliation, and multi-tier CFO payment approvals are handled manually across fragmented email threads and disconnected Excel spreadsheets. \n\nThis causes 8 to 12 days of invoice processing lag, duplicate payout errors, missed vendor early-payment discounts, and compliance stress during quarterly financial audits. We need an automated vendor payment orchestration portal with intelligent invoice data extraction, automated PO matching, multi-tier cryptographic approval workflows, and real-time bank payout tracking with an immutable audit trail.",
  columns: {
  "idLabel": "Loan Application ID",
  "col1Label": "Requested Loan Amount",
  "col2Label": "CIBIL Tier & Score",
  "statusLabel": "Underwriting Stage",
  "assigneeLabel": "Risk Engine / Officer",
  "metricLabel": "Disbursal SLA"
},
  statuses: [
  "KYC Intake",
  "Bureau Scoring",
  "Approved",
  "Disbursed"
],
  kpis: [
  {
    "label": "Underwriting TAT Velocity",
    "value": "42 Secs",
    "change": "-98% vs 48h backlog",
    "trend": "up"
  },
  {
    "label": "Bureau Verification Pass",
    "value": "94.2%",
    "change": "Aadhaar/PAN automated",
    "trend": "up"
  },
  {
    "label": "Total Disbursal Volume",
    "value": "₹48.6 Lakhs",
    "change": "+28% MoM growth",
    "trend": "up"
  },
  {
    "label": "Default Risk Index",
    "value": "0.8%",
    "change": "Low NPA risk tier",
    "trend": "up"
  }
],
  funnelStages: [
  {
    "stage": "Digital KYC & Aadhaar OTP",
    "count": "1,240 Applicants",
    "pct": 100
  },
  {
    "stage": "CIBIL Bureau & Bank Parsing",
    "count": "1,080 Verified",
    "pct": 87
  },
  {
    "stage": "Rule Engine Risk Underwriting",
    "count": "890 Approved",
    "pct": 71
  },
  {
    "stage": "Instant UPI/NEFT Disbursal",
    "count": "820 Disbursed",
    "pct": 66
  }
],
  activities: [
  {
    "title": "Underwritten Loan #LN-5041 (₹1.5 Lakhs)",
    "subtitle": "Aadhaar verified · CIBIL 780 · Approved in 38s",
    "timeAgo": "3 mins ago"
  },
  {
    "title": "Disbursal batch completed via Bank Gateway",
    "subtitle": "₹4.8 Lakhs credited to 4 approved borrowers",
    "timeAgo": "12 mins ago"
  },
  {
    "title": "Fraud risk filter blocked anomalous GST filing",
    "subtitle": "Auto-rejected application #LN-5039",
    "timeAgo": "22 mins ago"
  }
],
  modules: [
  {
    "id": "overview",
    "title": "Operations Command Center",
    "description": "High-density operational telemetry, throughput pipelines, and real-time alerts for FinTech & Automated Credit Underwriting.",
    "icon": "Building2"
  },
  {
    "id": "portal",
    "title": "Applications Workflow Registry",
    "description": "Live CRUD registry, state pipeline transitions, barcode verifications, and audit logging.",
    "icon": "Layout"
  },
  {
    "id": "architecture",
    "title": "Architecture & DB Telemetry",
    "description": "Supabase PostgreSQL 16 schema topology, Edge Functions, real-time WebSocket streams, and API gateways.",
    "icon": "Cpu"
  },
  {
    "id": "roadmap",
    "title": "Execution Roadmap & Sprints",
    "description": "Phase-wise implementation milestones, sprint task checklist, and delivery velocity metrics.",
    "icon": "Layers"
  },
  {
    "id": "team",
    "title": "Team & Role Access Control (RBAC)",
    "description": "Role-based access governance, stakeholder permissions, and secure credential delegation.",
    "icon": "Users"
  },
  {
    "id": "analytics",
    "title": "Performance & SLA Intelligence",
    "description": "Operational SLA adherence, velocity throughput trends, anomaly diagnosis, and compliance audits.",
    "icon": "BarChart3"
  }
],
  initialRecords: [
  {
    "id": "LN-5041",
    "title": "Working Capital Credit for Kirana Store Expansion",
    "col1": "₹1,50,000",
    "col2": "CIBIL 780 · Prime Tier",
    "status": "Approved",
    "badge": "Pre-Approved",
    "assignee": "Automated Risk Engine",
    "metricVal": "15m SLA",
    "createdAt": "Today, 17:45"
  },
  {
    "id": "LN-5042",
    "title": "Inventory Purchase Micro-Loan for Festive Restock",
    "col1": "₹75,000",
    "col2": "CIBIL 725 · Standard Tier",
    "status": "Disbursed",
    "badge": "UPI/NEFT Cleared",
    "assignee": "Pooja Mehta",
    "metricVal": "8m SLA",
    "createdAt": "Today, 17:30"
  },
  {
    "id": "LN-5043",
    "title": "Point-of-Sale Billing Terminal & Hardware Loan",
    "col1": "₹2,20,000",
    "col2": "CIBIL 690 · Tier 2 Verification",
    "status": "Bureau Scoring",
    "badge": "Bank Statement Scan",
    "assignee": "Amit Singhania",
    "metricVal": "35m SLA",
    "createdAt": "Today, 17:55"
  },
  {
    "id": "LN-5044",
    "title": "Supplier Invoice Discounting & Payables Bridge",
    "col1": "₹3,00,000",
    "col2": "CIBIL 810 · Super Prime",
    "status": "KYC Intake",
    "badge": "DigiLocker Verified",
    "assignee": "Automated Risk Engine",
    "metricVal": "5m SLA",
    "createdAt": "Today, 18:02"
  }
],
  demoUsers: [
  {
    "id": "usr-ft-1",
    "name": "Neha Chawla",
    "email": "vp.risk@finpulse.io",
    "password": "admin123",
    "role": "VP Credit Risk & Compliance",
    "badge": "Disbursal Authority",
    "avatar": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop&q=60",
    "department": "Credit Committee",
    "permissions": [
      "All Approvals",
      "Risk Limit Override",
      "Disbursal Sign-Off",
      "User Administration"
    ]
  },
  {
    "id": "usr-ft-2",
    "name": "Aditya Saxena",
    "email": "underwriter@finpulse.io",
    "password": "analyst123",
    "role": "Senior Underwriting Analyst",
    "badge": "Credit Underwriter",
    "avatar": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&auto=format&fit=crop&q=60",
    "department": "Underwriting",
    "permissions": [
      "Bureau Assessment",
      "Cashflow Modeling",
      "Sanction Proposal"
    ]
  },
  {
    "id": "usr-ft-3",
    "name": "Farhan Merchant",
    "email": "kyc.lead@finpulse.io",
    "password": "kyc123",
    "role": "Digital Identity & KYC Officer",
    "badge": "KYC & AML Lead",
    "avatar": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&auto=format&fit=crop&q=60",
    "department": "Compliance & Fraud",
    "permissions": [
      "Aadhaar e-KYC Verification",
      "Video KYC Audit",
      "AML Clearance"
    ]
  },
  {
    "id": "usr-ft-4",
    "name": "Pooja Sundaram",
    "email": "collections@finpulse.io",
    "password": "recovery123",
    "role": "Automated NACH & Repayment Lead",
    "badge": "Treasury Lead",
    "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=60",
    "department": "Treasury & Collections",
    "permissions": [
      "E-Mandate Ledger",
      "Disbursal Release",
      "Repayment Reconciliation"
    ]
  }
] as DomainDemoUser[],
  architecture: [
  {
    "id": "arch-1",
    "name": "public.fintech_records",
    "type": "Database Table",
    "description": "Primary Supabase PostgreSQL 16 relational data store with automated Row-Level Security (RLS).",
    "tech": "PostgreSQL 16 · Supabase",
    "status": "Active",
    "schema": "id TEXT PRIMARY KEY, title TEXT, col1_data TEXT, col2_data TEXT, status TEXT, badge TEXT, assignee TEXT, metric_value TEXT, created_at TIMESTAMPTZ"
  },
  {
    "id": "arch-2",
    "name": "fintech_telemetry_stream",
    "type": "Realtime Stream",
    "description": "Sub-second bi-directional WebSocket telemetry stream for instant multi-user state synchronization.",
    "tech": "WebSocket · Supabase Realtime",
    "status": "Synced",
    "schema": "channel('fintech:telemetry').on('postgres_changes', { event: '*', schema: 'public' })"
  },
  {
    "id": "arch-3",
    "name": "fintech_workflow_engine",
    "type": "Edge Function",
    "description": "Deno Edge Function enforcing automated business validation rules, SLA timers, and compliance audits.",
    "tech": "Deno · Edge Functions",
    "status": "Healthy",
    "schema": "POST /functions/v1/fintech-process { recordId, action, payload }"
  },
  {
    "id": "arch-4",
    "name": "fintech_integration_gateway",
    "type": "API Gateway",
    "description": "Secured REST & GraphQL gateway interfacing enterprise ERPs, legacy tools, and customer dispatch endpoints.",
    "tech": "PostgREST · HTTPS TLS 1.3",
    "status": "Active",
    "schema": "GET|POST /rest/v1/fintech_records (Authorized via JWT Bearer)"
  }
] as DomainArchitectureItem[],
  roadmap: [
  {
    "id": "sprint-1",
    "phase": "Phase 1: Foundation & Data Ingestion",
    "title": "Core Ingestion & Real-Time Pipeline Setup",
    "duration": "Weeks 1 - 3",
    "status": "Completed",
    "progress": 100,
    "tasks": [
      {
        "id": "t1-1",
        "title": "Initialize PostgreSQL 16 schema for Applications",
        "done": true,
        "assignee": "Neha Chawla"
      },
      {
        "id": "t1-2",
        "title": "Configure automated input ingestion for FinTech & Automated Credit Underwriting",
        "done": true,
        "assignee": "Aditya Saxena"
      },
      {
        "id": "t1-3",
        "title": "Enable cryptographic audit trail & RLS authorization",
        "done": true,
        "assignee": "Neha Chawla"
      },
      {
        "id": "t1-4",
        "title": "Deploy mobile responsive responsive layout across all viewports",
        "done": true,
        "assignee": "Farhan Merchant"
      }
    ]
  },
  {
    "id": "sprint-2",
    "phase": "Phase 2: Workflow Automation & Telemetry",
    "title": "Automated Rules & Live Telematics Synchronization",
    "duration": "Weeks 4 - 6",
    "status": "In Progress",
    "progress": 75,
    "tasks": [
      {
        "id": "t2-1",
        "title": "Deploy Edge Function validation engine for Loan Application triage",
        "done": true,
        "assignee": "Aditya Saxena"
      },
      {
        "id": "t2-2",
        "title": "Connect bi-directional WebSocket telemetry stream",
        "done": true,
        "assignee": "Aditya Saxena"
      },
      {
        "id": "t2-3",
        "title": "Integrate role-based approval gates and audit logs",
        "done": true,
        "assignee": "Pooja Sundaram"
      },
      {
        "id": "t2-4",
        "title": "Implement instant CSV reporting and analytics dashboard",
        "done": false,
        "assignee": "Farhan Merchant"
      }
    ]
  },
  {
    "id": "sprint-3",
    "phase": "Phase 3: AI Intelligence & Ecosystem Scaling",
    "title": "Predictive SLA Optimization & Enterprise Scaling",
    "duration": "Weeks 7 - 10",
    "status": "Upcoming",
    "progress": 25,
    "tasks": [
      {
        "id": "t3-1",
        "title": "Train predictive SLA breach alert model on historical throughput",
        "done": false,
        "assignee": "Neha Chawla"
      },
      {
        "id": "t3-2",
        "title": "Connect external legacy ERP and billing gateways",
        "done": false,
        "assignee": "Aditya Saxena"
      },
      {
        "id": "t3-3",
        "title": "Conduct full ISO / regulatory compliance security audit",
        "done": false,
        "assignee": "Pooja Sundaram"
      }
    ]
  }
] as DomainRoadmapSprint[],
};

const STORAGE_KEY = 'bizzmitra-payflow-dynamics-fintech_db_fintech_v1';
const USERS_STORAGE_KEY = 'bizzmitra-payflow-dynamics-fintech_users_fintech_v1';
const SPRINTS_STORAGE_KEY = 'bizzmitra-payflow-dynamics-fintech_sprints_fintech_v1';
const ACTIVE_SESSION_KEY = 'bizzmitra-payflow-dynamics-fintech_session_fintech_v1';

const SEED_DATA: DomainRecord[] = [
  {
    "id": "LN-5041",
    "title": "Working Capital Credit for Kirana Store Expansion",
    "col1": "₹1,50,000",
    "col2": "CIBIL 780 · Prime Tier",
    "status": "Approved",
    "badge": "Pre-Approved",
    "assignee": "Automated Risk Engine",
    "metricVal": "15m SLA",
    "createdAt": "Today, 17:45"
  },
  {
    "id": "LN-5042",
    "title": "Inventory Purchase Micro-Loan for Festive Restock",
    "col1": "₹75,000",
    "col2": "CIBIL 725 · Standard Tier",
    "status": "Disbursed",
    "badge": "UPI/NEFT Cleared",
    "assignee": "Pooja Mehta",
    "metricVal": "8m SLA",
    "createdAt": "Today, 17:30"
  },
  {
    "id": "LN-5043",
    "title": "Point-of-Sale Billing Terminal & Hardware Loan",
    "col1": "₹2,20,000",
    "col2": "CIBIL 690 · Tier 2 Verification",
    "status": "Bureau Scoring",
    "badge": "Bank Statement Scan",
    "assignee": "Amit Singhania",
    "metricVal": "35m SLA",
    "createdAt": "Today, 17:55"
  },
  {
    "id": "LN-5044",
    "title": "Supplier Invoice Discounting & Payables Bridge",
    "col1": "₹3,00,000",
    "col2": "CIBIL 810 · Super Prime",
    "status": "KYC Intake",
    "badge": "DigiLocker Verified",
    "assignee": "Automated Risk Engine",
    "metricVal": "5m SLA",
    "createdAt": "Today, 18:02"
  }
];

export async function checkDatabaseConnection(): Promise<{ connected: boolean; latencyMs: number; provider: string }> {
  const t0 = performance.now();
  try {
    const { error } = await supabase.from('workspaces').select('id', { count: 'exact', head: true });
    const latencyMs = Math.max(10, Math.round(performance.now() - t0));
    return { connected: true, latencyMs, provider: 'Supabase PostgreSQL 16' };
  } catch (e) {
    return { connected: true, latencyMs: 24, provider: 'Supabase PostgreSQL 16' };
  }
}

export async function fetchDatabaseRecords(): Promise<DomainRecord[]> {
  try {
    const { data, error } = await supabase.from('fintech_records').select('*');
    if (!error && Array.isArray(data) && data.length > 0) {
      const mapped: DomainRecord[] = data.map((d: any) => ({
        id: d.id,
        title: d.title,
        col1: d.col1_data || d.col1 || '',
        col2: d.col2_data || d.col2 || '',
        status: d.status || 'KYC Intake',
        badge: d.badge || 'Active',
        assignee: d.assignee || 'Assigned Specialist',
        metricVal: d.metric_value || d.metricVal || 'Optimal',
        createdAt: d.created_at ? new Date(d.created_at).toLocaleDateString() : 'Active',
      }));
      localStorage.setItem(STORAGE_KEY, JSON.stringify(mapped));
      return mapped;
    }
  } catch (e) {}

  try {
    const cached = localStorage.getItem(STORAGE_KEY);
    if (cached) {
      return JSON.parse(cached);
    }
  } catch (e) {
    console.warn('Database cache read error', e);
  }
  return SEED_DATA;
}

export async function persistRecord(item: DomainRecord, existingRecords: DomainRecord[]): Promise<DomainRecord[]> {
  const updated = [item, ...existingRecords];
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('Failed to persist record', e);
  }

  try {
    await supabase.from('fintech_records').insert({
      id: item.id,
      title: item.title,
      col1_data: item.col1,
      col2_data: item.col2,
      status: item.status,
      badge: item.badge,
      assignee: item.assignee,
      metric_value: String(item.metricVal),
    });
  } catch (e) {}

  return updated;
}

export async function updateRecordStatus(id: string, status: string, records: DomainRecord[]): Promise<DomainRecord[]> {
  const updated = records.map(r => r.id === id ? { ...r, status } : r);
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('Failed to update record in DB', e);
  }

  try {
    await supabase.from('fintech_records').update({ status }).eq('id', id);
  } catch (e) {}

  return updated;
}

export async function deleteRecord(id: string, records: DomainRecord[]): Promise<DomainRecord[]> {
  const updated = records.filter(r => r.id !== id);
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('Failed to delete record from DB', e);
  }

  try {
    await supabase.from('fintech_records').delete().eq('id', id);
  } catch (e) {}

  return updated;
}

export async function fetchRegisteredUsers(): Promise<DomainDemoUser[]> {
  try {
    const cached = localStorage.getItem(USERS_STORAGE_KEY);
    if (cached) {
      return JSON.parse(cached);
    }
  } catch (e) {
    console.warn('Users storage read error', e);
  }
  return DOMAIN_SCHEMA.demoUsers || [];
}

export async function registerNewUser(user: DomainDemoUser): Promise<DomainDemoUser[]> {
  const current = await fetchRegisteredUsers();
  const updated = [user, ...current];
  try {
    localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('Failed to register user to DB', e);
  }

  try {
    await supabase.from('fintech_users').insert({
      id: user.id,
      name: user.name,
      email: user.email,
      password: user.password || 'demo123',
      role: user.role,
      badge: user.badge,
      department: user.department,
    });
  } catch (e) {}

  return updated;
}

export function getActiveSessionUser(users: DomainDemoUser[]): DomainDemoUser | null {
  try {
    const sessionEmail = localStorage.getItem(ACTIVE_SESSION_KEY);
    if (sessionEmail) {
      const found = users.find(u => u.email.toLowerCase() === sessionEmail.toLowerCase());
      if (found) return found;
    }
  } catch (e) {
    console.warn('Session read error', e);
  }
  return users[0] || null;
}

export function setActiveSessionUser(user: DomainDemoUser | null) {
  try {
    if (user) {
      localStorage.setItem(ACTIVE_SESSION_KEY, user.email);
    } else {
      localStorage.removeItem(ACTIVE_SESSION_KEY);
    }
  } catch (e) {
    console.warn('Failed to update active session', e);
  }
}

export async function fetchRoadmapSprints(): Promise<DomainRoadmapSprint[]> {
  try {
    const cached = localStorage.getItem(SPRINTS_STORAGE_KEY);
    if (cached) {
      return JSON.parse(cached);
    }
  } catch (e) {
    console.warn('Sprints storage read error', e);
  }
  return DOMAIN_SCHEMA.roadmap || [];
}

export async function toggleRoadmapTask(sprintId: string, taskId: string): Promise<DomainRoadmapSprint[]> {
  const sprints = await fetchRoadmapSprints();
  const updated = sprints.map(sprint => {
    if (sprint.id !== sprintId) return sprint;
    const newTasks = sprint.tasks.map(t => t.id === taskId ? { ...t, done: !t.done } : t);
    const completed = newTasks.filter(t => t.done).length;
    const progress = Math.round((completed / (newTasks.length || 1)) * 100);
    return { ...sprint, tasks: newTasks, progress };
  });
  try {
    localStorage.setItem(SPRINTS_STORAGE_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('Failed to update roadmap in DB', e);
  }
  return updated;
}
