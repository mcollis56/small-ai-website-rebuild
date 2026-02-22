export type ProjectItem = {
  slug: "sitesage" | "groom-groove" | "mechanicmonkey";
  name: string;
  status: string;
  next: string;
  roadmap: string[];
};

export const projects: ProjectItem[] = [
  {
    slug: "sitesage",
    name: "SiteSage",
    status: "Dev",
    next: "Invoice Module",
    roadmap: [
      "Finalize invoice schema + draft/send workflow",
      "Connect dashboard quote conversion to invoice generation",
      "Enable PDF export + client delivery status tracking"
    ]
  },
  {
    slug: "groom-groove",
    name: "Groom Groove",
    status: "Prod",
    next: "Retention Automations",
    roadmap: [
      "Ship appointment reminder optimization v2",
      "Add churn-risk segmentation dashboard",
      "Roll out upsell nudges for premium grooming packages"
    ]
  },
  {
    slug: "mechanicmonkey",
    name: "MechanicMonkey",
    status: "Concept",
    next: "MVP Architecture Lock",
    roadmap: [
      "Define work-order lifecycle + status events",
      "Finalize SMS templates for service-ready updates",
      "Approve technical spike for garage floor tablet UX"
    ]
  }
];
