import { cn } from "@/lib/utils";

export const IconBuddyDashboardIcon = ({ classname }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("mr-2 h-4 w-4", classname)}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M2 5a2 2 0 0 1 2-2h6v18H4a2 2 0 0 1-2-2zm12-2h6a2 2 0 0 1 2 2v5h-8zm0 11h8v5a2 2 0 0 1-2 2h-6z"
      />
    </svg>
  );
};

export const IconBuddyExamIcon = ({ classname }) => {
  return (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("mr-2 h-4 w-4", classname)}
    >
      <g fill="none" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M10 9h4m-4 7h12m-12 4h12m-12 4h4m-6 5h16a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2"
        />
        <circle cx="22" cy="9" r=".5" fill="currentColor" />
      </g>
    </svg>
  );
};

export const IconBuddyPencilIcon = ({ classname }) => {
  return (
    <svg
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("mr-2 h-4 w-4", classname)}
    >
      <path
        d="M11.8536 1.14645C11.6583 0.951184 11.3417 0.951184 11.1465 1.14645L3.71455 8.57836C3.62459 8.66832 3.55263 8.77461 3.50251 8.89155L2.04044 12.303C1.9599 12.491 2.00189 12.709 2.14646 12.8536C2.29103 12.9981 2.50905 13.0401 2.69697 12.9596L6.10847 11.4975C6.2254 11.4474 6.3317 11.3754 6.42166 11.2855L13.8536 3.85355C14.0488 3.65829 14.0488 3.34171 13.8536 3.14645L11.8536 1.14645ZM4.42166 9.28547L11.5 2.20711L12.7929 3.5L5.71455 10.5784L4.21924 11.2192L3.78081 10.7808L4.42166 9.28547Z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export const IconBuddyMarkEvaluationIcon = ({ classname }) => {
  return (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("mr-2 h-4 w-4", classname)}
    >
      <path
        fill="currentColor"
        d="m29.7 19.3l-3-3c-.4-.4-1-.4-1.4 0L16 25.6V30h4.4l9.3-9.3c.4-.4.4-1 0-1.4M19.6 28H18v-1.6l5-5l1.6 1.6zm6.4-6.4L24.4 20l1.6-1.6l1.6 1.6zM10 23h2v2h-2zm4-5h4v2h-4zm-4 0h2v2h-2zm4-5h8v2h-8zm-4 0h2v2h-2z"
      />
      <path
        fill="currentColor"
        d="M7 28V7h3v3h12V7h3v6h2V7c0-1.1-.9-2-2-2h-3V4c0-1.1-.9-2-2-2h-8c-1.1 0-2 .9-2 2v1H7c-1.1 0-2 .9-2 2v21c0 1.1.9 2 2 2h5v-2zm5-24h8v4h-8z"
      />
    </svg>
  );
};

export const IconBuddyProfileIcon = ({ classname }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("mr-2 h-4 w-4", classname)}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2" />
        <path d="M4.271 18.346S6.5 15.5 12 15.5s7.73 2.846 7.73 2.846M12 12a3 3 0 1 0 0-6a3 3 0 0 0 0 6" />
      </g>
    </svg>
  );
};

export const IconBuddyCourseIcon = ({ classname }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("mr-2 h-4 w-4", classname)}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <rect width="20" height="16" x="2" y="4" rx="4" />
        <path d="m15 12l-5-3v6z" />
      </g>
    </svg>
  );
};

export const IconBuddyAnalyticsIcon = ({ classname }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("mr-2 h-4 w-4", classname)}
    >
      <path
        fill="currentColor"
        d="M5 12a1 1 0 0 0-1 1v8a1 1 0 0 0 2 0v-8a1 1 0 0 0-1-1m5-10a1 1 0 0 0-1 1v18a1 1 0 0 0 2 0V3a1 1 0 0 0-1-1m10 14a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0v-4a1 1 0 0 0-1-1m-5-8a1 1 0 0 0-1 1v12a1 1 0 0 0 2 0V9a1 1 0 0 0-1-1"
      />
    </svg>
  );
};
