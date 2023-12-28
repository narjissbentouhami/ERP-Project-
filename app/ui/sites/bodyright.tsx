import {
  Typography,
} from '@mui/material';
import Icon from '../icons';
// ** MUI Imports
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { useEffect, useState } from 'react';

interface Country {
  name: string;
  isoCode: string;
  
}


export default function Bodyright() {
  const [collapsed, setCollapsed] = useState<boolean>(true);
  const [collapsedd, setCollapsedd] = useState<boolean>(true);
  const [countries, setCountries] = useState<Country[]>([]);


  useEffect(() => {
    const countryList = [
      {name: 'Afghanistan', isoCode: 'AF'}, 
  {name: 'Åland Islands', isoCode: 'AX'}, 
  {name: 'Albania', isoCode: 'AL'}, 
  {name: 'Algeria', isoCode: 'DZ'}, 
  {name: 'American Samoa', isoCode: 'AS'}, 
  {name: 'AndorrA', isoCode: 'AD'}, 
  {name: 'Angola', isoCode: 'AO'}, 
  {name: 'Anguilla', isoCode: 'AI'}, 
  {name: 'Antarctica', isoCode: 'AQ'}, 
  {name: 'Antigua and Barbuda', isoCode: 'AG'}, 
  {name: 'Argentina', isoCode: 'AR'}, 
  {name: 'Armenia', isoCode: 'AM'}, 
  {name: 'Aruba', isoCode: 'AW'}, 
  {name: 'Australia', isoCode: 'AU'}, 
  {name: 'Austria', isoCode: 'AT'}, 
  {name: 'Azerbaijan', isoCode: 'AZ'}, 
  {name: 'Bahamas', isoCode: 'BS'}, 
  {name: 'Bahrain', isoCode: 'BH'}, 
  {name: 'Bangladesh', isoCode: 'BD'}, 
  {name: 'Barbados', isoCode: 'BB'}, 
  {name: 'Belarus', isoCode: 'BY'}, 
  {name: 'Belgium', isoCode: 'BE'}, 
  {name: 'Belize', isoCode: 'BZ'}, 
  {name: 'Benin', isoCode: 'BJ'}, 
  {name: 'Bermuda', isoCode: 'BM'}, 
  {name: 'Bhutan', isoCode: 'BT'}, 
  {name: 'Bolivia', isoCode: 'BO'}, 
  {name: 'Bosnia and Herzegovina', isoCode: 'BA'}, 
  {name: 'Botswana', isoCode: 'BW'}, 
  {name: 'Bouvet Island', isoCode: 'BV'}, 
  {name: 'Brazil', isoCode: 'BR'}, 
  {name: 'British Indian Ocean Territory', isoCode: 'IO'}, 
  {name: 'Brunei Darussalam', isoCode: 'BN'}, 
  {name: 'Bulgaria', isoCode: 'BG'}, 
  {name: 'Burkina Faso', isoCode: 'BF'}, 
  {name: 'Burundi', isoCode: 'BI'}, 
  {name: 'Cambodia', isoCode: 'KH'}, 
  {name: 'Cameroon', isoCode: 'CM'}, 
  {name: 'Canada', isoCode: 'CA'}, 
  {name: 'Cape Verde', isoCode: 'CV'}, 
  {name: 'Cayman Islands', isoCode: 'KY'}, 
  {name: 'Central African Republic', isoCode: 'CF'}, 
  {name: 'Chad', isoCode: 'TD'}, 
  {name: 'Chile', isoCode: 'CL'}, 
  {name: 'China', isoCode: 'CN'}, 
  {name: 'Christmas Island', isoCode: 'CX'}, 
  {name: 'Cocos (Keeling) Islands', isoCode: 'CC'}, 
  {name: 'Colombia', isoCode: 'CO'}, 
  {name: 'Comoros', isoCode: 'KM'}, 
  {name: 'Congo', isoCode: 'CG'}, 
  {name: 'Congo, The Democratic Republic of the', isoCode: 'CD'}, 
  {name: 'Cook Islands', isoCode: 'CK'}, 
  {name: 'Costa Rica', isoCode: 'CR'}, 
  {name: 'Cote D\'Ivoire', isoCode: 'CI'}, 
  {name: 'Croatia', isoCode: 'HR'}, 
  {name: 'Cuba', isoCode: 'CU'}, 
  {name: 'Cyprus', isoCode: 'CY'}, 
  {name: 'Czech Republic', isoCode: 'CZ'}, 
  {name: 'Denmark', isoCode: 'DK'}, 
  {name: 'Djibouti', isoCode: 'DJ'}, 
  {name: 'Dominica', isoCode: 'DM'}, 
  {name: 'Dominican Republic', isoCode: 'DO'}, 
  {name: 'Ecuador', isoCode: 'EC'}, 
  {name: 'Egypt', isoCode: 'EG'}, 
  {name: 'El Salvador', isoCode: 'SV'}, 
  {name: 'Equatorial Guinea', isoCode: 'GQ'}, 
  {name: 'Eritrea', isoCode: 'ER'}, 
  {name: 'Estonia', isoCode: 'EE'}, 
  {name: 'Ethiopia', isoCode: 'ET'}, 
  {name: 'Falkland Islands (Malvinas)', isoCode: 'FK'}, 
  {name: 'Faroe Islands', isoCode: 'FO'}, 
  {name: 'Fiji', isoCode: 'FJ'}, 
  {name: 'Finland', isoCode: 'FI'}, 
  {name: 'France', isoCode: 'FR'}, 
  {name: 'French Guiana', isoCode: 'GF'}, 
  {name: 'French Polynesia', isoCode: 'PF'}, 
  {name: 'French Southern Territories', isoCode: 'TF'}, 
  {name: 'Gabon', isoCode: 'GA'}, 
  {name: 'Gambia', isoCode: 'GM'}, 
  {name: 'Georgia', isoCode: 'GE'}, 
  {name: 'Germany', isoCode: 'DE'}, 
  {name: 'Ghana', isoCode: 'GH'}, 
  {name: 'Gibraltar', isoCode: 'GI'}, 
  {name: 'Greece', isoCode: 'GR'}, 
  {name: 'Greenland', isoCode: 'GL'}, 
  {name: 'Grenada', isoCode: 'GD'}, 
  {name: 'Guadeloupe', isoCode: 'GP'}, 
  {name: 'Guam', isoCode: 'GU'}, 
  {name: 'Guatemala', isoCode: 'GT'}, 
  {name: 'Guernsey', isoCode: 'GG'}, 
  {name: 'Guinea', isoCode: 'GN'}, 
  {name: 'Guinea-Bissau', isoCode: 'GW'}, 
  {name: 'Guyana', isoCode: 'GY'}, 
  {name: 'Haiti', isoCode: 'HT'}, 
  {name: 'Heard Island and Mcdonald Islands', isoCode: 'HM'}, 
  {name: 'Holy See (Vatican City State)', isoCode: 'VA'}, 
  {name: 'Honduras', isoCode: 'HN'}, 
  {name: 'Hong Kong', isoCode: 'HK'}, 
  {name: 'Hungary', isoCode: 'HU'}, 
  {name: 'Iceland', isoCode: 'IS'}, 
  {name: 'India', isoCode: 'IN'}, 
  {name: 'Indonesia', isoCode: 'ID'}, 
  {name: 'Iran, Islamic Republic Of', isoCode: 'IR'}, 
  {name: 'Iraq', isoCode: 'IQ'}, 
  {name: 'Ireland', isoCode: 'IE'}, 
  {name: 'Isle of Man', isoCode: 'IM'}, 
  {name: 'Israel', isoCode: 'IL'}, 
  {name: 'Italy', isoCode: 'IT'}, 
  {name: 'Jamaica', isoCode: 'JM'}, 
  {name: 'Japan', isoCode: 'JP'}, 
  {name: 'Jersey', isoCode: 'JE'}, 
  {name: 'Jordan', isoCode: 'JO'}, 
  {name: 'Kazakhstan', isoCode: 'KZ'}, 
  {name: 'Kenya', isoCode: 'KE'}, 
  {name: 'Kiribati', isoCode: 'KI'}, 
  {name: 'Korea, Democratic People\'S Republic of', isoCode: 'KP'}, 
  {name: 'Korea, Republic of', isoCode: 'KR'}, 
  {name: 'Kuwait', isoCode: 'KW'}, 
  {name: 'Kyrgyzstan', isoCode: 'KG'}, 
  {name: 'Lao People\'S Democratic Republic', isoCode: 'LA'}, 
  {name: 'Latvia', isoCode: 'LV'}, 
  {name: 'Lebanon', isoCode: 'LB'}, 
  {name: 'Lesotho', isoCode: 'LS'}, 
  {name: 'Liberia', isoCode: 'LR'}, 
  {name: 'Libyan Arab Jamahiriya', isoCode: 'LY'}, 
  {name: 'Liechtenstein', isoCode: 'LI'}, 
  {name: 'Lithuania', isoCode: 'LT'}, 
  {name: 'Luxembourg', isoCode: 'LU'}, 
  {name: 'Macao', isoCode: 'MO'}, 
  {name: 'Macedonia, The Former Yugoslav Republic of', isoCode: 'MK'}, 
  {name: 'Madagascar', isoCode: 'MG'}, 
  {name: 'Malawi', isoCode: 'MW'}, 
  {name: 'Malaysia', isoCode: 'MY'}, 
  {name: 'Maldives', isoCode: 'MV'}, 
  {name: 'Mali', isoCode: 'ML'}, 
  {name: 'Malta', isoCode: 'MT'}, 
  {name: 'Marshall Islands', isoCode: 'MH'}, 
  {name: 'Martinique', isoCode: 'MQ'}, 
  {name: 'Mauritania', isoCode: 'MR'}, 
  {name: 'Mauritius', isoCode: 'MU'}, 
  {name: 'Mayotte', isoCode: 'YT'}, 
  {name: 'Mexico', isoCode: 'MX'}, 
  {name: 'Micronesia, Federated States of', isoCode: 'FM'}, 
  {name: 'Moldova, Republic of', isoCode: 'MD'}, 
  {name: 'Monaco', isoCode: 'MC'}, 
  {name: 'Mongolia', isoCode: 'MN'}, 
  {name: 'Montserrat', isoCode: 'MS'}, 
  {name: 'Morocco', isoCode: 'MA'}, 
  {name: 'Mozambique', isoCode: 'MZ'}, 
  {name: 'Myanmar', isoCode: 'MM'}, 
  {name: 'Namibia', isoCode: 'NA'}, 
  {name: 'Nauru', isoCode: 'NR'}, 
  {name: 'Nepal', isoCode: 'NP'}, 
  {name: 'Netherlands', isoCode: 'NL'}, 
  {name: 'Netherlands Antilles', isoCode: 'AN'}, 
  {name: 'New Caledonia', isoCode: 'NC'}, 
  {name: 'New Zealand', isoCode: 'NZ'}, 
  {name: 'Nicaragua', isoCode: 'NI'}, 
  {name: 'Niger', isoCode: 'NE'}, 
  {name: 'Nigeria', isoCode: 'NG'}, 
  {name: 'Niue', isoCode: 'NU'}, 
  {name: 'Norfolk Island', isoCode: 'NF'}, 
  {name: 'Northern Mariana Islands', isoCode: 'MP'}, 
  {name: 'Norway', isoCode: 'NO'}, 
  {name: 'Oman', isoCode: 'OM'}, 
  {name: 'Pakistan', isoCode: 'PK'}, 
  {name: 'Palau', isoCode: 'PW'}, 
  {name: 'Palestinian Territory, Occupied', isoCode: 'PS'}, 
  {name: 'Panama', isoCode: 'PA'}, 
  {name: 'Papua New Guinea', isoCode: 'PG'}, 
  {name: 'Paraguay', isoCode: 'PY'}, 
  {name: 'Peru', isoCode: 'PE'}, 
  {name: 'Philippines', isoCode: 'PH'}, 
  {name: 'Pitcairn', isoCode: 'PN'}, 
  {name: 'Poland', isoCode: 'PL'}, 
  {name: 'Portugal', isoCode: 'PT'}, 
  {name: 'Puerto Rico', isoCode: 'PR'}, 
  {name: 'Qatar', isoCode: 'QA'}, 
  {name: 'Reunion', isoCode: 'RE'}, 
  {name: 'Romania', isoCode: 'RO'}, 
  {name: 'Russian Federation', isoCode: 'RU'}, 
  {name: 'RWANDA', isoCode: 'RW'}, 
  {name: 'Saint Helena', isoCode: 'SH'}, 
  {name: 'Saint Kitts and Nevis', isoCode: 'KN'}, 
  {name: 'Saint Lucia', isoCode: 'LC'}, 
  {name: 'Saint Pierre and Miquelon', isoCode: 'PM'}, 
  {name: 'Saint Vincent and the Grenadines', isoCode: 'VC'}, 
  {name: 'Samoa', isoCode: 'WS'}, 
  {name: 'San Marino', isoCode: 'SM'}, 
  {name: 'Sao Tome and Principe', isoCode: 'ST'}, 
  {name: 'Saudi Arabia', isoCode: 'SA'}, 
  {name: 'Senegal', isoCode: 'SN'}, 
  {name: 'Serbia and Montenegro', isoCode: 'CS'}, 
  {name: 'Seychelles', isoCode: 'SC'}, 
  {name: 'Sierra Leone', isoCode: 'SL'}, 
  {name: 'Singapore', isoCode: 'SG'}, 
  {name: 'Slovakia', isoCode: 'SK'}, 
  {name: 'Slovenia', isoCode: 'SI'}, 
  {name: 'Solomon Islands', isoCode: 'SB'}, 
  {name: 'Somalia', isoCode: 'SO'}, 
  {name: 'South Africa', isoCode: 'ZA'}, 
  {name: 'South Georgia and the South Sandwich Islands', isoCode: 'GS'}, 
  {name: 'Spain', isoCode: 'ES'}, 
  {name: 'Sri Lanka', isoCode: 'LK'}, 
  {name: 'Sudan', isoCode: 'SD'}, 
  {name: 'Suriname', isoCode: 'SR'}, 
  {name: 'Svalbard and Jan Mayen', isoCode: 'SJ'}, 
  {name: 'Swaziland', isoCode: 'SZ'}, 
  {name: 'Sweden', isoCode: 'SE'}, 
  {name: 'Switzerland', isoCode: 'CH'}, 
  {name: 'Syrian Arab Republic', isoCode: 'SY'}, 
  {name: 'Taiwan, Province of China', isoCode: 'TW'}, 
  {name: 'Tajikistan', isoCode: 'TJ'}, 
  {name: 'Tanzania, United Republic of', isoCode: 'TZ'}, 
  {name: 'Thailand', isoCode: 'TH'}, 
  {name: 'Timor-Leste', isoCode: 'TL'}, 
  {name: 'Togo', isoCode: 'TG'}, 
  {name: 'Tokelau', isoCode: 'TK'}, 
  {name: 'Tonga', isoCode: 'TO'}, 
  {name: 'Trinidad and Tobago', isoCode: 'TT'}, 
  {name: 'Tunisia', isoCode: 'TN'}, 
  {name: 'Turkey', isoCode: 'TR'}, 
  {name: 'Turkmenistan', isoCode: 'TM'}, 
  {name: 'Turks and Caicos Islands', isoCode: 'TC'}, 
  {name: 'Tuvalu', isoCode: 'TV'}, 
  {name: 'Uganda', isoCode: 'UG'}, 
  {name: 'Ukraine', isoCode: 'UA'}, 
  {name: 'United Arab Emirates', isoCode: 'AE'}, 
  {name: 'United Kingdom', isoCode: 'GB'}, 
  {name: 'United States', isoCode: 'US'}, 
  {name: 'United States Minor Outlying Islands', isoCode: 'UM'}, 
  {name: 'Uruguay', isoCode: 'UY'}, 
  {name: 'Uzbekistan', isoCode: 'UZ'}, 
  {name: 'Vanuatu', isoCode: 'VU'}, 
  {name: 'Venezuela', isoCode: 'VE'}, 
  {name: 'Viet Nam', isoCode: 'VN'}, 
  {name: 'Virgin Islands, British', isoCode: 'VG'}, 
  {name: 'Virgin Islands, U.S.', isoCode: 'VI'}, 
  {name: 'Wallis and Futuna', isoCode: 'WF'}, 
  {name: 'Western Sahara', isoCode: 'EH'}, 
  {name: 'Yemen', isoCode: 'YE'}, 
  {name: 'Zambia', isoCode: 'ZM'}, 
  {name: 'Zimbabwe', isoCode: 'ZW'} 
    ];

    setCountries(countryList);
  }, []);


  
  return (
    <div
      className="ml-12 mt-8 w-2/4 flex-shrink-0 flex-grow"
      style={{ marginLeft: '40%' }}
    >
      <Card className="p-4">
        <CardHeader
          className="bg-beige-500 rounded-t-xl py-2"
          title={
            <Typography variant="h6" className="text-s text-blue-700">
              Informations sur le site
            </Typography>
          }
          action={
            <IconButton
              size="small"
              aria-label="collapse"
              sx={{ color: 'text.secondary' }}
            >
              <Icon fontSize={20} icon={'mdi:chevron-down'} color="#2D749E" />
            </IconButton>
          }
        />
        <Collapse in={collapsed}>
          <CardContent>
            <div className="mb-1">
              <div className="-mx-2 mb-4 flex flex-wrap">
                {['Nom du site', 'Propriétaire du projet'].map((label) => (
                  <div key={label} className="mb-0 w-full px-2 md:w-1/2">
                    <label
                      htmlFor={label}
                      className="mb-1 block text-xs font-bold uppercase tracking-wide text-gray-700"
                    >
                      {label}
                    </label>
                    <input
                      id={label}
                      type="text"
                      placeholder="Doe"
                      className="block w-full appearance-none rounded border border-gray-200 px-3 py-2 text-sm leading-tight text-gray-600 focus:border-gray-400 focus:bg-white focus:outline-none"
                    />
                  </div>
                ))}
              </div>
              <div className="-mx-2 mb-4">
                {[
                  'Nombre de bâtiments sur le site',
                  'Nom des bâtiments du site',
                ].map((label) => (
                  <div key={label} className="w-full px-2">
                    <label
                      htmlFor={label}
                      className="mb-1 block text-xs font-bold uppercase tracking-wide text-gray-700"
                    >
                      {label}
                    </label>
                    <input
                      id={label}
                      type={label.includes('Nombre') ? 'number' : 'text'}
                      placeholder={label.includes('Nombre') ? '0' : 'Doe'}
                      className="block w-full appearance-none rounded border border-gray-200 px-3 py-2 text-sm leading-tight text-gray-600 focus:border-gray-400 focus:bg-white focus:outline-none"
                    />
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Collapse>
        <CardHeader
          className="bg-beige-500 rounded-t-xl py-2"
          title={
            <Typography variant="h6" className="text-s text-blue-700">
              L'emplacement du site
            </Typography>
          }
          action={
            <IconButton
              size="small"
              aria-label="collapse"
              sx={{ color: 'text.secondary' }}
              onClick={() => setCollapsedd(!collapsedd)}
            >
              <Icon
                color="#2D749E"
                fontSize={20}
                icon={!collapsedd ? 'mdi:chevron-down' : 'mdi:chevron-up'}
              />
            </IconButton>
          }
        />
        <Collapse in={collapsedd}>
          <CardContent>
            <div className="mb-1">
              <div className="-mx-2 mb-4 flex flex-wrap">
                <div className="mb-1 w-full px-2 md:w-1/3">
                  <label
                    htmlFor="postal-isoCode"
                    className="mb-1 block text-xs font-bold uppercase tracking-wide text-gray-700"
                  >
                    isoCode postal
                  </label>
                  <input
                    id="postal-isoCode"
                    type="text"
                    placeholder="Doe"
                    className="block w-full appearance-none rounded border border-gray-200 px-3 py-2 text-sm leading-tight text-gray-600 focus:border-gray-400 focus:bg-white focus:outline-none"
                  />
                </div>
                <div className="w-full px-2 md:w-1/3">
                  <label
                    htmlFor="city"
                    className="mb-1 block text-xs font-bold uppercase tracking-wide text-gray-700"
                  >
                    Ville
                  </label>
                  <input
                    id="city"
                    type="text"
                    placeholder="Doe"
                    className="block w-full appearance-none rounded border border-gray-200 px-3 py-2 text-sm leading-tight text-gray-600 focus:border-gray-400 focus:bg-white focus:outline-none"
                  />
                </div>
                <div className="w-full px-2 md:w-1/3">
                  <label
                    htmlFor="country"
                    className="mb-1 block text-xs font-bold uppercase tracking-wide text-gray-700"
                  >
                    Pays
                  </label>
                  <select
                    id="country"
                    className="block w-full appearance-none rounded border border-gray-200 px-3 py-2 text-sm leading-tight text-gray-600 focus:border-gray-400 focus:bg-white focus:outline-none"
                    {... countries.map((country) => (
                      <option key={country.isoCode} value={country.isoCode}>
                        {country.name}
                      </option>
                    ))}
        
                  />
                </div>
              </div>
              <div className="-mx-2 mb-4">
                <div className="w-full px-2">
                  <label
                    htmlFor="address"
                    className="mb-1 block text-xs font-bold uppercase tracking-wide text-gray-700"
                  >
                    Adresse
                  </label>
                  <input
                    id="address"
                    type="text"
                    placeholder="Doe"
                    className="block w-full appearance-none rounded border border-gray-200 px-3 py-2 text-sm leading-tight text-gray-600 focus:border-gray-400 focus:bg-white focus:outline-none"
                  />
                </div>
              </div>
              <div className="-mx-2 mb-4">
                <div className="w-full px-2">
                  <img src="/mapImage/mymap.PNG" alt="map" />
                </div>
              </div>
            </div>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}
