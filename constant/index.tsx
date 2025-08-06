import { IMenu, Transaction } from "../type";

export const users = [
  {
    imgUrl: "/profilepic.png",
    name: "me",
  },
  {
    imgUrl: "/liam.png",
    name: "Liam",
  },
  {
    imgUrl: "/ava.png",
    name: "Ava",
  },
  {
    imgUrl: "/noah.png",
    name: "noah",
  },
];

export const summaries = [
  {
    title: "Total Balance",
    value: 12345,
    currency: true,
    rate: "+5%",
  },
  {
    title: "Total Credit",
    value: 7890,
    currency: true,
    rate: "+3%",
  },
  {
    title: "Total Debits",
    value: 4455,
    currency: true,
    rate: "+2%",
  },
  {
    title: "Transactions",
    value: 150,
    currency: false,
    rate: "+10%",
  },
];

export const transactions: Transaction[] = [
  {
    id: "1",
    date: "2023-10-01",
    remark: "Salary",
    amount: 3000,
    currency: "USD",
    type: "Credit",
  },
  {
    id: "2",
    date: "2023-10-02",
    remark: "Groceries",
    amount: -150,
    currency: "USD",
    type: "Debit",
  },
  {
    id: "3",
    date: "2023-10-03",
    remark: "Gym Membership",
    amount: -50,
    currency: "USD",
    type: "Debit",
  },
  {
    id: "4",
    date: "2023-10-04",
    remark: "Dinner",
    amount: -40,
    currency: "USD",
    type: "Debit",
  },
  {
    id: "5",
    date: "2023-10-05",
    remark: "Movie Tickets",
    amount: -30,
    currency: "USD",
    type: "Debit",
  },
  {
    id: "6",
    date: "2023-10-06",
    remark: "Rent",
    amount: -1200,
    currency: "USD",
    type: "Debit",
  },
  {
    id: "7",
    date: "2023-10-07",
    remark: "Utilities",
    amount: -100,
    currency: "USD",
    type: "Debit",
  },
  {
    id: "8",
    date: "2023-10-08",
    remark: "Car Payment",
    amount: -400,
    currency: "USD",
    type: "Debit",
  },
  {
    id: "9",
    date: "2023-10-09",
    remark: "Insurance",
    amount: -200,
    currency: "USD",
    type: "Debit",
  },
];

export const sideMenu: IMenu[] = [
  {
    title: "Dashboard",
    link: "/",
  },
  {
    title: "Transactions",
    link: "/transaction",
  },
  {
    title: "Reports",
    link: "/reports",
  },
  {
    title: "Settings",
    link: "/settings",
  },
];
