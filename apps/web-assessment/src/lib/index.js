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
