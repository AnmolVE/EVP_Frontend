import {
  CompanyInfoIcon,
  EmployeeInfoIcon,
  MessagingIcon,
  CommunicationChannelsIcon,
  TalentAttractionIcon,
  TalentAcquisitionIcon,
  PerceptionIcon,
} from "../assets/icons/icons";

// export const DISCOVER = [
//   "Company Info",
//   "Employee Info",
//   "Messaging",
//   "Communication Channels",
//   "Talent Attraction",
//   "Talent Acquisition",
//   "Perception",
// ];

export const DISCOVER = [
  { name: "Company Info", icon: CompanyInfoIcon },
  { name: "Perception", icon: EmployeeInfoIcon },
  { name: "Loyalty", icon: MessagingIcon },
  { name: "Advocacy", icon: CommunicationChannelsIcon },
  { name: "Attraction", icon: TalentAttractionIcon },
  { name: "Influence", icon: TalentAcquisitionIcon },
  { name: "Brand", icon: PerceptionIcon },
  { name: "Primary Research", icon: CompanyInfoIcon },
];

// export const DEVELOP = [
//   "Attributes of Great Place",
//   "Key Themes",
//   "Audience-Wise Messaging",
// ];

export const DEVELOP = [
  { name: "Attributes of Great Place", icon: CompanyInfoIcon },
  { name: "Key Themes", icon: CompanyInfoIcon },
  { name: "Audience-Wise Messaging", icon: CompanyInfoIcon },
];

// export const DISSECT = ["Analysis", "Alignment"];

export const DISSECT = [
  { name: "Analysis", icon: CompanyInfoIcon },
  { name: "Alignment", icon: CompanyInfoIcon },
];

// export const DESIGN = [
//   "Messaging Hierarchy",
//   "Creative Direction",
//   "Touch Points",
// ];

export const DESIGN = [
  { name: "Top 4 Themes", icon: CompanyInfoIcon },
  { name: "Messaging Hierarchy", icon: CompanyInfoIcon },
  { name: "Creative Direction", icon: CompanyInfoIcon },
  { name: "EVP Promise", icon: CompanyInfoIcon },
  { name: "EVP Audit", icon: CompanyInfoIcon },
  { name: "EVP Embedment", icon: CompanyInfoIcon },
  { name: "EVP Narrative", icon: CompanyInfoIcon },
];

// export const DELIVER = [
//   "EVP Phase",
//   "EVP Details",
//   "EVP Audit",
//   "Recommendations",
//   "Creative",
//   "Execution Plan",
// ];

export const DELIVER = [
  { name: "EVP Statement & Pillars", icon: CompanyInfoIcon },
  { name: "EVP Hero Creative", icon: CompanyInfoIcon },
  { name: "EVP Narrative", icon: CompanyInfoIcon },
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
