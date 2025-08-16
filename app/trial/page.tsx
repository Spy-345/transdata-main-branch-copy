import { Suspense } from "react";
import { Metadata } from "next";
import PlexusBackground from "@/components/PlexusBackground";
import { TrialSignupForm } from "./TrialSignupForm";
import { TrialInfo } from "./TrialInfo";

export const metadata: Metadata = {
  title: "Start Free 7-Day Trial - TransDataNexus",
  description:
    "Start your free 7-day trial of TransDataNexus pharmaceutical trade intelligence platform. No credit card required. Get instant access to 50M+ trade records.",
  keywords: [
    "free trial",
    "TransDataNexus",
    "pharmaceutical trade intelligence",
    "7-day trial",
    "no credit card",
  ],
};

export default function TrialPage() {
  return (
    <div className='min-h-screen w-full bg-cover bg-center'>
      <PlexusBackground nodeCount={100} maxDistance={120}>
        <div className='flex items-center justify-center min-h-screen'>
          <div className='relative bg-white/90 backdrop-blur-md rounded-3xl shadow-md max-w-5xl w-full px-6 pt-10 pb-12 my-12'>
            <h1 className='text-4xl font-extrabold mb-8 text-center animate-fade-in'>
              <span className='bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent animate-fade-in-delay-1'>
                Start Your Free
              </span>
              <br />
              <span className='bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 bg-clip-text text-transparent animate-fade-in-delay-2'>
                7-Day Trial
              </span>
            </h1>

            <TrialInfo />

            <Suspense
              fallback={<div className='text-center py-8'>Loading form...</div>}
            >
              <TrialSignupForm />
            </Suspense>
          </div>
        </div>
      </PlexusBackground>
    </div>
  );
}
