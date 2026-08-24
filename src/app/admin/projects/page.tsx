'use client';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import ProjectsManager from '@/components/dashboard/ProjectsManager';

export default function AdminProjects() {
  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto">
        <ProjectsManager />
      </div>
    </DashboardLayout>
  );
}