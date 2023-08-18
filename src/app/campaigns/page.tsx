'use client';
import { CampaignsHero } from './components/CampaignsHero';
import { Upcomming } from './components/Upcomming';
import { PreviousCampaign } from './components/previousCampaigns/PreviousCampaign';

export default function Campaigns() {
  return (
    <main className=" min-h-screen w-screen items-center justify-center overflow-hidden">
      <CampaignsHero/> 
      <Upcomming/>
      <PreviousCampaign/>  
    </main>
  )
}