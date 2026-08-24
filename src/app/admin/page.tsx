'use client';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { FolderGit, MessageSquare, Users } from 'lucide-react';

export default function AdminDashboard() {
  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-medium tracking-tight">Dashboard</h1>
          <p className="font-mono text-sm text-zinc-500 mt-1">
            Manage your projects and client messages
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="border border-white/10 p-6 hover:bg-white/5 transition">
            <div className="flex items-center gap-3 mb-4">
              <FolderGit className="h-5 w-5 text-zinc-500" />
              <span className="font-mono text-sm">Projects</span>
            </div>
            <a href="/admin/projects" className="font-mono text-xs uppercase tracking-wider text-zinc-500 hover:text-white transition">
              Manage Projects →
            </a>
          </div>

          <div className="border border-white/10 p-6 hover:bg-white/5 transition">
            <div className="flex items-center gap-3 mb-4">
              <MessageSquare className="h-5 w-5 text-zinc-500" />
              <span className="font-mono text-sm">Messages</span>
            </div>
            <a href="/admin/messages" className="font-mono text-xs uppercase tracking-wider text-zinc-500 hover:text-white transition">
              View Messages →
            </a>
          </div>

          <div className="border border-white/10 p-6 hover:bg-white/5 transition">
            <div className="flex items-center gap-3 mb-4">
              <Users className="h-5 w-5 text-zinc-500" />
              <span className="font-mono text-sm">Quick Links</span>
            </div>
            <div className="space-y-2">
              <a href="/" className="block font-mono text-[10px] uppercase tracking-wider text-zinc-500 hover:text-white transition">
                View Site
              </a>
              <a href="/admin/login" className="block font-mono text-[10px] uppercase tracking-wider text-zinc-500 hover:text-white transition">
                Login Page
              </a>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}