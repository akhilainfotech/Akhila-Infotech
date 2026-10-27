'use client';

import React, { useState } from 'react';
import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SecurityFeatures from '@/components/SecurityFeatures';
import ServicesSection from '@/components/ServicesSection';
import Methodology from '@/components/Methodology';
import CaseStudies from '@/components/CaseStudies';
import ConsultationForm from '@/components/ConsultationForm';
import Footer from '@/components/Footer';

// Modals
import SecurityPortalModal from '@/components/modals/SecurityPortalModal';
import BlueprintModal from '@/components/modals/BlueprintModal';
import AuditModal from '@/components/modals/AuditModal';
import AdminModal from '@/components/modals/AdminModal';
import { useToast } from '@/lib/toast-context';

export default function Home() {
  // Modal states
  const [securityModalOpen, setSecurityModalOpen] = useState(false);
  const [securityModalTab, setSecurityModalTab] = useState<'login' | 'email-check' | 'session'>('login');
  const [blueprintKey, setBlueprintKey] = useState<string | null>(null);
  const [auditModalOpen, setAuditModalOpen] = useState(false);
  const [adminModalOpen, setAdminModalOpen] = useState(false);

  // Consultation pre-fill state
  const [selectedDomain, setSelectedDomain] = useState<string>('');

  const { showToast } = useToast();

  const handleOpenPortalLogin = () => {
    setSecurityModalTab('login');
    setSecurityModalOpen(true);
  };

  const handleOpenEmailCheck = () => {
    setSecurityModalTab('email-check');
    setSecurityModalOpen(true);
  };

  const handleSelectDomain = (domain: string) => {
    setSelectedDomain(domain);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
    showToast(`Selected "${domain}" in consultation form.`, 'info');
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Top Announcement Bar */}
      <TopBar
        onOpenEmailCheck={handleOpenEmailCheck}
        onOpenAdmin={() => setAdminModalOpen(true)}
      />

      {/* Sticky Navigation */}
      <Navbar
        onOpenPortalLogin={handleOpenPortalLogin}
        onOpenEmailCheck={handleOpenEmailCheck}
        onOpenAdmin={() => setAdminModalOpen(true)}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenEmailCheck={handleOpenEmailCheck}
          onOpenAudit={() => setAuditModalOpen(true)}
        />

        {/* Security Features */}
        <SecurityFeatures onOpenEmailCheck={handleOpenEmailCheck} />

        {/* Core IT Consulting Services */}
        <ServicesSection
          onOpenBlueprint={key => setBlueprintKey(key)}
          onSelectDomain={handleSelectDomain}
        />

        {/* Methodology */}
        <Methodology />

        {/* Industry Case Studies */}
        <CaseStudies />

        {/* Consultation Booking Desk */}
        <ConsultationForm
          selectedDomain={selectedDomain}
          onClearDomain={() => setSelectedDomain('')}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenPortalLogin={handleOpenPortalLogin}
        onOpenEmailCheck={handleOpenEmailCheck}
        onOpenAudit={() => setAuditModalOpen(true)}
        onOpenAdmin={() => setAdminModalOpen(true)}
        onSelectDomain={handleSelectDomain}
      />

      {/* Interactive Modals */}
      <SecurityPortalModal
        isOpen={securityModalOpen}
        initialTab={securityModalTab}
        onClose={() => setSecurityModalOpen(false)}
        onOpenConsultation={handleSelectDomain}
      />

      <BlueprintModal
        blueprintKey={blueprintKey}
        onClose={() => setBlueprintKey(null)}
        onSelectDomain={handleSelectDomain}
      />

      <AuditModal
        isOpen={auditModalOpen}
        onClose={() => setAuditModalOpen(false)}
      />

      <AdminModal
        isOpen={adminModalOpen}
        onClose={() => setAdminModalOpen(false)}
      />
    </div>
  );
}
