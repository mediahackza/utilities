/*----------------------------------------------------------------------------
randomInt
Returns a random integer between min (inclusive) and max (inclusive)
----------------------------------------------------------------------------*/

export function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

/*----------------------------------------------------------------------------
 json2geo  
 Converts a json object to a geojson object 
----------------------------------------------------------------------------*/
export async function json2geo(data, lon, lat) {
  let geojson = { type: 'FeatureCollection', features: [] }
  let features = []

  let keys = Object.keys(data[0])

  data.forEach((d) => {
    let feature = {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [+d[lat], +d[lon]],
      },
      properties: {},
    }
    keys.forEach((key) => {
      feature.properties[key] = d[key]
    })
    geojson.features.push(feature)
  })

  return geojson
}
