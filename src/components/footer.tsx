import {
  Clock,
  LucideIcon,
  LucideProps,
  Mail,
  MapPin,
  PhoneCall,
} from "lucide-react";
import { Separator } from "./ui/separator";
import Logo from "./logo";
import Link from "next/link";

interface Contact {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
}

interface Social {
  icon: (props: LucideProps) => JSX.Element;
  label: string;
  href: string;
}

const contacts: Contact[] = [
  {
    icon: PhoneCall,
    label: "Phone Number",
    value: "(+84) 86 713 3779",
    href: "tel:+84867133779",
  },
  {
    icon: Mail,
    label: "Email",
    value: "likelion.vn@likelion.net",
    href: "mailto:likelion.vn@likelion.net",
  },
  {
    icon: Clock,
    label: "Schedule",
    value: "Thứ 2 - Thứ 6 | 8:30 AM - 5:30 PM",
  },
  {
    icon: MapPin,
    label: "Address",
    value:
      "Tầng 25, Tòa nhà Lim Tower, 9 - 11 Tôn Đức Thắng, Phường Bến Nghé, Quận 1, TP. HCM",
    href: "https://goo.gl/maps/b3Xq5DVnbKoHoxfb6",
  },
];

const socials: Social[] = [
  {
    icon: (props: LucideProps) => (
      <svg
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M43.6 21.8C43.6 9.76 33.84 0 21.8 0C9.76 0 0 9.76 0 21.8C0 32.68 7.97 41.7 18.39 43.33V28.1H12.86V21.8H18.39V17C18.39 11.54 21.64 8.52 26.62 8.52C29.01 8.52 31.5 8.95 31.5 8.95V14.31H28.75C26.04 14.31 25.2 15.99 25.2 17.71V21.8H31.25L30.28 28.1H25.2V43.33C35.62 41.69 43.59 32.68 43.59 21.8H43.6Z"
          fill="white"
        />
        <path
          d="M30.28 28.1L31.25 21.8H25.2V17.71C25.2 15.99 26.04 14.31 28.75 14.31H31.5V8.95C31.5 8.95 29.01 8.52 26.62 8.52C21.64 8.52 18.39 11.54 18.39 17V21.8H12.86V28.1H18.39V43.33C19.5 43.5 20.64 43.59 21.8 43.59C22.96 43.59 24.1 43.5 25.21 43.33V28.1H30.29H30.28Z"
          fill="#1B1B1A"
        />
      </svg>
    ),
    label: "LIKELION Facebook",
    href: "https://www.facebook.com/likelionvietnam",
  },
  {
    icon: (props: LucideProps) => (
      <svg
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M21.87 43.6C33.9098 43.6 43.67 33.8398 43.67 21.8C43.67 9.76019 33.9098 0 21.87 0C9.8302 0 0.0700073 9.76019 0.0700073 21.8C0.0700073 33.8398 9.8302 43.6 21.87 43.6Z"
          fill="white"
        />
        <path
          d="M21.87 10.55C25.53 10.55 25.97 10.56 27.42 10.63C28.76 10.69 29.48 10.91 29.97 11.1C30.61 11.35 31.07 11.65 31.55 12.13C32.03 12.61 32.33 13.07 32.58 13.71C32.77 14.19 32.99 14.92 33.05 16.26C33.12 17.71 33.13 18.14 33.13 21.81C33.13 25.48 33.12 25.91 33.05 27.36C32.99 28.7 32.77 29.42 32.58 29.91C32.33 30.55 32.03 31.01 31.55 31.49C31.07 31.97 30.61 32.27 29.97 32.52C29.49 32.71 28.76 32.93 27.42 32.99C25.97 33.06 25.54 33.07 21.87 33.07C18.2 33.07 17.77 33.06 16.32 32.99C14.98 32.93 14.26 32.71 13.77 32.52C13.13 32.27 12.67 31.97 12.19 31.49C11.71 31.01 11.41 30.55 11.16 29.91C10.97 29.43 10.75 28.7 10.69 27.36C10.62 25.91 10.61 25.48 10.61 21.81C10.61 18.14 10.62 17.71 10.69 16.26C10.75 14.92 10.97 14.2 11.16 13.71C11.41 13.07 11.71 12.61 12.19 12.13C12.67 11.65 13.13 11.35 13.77 11.1C14.25 10.91 14.98 10.69 16.32 10.63C17.77 10.56 18.2 10.55 21.87 10.55ZM21.87 8.08C18.14 8.08 17.68 8.1 16.21 8.16C14.75 8.23 13.75 8.46 12.88 8.8C11.98 9.15 11.21 9.62 10.45 10.38C9.69 11.14 9.22001 11.91 8.87001 12.81C8.53001 13.68 8.30001 14.68 8.23001 16.14C8.16001 17.6 8.15001 18.07 8.15001 21.8C8.15001 25.53 8.17001 25.99 8.23001 27.46C8.30001 28.92 8.53001 29.92 8.87001 30.79C9.22001 31.69 9.69 32.46 10.45 33.22C11.21 33.98 11.98 34.45 12.88 34.8C13.75 35.14 14.75 35.37 16.21 35.44C17.67 35.51 18.14 35.52 21.87 35.52C25.6 35.52 26.06 35.5 27.53 35.44C28.99 35.37 29.99 35.14 30.86 34.8C31.76 34.45 32.53 33.98 33.29 33.22C34.05 32.46 34.52 31.69 34.87 30.79C35.21 29.92 35.44 28.92 35.51 27.46C35.58 26 35.59 25.53 35.59 21.8C35.59 18.07 35.57 17.61 35.51 16.14C35.44 14.68 35.21 13.68 34.87 12.81C34.52 11.91 34.05 11.14 33.29 10.38C32.53 9.62 31.76 9.15 30.86 8.8C29.99 8.46 28.99 8.23 27.53 8.16C26.07 8.09 25.6 8.08 21.87 8.08Z"
          fill="#1B1B1A"
        />
        <path
          d="M21.87 14.75C17.98 14.75 14.82 17.91 14.82 21.8C14.82 25.69 17.98 28.85 21.87 28.85C25.76 28.85 28.92 25.69 28.92 21.8C28.92 17.91 25.76 14.75 21.87 14.75ZM21.87 26.37C19.34 26.37 17.29 24.32 17.29 21.79C17.29 19.26 19.34 17.21 21.87 17.21C24.4 17.21 26.45 19.26 26.45 21.79C26.45 24.32 24.4 26.37 21.87 26.37Z"
          fill="#1B1B1A"
        />
        <path
          d="M29.2 16.12C30.1113 16.12 30.85 15.3813 30.85 14.47C30.85 13.5587 30.1113 12.82 29.2 12.82C28.2887 12.82 27.55 13.5587 27.55 14.47C27.55 15.3813 28.2887 16.12 29.2 16.12Z"
          fill="#1B1B1A"
        />
      </svg>
    ),
    label: "LIKELION Instagram",
    href: "https://www.instagram.com/likelionvn/",
  },
  {
    icon: (props: LucideProps) => (
      <svg
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M21.95 43.6C33.9898 43.6 43.75 33.8398 43.75 21.8C43.75 9.76019 33.9898 0 21.95 0C9.91021 0 0.150024 9.76019 0.150024 21.8C0.150024 33.8398 9.91021 43.6 21.95 43.6Z"
          fill="white"
        />
        <path
          d="M35.87 14.8C35.54 13.55 34.55 12.56 33.3 12.23C31.03 11.62 21.94 11.62 21.94 11.62C21.94 11.62 12.85 11.62 10.58 12.23C9.33002 12.56 8.34003 13.55 8.01003 14.8C7.40003 17.07 7.40002 21.8 7.40002 21.8C7.40002 21.8 7.40003 26.53 8.01003 28.8C8.34003 30.05 9.33002 31.04 10.58 31.37C12.85 31.98 21.94 31.98 21.94 31.98C21.94 31.98 31.03 31.98 33.3 31.37C34.55 31.04 35.54 30.05 35.87 28.8C36.48 26.53 36.48 21.8 36.48 21.8C36.48 21.8 36.48 17.07 35.87 14.8ZM19.04 26.16V17.44L26.59 21.8L19.04 26.16Z"
          fill="#1B1B1A"
        />
      </svg>
    ),
    label: "LIKELION Youtube",
    href: "https://www.youtube.com/@likelionvietnam",
  },
  {
    icon: (props: LucideProps) => (
      <svg
        viewBox="0 0 112 112"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <g clipPath="url(#clip0_581_2)">
          <path
            d="M56 112C86.9279 112 112 86.9279 112 56C112 25.0721 86.9279 0 56 0C25.0721 0 0 25.0721 0 56C0 86.9279 25.0721 112 56 112Z"
            fill="white"
          />
          <path
            d="M38.0607 76.4986C38.127 76.5567 38.1934 76.6231 38.2598 76.6811C38.882 77.1208 39.33 77.7514 39.919 78.2243C41.7608 79.701 43.8349 80.5057 46.2076 80.6551C51.8325 81.0035 56.7356 76.7724 57.3744 71.2056C57.4076 70.9318 57.391 70.658 57.391 70.3926C57.391 53.6423 57.391 36.8921 57.391 20.1336C57.391 19.3814 57.7671 19.0053 58.5193 19.0053C61.0663 19.0053 63.6133 19.0053 66.1602 19.0053C66.4008 19.0053 66.6497 18.9638 66.8654 19.1131C66.882 19.1297 66.8903 19.138 66.9069 19.1463C67.0313 19.2708 67.0645 19.4367 67.0977 19.5943C68.0767 24.1075 70.4494 27.7081 74.1744 30.4293C74.4067 30.5952 74.6058 30.8109 74.8215 30.9934C74.9875 31.1345 75.1451 31.2672 75.311 31.4083C75.9084 31.7484 76.3398 32.296 76.8624 32.7357C78.9199 34.453 81.2512 35.6394 83.8479 36.3031C84.0802 36.3611 84.3374 36.3611 84.5033 36.5768C84.5116 36.5934 84.5282 36.6017 84.5448 36.61C84.6941 36.7677 84.6693 36.9751 84.6693 37.1659C84.6693 40.1194 84.6693 43.0728 84.6693 46.0263C84.6693 46.6983 84.578 46.7398 83.8977 46.7398C81.7324 46.7398 79.6085 46.4494 77.5095 45.9683C73.8924 45.1386 70.5572 43.6702 67.4627 41.6376C67.3051 41.5297 67.1309 41.3057 66.9567 41.3804C66.741 41.48 66.8488 41.762 66.8488 41.9611C66.8488 50.274 66.882 58.5869 66.8322 66.9081C66.799 72.7238 64.949 77.9173 61.141 82.3475C57.1007 87.0515 51.9653 89.781 45.8011 90.536C41.0473 91.1167 36.5424 90.2539 32.2615 88.1466C31.573 87.8065 30.9092 87.4082 30.287 86.9437C30.0962 86.7694 29.8971 86.5952 29.698 86.421C28.2213 85.2014 27.2008 83.6251 26.2384 82.0157C24.7617 79.5268 23.8076 76.8388 23.343 73.9848C23.0775 72.3505 22.9365 70.7078 23.0278 69.0568C23.3181 63.7306 25.1101 58.9851 28.5448 54.8785C31.4236 51.4355 35.0242 49.0296 39.2636 47.5777C41.0307 46.9721 42.8559 46.5988 44.7309 46.466C45.0793 46.4411 45.4195 46.3582 45.7679 46.3831C45.9338 46.3914 46.0998 46.3831 46.2491 46.4909C46.2657 46.5075 46.2823 46.5158 46.2989 46.5241C46.3984 46.69 46.3735 46.8808 46.3735 47.0551C46.3735 50.05 46.3735 53.0533 46.3735 56.0483C46.3735 56.1561 46.3735 56.264 46.3735 56.3635C46.357 56.6622 46.2076 56.7617 45.9255 56.6871C45.1042 56.4548 44.2663 56.3469 43.4201 56.3054C42.1092 56.2391 40.815 56.4216 39.5789 56.8779C35.4556 58.3961 32.9584 61.3496 32.4358 65.6968C31.9214 69.9777 33.6138 73.4041 37.173 75.8764C37.4716 76.0838 37.7786 76.2746 38.0607 76.5069V76.4986Z"
            fill="#1C1B1A"
          />
          <path
            d="M30.3037 86.9435C30.4613 86.902 30.5526 87.0265 30.6605 87.0928C33.3402 88.7272 36.2273 89.7974 39.3301 90.2952C40.8898 90.5441 42.4578 90.6519 44.0341 90.569C49.3022 90.2952 54.0228 88.5447 58.1046 85.1681C62.0287 81.9242 64.6421 77.8259 65.9446 72.9062C66.3594 71.3548 66.5834 69.7702 66.6664 68.1607C66.7162 67.2398 66.7079 66.3106 66.7079 65.3897C66.7079 57.4668 66.7079 49.5438 66.7079 41.6208V41.0816C66.9153 41.0235 67.0065 41.1811 67.1227 41.2558C69.9434 43.1888 72.9965 44.6158 76.2984 45.5284C78.107 46.0262 79.9488 46.358 81.8237 46.5239C82.6119 46.5903 83.4 46.582 84.1799 46.6401C84.52 46.665 84.5283 46.6484 84.5366 46.2916C84.5366 45.91 84.5366 45.5367 84.5366 45.1551C84.5366 42.4753 84.5366 39.7956 84.5366 37.1076C84.5366 36.9417 84.5449 36.7758 84.5532 36.6099C85.2584 36.6928 85.9553 36.8422 86.6688 36.8919C87.1085 36.9251 87.5482 36.9666 87.9879 36.95C88.2036 36.95 88.2948 37.0164 88.2699 37.2404C88.2616 37.3316 88.2699 37.4229 88.2699 37.5142V49.1456C88.2699 49.2202 88.2699 49.2949 88.2699 49.3696C88.2616 49.7097 88.2616 49.718 87.9049 49.7097C86.6936 49.7097 85.4824 49.6268 84.2794 49.4691C81.8237 49.1456 79.4344 48.5482 77.128 47.6439C74.9212 46.7811 72.8388 45.686 70.8809 44.342C70.7565 44.2591 70.632 44.1844 70.4495 44.0599V44.6075C70.4495 53.078 70.4495 61.5402 70.4495 70.0108C70.4495 74.5239 69.2797 78.7219 66.8655 82.5465C63.9535 87.1675 59.9215 90.4114 54.7944 92.278C51.6833 93.4063 48.456 93.846 45.1458 93.5971C39.5624 93.1823 34.7339 91.0502 30.619 87.2671C30.5111 87.1675 30.4116 87.043 30.312 86.9352L30.3037 86.9435Z"
            fill="#1C1B1A"
          />
          <path
            d="M38.0607 76.4987C37.1149 76.0673 36.2936 75.4534 35.5469 74.7399C33.6803 72.9396 32.5686 70.7494 32.2782 68.1692C31.6726 62.76 35.0824 58.0975 39.8195 56.654C41.8438 56.04 43.8681 56.0151 45.9007 56.5627C46.0169 56.5959 46.1247 56.6457 46.2492 56.6125C46.3155 56.4466 46.2824 56.2806 46.2824 56.1147C46.2824 53.0865 46.2824 50.0584 46.2824 47.0303C46.2824 46.8643 46.2989 46.6984 46.3072 46.5325C47.477 46.4495 48.6385 46.5574 49.7917 46.6901C49.9742 46.7067 50.024 46.798 50.0157 46.9556C50.0157 47.0468 50.0157 47.1381 50.0157 47.2294C50.0157 51.2448 50.0157 55.2602 50.0157 59.2673C50.0157 59.4166 50.0572 59.566 49.9576 59.7319C49.4266 59.6323 48.9123 59.4747 48.373 59.4C45.2702 58.9686 42.4744 59.6904 40.0186 61.6234C37.8616 63.3242 36.5342 65.5559 36.0862 68.2605C35.6133 71.131 36.2107 73.7941 37.8616 76.2083C37.928 76.3079 37.9861 76.4074 38.0524 76.5153L38.0607 76.4987Z"
            fill="#1C1B1A"
          />
          <path
            d="M74.838 30.9936C73.6682 30.305 72.6478 29.4339 71.7103 28.4632C69.1882 25.8665 67.5953 22.7885 66.915 19.2294C66.915 19.1963 66.915 19.1714 66.915 19.1382C68.0019 19.0801 69.097 19.1382 70.1838 19.1133C70.3746 19.1133 70.4659 19.188 70.441 19.3788C70.441 19.4534 70.441 19.5281 70.441 19.6028C70.3829 22.6558 71.2872 25.4434 72.7805 28.065C73.3115 29.0025 73.9503 29.8653 74.6389 30.6949C74.7136 30.7862 74.8214 30.8608 74.838 30.9936Z"
            fill="#1C1B1A"
          />
        </g>
        <defs>
          <clipPath id="clip0_581_2">
            <rect width={112} height={112} fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    label: "LIKELION Tiktok",
    href: "https://www.tiktok.com/@likelionvietnam",
  },
];

export default function Footer() {
  return (
    <footer className="mt-20 border-t">
      <div className="container">
        <div className="pb-8 pt-20">
          <div className="space-y-10 text-foreground/80">
            <Logo />

            <ul className="flex flex-col gap-4 font-medium">
              {contacts.map((contact) => (
                <li className="flex gap-4 items-center" key={contact.label}>
                  <contact.icon className="shrink-0 w-5 h-5" />
                  {contact.href ? (
                    <Link href={contact.href} target="_blank">
                      {contact.value}
                    </Link>
                  ) : (
                    <span>{contact.value}</span>
                  )}
                </li>
              ))}
            </ul>

            <ul className="flex items-center gap-2">
              {socials.map((social) => (
                <li key={social.label}>
                  <Link href={social.href} target="_blank">
                    <social.icon className="w-8 h-8" />
                    <span className="sr-only">{social.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <Separator className="my-8" />
          <div>Copyright @ 2023, LIKELION Co., Ltd</div>
        </div>
      </div>
    </footer>
  );
}
