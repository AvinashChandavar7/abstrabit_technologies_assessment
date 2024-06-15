import { DataItem } from "../components/charts/FDPortfolio";

export const InterestUptoCardData = [
  {
    id: 1,
    icons: "/assets/utkarsh.png",
    bankName: "Utkarsh Small Finance Bank",
    checkedImg: "/assets/check1.svg",
    checked1: "Highest Interest Rate",
    checked2: "RBI Insured",
    rate: "9.10",
    btn: "Book Now",
    color: {
      bgColor: "#F8F0FF",
      highlightBg: "#EFDDFF",
      btnColor: "#520B8D"
    }
  },
  {
    id: 2,
    icons: "/assets/bajaj.png",
    bankName: "Bajaj Finserv",
    checkedImg: "/assets/check2.svg",
    checked1: "Crisil AAA Rated",
    checked2: "No Video KYC required",
    rate: "8.80",
    btn: "Book Now",
    color: {
      bgColor: "#EFF6FF",
      highlightBg: "#D7E9F8",
      btnColor: "#0072BB"
    }
  },
  {
    id: 3,
    icons: "/assets/shriram.png",
    bankName: "Shriram Finance",
    checkedImg: "/assets/check3.svg",
    checked1: "Crisil AAA Rated",
    checked2: "No Video KYC required",
    rate: "8.80",
    btn: "Book Now",
    color: {
      bgColor: "#F4F4F4",
      highlightBg: "#DEDEDE",
      btnColor: "#010101"
    }
  },
  {
    id: 4,
    icons: "/assets/mahindra.png",
    bankName: "Mahindra Finance",
    checkedImg: "/assets/check4.svg",
    checked1: "Crisil AAA Rated",
    checked2: "No Video KYC required",
    rate: "8.80",
    btn: "Book Now",
    color: {
      bgColor: "#FFEFEF",
      highlightBg: "#FFD7D7",
      btnColor: "#FF0000"
    }
  },
];

export const planCardData = [
  {
    id: 1,
    statusTitle: "Video KYC",
    bankName: "Utkarsh SF Bank FD Plan 2",
    date: "28",
    monthYear: "Oct, 2023",
    depositAmount: "20,000",
    tenure: "2 Years",
    interestRate: "9.10",
    btn1: "Complete Now",
    btn2: "Reschedule"
  },
  {
    id: 2,
    statusTitle: "Pending Payment",
    bankName: "Bajaj Finserv Corp FD 1",
    date: "30",
    monthYear: "Oct, 2023",
    depositAmount: "25,000",
    tenure: "18 Months",
    interestRate: "8.10",
    btn1: "Pay Now",
    btn2: "Cancel Application"
  },
  {
    id: 3,
    statusTitle: "Upcoming FD Maturity",
    bankName: "Shriram Finance Corp FD 1",
    date: "30",
    monthYear: "Oct, 2023",
    depositAmount: "25,000",
    tenure: "18 Months",
    interestRate: "8.10",
    btn1: "Renew Now",
    btn2: "Compare other FDs"
  },
]

export const fDPortfolioData: DataItem[] = [
  { name: 'Bajaj Finserv', value: 25000, percentage: 25, color: "#6C63FF" },
  { name: 'Shriram Finance', value: 20000, percentage: 20, color: "#FA9D17" },
  { name: 'Mahindra Finance', value: 15000, percentage: 15, color: "#B9C606" },
  { name: 'Utkarsh Small Finance Bank', value: 40000, percentage: 40, color: "#59CBD3" },
];
