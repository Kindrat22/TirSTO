import React from 'react'
import {GoogleMap, Marker, useJsApiLoader} from '@react-google-maps/api';
import '../PagesStyles.css'

const containerStyle = {
    width: '100%', height: '500px'
};

const center = {
    lat: 49.674394, lng: 24.559348
}

const onClick = () => {
    window.open("https://www.google.com.ua/maps/dir//49.6744603,24.55936/@49.6743283,24.5574077,482m/data=!3m1!1e3!4m2!4m1!3e0")
};


function MyMap() {
    const {isLoaded} = useJsApiLoader({
        id: 'google-map-script', googleMapsApiKey: "AIzaSyDQB_ECDhUbjI1DJZ-y7LdBMUAa0q-eYpc"
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


    return isLoaded ? (<div id={"maps"}>
        <p className="headerText mt-5">Ми на мапі</p>
        <div className={'Pages_total'}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={16}
                onLoad={onLoad}
                onUnmount={onUnmount}
                mapTypeId='satellite'
            >
                { /* Child components, such as markers, info windows, etc. */}


                <Marker
                    position={center}
                    onClick={onClick}
                >

                </Marker>

                <></>
            </GoogleMap>
        </div>
    </div>) : <></>
}

export default React.memo(MyMap)