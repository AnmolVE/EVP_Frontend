import { CompanyInfoIcon } from "../assets/icons/icons";

export const DISCOVER = [
  { name: "Primary Research", icon: CompanyInfoIcon },
  { name: "Secondary Research", icon: CompanyInfoIcon },
  { name: "Company Info", icon: CompanyInfoIcon },
];

export const DEVELOP = [
  { name: "Attributes of Great Place", icon: CompanyInfoIcon },
  { name: "Key Themes", icon: CompanyInfoIcon },
  { name: "Audience-Wise Messaging", icon: CompanyInfoIcon },
];

export const DISSECT = [
  { name: "Analysis", icon: CompanyInfoIcon },
  { name: "Alignment", icon: CompanyInfoIcon },
];

export const DESIGN = [
  { name: "Top 4 Themes", icon: CompanyInfoIcon },
  { name: "Messaging Hierarchy", icon: CompanyInfoIcon },
  { name: "Creative Direction", icon: CompanyInfoIcon },
  { name: "EVP Promise", icon: CompanyInfoIcon },
  { name: "EVP Audit", icon: CompanyInfoIcon },
  { name: "EVP Embedment", icon: CompanyInfoIcon },
  { name: "EVP Handbook", icon: CompanyInfoIcon },
];

export const DELIVER = [
  { name: "EVP Statement & Pillars", icon: CompanyInfoIcon },
  { name: "EVP Hero Creative", icon: CompanyInfoIcon },
  { name: "EVP Talking Points", icon: CompanyInfoIcon },
  { name: "EVP Execution Plan", icon: CompanyInfoIcon },
];

export const listItemEndpointMapping = {
  "Company Info": "http://127.0.0.1:8000/api/companies",
  Perception: "http://127.0.0.1:8000/api/perception",
  Loyalty: "http://127.0.0.1:8000/api/loyalty",
  Advocacy: "http://127.0.0.1:8000/api/advocacy",
  Attraction: "http://127.0.0.1:8000/api/attraction",
  Influence: "http://127.0.0.1:8000/api/influence",
  Brand: "http://127.0.0.1:8000/api/brand",
  "Attributes of Great Place":
    "http://127.0.0.1:8000/api/attributes-of-great-workplace",
  "Key Themes": "http://127.0.0.1:8000/api/key-themes",
  "Audience-Wise Messaging":
    "http://127.0.0.1:8000/api/audience-wise-messaging",
  Analysis: "http://127.0.0.1:8000/api/swot-analysis",
  Alignment: "http://127.0.0.1:8000/api/alignment",
};
