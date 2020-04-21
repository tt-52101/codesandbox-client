import React from 'react';

import { Element } from '../Element';

// we use this icon as a error state fallback
export const notFound = props => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="red"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

/**
 * All icons should be in a 16x16 viewbox
 */

export const filter = props => (
  <Element
    as="svg"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 3C0 2.44772 0.447715 2 1 2H15C15.5523 2 16 2.44772 16 3V3.24C16 3.79229 15.5523 4.24 15 4.24H1C0.447715 4.24 0 3.79228 0 3.24V3ZM2.28569 7.48C2.28569 6.92772 2.73341 6.48 3.28569 6.48H12.7143C13.2665 6.48 13.7143 6.92772 13.7143 7.48V7.72001C13.7143 8.27229 13.2666 8.72001 12.7143 8.72001H3.28569C2.73341 8.72001 2.28569 8.27229 2.28569 7.72001V7.48ZM5.57141 10.96C5.01913 10.96 4.57141 11.4077 4.57141 11.96V12.2C4.57141 12.7523 5.01913 13.2 5.57141 13.2H10.4286C10.9808 13.2 11.4286 12.7523 11.4286 12.2V11.96C11.4286 11.4077 10.9808 10.96 10.4286 10.96H5.57141Z"
      fill="currentColor"
    />
  </Element>
);

export const github = props => (
  <Element
    as="svg"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14.9269 4.08427C14.2115 2.82782 13.2411 1.83308 12.0155 1.09983C10.7897 0.366548 9.45149 0 7.99993 0C6.54855 0 5.20991 0.36666 3.98437 1.09983C2.75864 1.83304 1.78831 2.82782 1.07293 4.08427C0.357655 5.34069 0 6.71272 0 8.2003C0 9.98723 0.50859 11.5941 1.52602 13.0213C2.54335 14.4486 3.85758 15.4362 5.46862 15.9843C5.65615 16.02 5.79497 15.9949 5.88523 15.9096C5.97553 15.8243 6.02062 15.7174 6.02062 15.5894C6.02062 15.5681 6.01884 15.3759 6.01537 15.0128C6.01179 14.6497 6.01012 14.333 6.01012 14.0627L5.77052 14.1052C5.61776 14.1338 5.42505 14.146 5.19239 14.1426C4.95984 14.1392 4.71843 14.1142 4.46848 14.0678C4.21841 14.0218 3.98583 13.915 3.77053 13.7477C3.55535 13.5804 3.40259 13.3614 3.31229 13.0911L3.20813 12.8454C3.1387 12.6818 3.02939 12.5001 2.88006 12.3009C2.73073 12.1015 2.57972 11.9664 2.42697 11.8952L2.35403 11.8417C2.30544 11.8061 2.26034 11.7632 2.21864 11.7135C2.17698 11.6637 2.14578 11.6139 2.12495 11.564C2.10408 11.514 2.12137 11.4731 2.17701 11.441C2.23265 11.4088 2.3332 11.3932 2.4791 11.3932L2.68735 11.4251C2.82625 11.4537 2.99805 11.5389 3.20298 11.6814C3.40781 11.8237 3.57618 12.0088 3.70814 12.2364C3.86795 12.5284 4.06047 12.7508 4.28627 12.9039C4.51189 13.057 4.73937 13.1334 4.96849 13.1334C5.19761 13.1334 5.3955 13.1156 5.56224 13.0802C5.72879 13.0446 5.88505 12.991 6.03095 12.9199C6.09345 12.4428 6.26361 12.0762 6.54129 11.82C6.14551 11.7774 5.78968 11.7132 5.47361 11.6278C5.15773 11.5423 4.83131 11.4035 4.49456 11.2111C4.15763 11.019 3.87812 10.7805 3.65597 10.4959C3.43378 10.2111 3.25144 9.83726 3.10918 9.37467C2.96686 8.91189 2.89568 8.37806 2.89568 7.77302C2.89568 6.91153 3.17004 6.17843 3.71865 5.57332C3.46166 4.92564 3.48592 4.19958 3.79151 3.3952C3.9929 3.33106 4.29156 3.37919 4.68734 3.5393C5.0832 3.69948 5.37303 3.83669 5.55713 3.95046C5.74123 4.06419 5.88873 4.16057 5.99986 4.23873C6.64582 4.05372 7.31242 3.96119 7.99985 3.96119C8.68729 3.96119 9.35404 4.05372 10 4.23873L10.3958 3.98259C10.6665 3.81167 10.9862 3.65505 11.354 3.51267C11.722 3.37036 12.0035 3.33117 12.198 3.39531C12.5104 4.19973 12.5382 4.92575 12.2812 5.57343C12.8297 6.17855 13.1042 6.91183 13.1042 7.77313C13.1042 8.37817 13.0328 8.91369 12.8907 9.38002C12.7484 9.84642 12.5645 10.2199 12.3388 10.5012C12.113 10.7825 11.8317 11.0192 11.4949 11.2113C11.1581 11.4035 10.8316 11.5422 10.5157 11.6277C10.1997 11.7132 9.84384 11.7775 9.44806 11.8202C9.80903 12.1404 9.98956 12.6458 9.98956 13.3363V15.5891C9.98956 15.7171 10.033 15.8239 10.1199 15.9093C10.2067 15.9946 10.3437 16.0197 10.5313 15.9839C12.1425 15.4359 13.4568 14.4483 14.474 13.021C15.4912 11.5938 16 9.98693 16 8.2C15.9996 6.7126 15.6418 5.34069 14.9269 4.08427Z"
      fill="currentColor"
    />
  </Element>
);

export const gitAdded = props => (
  <Element
    as="svg"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 1H14C14.5523 1 15 1.44772 15 2V14C15 14.5523 14.5523 15 14 15H2C1.44772 15 1 14.5523 1 14V2C1 1.44772 1.44772 1 2 1ZM0 2C0 0.895431 0.895431 0 2 0H14C15.1046 0 16 0.895431 16 2V14C16 15.1046 15.1046 16 14 16H2C0.895431 16 0 15.1046 0 14V2ZM9 12H7V9H4V7H7V4H9V7H12V9H9V12Z"
      fill="currentColor"
    />
  </Element>
);

export const gitRemoved = props => (
  <Element
    as="svg"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 1H14C14.5523 1 15 1.44772 15 2V14C15 14.5523 14.5523 15 14 15H2C1.44772 15 1 14.5523 1 14V2C1 1.44772 1.44772 1 2 1ZM0 2C0 0.895431 0.895431 0 2 0H14C15.1046 0 16 0.895431 16 2V14C16 15.1046 15.1046 16 14 16H2C0.895431 16 0 15.1046 0 14V2ZM12 9H4V7H12V9Z"
      fill="currentColor"
    />
  </Element>
);

export const gitModified = props => (
  <Element
    as="svg"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 1H14C14.5523 1 15 1.44772 15 2V14C15 14.5523 14.5523 15 14 15H2C1.44772 15 1 14.5523 1 14V2C1 1.44772 1.44772 1 2 1ZM0 2C0 0.895431 0.895431 0 2 0H14C15.1046 0 16 0.895431 16 2V14C16 15.1046 15.1046 16 14 16H2C0.895431 16 0 15.1046 0 14V2ZM8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
      fill="currentColor"
    />
  </Element>
);

export const comments = props => (
  <Element
    as="svg"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.76837e-05 7.65281C1.62125e-05 7.64574 0 7.63866 0 7.63157C0 5.07363 2.07363 3 4.63157 3C7.18952 3 9.26314 5.07363 9.26314 7.63157C9.26314 10.1895 7.18952 12.2631 4.63157 12.2631C4.63016 12.2631 4.62874 12.2631 4.62732 12.2631H4.76837e-05V7.65281Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.138 11.8348C9.34029 10.8307 10.1052 9.32048 10.1052 7.63156C10.1052 7.06158 10.0181 6.51194 9.85644 5.99525C10.4353 5.69558 11.0926 5.52631 11.7894 5.52631C14.1148 5.52631 15.9999 7.41142 15.9999 9.73683V9.73683H16V13.9474H11.7894V13.9473H11.7894C10.2279 13.9473 8.86498 13.0973 8.138 11.8348Z"
      fill="currentColor"
      fillOpacity="0.4"
    />
  </Element>
);

export const check = props => (
  <Element
    as="svg"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM11.1945 4.57143L12.1707 5.54756L6.45109 11.2671L6.019 10.8351L3.5 8.36104L4.3008 7.54567L6.27821 9.48776L11.1945 4.57143Z"
      fill="currentColor"
    />
  </Element>
);

export const more = props => (
  <Element
    as="svg"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.55556 1.77778C9.55556 2.75962 8.75962 3.55556 7.77778 3.55556C6.79594 3.55556 6 2.75962 6 1.77778C6 0.795938 6.79594 0 7.77778 0C8.75962 0 9.55556 0.795938 9.55556 1.77778ZM9.55556 8C9.55556 8.98184 8.75962 9.77778 7.77778 9.77778C6.79594 9.77778 6 8.98184 6 8C6 7.01816 6.79594 6.22223 7.77778 6.22223C8.75962 6.22223 9.55556 7.01816 9.55556 8ZM7.77778 16C8.75962 16 9.55556 15.2041 9.55556 14.2222C9.55556 13.2404 8.75962 12.4444 7.77778 12.4444C6.79594 12.4444 6 13.2404 6 14.2222C6 15.2041 6.79594 16 7.77778 16Z"
      fill="currentColor"
    />
  </Element>
);

export const chevronDown = props => (
  <Element
    as="svg"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8.00006 10.7217L1.02852 3L-3.87318e-07 4.13919L8 13L16 4.13919L14.9091 3L8.00006 10.7217Z"
      fill="currentColor"
    />
  </Element>
);

export const caret = props => (
  <Element
    as="svg"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8 12.8608L16 4L-3.87318e-07 4L8 12.8608L16 4L-3.87318e-07 4L8 12.8608Z"
      fill="currentColor"
    />
  </Element>
);

export const cross = props => (
  <Element
    as="svg"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16 1.45455L14.5455 9.97023e-06L8.00001 6.54546L1.45455 0L0 1.45454L6.54546 8L0 14.5455L1.45455 16L8.00001 9.45454L14.5455 16L16 14.5454L9.45455 8L16 1.45455Z"
      fill="currentColor"
    />
  </Element>
);

export const plus = props => (
  <Element
    as="svg"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fill="currentColor"
      d="M8.6 2H7.4v5.4H2v1.2h5.4V14h1.2V8.6H14V7.4H8.6V2z"
    />
  </Element>
);

export const trash = props => (
  <svg width={16} height={16} fill="none" viewBox="0 0 16 16" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M8 3c-1.6 0-2.4.746-2.4 1.667H4.25c-.138 0-.25.124-.25.277v.278c0 .154.112.278.25.278h7.5c.138 0 .25-.124.25-.278v-.278c0-.153-.112-.277-.25-.277H10.4C10.4 3.747 9.6 3 8 3zM6.4 4.667c0-.614.4-.834 1.6-.834 1.2 0 1.6.22 1.6.834H6.4zM4.727 6.333c-.147 0-.262.14-.249.303l.501 6.111c.012.143.12.253.25.253h5.543c.129 0 .237-.11.249-.253l.408-6.11c.013-.163-.102-.304-.25-.304H4.728z"
      clipRule="evenodd"
    />
  </svg>
);

export const menu = props => (
  <Element
    as="svg"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16 4H0V3H16V4ZM16 8.66762H0V7.66762H16V8.66762ZM0 13.3352H16V12.3352H0V13.3352Z"
      fill="currentColor"
      fillRule="evenodd"
      clipRule="evenodd"
    />
  </Element>
);

export const bell = props => (
  <Element
    as="svg"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9.03657 1.06667C9.03657 1.10232 9.03487 1.13756 9.03155 1.17231C11.3998 1.66446 13.1829 3.81795 13.1829 6.4V8.53333L15.3507 12.2512C15.7652 12.9622 15.2675 13.8667 14.4618 13.8667H8H1.53818C0.732452 13.8667 0.234778 12.9622 0.649321 12.2512L2.81711 8.53333L2.81711 6.4C2.81711 3.81795 4.60022 1.66446 6.96844 1.17231C6.96512 1.13756 6.96342 1.10232 6.96342 1.06667C6.96342 0.477563 7.42751 0 8 0C8.57248 0 9.03657 0.477563 9.03657 1.06667ZM8.00001 16C7.23265 16 6.56267 15.571 6.20421 14.9333H9.79581C9.43735 15.571 8.76737 16 8.00001 16Z"
      fill="currentColor"
      fillRule="evenodd"
      clipRule="evenodd"
    />
  </Element>
);
