import React from 'react';

export default function Disclaimer() {
  return (
    <div className="w-full bg-[#08090A] text-[#8A8F98] py-6 px-4 border-t border-[#1A1A1A] text-[10px] sm:text-[11px] leading-snug text-center">
      <div className="w-full max-w-3xl mx-auto space-y-2">
        <h4 className="font-semibold text-[#A1A1AA] uppercase tracking-wider mb-1">Disclaimer</h4>
        <p>
          CapQuant is a data and technology platform providing analytics, scoring, and benchmarking of predictive models. CapQuant acts solely as a data provider and does not provide investment advice or execute trades, nor does it offer brokerage, portfolio management, or custodial services. Nothing on this website constitutes an offer, solicitation, or recommendation to buy or sell any financial instrument or to engage in any investment strategy. All content is provided for informational and research purposes only and should not be relied upon for making financial decisions.
        </p>
        <p>
          CapQuant does not hold, manage, or have access to user funds or assets at any time. Any references to performance, model outputs, or potential returns are hypothetical or based on historical data and are not indicative of future results. Any use of third-party platforms, execution venues, or financial services is independent from CapQuant and subject to their own terms and regulatory frameworks. You are solely responsible for your decisions and any associated risks.
        </p>
        <p>
          CapQuant is currently in a pre-launch phase. No products or services are being offered at this time. Access is limited to a waitlist for early information and updates only and does not constitute any contractual or financial relationship. Availability of future features or services may be subject to regulatory requirements and jurisdictional restrictions.
        </p>
      </div>
    </div>
  );
}