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
    key: "course_code",
  },
  {
    label: "course",
    placeholder: "B.tech",
    key: "course",
  },
  {
    label: "semester",
    placeholder: "Semester",
    key: "semester",
  },
  {
    label: "subject",
    placeholder: "Operating system",
    key: "subject",
  },
  {
    label: "max marks",
    placeholder: "Enter exam total mark",
    key: "max_marks",
  },
];
