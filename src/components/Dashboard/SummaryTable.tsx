"use client";
// TransactionTable.tsx
import React from "react";
import { transactions } from "../../../constant";
import { BiCaretDown, BiCaretUp } from "react-icons/bi";
import StatusPill from "./StatusPill";
import { useTransactionStore } from "@/store/useTransactionStore";
import EmptyState from "../EmptyState";

// Sample data for the table

const TransactionTable: React.FC = () => {
  const { sortColumn, sortDirection, setSortColumn } = useTransactionStore();

  const sortedTransactions = [...transactions].sort((a, b) => {
    const aValue = a[sortColumn as keyof typeof a];
    const bValue = b[sortColumn as keyof typeof b];

    if (aValue < bValue) {
      return sortDirection === "asc" ? -1 : 1;
    }
    if (aValue > bValue) {
      return sortDirection === "asc" ? 1 : -1;
    }
    return 0;
  });

  const getSortIcon = (column: string) => {
    if (sortColumn === column) {
      return sortDirection === "asc" ? <BiCaretUp /> : <BiCaretDown />;
    }
    return <BiCaretDown />;
  };

  if (transactions.length < 1) {
    return (
      <EmptyState
        title="No Transaction Recorded"
        description="It looks like you haven't added any transactions yet. Start by adding your first transaction to see your financial history here."
      />
    );
  }

  return (
    <div className="overflow-x-auto rounded-lg">
      <table className="min-w-full table-fixed ">
        <thead className="">
          <tr className="">
            {["date", "remark", "amount", "currency", "type"].map(
              (column, index) => (
                <th
                  key={column}
                  className={`border-b border-gray-200 ${
                    index === 0 ? "w-1/2" : "w-1/6"
                  } px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer`}
                >
                  <button
                    className="flex items-center w-full focus:outline-none"
                    onClick={() => setSortColumn(column)}
                  >
                    {column.charAt(0).toUpperCase() + column.slice(1)}
                    {getSortIcon(column)}
                  </button>
                </th>
              )
            )}
          </tr>
        </thead>
        <tbody className=" bg-white">
          {sortedTransactions.map((transaction, index) => (
            <tr key={transaction.id}>
              <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 border-b border-gray-200">
                {transaction.date}
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900 border-b border-gray-200">
                {transaction.remark}
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 border-b border-gray-200">
                {transaction.amount >= 0
                  ? `$${transaction.amount.toLocaleString()}`
                  : `-$${Math.abs(transaction.amount).toLocaleString()}`}
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 border-b border-gray-200">
                {transaction.currency}
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 border-b border-gray-200">
                <StatusPill
                  status={transaction.type === "Credit" ? "green" : "red"}
                  title={transaction.type}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;
