import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./style.css";
import { fetchAllCases, fetchCountryCases } from "../../../redux";
import { useDispatch, useSelector } from "react-redux";
import { currency } from "../../../utils";

const Map = () => {
  const dispatch = useDispatch();

  useEffect(async () => {
    await dispatch(fetchCountryCases());
  }, []);

  const { data, loading, error } = useSelector((state) => ({
    data: state.countryReducer.data,
    loading: state.countryReducer.loading,
    error: state.countryReducer.error,
  }));
  if (data) {
    return (
      <div>
        <h2 className="map-title">
          Map Showing Each Countries and No of Recorded Cases
        </h2>

        <MapContainer center={[51.505, -0.09]} zoom={6}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {data &&
            data?.map((country) => (
              <Marker
                position={[country?.countryInfo.lat, country?.countryInfo.long]}
                key={country?.country}
              >
                <Popup maxWidth={200} maxHeight={"auto"}>
                  <div>
                    <span className="country-image">
                      <img
                        className="flag"
                        src={country.countryInfo.flag}
                        alt={country.name}
                      />
                    </span>
                    <div className="country-info">
                      <p>Name of Country : {country.country}</p>
                      <p>No of Active Cases :{currency(country.active)}</p>
                      <p> No of Recovered :{currency(country.recovered)}</p>
                      <p> No of Deaths : {currency(country.deaths)}</p>
                    </div>
                  </div>
                </Popup>
              </Marker>
            ))}
        </MapContainer>
      </div>
    );
  }
};

export default Map;
