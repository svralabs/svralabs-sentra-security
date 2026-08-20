import FeatureGrid from '../components/FeatureGrid';
import Testimonials from '../components/Testimonials';
import Stats from '../components/Stats';

export default function Landing() {
  const features = [
    {
      title: 'Global Mesh',
      description: 'Connect your entire infrastructure with our ultra-fast global network fabric.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAfr7Q67yoZ9q2H73YODpHwbTh0i_plTR9dQLu_LIIe7psiPMF0Uf2Du1gIckgn6DeLBMQ6zDT_jwRSfcoPtwMutDNi-_h_dpvuE9V5ntepDIzz_zzFo9MCNP__lDt0CPWEYpHOfStAGl0wqFv4SynvwFBSj1lXguFrdiQPcPNgwJKheqJRCO606O4Y5cX2JytixjeScvKnRV1DLBCPaWFted_nS8JXEFBphT9-q_OgG_DxHrvaAAgd'
    },
    {
      title: 'Zero Trust Access',
      description: 'Implement strict identity verification at every access point without compromising usability.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9SS-TzdVR8Va77IQ_VNetHvdyEukA1dn5j9oBonSnjbGYp6P35JuNJyTyY7TKLFt9uLgwpv17Jehp_u8qtign3J1WJIXI_nCcn0ApXjEzdzxYHiEtKIim8bxozlNMuAiJl8oyLD7NeepsMqY7uJVHoetemjb7-fqENehv3ZEYc6poCPUuuScbWTxo08VqYaU9yGebFyqI2blHNplo3si9IwWlmqytVt8-eNW1Q06EfXlfgcB5JXOp'
    }
  ];

  const testimonials = [
    {
      name: 'Alex Johnson',
      position: 'CTO at TechCorp',
      quote: 'Sentra has completely transformed our security posture. The setup was a breeze and the results are outstanding.',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      rating: 5
    },
    {
      name: 'Sarah Williams',
      position: 'Security Architect at DataSecure',
      quote: 'The anomaly detection capabilities are unparalleled. We\'ve seen a 60% reduction in security incidents since implementation.',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      rating: 5
    },
    {
      name: 'Michael Chen',
      position: 'DevOps Lead at CloudNet',
      quote: 'The global mesh network has significantly improved our application performance across all regions.',
      avatar: 'https://randomuser.me/api/portraits/men/65.jpg',
      rating: 4
    }
  ];

  const stats = [
    { value: '46k+', label: 'Developers' },
    { value: '99.99%', label: 'Uptime' }
  ];

  return (
    <main className="pt-32 pb-20">
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <FeatureGrid features={features} />
        <Testimonials testimonials={testimonials} />
        <Stats stats={stats} />
      </section>
    </main>
  );
}
