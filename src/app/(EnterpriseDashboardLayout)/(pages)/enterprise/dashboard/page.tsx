"use client";
import Typography from '@mui/material/Typography';
import PageContainer from "@/app/(EnterpriseDashboardLayout)/components/container/PageContainer";
import DashboardCard from "@/app/(EnterpriseDashboardLayout)/components/shared/DashboardCard";

const SamplePage = () => {
  return (
    <PageContainer title="Sample Page" description="this is Sample page">
      <DashboardCard title="Sample Page">
        <Typography>This is a sample2 page</Typography>
      </DashboardCard>
    </PageContainer>
  );
};

export default SamplePage;
