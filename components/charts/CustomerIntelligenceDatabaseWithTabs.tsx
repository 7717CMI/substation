'use client'

interface DistributorData {
  distributorCompanyName: string
  headquartered: string
  geographicalPresence: string
  productOfferingBusinessSegments: string
  contactPersonDesignation: string
  website: string
  emailAddress: string
  contactNumber: string
}

// Sample Distributor data
const sampleDistributorData: DistributorData[] = [
  {
    distributorCompanyName: 'xx',
    headquartered: 'xx',
    geographicalPresence: 'xx',
    productOfferingBusinessSegments: 'xx',
    contactPersonDesignation: 'xx',
    website: 'xx',
    emailAddress: 'xx',
    contactNumber: 'xx'
  },
  {
    distributorCompanyName: 'xx',
    headquartered: 'xx',
    geographicalPresence: 'xx',
    productOfferingBusinessSegments: 'xx',
    contactPersonDesignation: 'xx',
    website: 'xx',
    emailAddress: 'xx',
    contactNumber: 'xx'
  },
  {
    distributorCompanyName: 'xx',
    headquartered: 'xx',
    geographicalPresence: 'xx',
    productOfferingBusinessSegments: 'xx',
    contactPersonDesignation: 'xx',
    website: 'xx',
    emailAddress: 'xx',
    contactNumber: 'xx'
  },
  {
    distributorCompanyName: 'xx',
    headquartered: 'xx',
    geographicalPresence: 'xx',
    productOfferingBusinessSegments: 'xx',
    contactPersonDesignation: 'xx',
    website: 'xx',
    emailAddress: 'xx',
    contactNumber: 'xx'
  },
  {
    distributorCompanyName: 'xx',
    headquartered: 'xx',
    geographicalPresence: 'xx',
    productOfferingBusinessSegments: 'xx',
    contactPersonDesignation: 'xx',
    website: 'xx',
    emailAddress: 'xx',
    contactNumber: 'xx'
  },
  {
    distributorCompanyName: 'xx',
    headquartered: 'xx',
    geographicalPresence: 'xx',
    productOfferingBusinessSegments: 'xx',
    contactPersonDesignation: 'xx',
    website: 'xx',
    emailAddress: 'xx',
    contactNumber: 'xx'
  },
  {
    distributorCompanyName: 'xx',
    headquartered: 'xx',
    geographicalPresence: 'xx',
    productOfferingBusinessSegments: 'xx',
    contactPersonDesignation: 'xx',
    website: 'xx',
    emailAddress: 'xx',
    contactNumber: 'xx'
  },
  {
    distributorCompanyName: 'xx',
    headquartered: 'xx',
    geographicalPresence: 'xx',
    productOfferingBusinessSegments: 'xx',
    contactPersonDesignation: 'xx',
    website: 'xx',
    emailAddress: 'xx',
    contactNumber: 'xx'
  },
  {
    distributorCompanyName: 'xx',
    headquartered: 'xx',
    geographicalPresence: 'xx',
    productOfferingBusinessSegments: 'xx',
    contactPersonDesignation: 'xx',
    website: 'xx',
    emailAddress: 'xx',
    contactNumber: 'xx'
  }
]

interface CustomerIntelligenceDatabaseProps {
  height?: number
}

export default function CustomerIntelligenceDatabaseWithTabs({ height }: CustomerIntelligenceDatabaseProps) {
  // Distributor Intelligence Table
  const renderDistributorTable = () => (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          <tr className="bg-[#B0E0E6]">
            <th className="border border-gray-300 px-4 py-3 text-left text-sm font-semibold text-black">
              Distributor<br />Company Name
            </th>
            <th className="border border-gray-300 px-4 py-3 text-left text-sm font-semibold text-black">
              Headquartered
            </th>
            <th className="border border-gray-300 px-4 py-3 text-left text-sm font-semibold text-black">
              Geographical<br />Presence
            </th>
            <th className="border border-gray-300 px-4 py-3 text-left text-sm font-semibold text-black">
              Product<br />Offering/Business<br />Segments
            </th>
            <th className="border border-gray-300 px-4 py-3 text-left text-sm font-semibold text-black">
              Contact Person<br />Designation
            </th>
            <th className="border border-gray-300 px-4 py-3 text-left text-sm font-semibold text-black">
              Website
            </th>
            <th className="border border-gray-300 px-4 py-3 text-left text-sm font-semibold text-black">
              Email Address
            </th>
            <th className="border border-gray-300 px-4 py-3 text-left text-sm font-semibold text-black">
              Contact Number
            </th>
          </tr>
        </thead>
        <tbody>
          {sampleDistributorData.map((distributor, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-[#E0F7FA]' : 'bg-white'}>
              <td className="border border-gray-300 px-4 py-3 text-sm text-black">{distributor.distributorCompanyName}</td>
              <td className="border border-gray-300 px-4 py-3 text-sm text-black">{distributor.headquartered}</td>
              <td className="border border-gray-300 px-4 py-3 text-sm text-black">{distributor.geographicalPresence}</td>
              <td className="border border-gray-300 px-4 py-3 text-sm text-black">{distributor.productOfferingBusinessSegments}</td>
              <td className="border border-gray-300 px-4 py-3 text-sm text-black">{distributor.contactPersonDesignation}</td>
              <td className="border border-gray-300 px-4 py-3 text-sm text-black">{distributor.website}</td>
              <td className="border border-gray-300 px-4 py-3 text-sm text-black">{distributor.emailAddress}</td>
              <td className="border border-gray-300 px-4 py-3 text-sm text-black">{distributor.contactNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

  return (
    <div className="w-full" style={height ? { height: `${height}px` } : undefined}>
      <h2 className="text-xl font-bold text-black mb-6">Distributor Intelligence</h2>
      {renderDistributorTable()}
    </div>
  )
}
