import {
  IconBuddyAnalyticsIcon,
  IconBuddyCourseIcon,
  IconBuddyDashboardIcon,
  IconBuddyExamIcon,
  IconBuddyMarkEvaluationIcon,
  IconBuddyPencilIcon,
} from "@/components/icon";

export const sideNavLinks = [
  {
    label: "Dashboard",
    icon: <IconBuddyDashboardIcon />,
    source: "/dashboard",
  },
  {
    label: "Exams",
    icon: <IconBuddyExamIcon />,
    source: "/exams",
  },
  {
    label: "Questions",
    icon: <IconBuddyPencilIcon />,
    source: "/questions",
  },
  {
    label: "Mark Evaluation",
    icon: <IconBuddyMarkEvaluationIcon />,
    source: "/mark-evaluation",
  },
];

export const sideNavLinksLearn = [
  {
    label: "your courses",
    icon: <IconBuddyCourseIcon />,
    source: "/courses",
  },
  {
    label: "analytics",
    icon: <IconBuddyAnalyticsIcon />,
    source: "/analytics",
  },
];

export const createNewExamField = [
  {
    label: "course code",
    placeholder: "Example: SOE-B-CSE-203",
  },
  {
    label: "course",
    placeholder: "B.tech",
  },
  {
    label: "semester",
    placeholder: "Semester",
    type: "number",
  },
  {
    label: "subject",
    placeholder: "Operating system",
  },
  {
    label: "max marks",
    placeholder: "Enter exam total mark",
    type: "number",
  },
];
