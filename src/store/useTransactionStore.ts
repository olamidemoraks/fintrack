// store.ts
import { create } from "zustand";

interface TransactionState {
  sortColumn: string;
  sortDirection: "asc" | "desc";
  setSortColumn: (column: string) => void;
}

export const useTransactionStore = create<TransactionState>((set) => ({
  sortColumn: "date",
  sortDirection: "desc",
  setSortColumn: (column) =>
    set((state) => ({
      sortColumn: column,
      sortDirection:
        state.sortColumn === column
          ? state.sortDirection === "asc"
            ? "desc"
            : "asc"
          : "asc",
    })),
}));
