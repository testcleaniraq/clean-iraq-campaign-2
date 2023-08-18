import ScrollReveal from 'scrollreveal';

const sr = ScrollReveal({
  reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200,
});

export const initScrollReveal = () => {
  sr.reveal('#SectionCampaignMessageGallery', { origin: 'top' });
  sr.reveal('', { origin: 'bottom' });
  sr.reveal('#FirstSectionWhoWeAre, #SectionContentCampiagnMessage, #SectionPhotoMeetOurTeam', { origin: 'left' });
  sr.reveal('#SecondSectionWhoWeAre, #SectionPhotoCampiagnMessage, #SectionContentMeetOurTeam', { origin: 'right' });
};
