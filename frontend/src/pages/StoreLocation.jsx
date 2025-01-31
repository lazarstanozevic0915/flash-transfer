import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { MapPin, Phone, Clock, Search } from 'lucide-react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import heroBackground from '../assets/image/hero-background.png';

const StoreLocation = () => {
  const [selectedTab, setSelectedTab] = useState('map');
  const [selectedLocation, setSelectedLocation] = useState(null);
  
  // Example coordinates for Paris, France
  const center = { lat: 48.8566, lng: 2.3522 };
  
  const locations = [
    {
      id: 1,
      name: "BOK BANK ROAD BRANCH SADIABAD",
      address: "Masroor Plaza, Bank Road, Saddar, Sadiabad, Sindh",
      agentName: "Kumar Sahu",
      openingTime: "10:00AM to 5PM",
      contactNumber: "+92 301 789",
      position: { lat: 48.8566, lng: 2.3522 }
    },
    {
      id: 2,
      name: "BOK BANK ROAD BRANCH SADIABAD",
      address: "Masroor Plaza, Bank Road, Saddar, Sadiabad, Sindh",
      agentName: "Kumar Sahu",
      openingTime: "10:00AM to 5PM",
      contactNumber: "+92 301 789",
      position: { lat: 48.8606, lng: 2.3376 }
    },
    {
      id: 3,
      name: "BOK BANK ROAD BRANCH SADIABAD",
      address: "Masroor Plaza, Bank Road, Saddar, Sadiabad, Sindh",
      agentName: "Kumar Sahu",
      openingTime: "10:00AM to 5PM",
      contactNumber: "+92 301 789",
      position: { lat: 48.8526, lng: 2.3395 }
    }
  ];

  const mapOptions = {
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: false,
    styles: [
      {
        featureType: "poi",
        elementType: "labels",
        stylers: [{ visibility: "off" }]
      }
    ]
  };

  return (
    <div className="min-h-screen dm-sans flex flex-col">
      <Navbar />
      <div className="w-full min-h-screen relative flex flex-col items-center dm-sans">
        <div className="w-full h-[50vh] bg-[#F6F6F6] rounded-b-[50px] absolute overflow-hidden">
          <div className="absolute top-2 -right-20 z-10">
            <img
              src={heroBackground}
              alt=""
              className="h-[300px] w-[440px] object-fill"
            />
          </div>
          <div className="absolute top-2 -left-40 z-10">
            <img
              src={heroBackground}
              alt=""
              className="h-[300px] w-[440px] object-fill"
            />
          </div>
        </div>
        
        <div className="flex flex-col items-center w-full">
          <div className="w-[600px] space-y-6 relative z-20 pt-16 pb-40">
            <div className="flex flex-col items-center space-y-4">
              <h1 className="text-[44px] leading-tight dm-sans-medium">
                Our retail stores are available
              </h1>
              <p className="text-[#6E757D] dm-sans-light text-[14px] text-center">
                Send and receive money at a Flash transfer agent location near you
              </p>
            </div>
          </div>

          <div className="w-full max-w-[1200px] bg-white rounded-3xl shadow-lg relative z-20 p-8 my-20">
            <div className="flex justify-between items-center mb-6">
              <div className="text-2xl font-medium">Find locations</div>
              <div className="flex items-center gap-2 text-blue-600">
                <MapPin className="w-5 h-5" />
                <span>France</span>
              </div>
            </div>

            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex gap-6">
              <div className="flex-1 h-[600px] bg-gray-100 rounded-xl overflow-hidden">
                <div className="flex gap-2 p-2 bg-white">
                  <button
                    className={`px-6 py-2 rounded-lg text-sm font-medium ${
                      selectedTab === 'map'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                    onClick={() => setSelectedTab('map')}
                  >
                    Map
                  </button>
                  <button
                    className={`px-6 py-2 rounded-lg text-sm font-medium ${
                      selectedTab === 'satellite'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                    onClick={() => setSelectedTab('satellite')}
                  >
                    Satellite
                  </button>
                </div>
                
                <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
                  <GoogleMap
                    mapContainerClassName="w-full h-[calc(100%-48px)]"
                    center={center}
                    zoom={13}
                    options={{
                      ...mapOptions,
                      mapTypeId: selectedTab === 'satellite' ? 'satellite' : 'roadmap'
                    }}
                  >
                    {locations.map((location) => (
                      <Marker
                        key={location.id}
                        position={location.position}
                        onClick={() => setSelectedLocation(location)}
                      />
                    ))}
                    
                    {selectedLocation && (
                      <InfoWindow
                        position={selectedLocation.position}
                        onCloseClick={() => setSelectedLocation(null)}
                      >
                        <div className="p-2">
                          <h3 className="font-medium">{selectedLocation.name}</h3>
                          <p className="text-sm text-gray-500">{selectedLocation.address}</p>
                        </div>
                      </InfoWindow>
                    )}
                  </GoogleMap>
                </LoadScript>
              </div>

              <div className="w-[400px] space-y-4 max-h-[600px] overflow-y-auto">
                {locations.map((location) => (
                  <div
                    key={location.id}
                    className="bg-white rounded-xl border border-gray-100 p-4 space-y-3 hover:border-blue-200 cursor-pointer transition-colors"
                    onClick={() => setSelectedLocation(location)}
                  >
                    <div className="flex items-start gap-2">
                      <MapPin className="w-5 h-5 text-gray-400 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium text-gray-900">{location.name}</h3>
                        <p className="text-sm text-gray-500">{location.address}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-500">Agent Name</span>
                        <span className="font-medium">{location.agentName}</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-500">Opening Time</span>
                        <span className="font-medium">{location.openingTime}</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-500">Contact Number</span>
                        <span className="font-medium">{location.contactNumber}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <button className="py-2 px-4 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                        Share
                      </button>
                      <button className="py-2 px-4 bg-[#FFC000] text-gray-900 rounded-lg text-sm font-medium hover:bg-[#E5AD00] transition-colors">
                        Direction
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default StoreLocation;