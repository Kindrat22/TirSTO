import React from 'react'
import {GoogleMap, Marker, useJsApiLoader} from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '600px'
};

const center = {
    lat: 49.674394,
    lng:  24.559348
}

function MyMap() {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyDQB_ECDhUbjI1DJZ-y7LdBMUAa0q-eYpc"
    })

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);
        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    return isLoaded ? (
        <div className={"Pages_total"} id={"map"}>
            <h4  className="text-center m-5">Ми на мапі</h4>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={15}
                onLoad={onLoad}
                onUnmount={onUnmount}
            >
                { /* Child components, such as markers, info windows, etc. */ }
                <Marker position={center}>

                </Marker>
                <></>
            </GoogleMap>
        </div>
    ) : <></>
}

export default React.memo(MyMap)