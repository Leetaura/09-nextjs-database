import { Card } from '@/app/components/molecules/card';
import RevenueChart from '@/app/components/molecules/revenue-chart';
import LatestInvoices from '@/app/components/molecules/latest-invoices';
import { lusitana } from '@/app/components/atoms/fonts';

export default async function Page() {
  // Definisikan nilai untuk totalPaidInvoices, totalPendingInvoices, dan numberOfInvoices
  const totalPaidInvoices = 1000;
  const totalPendingInvoices = 1000;
  const numberOfInvoices = 1000;
  // Contoh nilai, sesuaikan dengan sumber data Anda

  // Tidak ada definisi untuk numberOfCustomers, maka kita tambahkan definisi untuknya
  const numberOfCustomers = 500; // Contoh nilai, sesuaikan dengan sumber data Anda

  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card title="Collected" value={totalPaidInvoices} type="collected" />
        <Card title="Pending" value={totalPendingInvoices} type="pending" /> 
        <Card title="Total Invoices" value={numberOfInvoices} type="invoices" /> 
        <Card
          title="Total Customers"
          value={numberOfCustomers}
          type="customers"
        /> 
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <RevenueChart />
        <LatestInvoices />
      </div>
    </main>
  );
}