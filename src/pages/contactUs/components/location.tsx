import React, { useState, useCallback, useEffect } from 'react';
import { styled } from '@mui/material';
import { GlobalSpacing } from '../../../components/layout/styles';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const google_map_api = process.env.REACT_APP_GOOGLE_MAP_API;

const containerStyle = {
  width: '100%',
  height: '500px',
};

const LocationSection = () => {
  const [markerPosition, setMarkerPosition] = useState<{ lat: number; lng: number } | null>(null);

  const updateMarkerPosition = useCallback(async (address: string) => {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
          address,
        )}&key=${google_map_api}`,
      );

      console.log(google_map_api);

      const data = await response.json();

      if (data.results && data.results[0]) {
        const { lat, lng } = data.results[0].geometry.location;

        console.log(`Fetched coordinates for ${address}:`, { lat, lng });

        setMarkerPosition({ lat, lng });
      } else {
        console.error('No results found for the given address.');
      }
    } catch (error) {
      console.error('Error fetching coordinates:', error);
    }
  }, []);

  // Effect to fetch coordinates on component mount
  useEffect(() => {
    updateMarkerPosition('2345 Matthews Street, Bloomington, MN');
  }, [updateMarkerPosition]);

  return (
    <TeamSectionWrapper>
      {google_map_api && (
        <LoadScript googleMapsApiKey={google_map_api}>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={markerPosition || { lat: 39.8403, lng: -88.9548 }}
            zoom={7}
          >
            {markerPosition && <Marker position={markerPosition} />}
          </GoogleMap>
        </LoadScript>
      )}
    </TeamSectionWrapper>
  );
};

const TeamSectionWrapper = styled(GlobalSpacing)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  overflow: 'hidden',
  height: '500px',

  // '&::before': {
  //   content: '""',
  //   position: 'absolute',
  //   left: '50%',
  //   top: '50%',
  //   width: '95%',
  //   height: '100%',
  //   backgroundColor: theme.palette.common.firstBoxBg,
  //   transform: 'translate(-50%, -50%)',
  //   borderRadius: '50px',
  //   zIndex: 1,

  //   [theme.breakpoints.down('md')]: {
  //     borderRadius: '20px',
  //   },
  // },

  [theme.breakpoints.down('lg')]: {},
}));

export { LocationSection };
