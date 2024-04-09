import { Suspense } from 'react';

import { Metadata } from 'next';

import CardWrapper from '@/app/[locale]/ui/dashboard/cards';
import LatestInvoices from '@/app/[locale]/ui/dashboard/latest-invoices';
import RevenueChart from '@/app/[locale]/ui/dashboard/revenue-chart';
import { lusitana } from '@/app/[locale]/ui/fonts';
import {
  CardsSkeleton,
  LatestInvoicesSkeleton,
  RevenueChartSkeleton,
} from '@/app/[locale]/ui/skeletons';

export const metadata: Metadata = {
  title: 'Dashboard',
};

export default async function Page() {

  return (
    <main >
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl text-amber-50`}>
        Dashboard
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 s">
        <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper />
        </Suspense>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>
        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <LatestInvoices />
        </Suspense>
      </div>
    </main>
  );
}
