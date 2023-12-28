'use client';

import { Button, Divider, Tab, Typography } from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Icon from '../ui/icons';
import Bodyleft from '../ui/sites/bodyleft';
import Header from '../ui/sites/header';
import Userstable from '../ui/userstable/userstable';
import Footer from '../ui/sites/footer';
import FooterLeft from '../ui/sites/footerLeft';
import FooterRight from '../ui/sites/footerRight';
import Bodyright from '../ui/sites/bodyright';
import Card from '@mui/material/Card';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { SyntheticEvent, useState } from 'react';

export default function Page() {
  const [collapsed, setCollapsed] = useState<boolean>(true);
  const [collapsedd, setCollapsedd] = useState<boolean>(true);
  const handleGoToStep2 = () => {
    window.location.href = '/addsite2';
  };

  const handleGoToStep4 = () => {
    window.location.href = '/addsite4';
  };

  const createButton = (label: any) => ({
    borderRadius: '20px',
    border: 'none',
    backgroundColor: 'white',
    color: '#2D749E',
    transition: 'background-color 0.3s',
    width: '100px',
    height: '40px',
  });
  const [value, setValue] = useState<string>('1');

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <div className="relative h-screen w-full overflow-auto bg-gradient-to-r from-blue-700 to-green-500">
      <Header />
      <div className="mb-7 flex justify-between px-24">
        <div className="fixed w-1/3 translate-y-1/4 transform pt-24">
          <Typography className="text-1l font-xs text-white">
            <span className="mr-4 border-b-2 border-white pr-40"></span>Étape 1
            sur 5
          </Typography>
          <Typography className="mt-3 text-4xl font-bold text-white">
            Nouvelle configuration du site
          </Typography>
          <Typography className="mt-6 text-xs font-bold text-white">
            Lorem ipsum dolor sit amet consectetur. Elit quam elementum viverra
            pellentesque at sit imperdiet. Volutpat convallis porta magna odio
            curabitur nullam a.
          </Typography>
        </div>
        <div
          className="ml-12 mt-8 w-2/4 flex-shrink-0 flex-grow"
          style={{ marginLeft: '40%' }}
        >
          <Card className="ml-28 p-4">
            <TabContext value={value}>
              <TabList
              centered
                className="flex justify-center rounded-t-xl py-2"
                onChange={handleChange}
                aria-label="card navigation"
              >
                <Tab value="1" label="GMAO" />
                <Tab value="2" label="GTB" />
                <Tab value="3" label="ID0" />
                <Tab value="4" label="BOS" />
              </TabList>
              <TabPanel value="1" sx={{ p: 2 }}>
                {/* <CardHeader
              className="rounded-t-xl py-2"
              title={
                <div className="flex items-center justify-between px-28">
                  {['GMAO', 'GTB', 'ID0', 'BOS'].map((label) => (
                    <button
                      key={label}
                      style={createButton(label)}
                      className="text-base font-medium"
                      onMouseOver={(e) => {
                        const target = e.target as HTMLButtonElement;
                        target.style.backgroundColor =
                          'rgba(45, 116, 158, 0.11)';
                        target.style.color = 'white';
                      }}
                      onMouseOut={(e) => {
                        const target = e.target as HTMLButtonElement;
                        target.style.backgroundColor = 'white';
                        target.style.color = '#2D749E';
                      }}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              }
            /> */}
                <hr className="mb-10 mt-2 border-gray-300" />
                <CardHeader
                  className="my-2 rounded-b-xl rounded-t-xl bg-beige-500 py-1"
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
                        icon={
                          !collapsedd ? 'mdi:chevron-down' : 'mdi:chevron-up'
                        }
                      />
                    </IconButton>
                  }
                />
                <Collapse in={collapsedd}>
                  <CardContent>
                    <div className="mb-1">
                      <div className="mb-4">
                        <div className="w-full">
                          <label
                            htmlFor="address"
                            className="mb-1 block text-xs font-bold uppercase tracking-wide text-gray-700"
                          >
                            Version
                          </label>
                          <input
                            id="address"
                            type="text"
                            placeholder="Doe"
                            className="block w-full appearance-none rounded border border-gray-200 px-3 py-2 text-sm leading-tight text-gray-600 focus:border-gray-400 focus:bg-white focus:outline-none"
                          />
                        </div>
                      </div>
                      <div className="mb-4 w-full">
                        <label
                          htmlFor="address"
                          className="mb-1 block text-xs font-bold uppercase tracking-wide text-gray-700"
                        >
                          URI du point de terminaison
                        </label>
                        <input
                          id="address"
                          type="text"
                          placeholder="Doe"
                          className="block w-full appearance-none rounded border border-gray-200 px-3 py-2 text-sm leading-tight text-gray-600 focus:border-gray-400 focus:bg-white focus:outline-none"
                        />
                      </div>

                      <div className="mb-4 flex justify-between space-x-10">
                        <div className="w-1/2">
                          <label
                            htmlFor="address"
                            className="mb-1 block text-xs font-bold uppercase tracking-wide text-gray-700"
                          >
                            Se connecter
                          </label>
                          <input
                            id="address"
                            type="text"
                            placeholder="Doe"
                            className="block w-full appearance-none rounded border border-gray-200 px-3 py-2 text-sm leading-tight text-gray-600 focus:border-gray-400 focus:bg-white focus:outline-none"
                          />
                        </div>
                        <div className="w-1/2">
                          <label
                            htmlFor="address"
                            className="mb-1 block text-xs font-bold uppercase tracking-wide text-gray-700"
                          >
                            Mot de passe
                          </label>
                          <input
                            id="address"
                            type="text"
                            placeholder="Doe"
                            className="block w-full appearance-none rounded border border-gray-200 px-3 py-2 text-sm leading-tight text-gray-600 focus:border-gray-400 focus:bg-white focus:outline-none"
                          />
                        </div>
                      </div>
                      <div className="mb-4 flex justify-between space-x-10">
                        <div className="w-1/2">
                          <label
                            htmlFor="address"
                            className="mb-1 block text-xs font-bold uppercase tracking-wide text-gray-700"
                          >
                            Identifiant BDD Mission
                          </label>
                          <input
                            id="address"
                            type="text"
                            placeholder="Doe"
                            className="block w-full appearance-none rounded border border-gray-200 px-3 py-2 text-sm leading-tight text-gray-600 focus:border-gray-400 focus:bg-white focus:outline-none"
                          />
                        </div>
                        <div className="w-1/2">
                          <label
                            htmlFor="address"
                            className="mb-1 block text-xs font-bold uppercase tracking-wide text-gray-700"
                          >
                            Localisation des Paramètres
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
                        <div className="w-full px-2 pt-6">
                          <Button
                            className="rounded bg-blue-700 px-4 py-2 font-bold text-white hover:bg-blue-700"
                            variant="contained"
                            style={{
                              borderRadius: '10px',
                              padding: '10px 20px',
                              boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16)',
                              transition: 'background-color 0.3s',
                            }}
                          >
                            Paramètres avancés...
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Collapse>
                <CardHeader
                  className="my-2 rounded-b-xl rounded-t-xl bg-beige-500 py-1"
                  title={
                    <Typography variant="h6" className="text-s text-blue-700">
                      Logiciel Carl
                    </Typography>
                  }
                  action={
                    <IconButton
                      size="small"
                      aria-label="collapse"
                      sx={{ color: 'text.secondary' }}
                      onClick={() => setCollapsed(!collapsed)}
                    >
                      <Icon
                        color="#2D749E"
                        fontSize={20}
                        icon={
                          !collapsed ? 'mdi:chevron-down' : 'mdi:chevron-up'
                        }
                      />
                    </IconButton>
                  }
                />
              </TabPanel>
            </TabContext>
          </Card>
        </div>
      </div>
      <div
        className={`relative bottom-0 flex transform justify-between px-4 py-3 pt-16 transition-transform duration-300 md:px-24`}
      >
        <FooterLeft  onClick={handleGoToStep2} />
        <FooterRight onClick={handleGoToStep4} />
      </div>
    </div>
  );
}
