'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface CustomerData {
  // Customer Information
  customerName: string
  businessOverview: string
  industryVertical: string
  totalAnnualRevenue: string
  customerSizeScale: string
  // Contact Details
  keyContactPerson: string
  designationRole: string
  emailAddress: string
  phoneWhatsApp: string
  linkedInProfile: string
  websiteUrl: string
  // Professional Drivers (Proposition 2+)
  keyBuyingCriteria: string
  keyPainPoints: string
  upcomingTriggersAndInitiatives: string
  // Purchasing Behaviour Metrics (Proposition 3)
  budgetOwnership: string
  procurementModel: string
  preferredEngagementType: string
  // Solution Requirements (Proposition 3)
  preferredSolutionType: string
  preferredDeploymentModel: string
  performanceExpectations: string
  // CMI Insights (Proposition 3)
  customerBenchmarkingSummary: string
  additionalCommentsNotes: string
}

// Sample data for Substation Monitoring System
const sampleCustomerData: CustomerData[] = [
  {
    customerName: 'State Grid Corporation of China',
    businessOverview: 'Largest utility company globally, operates extensive transmission and distribution network with over 1 million substations',
    industryVertical: 'Power Utilities',
    totalAnnualRevenue: '460,000',
    customerSizeScale: 'Large national utility with extensive substation networks across 26 provinces',
    keyContactPerson: 'Zhang Wei',
    designationRole: 'VP - Smart Grid Operations',
    emailAddress: 'z.wei@sgcc.com.cn',
    phoneWhatsApp: '+86 10 6659 7800',
    linkedInProfile: 'linkedin.com/in/zhangwei-sgcc',
    websiteUrl: 'www.sgcc.com.cn',
    keyBuyingCriteria: 'Scalability across thousands of substations, compatibility with existing SCADA and EMS, real-time DGA monitoring',
    keyPainPoints: 'Aging transformer fleet, limited visibility in remote substations, manual inspection reliance',
    upcomingTriggersAndInitiatives: 'Ultra-high voltage grid expansion, AI-driven predictive maintenance rollout, digital substation program',
    budgetOwnership: 'Grid modernization and digital transformation department',
    procurementModel: 'Long term framework agreements with OEMs, phased rollouts across provinces',
    preferredEngagementType: 'Long term strategic partnerships with early involvement in design phase',
    preferredSolutionType: 'Substation-wide condition monitoring platforms with integrated SCADA',
    preferredDeploymentModel: 'Hybrid deployment with edge processing at substation level and centralized analytics',
    performanceExpectations: 'Real-time alerts within 5 seconds, 99.99% system uptime, accurate DGA trend analysis',
    customerBenchmarkingSummary: 'Tier 1 - Global leader, highest potential for large-scale deployment',
    additionalCommentsNotes: 'Strong focus on indigenous technology development, open to joint R&D partnerships'
  },
  {
    customerName: 'Enel Group',
    businessOverview: 'Multinational energy company operating power generation and distribution across 30+ countries with focus on renewables integration',
    industryVertical: 'Power Utilities / Renewable Energy',
    totalAnnualRevenue: '92,000',
    customerSizeScale: 'Large multinational utility with substations across Europe, Latin America, and North America',
    keyContactPerson: 'Marco Rossi',
    designationRole: 'Director - Grid Digital Transformation',
    emailAddress: 'm.rossi@enel.com',
    phoneWhatsApp: '+39 06 8305 1',
    linkedInProfile: 'linkedin.com/in/marcorossi-enel',
    websiteUrl: 'www.enel.com',
    keyBuyingCriteria: 'Cybersecurity compliance with EU standards, multi-vendor sensor compatibility, cloud-native analytics',
    keyPainPoints: 'Integration of renewable intermittency data, legacy system modernization, cross-country standardization',
    upcomingTriggersAndInitiatives: 'EU Clean Energy Package compliance, digital twin deployment for substations, grid flexibility programs',
    budgetOwnership: 'Central utility procurement and digital transformation teams',
    procurementModel: 'EPC driven procurement for greenfield, pilot projects for brownfield upgrades',
    preferredEngagementType: 'Proof of concept and pilot deployments followed by phased rollouts',
    preferredSolutionType: 'Online transformer monitoring with cloud-based analytics platform',
    preferredDeploymentModel: 'Hybrid deployment with cloud-based analytics across country operations',
    performanceExpectations: 'High system availability, accurate fault detection with low false alarms, GDPR-compliant data handling',
    customerBenchmarkingSummary: 'Tier 1 - European leader, strong digital transformation budget allocation',
    additionalCommentsNotes: 'Active in open-source initiatives, prefers vendor-agnostic platforms'
  },
  {
    customerName: 'NTPC Limited',
    businessOverview: 'India\'s largest power generation company with 70+ power stations and associated HV/EHV substations for evacuation',
    industryVertical: 'Power Utilities',
    totalAnnualRevenue: '18,500',
    customerSizeScale: 'Large national utility with 400+ substations across India',
    keyContactPerson: 'Rajesh Sharma',
    designationRole: 'General Manager - Electrical Maintenance',
    emailAddress: 'r.sharma@ntpc.co.in',
    phoneWhatsApp: '+91 11 2436 0100',
    linkedInProfile: 'linkedin.com/in/rajeshsharma-ntpc',
    websiteUrl: 'www.ntpc.co.in',
    keyBuyingCriteria: 'Reliability of real-time monitoring data, transformer DGA analysis, compatibility with existing relay protection',
    keyPainPoints: 'Unexpected transformer failures at remote stations, high cost of unplanned outages, manual oil sampling delays',
    upcomingTriggersAndInitiatives: 'Smart grid modernization under National Smart Grid Mission, renewable integration at solar parks, fleet-wide transformer health assessment',
    budgetOwnership: 'Asset management and operations departments',
    procurementModel: 'Direct sourcing through GeM portal and OEM framework agreements',
    preferredEngagementType: 'Vendor qualification and field trials at pilot stations before fleet rollout',
    preferredSolutionType: 'Online transformer monitoring systems with DGA, bushing, and cooling monitoring',
    preferredDeploymentModel: 'On-premise deployment within utility SCADA network',
    performanceExpectations: 'Real-time alerts and alarms, accurate fault gas detection, integration with existing SCADA',
    customerBenchmarkingSummary: 'Tier 1 - India\'s largest genco, high priority for transformer monitoring',
    additionalCommentsNotes: 'Government PSU with structured procurement process, 6-12 month procurement cycle'
  },
  {
    customerName: 'Duke Energy Corporation',
    businessOverview: 'Major US electric utility serving 8.2 million customers across 6 states with extensive T&D substation infrastructure',
    industryVertical: 'Power Utilities',
    totalAnnualRevenue: '28,800',
    customerSizeScale: 'Large regional utility with 2,100+ substations across Southeast and Midwest US',
    keyContactPerson: 'Jennifer Mitchell',
    designationRole: 'VP - Grid Modernization & Asset Management',
    emailAddress: 'j.mitchell@duke-energy.com',
    phoneWhatsApp: '+1 704 382 3853',
    linkedInProfile: 'linkedin.com/in/jennifermitchell-duke',
    websiteUrl: 'www.duke-energy.com',
    keyBuyingCriteria: 'NERC CIP compliance, long-term lifecycle management, asset health scoring algorithms',
    keyPainPoints: 'Aging transmission infrastructure (avg. 40+ years), hurricane/storm resilience gaps, workforce retirement challenges',
    upcomingTriggersAndInitiatives: 'Grid Investment Plan ($75B over 10 years), FERC reliability mandates, self-healing grid deployment',
    budgetOwnership: 'Grid modernization department with senior management for strategic investments',
    procurementModel: 'Multi-vendor sourcing with strategic partnerships for core monitoring platforms',
    preferredEngagementType: 'Long term strategic partnerships with ongoing technical support and analytics upgrades',
    preferredSolutionType: 'Substation-wide condition monitoring with integrated asset management platform',
    preferredDeploymentModel: 'Hybrid with on-premise edge computing and cloud-based fleet analytics',
    performanceExpectations: '99.95% uptime, sub-second alerting, secure NERC CIP-compliant data transmission',
    customerBenchmarkingSummary: 'Tier 1 - Major US utility, active grid modernization spender',
    additionalCommentsNotes: 'Strong preference for proven US-deployed solutions, open to innovation pilots'
  },
  {
    customerName: 'Iberdrola S.A.',
    businessOverview: 'Global energy leader with largest renewable portfolio worldwide, operates T&D networks across Spain, UK, US, and Brazil',
    industryVertical: 'Renewable Energy / Power Utilities',
    totalAnnualRevenue: '49,300',
    customerSizeScale: 'Large multinational utility with substations across 4 continents',
    keyContactPerson: 'Carlos Garcia',
    designationRole: 'Head of Substation Engineering',
    emailAddress: 'c.garcia@iberdrola.es',
    phoneWhatsApp: '+34 91 784 2000',
    linkedInProfile: 'linkedin.com/in/carlosgarcia-iberdrola',
    websiteUrl: 'www.iberdrola.com',
    keyBuyingCriteria: 'Scalability for offshore wind substations, harsh environment reliability, IEC 61850 compatibility',
    keyPainPoints: 'Offshore substation accessibility challenges, renewable variability impact on transformers, cross-border system standardization',
    upcomingTriggersAndInitiatives: 'Offshore wind farm expansion (Baltic Eagle, Vineyard Wind), digital substation rollout in Spain, EU taxonomy compliance',
    budgetOwnership: 'Engineering and protection teams with central procurement',
    procurementModel: 'EPC driven for new offshore substations, framework agreements for onshore retrofit',
    preferredEngagementType: 'Early involvement during substation design phase for new offshore projects',
    preferredSolutionType: 'Integrated hardware sensor and software analytics for harsh marine environments',
    preferredDeploymentModel: 'Edge-based processing at substation level with centralized monitoring centers',
    performanceExpectations: 'High reliability in marine conditions, accurate early warning for transformer faults, low maintenance requirements',
    customerBenchmarkingSummary: 'Tier 1 - Global renewable leader, high-value offshore monitoring opportunity',
    additionalCommentsNotes: 'Strong interest in AI/ML-based predictive analytics, open to co-development partnerships'
  },
  {
    customerName: 'Tata Steel Limited',
    businessOverview: 'Leading steel manufacturer operating captive power plants and HV substations for uninterrupted production across multiple sites',
    industryVertical: 'Industrial and Manufacturing',
    totalAnnualRevenue: '30,200',
    customerSizeScale: 'Industrial asset owner with 50+ critical substations across manufacturing sites in India, UK, and Netherlands',
    keyContactPerson: 'Anil Mehta',
    designationRole: 'Chief Electrical Engineer',
    emailAddress: 'a.mehta@tatasteel.com',
    phoneWhatsApp: '+91 657 664 1234',
    linkedInProfile: 'linkedin.com/in/anilmehta-tatasteel',
    websiteUrl: 'www.tatasteel.com',
    keyBuyingCriteria: 'Reliability to prevent production downtime, furnace transformer monitoring, integration with plant DCS/SCADA',
    keyPainPoints: 'Furnace transformer failures causing production loss ($2M+/incident), high ambient temperature stress on equipment, limited condition visibility',
    upcomingTriggersAndInitiatives: 'Kalinganagar plant expansion, Industry 4.0 digital factory initiative, carbon neutrality compliance requiring grid optimization',
    budgetOwnership: 'Asset management and operations departments',
    procurementModel: 'Direct sourcing from monitoring solution providers with pilot validation',
    preferredEngagementType: 'Proof of concept at one plant followed by phased multi-site rollout',
    preferredSolutionType: 'Online transformer monitoring with DGA, thermal, and partial discharge sensors',
    preferredDeploymentModel: 'On-premise deployment integrated with plant SCADA and DCS',
    performanceExpectations: 'Real-time alerts for incipient faults, zero unplanned transformer outages, ROI within 18 months',
    customerBenchmarkingSummary: 'Tier 2 - High-value industrial customer, critical uptime requirements',
    additionalCommentsNotes: 'Budget approved for monitoring pilot, decision expected Q3 2026'
  },
  {
    customerName: 'Indian Railways (CORE)',
    businessOverview: 'Central Organisation for Railway Electrification managing 65,000+ km of electrified rail with traction substations every 30-50 km',
    industryVertical: 'Transportation and Railways',
    totalAnnualRevenue: '32,000',
    customerSizeScale: 'Large national infrastructure with 1,500+ traction substations across India',
    keyContactPerson: 'Vikram Singh',
    designationRole: 'Director - Electrical Engineering (Traction)',
    emailAddress: 'v.singh@indianrailways.gov.in',
    phoneWhatsApp: '+91 532 222 0800',
    linkedInProfile: 'linkedin.com/in/vikramsingh-railways',
    websiteUrl: 'www.core.indianrailways.gov.in',
    keyBuyingCriteria: 'Ruggedized systems for outdoor deployment, traction transformer monitoring, remote unmanned substation support',
    keyPainPoints: 'Unmanned traction substations in remote areas, frequent lightning and surge damage, delayed fault detection causing train delays',
    upcomingTriggersAndInitiatives: 'Mission 100% electrification completion, Dedicated Freight Corridor traction substations, Vande Bharat expansion requiring reliable power',
    budgetOwnership: 'Central utility procurement through Railway Board',
    procurementModel: 'Government tender process through GeM/IREPS, EPC contracts for new corridors',
    preferredEngagementType: 'Vendor qualification and field trials at select traction substations',
    preferredSolutionType: 'Ruggedized online monitoring for traction transformers and switchgear',
    preferredDeploymentModel: 'On-premise with centralized monitoring from divisional control rooms',
    performanceExpectations: 'Remote real-time monitoring, instant fault alerts to control rooms, harsh outdoor environment reliability',
    customerBenchmarkingSummary: 'Tier 1 - Large government infrastructure, massive scale opportunity',
    additionalCommentsNotes: 'Long procurement cycle (12-18 months), requires RDSO approval for new technologies'
  },
  {
    customerName: 'Singapore Power Group (SP Group)',
    businessOverview: 'Leading energy utility in Singapore operating the national electricity transmission and distribution grid with smart city integration',
    industryVertical: 'Smart Cities and Urban Infrastructure',
    totalAnnualRevenue: '5,800',
    customerSizeScale: 'Mid-size national utility with 350+ substations in a compact urban grid',
    keyContactPerson: 'Lim Chee Wai',
    designationRole: 'Head of Smart Grid Innovation',
    emailAddress: 'c.lim@spgroup.com.sg',
    phoneWhatsApp: '+65 6823 8888',
    linkedInProfile: 'linkedin.com/in/limcheewai-spgroup',
    websiteUrl: 'www.spgroup.com.sg',
    keyBuyingCriteria: 'Compact form factor for urban substations, cybersecurity (CSA standards), digital twin integration capability',
    keyPainPoints: 'Space-constrained urban substations, increasing load from EV charging, data center power demand growth',
    upcomingTriggersAndInitiatives: 'Singapore Green Plan 2030, smart grid roadmap, nationwide EV charging infrastructure buildout',
    budgetOwnership: 'Grid modernization and digital transformation teams',
    procurementModel: 'Pilot projects followed by phased rollouts across grid segments',
    preferredEngagementType: 'Proof of concept with innovation sandbox approach before full deployment',
    preferredSolutionType: 'SCADA and asset management integrated monitoring platform with digital twin',
    preferredDeploymentModel: 'Hybrid deployment with cloud-based analytics and edge processing',
    performanceExpectations: 'Real-time digital twin visualization, predictive load management, secure cloud analytics',
    customerBenchmarkingSummary: 'Tier 1 - Smart city leader, innovation-driven procurement',
    additionalCommentsNotes: 'Very receptive to emerging technologies, fast decision-making cycle (3-6 months)'
  },
  {
    customerName: 'Adani Transmission Limited',
    businessOverview: 'India\'s largest private sector power transmission company operating 19,000+ circuit km of transmission lines and associated substations',
    industryVertical: 'Power Utilities',
    totalAnnualRevenue: '5,200',
    customerSizeScale: 'Large private utility with 300+ substations including ultra-high voltage (765kV)',
    keyContactPerson: 'Prashant Joshi',
    designationRole: 'CTO - Transmission Operations',
    emailAddress: 'p.joshi@adani.com',
    phoneWhatsApp: '+91 79 2656 5555',
    linkedInProfile: 'linkedin.com/in/prashantjoshi-adani',
    websiteUrl: 'www.adanitransmission.com',
    keyBuyingCriteria: 'EHV/UHV transformer monitoring capability, rapid deployment, mobile-first analytics dashboards',
    keyPainPoints: 'Rapid network expansion outpacing maintenance capacity, 765kV transformer criticality, remote substation staffing challenges',
    upcomingTriggersAndInitiatives: 'Green Energy Corridor transmission projects, acquisition of new transmission licenses, IoT-based asset management rollout',
    budgetOwnership: 'Asset management and operations departments with CTO oversight',
    procurementModel: 'Direct sourcing with strategic vendor partnerships for monitoring solutions',
    preferredEngagementType: 'Long term strategic partnerships with phased deployment across network',
    preferredSolutionType: 'Substation-wide condition monitoring with mobile analytics dashboards',
    preferredDeploymentModel: 'Centralized monitoring centers for multiple substations with edge processing',
    performanceExpectations: 'Fleet-wide transformer health dashboards, predictive maintenance alerts, mobile-accessible analytics',
    customerBenchmarkingSummary: 'Tier 1 - Fastest growing private transmission company, aggressive digitalization',
    additionalCommentsNotes: 'Fast-track procurement process, CEO-driven digital transformation agenda'
  },
  {
    customerName: 'Siemens Gamesa Renewable Energy',
    businessOverview: 'Leading wind turbine manufacturer operating offshore wind farm substations and collector substations globally',
    industryVertical: 'Renewable Energy',
    totalAnnualRevenue: '10,200',
    customerSizeScale: 'Mid-size renewable operator with 60+ offshore and onshore collector substations',
    keyContactPerson: 'Hans Muller',
    designationRole: 'Director - Offshore Electrical Systems',
    emailAddress: 'h.muller@siemensgamesa.com',
    phoneWhatsApp: '+49 40 3600 1000',
    linkedInProfile: 'linkedin.com/in/hansmuller-sgre',
    websiteUrl: 'www.siemensgamesa.com',
    keyBuyingCriteria: 'Marine-grade durability, remote monitoring capability, integration with wind farm SCADA',
    keyPainPoints: 'Harsh offshore environment degradation, expensive offshore maintenance mobilization, limited access windows due to weather',
    upcomingTriggersAndInitiatives: 'North Sea offshore wind expansion, floating wind platform substations, repowering of aging onshore wind farms',
    budgetOwnership: 'Engineering and protection teams for new projects',
    procurementModel: 'EPC driven procurement for new offshore substations',
    preferredEngagementType: 'Early involvement during offshore substation design phase',
    preferredSolutionType: 'Integrated hardware sensor and software analytics for marine environments',
    preferredDeploymentModel: 'Edge-based processing at offshore substation with onshore centralized monitoring',
    performanceExpectations: 'High reliability in marine conditions (IP67+), minimal false alarms, 10-year maintenance-free sensor operation',
    customerBenchmarkingSummary: 'Tier 2 - Specialized offshore segment, high-value per substation',
    additionalCommentsNotes: 'Prefers European/certified suppliers, long project timelines (2-4 years from design to commissioning)'
  },
  {
    customerName: 'Saudi Electricity Company (SEC)',
    businessOverview: 'Sole electricity transmission and distribution operator in Saudi Arabia managing substations in extreme desert conditions',
    industryVertical: 'Power Utilities',
    totalAnnualRevenue: '19,500',
    customerSizeScale: 'Large national utility with 800+ substations across Saudi Arabia',
    keyContactPerson: 'Mohammed Al-Faisal',
    designationRole: 'GM - Transmission Asset Management',
    emailAddress: 'm.alfaisal@se.com.sa',
    phoneWhatsApp: '+966 11 218 0000',
    linkedInProfile: 'linkedin.com/in/mohammedalfaisal-sec',
    websiteUrl: 'www.se.com.sa',
    keyBuyingCriteria: 'Extreme temperature operation (55°C+), sand/dust ingress protection, Arabic language interface support',
    keyPainPoints: 'Extreme heat accelerating transformer aging, sandstorm damage to outdoor equipment, peak summer demand stress on assets',
    upcomingTriggersAndInitiatives: 'Saudi Vision 2030 grid modernization, NEOM smart city power infrastructure, renewable energy integration (50GW solar target)',
    budgetOwnership: 'Central utility procurement with senior management approval for strategic projects',
    procurementModel: 'Government tender process with preference for local content (IKTVA program)',
    preferredEngagementType: 'Vendor qualification with field trials in desert conditions before rollout',
    preferredSolutionType: 'Ruggedized online transformer monitoring with environmental stress sensors',
    preferredDeploymentModel: 'On-premise deployment with centralized national monitoring center',
    performanceExpectations: 'Reliable operation in extreme heat, real-time thermal monitoring, sandstorm impact alerts',
    customerBenchmarkingSummary: 'Tier 1 - Major Middle East utility, high capex budget under Vision 2030',
    additionalCommentsNotes: 'IKTVA local content requirements, potential for technology transfer partnership'
  },
  {
    customerName: 'POSCO Holdings',
    businessOverview: 'Global steel conglomerate operating captive power and substation infrastructure across steel plants in South Korea, Indonesia, and India',
    industryVertical: 'Industrial and Manufacturing',
    totalAnnualRevenue: '65,000',
    customerSizeScale: 'Industrial asset owner with 40+ critical substations at manufacturing complexes',
    keyContactPerson: 'Park Joon-Ho',
    designationRole: 'Head of Electrical Maintenance Division',
    emailAddress: 'j.park@posco.com',
    phoneWhatsApp: '+82 54 220 0114',
    linkedInProfile: 'linkedin.com/in/parkjoonho-posco',
    websiteUrl: 'www.posco.com',
    keyBuyingCriteria: 'Arc furnace transformer specialty monitoring, production continuity assurance, multi-site centralized visibility',
    keyPainPoints: 'EAF transformer thermal stress from cyclic loading, unplanned outages halting steel production ($5M+/day loss), multi-country maintenance coordination',
    upcomingTriggersAndInitiatives: 'Hydrogen-based steelmaking requiring new power infrastructure, Indonesia Weda Bay plant expansion, carbon neutrality grid upgrades',
    budgetOwnership: 'Asset management departments at each plant with central engineering oversight',
    procurementModel: 'Direct sourcing with pilot validation at Pohang flagship plant',
    preferredEngagementType: 'Proof of concept at flagship facility then multi-site expansion',
    preferredSolutionType: 'Online transformer monitoring specialized for industrial furnace transformers',
    preferredDeploymentModel: 'On-premise at each plant with centralized dashboard across all sites',
    performanceExpectations: 'Zero unplanned transformer outages, cyclic load pattern analysis, cross-site benchmarking analytics',
    customerBenchmarkingSummary: 'Tier 2 - Premium industrial customer, high ROI potential due to production loss prevention',
    additionalCommentsNotes: 'Korean language support needed, prefers established brands with industrial references'
  },
  {
    customerName: 'Eskom Holdings SOC',
    businessOverview: 'South Africa\'s state-owned electricity utility managing aging transmission network with critical reliability challenges',
    industryVertical: 'Power Utilities',
    totalAnnualRevenue: '12,800',
    customerSizeScale: 'Large national utility with 400+ transmission substations, many beyond design life',
    keyContactPerson: 'Sipho Nkosi',
    designationRole: 'Executive Manager - Transmission Grid',
    emailAddress: 's.nkosi@eskom.co.za',
    phoneWhatsApp: '+27 11 800 8111',
    linkedInProfile: 'linkedin.com/in/siphonkosi-eskom',
    websiteUrl: 'www.eskom.co.za',
    keyBuyingCriteria: 'Cost-effective monitoring for aging fleet, prioritization of critical assets, theft/tamper detection capability',
    keyPainPoints: 'Severe load shedding from equipment failures, 60% of transformers beyond design life, copper cable theft at substations',
    upcomingTriggersAndInitiatives: 'Transmission Development Plan (TDP), unbundling into separate T&D entities, World Bank funded grid rehabilitation',
    budgetOwnership: 'Central utility procurement with World Bank/DFI funding oversight',
    procurementModel: 'Government tender process with development finance institution funding conditions',
    preferredEngagementType: 'Vendor qualification with phased deployment starting at most critical substations',
    preferredSolutionType: 'Cost-effective online monitoring with asset health prioritization analytics',
    preferredDeploymentModel: 'On-premise with centralized national control center monitoring',
    performanceExpectations: 'Early failure detection for aging assets, asset health ranking across fleet, tamper/security alerts',
    customerBenchmarkingSummary: 'Tier 1 - Critical infrastructure rehabilitation, development finance funded',
    additionalCommentsNotes: 'Complex procurement due to government oversight, B-BBEE scoring required, 12-18 month cycle'
  },
  {
    customerName: 'Deutsche Bahn AG',
    businessOverview: 'Germany\'s national railway operator managing traction power supply network with 170+ traction substations across the rail network',
    industryVertical: 'Transportation and Railways',
    totalAnnualRevenue: '56,300',
    customerSizeScale: 'Large national rail operator with 170+ traction substations (16.7 Hz network)',
    keyContactPerson: 'Klaus Hoffmann',
    designationRole: 'Head of Traction Power Supply Engineering',
    emailAddress: 'k.hoffmann@deutschebahn.com',
    phoneWhatsApp: '+49 30 297 0',
    linkedInProfile: 'linkedin.com/in/klaushoffmann-db',
    websiteUrl: 'www.deutschebahn.com',
    keyBuyingCriteria: '16.7 Hz traction transformer specialty monitoring, integration with rail SCADA, EN 50126 railway safety compliance',
    keyPainPoints: 'Aging 16.7 Hz traction transformers (specialized, long lead replacement), increasing rail traffic loading, strict punctuality KPIs affected by power outages',
    upcomingTriggersAndInitiatives: 'Deutschlandtakt high-frequency rail program requiring more power capacity, EU Green Deal rail investment, Stuttgart 21 new traction power',
    budgetOwnership: 'Engineering and infrastructure division (DB Netz/InfraGO)',
    procurementModel: 'EU public tender process with framework agreements for monitoring systems',
    preferredEngagementType: 'Vendor qualification with EN 50126 compliance verification and field trials',
    preferredSolutionType: 'Specialized traction transformer monitoring with railway safety certification',
    preferredDeploymentModel: 'On-premise within railway signaling network with centralized control room integration',
    performanceExpectations: 'Railway safety certified (SIL compliant), real-time traction load monitoring, predictive failure alerts 30+ days advance',
    customerBenchmarkingSummary: 'Tier 1 - Major European rail operator, specialized 16.7 Hz monitoring niche',
    additionalCommentsNotes: 'Requires EN 50126/50128/50129 safety certification, long procurement cycle but high contract values'
  }
]

interface PropositionProps {
  title: string
  isOpen: boolean
  onToggle: () => void
  children: React.ReactNode
}

function Proposition({ title, isOpen, onToggle, children }: PropositionProps) {
  return (
    <div className="border border-gray-200 rounded-lg mb-4">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 py-4 bg-white hover:bg-gray-50 rounded-lg transition-colors"
      >
        <span className="text-lg font-semibold text-black">{title}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-gray-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500" />
        )}
      </button>
      {isOpen && (
        <div className="px-2 pb-4 bg-white rounded-b-lg">
          {children}
        </div>
      )}
    </div>
  )
}

interface CustomerIntelligenceDatabaseProps {
  title?: string
  height?: number
}

export default function CustomerIntelligenceDatabase({ title }: CustomerIntelligenceDatabaseProps) {
  const [openProposition, setOpenProposition] = useState<number | null>(1)

  const toggleProposition = (num: number) => {
    setOpenProposition(openProposition === num ? null : num)
  }

  // Proposition 1 Table - Customer Information + Contact Details
  const renderProposition1Table = () => (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            <th colSpan={5} className="bg-[#8B7355] border border-gray-400 px-3 py-3 text-center text-sm font-bold text-white">
              Customer Information
            </th>
            <th colSpan={6} className="bg-[#5F9EA0] border border-gray-400 px-3 py-3 text-center text-sm font-bold text-white">
              Contact Details
            </th>
          </tr>
          <tr>
            <th className="bg-[#D2B48C] border border-gray-400 px-3 py-3 text-center text-xs font-semibold text-black min-w-[150px]">
              Customer Name/Company Name
            </th>
            <th className="bg-[#D2B48C] border border-gray-400 px-3 py-3 text-center text-xs font-semibold text-black min-w-[200px]">
              <div>Business Overview</div>
              <div className="font-normal text-[10px] text-gray-700 mt-1">
                (Operators and owners of electrical substations/Responsible for grid reliability, asset health, outage prevention/Focus on condition based monitoring, etc.)
              </div>
            </th>
            <th className="bg-[#D2B48C] border border-gray-400 px-3 py-3 text-center text-xs font-semibold text-black min-w-[180px]">
              <div>Industry Vertical</div>
              <div className="font-normal text-[10px] text-gray-700 mt-1">
                (Power Utilities/Renewable Energy/Industrial and Manufacturing/Transportation and Railways/Smart Cities and Urban Infrastructure)
              </div>
            </th>
            <th className="bg-[#D2B48C] border border-gray-400 px-3 py-3 text-center text-xs font-semibold text-black min-w-[140px]">
              Total Annual Revenue (US$ Million)
            </th>
            <th className="bg-[#D2B48C] border border-gray-400 px-3 py-3 text-center text-xs font-semibold text-black min-w-[200px]">
              <div>Customer Size / Scale</div>
              <div className="font-normal text-[10px] text-gray-700 mt-1">
                (Large national and multinational utilities with extensive substation networks/Mid size regional utilities and renewable operators/Industrial asset owners with limited but critical substations)
              </div>
            </th>
            <th className="bg-[#7FB8BA] border border-gray-400 px-3 py-3 text-center text-xs font-semibold text-black min-w-[130px]">
              Key Contact Person
            </th>
            <th className="bg-[#7FB8BA] border border-gray-400 px-3 py-3 text-center text-xs font-semibold text-black min-w-[130px]">
              Designation/Role
            </th>
            <th className="bg-[#7FB8BA] border border-gray-400 px-3 py-3 text-center text-xs font-semibold text-black min-w-[150px]">
              Email Address
            </th>
            <th className="bg-[#7FB8BA] border border-gray-400 px-3 py-3 text-center text-xs font-semibold text-black min-w-[140px]">
              Phone/WhatsApp Number
            </th>
            <th className="bg-[#7FB8BA] border border-gray-400 px-3 py-3 text-center text-xs font-semibold text-black min-w-[140px]">
              LinkedIn Profile
            </th>
            <th className="bg-[#7FB8BA] border border-gray-400 px-3 py-3 text-center text-xs font-semibold text-black min-w-[130px]">
              Website URL
            </th>
          </tr>
        </thead>
        <tbody>
          {sampleCustomerData.map((customer, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              <td className="border border-gray-300 px-3 py-3 text-sm text-black">{customer.customerName}</td>
              <td className="border border-gray-300 px-3 py-3 text-sm text-black">{customer.businessOverview}</td>
              <td className="border border-gray-300 px-3 py-3 text-sm text-black">{customer.industryVertical}</td>
              <td className="border border-gray-300 px-3 py-3 text-sm text-black text-center">{customer.totalAnnualRevenue}</td>
              <td className="border border-gray-300 px-3 py-3 text-sm text-black">{customer.customerSizeScale}</td>
              <td className="border border-gray-300 px-3 py-3 text-sm text-black">{customer.keyContactPerson}</td>
              <td className="border border-gray-300 px-3 py-3 text-sm text-black">{customer.designationRole}</td>
              <td className="border border-gray-300 px-3 py-3 text-sm text-black">{customer.emailAddress}</td>
              <td className="border border-gray-300 px-3 py-3 text-sm text-black">{customer.phoneWhatsApp}</td>
              <td className="border border-gray-300 px-3 py-3 text-sm text-black">{customer.linkedInProfile}</td>
              <td className="border border-gray-300 px-3 py-3 text-sm text-black">{customer.websiteUrl}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

  // Proposition 2 Table - Customer Information + Contact Details + Professional Drivers
  const renderProposition2Table = () => (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            <th colSpan={5} className="bg-[#8B7355] border border-gray-400 px-3 py-3 text-center text-sm font-bold text-white">
              Customer Information
            </th>
            <th colSpan={6} className="bg-[#5F9EA0] border border-gray-400 px-3 py-3 text-center text-sm font-bold text-white">
              Contact Details
            </th>
            <th colSpan={3} className="bg-[#2E6B77] border border-gray-400 px-3 py-3 text-center text-sm font-bold text-white">
              Professional Drivers
            </th>
          </tr>
          <tr>
            {/* Customer Information */}
            <th className="bg-[#D2B48C] border border-gray-400 px-3 py-3 text-center text-xs font-semibold text-black min-w-[150px]">
              Customer Name/Company Name
            </th>
            <th className="bg-[#D2B48C] border border-gray-400 px-3 py-3 text-center text-xs font-semibold text-black min-w-[200px]">
              <div>Business Overview</div>
              <div className="font-normal text-[10px] text-gray-700 mt-1">
                (Operators and owners of electrical substations/Responsible for grid reliability, asset health, outage prevention/Focus on condition based monitoring, etc.)
              </div>
            </th>
            <th className="bg-[#D2B48C] border border-gray-400 px-3 py-3 text-center text-xs font-semibold text-black min-w-[180px]">
              <div>Industry Vertical</div>
              <div className="font-normal text-[10px] text-gray-700 mt-1">
                (Power Utilities/Renewable Energy/Industrial and Manufacturing/Transportation and Railways/Smart Cities and Urban Infrastructure)
              </div>
            </th>
            <th className="bg-[#D2B48C] border border-gray-400 px-3 py-3 text-center text-xs font-semibold text-black min-w-[140px]">
              Total Annual Revenue (US$ Million)
            </th>
            <th className="bg-[#D2B48C] border border-gray-400 px-3 py-3 text-center text-xs font-semibold text-black min-w-[200px]">
              <div>Customer Size / Scale</div>
              <div className="font-normal text-[10px] text-gray-700 mt-1">
                (Large national and multinational utilities with extensive substation networks/Mid size regional utilities and renewable operators/Industrial asset owners with limited but critical substations)
              </div>
            </th>
            {/* Contact Details */}
            <th className="bg-[#7FB8BA] border border-gray-400 px-3 py-3 text-center text-xs font-semibold text-black min-w-[130px]">
              Key Contact Person
            </th>
            <th className="bg-[#7FB8BA] border border-gray-400 px-3 py-3 text-center text-xs font-semibold text-black min-w-[130px]">
              Designation/Role
            </th>
            <th className="bg-[#7FB8BA] border border-gray-400 px-3 py-3 text-center text-xs font-semibold text-black min-w-[150px]">
              Email Address
            </th>
            <th className="bg-[#7FB8BA] border border-gray-400 px-3 py-3 text-center text-xs font-semibold text-black min-w-[140px]">
              Phone/WhatsApp Number
            </th>
            <th className="bg-[#7FB8BA] border border-gray-400 px-3 py-3 text-center text-xs font-semibold text-black min-w-[140px]">
              LinkedIn Profile
            </th>
            <th className="bg-[#7FB8BA] border border-gray-400 px-3 py-3 text-center text-xs font-semibold text-black min-w-[130px]">
              Website URL
            </th>
            {/* Professional Drivers */}
            <th className="bg-[#B0E0E6] border border-gray-400 px-3 py-3 text-center text-xs font-semibold text-black min-w-[220px]">
              <div>Key Buying Criteria</div>
              <div className="font-normal text-[10px] text-gray-700 mt-1">
                (Accuracy and reliability of real time monitoring data/Asset coverage across transformers, breakers, switchgear, and auxiliaries/Compatibility with existing SCADA, EMS, and DMS systems/Cybersecurity compliance with utility standards/Scalability across multiple substations/Long term support and lifecycle management)
              </div>
            </th>
            <th className="bg-[#B0E0E6] border border-gray-400 px-3 py-3 text-center text-xs font-semibold text-black min-w-[220px]">
              <div>Key Pain Points</div>
              <div className="font-normal text-[10px] text-gray-700 mt-1">
                (Unexpected transformer and breaker failures/High cost of unplanned outages and penalties/Aging substation infrastructure/Limited visibility in remote and unmanned substations/Integration challenges with legacy systems/Cybersecurity and data integrity concerns)
              </div>
            </th>
            <th className="bg-[#B0E0E6] border border-gray-400 px-3 py-3 text-center text-xs font-semibold text-black min-w-[220px]">
              <div>Upcoming Triggers and Initiatives</div>
              <div className="font-normal text-[10px] text-gray-700 mt-1">
                (Grid modernization and smart grid programs/Renewable energy integration and load variability/Digital substation rollouts/Regulatory mandates on reliability and uptime/Replacement of aging transmission assets/Adoption of AI driven predictive maintenance)
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {sampleCustomerData.map((customer, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              <td className="border border-gray-300 px-3 py-3 text-sm text-black">{customer.customerName}</td>
              <td className="border border-gray-300 px-3 py-3 text-sm text-black">{customer.businessOverview}</td>
              <td className="border border-gray-300 px-3 py-3 text-sm text-black">{customer.industryVertical}</td>
              <td className="border border-gray-300 px-3 py-3 text-sm text-black text-center">{customer.totalAnnualRevenue}</td>
              <td className="border border-gray-300 px-3 py-3 text-sm text-black">{customer.customerSizeScale}</td>
              <td className="border border-gray-300 px-3 py-3 text-sm text-black">{customer.keyContactPerson}</td>
              <td className="border border-gray-300 px-3 py-3 text-sm text-black">{customer.designationRole}</td>
              <td className="border border-gray-300 px-3 py-3 text-sm text-black">{customer.emailAddress}</td>
              <td className="border border-gray-300 px-3 py-3 text-sm text-black">{customer.phoneWhatsApp}</td>
              <td className="border border-gray-300 px-3 py-3 text-sm text-black">{customer.linkedInProfile}</td>
              <td className="border border-gray-300 px-3 py-3 text-sm text-black">{customer.websiteUrl}</td>
              <td className="border border-gray-300 px-3 py-3 text-sm text-black">{customer.keyBuyingCriteria}</td>
              <td className="border border-gray-300 px-3 py-3 text-sm text-black">{customer.keyPainPoints}</td>
              <td className="border border-gray-300 px-3 py-3 text-sm text-black">{customer.upcomingTriggersAndInitiatives}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

  // Proposition 3 Table - All sections
  const renderProposition3Table = () => (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            <th colSpan={5} className="bg-[#8B7355] border border-gray-400 px-3 py-3 text-center text-sm font-bold text-white">
              Customer Information
            </th>
            <th colSpan={6} className="bg-[#5F9EA0] border border-gray-400 px-3 py-3 text-center text-sm font-bold text-white">
              Contact Details
            </th>
            <th colSpan={3} className="bg-[#2E6B77] border border-gray-400 px-3 py-3 text-center text-sm font-bold text-white">
              Professional Drivers
            </th>
            <th colSpan={3} className="bg-[#7B68AE] border border-gray-400 px-3 py-3 text-center text-sm font-bold text-white">
              Purchasing Behaviour Metrics
            </th>
            <th colSpan={3} className="bg-[#CD853F] border border-gray-400 px-3 py-3 text-center text-sm font-bold text-white">
              Solution Requirements
            </th>
            <th colSpan={2} className="bg-[#5F9EA0] border border-gray-400 px-3 py-3 text-center text-sm font-bold text-white">
              CMI Insights
            </th>
          </tr>
          <tr>
            {/* Customer Information */}
            <th className="bg-[#D2B48C] border border-gray-400 px-3 py-3 text-center text-xs font-semibold text-black min-w-[150px]">
              Customer Name/Company Name
            </th>
            <th className="bg-[#D2B48C] border border-gray-400 px-3 py-3 text-center text-xs font-semibold text-black min-w-[200px]">
              <div>Business Overview</div>
              <div className="font-normal text-[10px] text-gray-700 mt-1">
                (Operators and owners of electrical substations/Responsible for grid reliability, asset health, outage prevention/Focus on condition based monitoring, etc.)
              </div>
            </th>
            <th className="bg-[#D2B48C] border border-gray-400 px-3 py-3 text-center text-xs font-semibold text-black min-w-[180px]">
              <div>Industry Vertical</div>
              <div className="font-normal text-[10px] text-gray-700 mt-1">
                (Power Utilities/Renewable Energy/Industrial and Manufacturing/Transportation and Railways/Smart Cities and Urban Infrastructure)
              </div>
            </th>
            <th className="bg-[#D2B48C] border border-gray-400 px-3 py-3 text-center text-xs font-semibold text-black min-w-[140px]">
              Total Annual Revenue (US$ Million)
            </th>
            <th className="bg-[#D2B48C] border border-gray-400 px-3 py-3 text-center text-xs font-semibold text-black min-w-[200px]">
              <div>Customer Size / Scale</div>
              <div className="font-normal text-[10px] text-gray-700 mt-1">
                (Large national and multinational utilities with extensive substation networks/Mid size regional utilities and renewable operators/Industrial asset owners with limited but critical substations)
              </div>
            </th>
            {/* Contact Details */}
            <th className="bg-[#7FB8BA] border border-gray-400 px-3 py-3 text-center text-xs font-semibold text-black min-w-[130px]">
              Key Contact Person
            </th>
            <th className="bg-[#7FB8BA] border border-gray-400 px-3 py-3 text-center text-xs font-semibold text-black min-w-[130px]">
              Designation/Role
            </th>
            <th className="bg-[#7FB8BA] border border-gray-400 px-3 py-3 text-center text-xs font-semibold text-black min-w-[150px]">
              Email Address
            </th>
            <th className="bg-[#7FB8BA] border border-gray-400 px-3 py-3 text-center text-xs font-semibold text-black min-w-[140px]">
              Phone/WhatsApp Number
            </th>
            <th className="bg-[#7FB8BA] border border-gray-400 px-3 py-3 text-center text-xs font-semibold text-black min-w-[140px]">
              LinkedIn Profile
            </th>
            <th className="bg-[#7FB8BA] border border-gray-400 px-3 py-3 text-center text-xs font-semibold text-black min-w-[130px]">
              Website URL
            </th>
            {/* Professional Drivers */}
            <th className="bg-[#B0E0E6] border border-gray-400 px-3 py-3 text-center text-xs font-semibold text-black min-w-[220px]">
              <div>Key Buying Criteria</div>
              <div className="font-normal text-[10px] text-gray-700 mt-1">
                (Accuracy and reliability of real time monitoring data/Asset coverage across transformers, breakers, switchgear, and auxiliaries/Compatibility with existing SCADA, EMS, and DMS systems/Cybersecurity compliance with utility standards/Scalability across multiple substations/Long term support and lifecycle management)
              </div>
            </th>
            <th className="bg-[#B0E0E6] border border-gray-400 px-3 py-3 text-center text-xs font-semibold text-black min-w-[220px]">
              <div>Key Pain Points</div>
              <div className="font-normal text-[10px] text-gray-700 mt-1">
                (Unexpected transformer and breaker failures/High cost of unplanned outages and penalties/Aging substation infrastructure/Limited visibility in remote and unmanned substations/Integration challenges with legacy systems/Cybersecurity and data integrity concerns)
              </div>
            </th>
            <th className="bg-[#B0E0E6] border border-gray-400 px-3 py-3 text-center text-xs font-semibold text-black min-w-[220px]">
              <div>Upcoming Triggers and Initiatives</div>
              <div className="font-normal text-[10px] text-gray-700 mt-1">
                (Grid modernization and smart grid programs/Renewable energy integration and load variability/Digital substation rollouts/Regulatory mandates on reliability and uptime/Replacement of aging transmission assets/Adoption of AI driven predictive maintenance)
              </div>
            </th>
            {/* Purchasing Behaviour Metrics */}
            <th className="bg-[#B8A9D4] border border-gray-400 px-3 py-3 text-center text-xs font-semibold text-black min-w-[200px]">
              <div>Budget Ownership</div>
              <div className="font-normal text-[10px] text-gray-700 mt-1">
                (Asset management and operations departments/Grid modernization and digital transformation teams/Central utility procurement departments/Engineering and protection teams/Senior management for strategic investments)
              </div>
            </th>
            <th className="bg-[#B8A9D4] border border-gray-400 px-3 py-3 text-center text-xs font-semibold text-black min-w-[200px]">
              <div>Procurement Model</div>
              <div className="font-normal text-[10px] text-gray-700 mt-1">
                (Direct sourcing from monitoring solution providers/Long term framework agreements with OEMs/EPC driven procurement for greenfield substations/Pilot projects followed by phased rollouts/Multi vendor sourcing to reduce dependency)
              </div>
            </th>
            <th className="bg-[#B8A9D4] border border-gray-400 px-3 py-3 text-center text-xs font-semibold text-black min-w-[200px]">
              <div>Preferred Engagement Type</div>
              <div className="font-normal text-[10px] text-gray-700 mt-1">
                (Long term strategic partnerships/Early involvement during substation design phase/Proof of concept and pilot deployments/Vendor qualification and field trials/Ongoing technical support and analytics upgrades)
              </div>
            </th>
            {/* Solution Requirements */}
            <th className="bg-[#FAEBD7] border border-gray-400 px-3 py-3 text-center text-xs font-semibold text-black min-w-[220px]">
              <div>Preferred Solution Type</div>
              <div className="font-normal text-[10px] text-gray-700 mt-1">
                (Online transformer monitoring systems/Substation wide condition monitoring platforms/Integrated hardware sensor and software analytics solutions/SCADA and asset management integrated platforms)
              </div>
            </th>
            <th className="bg-[#FAEBD7] border border-gray-400 px-3 py-3 text-center text-xs font-semibold text-black min-w-[220px]">
              <div>Preferred Deployment Model</div>
              <div className="font-normal text-[10px] text-gray-700 mt-1">
                (On premise deployment within utility networks/Hybrid deployment with cloud based analytics/Edge based processing at substation level/Centralized monitoring centers for multiple substations)
              </div>
            </th>
            <th className="bg-[#FAEBD7] border border-gray-400 px-3 py-3 text-center text-xs font-semibold text-black min-w-[220px]">
              <div>Performance Expectations</div>
              <div className="font-normal text-[10px] text-gray-700 mt-1">
                (Real time alerts and alarms/High system availability and uptime/Accurate fault detection and early warning/Low false alarms/Secure and tamper proof data transmission)
              </div>
            </th>
            {/* CMI Insights */}
            <th className="bg-[#B0E0E6] border border-gray-400 px-3 py-3 text-center text-xs font-semibold text-black min-w-[180px]">
              <div>Customer Benchmarking Summary</div>
              <div className="font-normal text-[10px] text-gray-700 mt-1">
                (Potential Customers)
              </div>
            </th>
            <th className="bg-[#B0E0E6] border border-gray-400 px-3 py-3 text-center text-xs font-semibold text-black min-w-[180px]">
              Additional Comments/Notes By CMI team
            </th>
          </tr>
        </thead>
        <tbody>
          {sampleCustomerData.map((customer, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              {/* Customer Information */}
              <td className="border border-gray-300 px-3 py-3 text-sm text-black">{customer.customerName}</td>
              <td className="border border-gray-300 px-3 py-3 text-sm text-black">{customer.businessOverview}</td>
              <td className="border border-gray-300 px-3 py-3 text-sm text-black">{customer.industryVertical}</td>
              <td className="border border-gray-300 px-3 py-3 text-sm text-black text-center">{customer.totalAnnualRevenue}</td>
              <td className="border border-gray-300 px-3 py-3 text-sm text-black">{customer.customerSizeScale}</td>
              {/* Contact Details */}
              <td className="border border-gray-300 px-3 py-3 text-sm text-black">{customer.keyContactPerson}</td>
              <td className="border border-gray-300 px-3 py-3 text-sm text-black">{customer.designationRole}</td>
              <td className="border border-gray-300 px-3 py-3 text-sm text-black">{customer.emailAddress}</td>
              <td className="border border-gray-300 px-3 py-3 text-sm text-black">{customer.phoneWhatsApp}</td>
              <td className="border border-gray-300 px-3 py-3 text-sm text-black">{customer.linkedInProfile}</td>
              <td className="border border-gray-300 px-3 py-3 text-sm text-black">{customer.websiteUrl}</td>
              {/* Professional Drivers */}
              <td className="border border-gray-300 px-3 py-3 text-sm text-black">{customer.keyBuyingCriteria}</td>
              <td className="border border-gray-300 px-3 py-3 text-sm text-black">{customer.keyPainPoints}</td>
              <td className="border border-gray-300 px-3 py-3 text-sm text-black">{customer.upcomingTriggersAndInitiatives}</td>
              {/* Purchasing Behaviour Metrics */}
              <td className="border border-gray-300 px-3 py-3 text-sm text-black">{customer.budgetOwnership}</td>
              <td className="border border-gray-300 px-3 py-3 text-sm text-black">{customer.procurementModel}</td>
              <td className="border border-gray-300 px-3 py-3 text-sm text-black">{customer.preferredEngagementType}</td>
              {/* Solution Requirements */}
              <td className="border border-gray-300 px-3 py-3 text-sm text-black">{customer.preferredSolutionType}</td>
              <td className="border border-gray-300 px-3 py-3 text-sm text-black">{customer.preferredDeploymentModel}</td>
              <td className="border border-gray-300 px-3 py-3 text-sm text-black">{customer.performanceExpectations}</td>
              {/* CMI Insights */}
              <td className="border border-gray-300 px-3 py-3 text-sm text-black">{customer.customerBenchmarkingSummary}</td>
              <td className="border border-gray-300 px-3 py-3 text-sm text-black">{customer.additionalCommentsNotes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

  return (
    <div className="w-full">
      <h2 className="text-xl font-bold text-black mb-6">{title || 'Customer Intelligence Database'}</h2>

      <Proposition
        title="Proposition 1 - Basic"
        isOpen={openProposition === 1}
        onToggle={() => toggleProposition(1)}
      >
        {renderProposition1Table()}
      </Proposition>

      <Proposition
        title="Proposition 2 - Advanced"
        isOpen={openProposition === 2}
        onToggle={() => toggleProposition(2)}
      >
        {renderProposition2Table()}
      </Proposition>

      <Proposition
        title="Proposition 3 - Premium"
        isOpen={openProposition === 3}
        onToggle={() => toggleProposition(3)}
      >
        {renderProposition3Table()}
      </Proposition>
    </div>
  )
}
