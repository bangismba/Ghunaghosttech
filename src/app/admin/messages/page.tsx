'use client';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import MessagesInbox from '@/components/dashboard/MessagesInbox';

export default function AdminMessages() {
  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto">
        <MessagesInbox />
      </div>
    </DashboardLayout>
  );
}