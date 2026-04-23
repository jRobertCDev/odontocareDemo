import Header from "@/components/Header";
import StatsGrid from "@/components/Statcard";
import CitaList from "@/components/Statuscard";
import StockPanel from "@/components/Stockpanel";
import SummaryPanel from "@/components/Summarypanel";
import React from "react";

export default function DashboardPage() {
  return (
    <>
     <div className="flex h-screen bg-gray-50">
  {/* <Sidebar /> */}
  <div className="flex-1 flex flex-col overflow-hidden min-w-0">
    <div className="md:hidden h-14" />
    <Header />
    <main className="flex-1 overflow-y-auto p-6 flex flex-col gap-5">
      <StatsGrid />
      <div className="flex gap-4">
        <CitaList />
        <div className="w-56 flex flex-col gap-3">
          <StockPanel />
          <SummaryPanel />
        </div>
      </div>
    </main>
  </div>
</div>
    </>
  );
}
