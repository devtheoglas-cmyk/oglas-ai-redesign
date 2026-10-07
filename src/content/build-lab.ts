import {
  BellRing,
  Bot,
  Boxes,
  FileScan,
  Globe,
  HeartPulse,
  Landmark,
  Languages,
  LayoutDashboard,
  RadioTower,
  ShoppingBag,
  Smartphone,
  TrendingUp,
  UsersRound,
  type LucideIcon,
} from "lucide-react";

// The Build Lab catalogue. Deliberately small: a few elegant choices per
// step, no prices or timelines (those are for the consultation).

export type LabOption = {
  id: string;
  title: string;
  line: string;
  icon: LucideIcon;
};

export type LabField = LabOption & {
  /** What the lab assistant says when this field is chosen. */
  voice: string;
  modules: { id: string; title: string; line: string }[];
};

export const labFields: LabField[] = [
  {
    id: "banking",
    title: "Banking & Finance",
    line: "Onboarding, lending, payments and compliance.",
    icon: Landmark,
    voice: "Financial core selected. Security protocols elevated.",
    modules: [
      { id: "onboarding", title: "Digital Onboarding & KYC", line: "Verify and onboard customers in minutes." },
      { id: "lending", title: "Loan Origination", line: "Applications, scoring and approvals in one flow." },
      { id: "payments", title: "Payments & Reconciliation", line: "Match every transaction automatically." },
      { id: "compliance", title: "Compliance Reporting", line: "Regulatory reports, generated not assembled." },
      { id: "risk", title: "Risk & Fraud Alerts", line: "Unusual activity flagged the moment it happens." },
    ],
  },
  {
    id: "erp",
    title: "ERP & Operations",
    line: "Inventory, purchasing, sales and finance as one.",
    icon: Boxes,
    voice: "Operations core selected. Mapping your business flow.",
    modules: [
      { id: "inventory", title: "Inventory & Warehousing", line: "Live stock across every location." },
      { id: "procurement", title: "Procurement", line: "Requests, approvals and purchase orders." },
      { id: "sales", title: "Sales & Invoicing", line: "From quotation to payment received." },
      { id: "finance", title: "Finance & Accounting", line: "Ledgers, cash flow and statements." },
      { id: "projects", title: "Projects & Assets", line: "Track jobs, costs and equipment." },
    ],
  },
  {
    id: "hr",
    title: "HR & Payroll",
    line: "Payroll, attendance and your whole workforce.",
    icon: UsersRound,
    voice: "Workforce core selected. Syncing people, time and pay.",
    modules: [
      { id: "payroll", title: "Payroll Engine", line: "Your salary rules, calculated without errors." },
      { id: "attendance", title: "Attendance & Leave", line: "Shifts, overtime and leave in one place." },
      { id: "ess", title: "Employee Self-Service", line: "Requests and payslips on every phone." },
      { id: "approvals", title: "Approvals & Workflows", line: "The right sign-off, every time." },
      { id: "people-analytics", title: "Workforce Analytics", line: "Headcount, cost and trends at a glance." },
    ],
  },
  {
    id: "healthcare",
    title: "Healthcare",
    line: "Patients, appointments, billing and care.",
    icon: HeartPulse,
    voice: "Clinical core selected. Patient privacy locked in.",
    modules: [
      { id: "records", title: "Patient Records", line: "One secure history for every patient." },
      { id: "appointments", title: "Appointments & Scheduling", line: "Bookings, reminders and doctor calendars." },
      { id: "claims", title: "Billing & Insurance Claims", line: "Claims prepared and tracked automatically." },
      { id: "pharmacy", title: "Pharmacy & Inventory", line: "Medicines and supplies always in view." },
      { id: "clinical-dashboards", title: "Clinical Dashboards", line: "Clinic performance in real time." },
    ],
  },
  {
    id: "retail",
    title: "Retail & Commerce",
    line: "Stores, online sales and loyal customers.",
    icon: ShoppingBag,
    voice: "Commerce core selected. Connecting every branch.",
    modules: [
      { id: "pos", title: "Point of Sale", line: "Fast checkout in every store." },
      { id: "branch-stock", title: "Multi-Branch Inventory", line: "Stock levels for every branch, live." },
      { id: "storefront", title: "E-commerce Storefront", line: "Your catalogue, open online." },
      { id: "loyalty", title: "Loyalty & CRM", line: "Know every customer and bring them back." },
      { id: "sales-analytics", title: "Sales Analytics", line: "What sells, where, and when." },
    ],
  },
  {
    id: "industrial",
    title: "Industrial & IoT",
    line: "Sensors, live monitoring and safety alerts.",
    icon: RadioTower,
    voice: "Industrial core selected. Field devices standing by.",
    modules: [
      { id: "devices", title: "Device Integration", line: "Sensors and machines feeding one system." },
      { id: "monitoring", title: "Live Monitoring", line: "Every site and reading on one screen." },
      { id: "alerts", title: "Automated Alerts", line: "Lights, announcements, email and SMS." },
      { id: "maintenance", title: "Maintenance Tracking", line: "Service schedules before breakdowns." },
      { id: "safety-reports", title: "Safety & Audit Reports", line: "Proof of what happened, any day." },
    ],
  },
];

export const labExperience: LabOption[] = [
  { id: "web", title: "Web Platform", line: "Runs in any browser, for your whole team.", icon: Globe },
  { id: "mobile", title: "Mobile App", line: "iOS and Android, in every pocket.", icon: Smartphone },
  { id: "portal", title: "Customer Portal", line: "A private space for your clients.", icon: LayoutDashboard },
  { id: "bilingual", title: "Arabic & English", line: "Fully bilingual, right to left included.", icon: Languages },
];

export const labIntelligence: LabOption[] = [
  { id: "assistant", title: "AI Assistant", line: "Ask your system questions in plain language.", icon: Bot },
  { id: "documents", title: "Document Intelligence", line: "Reads invoices, IDs and forms for you.", icon: FileScan },
  { id: "predictive", title: "Predictive Insights", line: "See what is coming before it arrives.", icon: TrendingUp },
  { id: "smart-alerts", title: "Smart Alerts", line: "The right person told at the right moment.", icon: BellRing },
];
