import React from 'react';

export default function FeatureGrid() {
  const features = [
    {
      title: 'Real-time Threat Detection',
      description: 'AI-powered monitoring identifies and neutralizes threats before they impact your business.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAfr7Q67yoZ9q2H73YODpHwbTh0i_plTR9dQLu_LIIe7psiPMF0Uf2Du1gIckgn6DeLBMQ6zDT_jwRSfcoPtwMutDNi-_h_dpvuE9V5ntepDIzz_zzFo9MCNP__lDt0CPWEYpHOfStAGl0wqFv4SynvwFBSj1lXguFrdiQPcPNgwJKheqJRCO606O4Y5cX2JytixjeScvKnRV1DLBCPaWFted_nS8JXEFBphT9-q_OgG_DxHrvaAAgd',
      alt: 'Threat detection dashboard',
    },
    {
      title: 'Automated Compliance',
      description: 'Continuous compliance checks and automated reporting for GDPR, HIPAA, and more.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC6Jx7Q67yoZ9q2H73YODpHwbTh0i_plTR9dQLu_LIIe7psiPMF0Uf2Du1gIckgn6DeLBMQ6zDT_jwRSfcoPtwMutDNi-_h_dpvuE9V5ntepDIzz_zzFo9MCNP__lDt0CPWEYpHOfStAGl0wqFv4SynvwFBSj1lXguFrdiQPcPNgwJKheqJRCO606O4Y5cX2JytixjeScvKnRV1DLBCPaWFted_nS8JXEFBphT9-q_OgG_DxHrvaAAgd',
      alt: 'Compliance report',
    },
  ];

  return (
    <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter mt-section-gap">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group relative aspect-[16/9] md:aspect-auto md:h-[400px] rounded-card overflow-hidden border-gradient animate-on-scroll"
            style={{ transitionDelay: `${500 + index * 100}ms` }}
          >
            <div
              className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url('${feature.image}')` }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-80"></div>
            <div className="absolute bottom-0 left-0 p-10">
              <h3 className="font-headline-md text-headline-md text-primary mb-4">{feature.title}</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
