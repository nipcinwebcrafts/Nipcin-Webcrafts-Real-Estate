import React, { useState } from 'react';
import { Calculator, DollarSign, TrendingUp, Percent, Sparkles, Building2 } from 'lucide-react';
import { Currency, ThemeMode } from '../types';
import { USD_TO_GHS_RATE } from '../data/propertiesData';

interface InvestmentRoiCalculatorSectionProps {
  currency: Currency;
  theme: ThemeMode;
  onBookInspectionClick: () => void;
}

export const InvestmentRoiCalculatorSection: React.FC<InvestmentRoiCalculatorSectionProps> = ({
  currency,
  theme,
  onBookInspectionClick,
}) => {
  const [propertyValue, setPropertyValue] = useState<number>(650000); // USD
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(30); // %
  const [interestRate, setInterestRate] = useState<number>(9.5); // %
  const [loanTermYears, setLoanTermYears] = useState<number>(15); // years
  const [estimatedMonthlyRent, setEstimatedMonthlyRent] = useState<number>(4500); // USD

  // Calculation Logic
  const downPaymentAmount = (propertyValue * downPaymentPercent) / 100;
  const loanPrincipal = propertyValue - downPaymentAmount;

  const monthlyInterestRate = interestRate / 100 / 12;
  const totalPaymentsCount = loanTermYears * 12;

  let monthlyMortgage = 0;
  if (monthlyInterestRate > 0) {
    monthlyMortgage =
      (loanPrincipal *
        (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalPaymentsCount))) /
      (Math.pow(1 + monthlyInterestRate, totalPaymentsCount) - 1);
  } else {
    monthlyMortgage = loanPrincipal / totalPaymentsCount;
  }

  const annualRentalIncome = estimatedMonthlyRent * 12;
  const grossRentalYield = (annualRentalIncome / propertyValue) * 100;
  const netMonthlyCashflow = estimatedMonthlyRent - monthlyMortgage;

  const formatCurrency = (val: number) => {
    if (currency === 'GHS') {
      return `₵ ${Math.round(val * USD_TO_GHS_RATE).toLocaleString()}`;
    }
    return `$ ${Math.round(val).toLocaleString()}`;
  };

  return (
    <section 
      id="calculator" 
      className={`py-20 transition-colors duration-300 relative border-t ${
        theme === 'dark' ? 'bg-[#0E110F] text-white border-white/10' : 'bg-slate-100 text-slate-900 border-slate-200'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0F3D2E] text-[#C7A44D] text-xs font-semibold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5" />
            <span>Diaspora & Investor Suite</span>
          </div>
          <h2 className="font-['Playfair_Display',serif] text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Mortgage & Investment Yield Calculator
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto font-light">
            Project your monthly mortgage repayments, net rental cash flows, and estimated ROI yields for Accra properties in real-time.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Inputs Column (7 cols) */}
          <div className={`lg:col-span-7 p-6 sm:p-8 rounded-2xl border shadow-2xl space-y-6 ${
            theme === 'dark' ? 'bg-[#121212] border-white/15' : 'bg-white border-slate-200'
          }`}>
            
            <h3 className="font-['Playfair_Display',serif] text-xl font-bold text-[#C7A44D] flex items-center gap-2">
              <Building2 className="w-5 h-5" />
              <span>Property & Financing Parameters</span>
            </h3>

            <div className="space-y-4 text-xs">
              
              {/* Property Value Slider */}
              <div className="space-y-1.5">
                <div className="flex justify-between font-medium text-slate-300">
                  <span>Target Property Price ({currency}):</span>
                  <span className="text-[#C7A44D] font-bold text-sm">{formatCurrency(propertyValue)}</span>
                </div>
                <input
                  type="range"
                  min={100000}
                  max={5000000}
                  step={25000}
                  value={propertyValue}
                  onChange={(e) => setPropertyValue(Number(e.target.value))}
                  className="w-full accent-[#C7A44D] h-2 bg-white/10 rounded-lg cursor-pointer"
                />
              </div>

              {/* Down Payment Slider */}
              <div className="space-y-1.5">
                <div className="flex justify-between font-medium text-slate-300">
                  <span>Down Payment ({downPaymentPercent}%):</span>
                  <span className="text-emerald-400 font-bold">{formatCurrency(downPaymentAmount)}</span>
                </div>
                <input
                  type="range"
                  min={10}
                  max={80}
                  step={5}
                  value={downPaymentPercent}
                  onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                  className="w-full accent-[#C7A44D] h-2 bg-white/10 rounded-lg cursor-pointer"
                />
              </div>

              {/* Interest Rate & Loan Term */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="space-y-1">
                  <label className="text-slate-300 font-medium">Interest Rate (% per annum)</label>
                  <input
                    type="number"
                    step="0.1"
                    min="1"
                    max="25"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#C7A44D]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-slate-300 font-medium">Loan Tenure (Years)</label>
                  <select
                    value={loanTermYears}
                    onChange={(e) => setLoanTermYears(Number(e.target.value))}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#C7A44D]"
                  >
                    <option value={5} className="bg-[#121212]">5 Years</option>
                    <option value={10} className="bg-[#121212]">10 Years</option>
                    <option value={15} className="bg-[#121212]">15 Years</option>
                    <option value={20} className="bg-[#121212]">20 Years</option>
                  </select>
                </div>
              </div>

              {/* Expected Monthly Rent Input */}
              <div className="space-y-1.5 pt-2 border-t border-white/10">
                <div className="flex justify-between font-medium text-slate-300">
                  <span>Estimated Monthly Rental Income ({currency}):</span>
                  <span className="text-[#C7A44D] font-bold text-sm">{formatCurrency(estimatedMonthlyRent)}</span>
                </div>
                <input
                  type="range"
                  min={500}
                  max={25000}
                  step={250}
                  value={estimatedMonthlyRent}
                  onChange={(e) => setEstimatedMonthlyRent(Number(e.target.value))}
                  className="w-full accent-[#C7A44D] h-2 bg-white/10 rounded-lg cursor-pointer"
                />
              </div>

            </div>

          </div>

          {/* Results Summary Column (5 cols) */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#0F3D2E] via-[#17523F] to-[#0F3D2E] border border-[#C7A44D]/40 text-white shadow-2xl flex flex-col justify-between space-y-6">
            
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/40 text-[#C7A44D] text-xs font-semibold border border-[#C7A44D]/30 mb-4">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>Yield Analysis Output</span>
              </div>

              <h3 className="font-['Playfair_Display',serif] text-2xl font-bold text-white mb-6">
                Investment Forecast
              </h3>

              <div className="space-y-4 text-xs">
                
                <div className="p-3 rounded-xl bg-black/30 border border-white/10 flex items-center justify-between">
                  <span className="text-slate-300">Monthly Mortgage Payment:</span>
                  <span className="font-['Playfair_Display',serif] text-lg font-bold text-[#C7A44D]">
                    {formatCurrency(monthlyMortgage)}
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-black/30 border border-white/10 flex items-center justify-between">
                  <span className="text-slate-300">Gross Annual Rental Yield:</span>
                  <span className="font-['Playfair_Display',serif] text-lg font-bold text-emerald-300">
                    {grossRentalYield.toFixed(2)} % / Year
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-black/30 border border-white/10 flex items-center justify-between">
                  <span className="text-slate-300">Estimated Monthly Cashflow:</span>
                  <span className={`font-['Playfair_Display',serif] text-lg font-bold ${
                    netMonthlyCashflow >= 0 ? 'text-emerald-400' : 'text-rose-400'
                  }`}>
                    {formatCurrency(netMonthlyCashflow)}
                  </span>
                </div>

              </div>
            </div>

            <div className="pt-4 border-t border-white/10 space-y-3">
              <p className="text-[11px] text-emerald-100/80 font-light leading-relaxed">
                * Projections are based on prime Accra market benchmarks (East Legon, Cantonments, Airport Residential Area).
              </p>
              <button
                onClick={onBookInspectionClick}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#C7A44D] via-[#E2C172] to-[#B38E37] text-[#0F3D2E] font-bold text-xs shadow-xl hover:brightness-110 transition-all flex items-center justify-center gap-2"
              >
                <span>Discuss Investment Plan With Consultant</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
