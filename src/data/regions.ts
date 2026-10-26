import type { Region } from '@/types';

export const GLOBAL_REGIONS: Region[] = [
  {
    id: 'sea',
    name: 'Southeast Asia',
    countries: ['Singapore', 'Malaysia', 'Vietnam', 'Thailand', 'Indonesia', 'Philippines'],
    ports: ['Port of Singapore', 'Port Klang', 'Tanjung Pelepas'],
    leadTime: '5 - 9 Days',
    standards: ['FSSAI Certified','Lab Test Report', 'Phytosanitary Approved'],
  },
  {
    id: 'europe',
    name: 'Europe & UK',
    countries: ['United Kingdom', 'Germany', 'Netherlands', 'France', 'Italy'],
    ports: ['Rotterdam', 'Hamburg', 'Felixstowe', 'Antwerp'],
    leadTime: '18 - 24 Days',
    standards: ['FSSAI Certified','Lab Test Report', 'Phytosanitary Approved'],

  },
  {
    id: 'namerica',
    name: 'North America',
    countries: ['United States', 'Canada', 'Mexico'],
    ports: ['Port of Los Angeles', 'Port of New York', 'Vancouver'],
    leadTime: '22 - 28 Days',
    standards: ['FSSAI Certified','Lab Test Report', 'Phytosanitary Approved'],

  },
  {
    id: 'samerica',
    name: 'South America',
    countries: ['Brazil', 'Argentina', 'Chile', 'Colombia'],
    ports: ['Santos Port', 'Buenos Aires', 'Valparaiso'],
    leadTime: '28 - 35 Days',
    standards: ['FSSAI Certified','Lab Test Report', 'Phytosanitary Approved'],
  },
  {
    id: 'africa',
    name: 'Africa & Middle East',
    countries: ['UAE', 'Saudi Arabia', 'South Africa', 'Kenya', 'Egypt'],
    ports: ['Jebel Ali Port', 'Durban', 'Mombasa', 'Port Said'],
    leadTime: '6 - 16 Days',
   standards: ['FSSAI Certified','Lab Test Report', 'Phytosanitary Approved'],
  },
  {
    id: 'australia',
    name: 'Australia & Oceania',
    countries: ['Australia', 'New Zealand', 'Fiji'],
    ports: ['Port of Melbourne', 'Sydney Harbor', 'Auckland Port'],
    leadTime: '16 - 22 Days',
    standards: ['FSSAI Certified','Lab Test Report', 'Phytosanitary Approved'],
  },
];
