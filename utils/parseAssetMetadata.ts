/**
 * This function takes a metadata string and parses it.
 * It extracts both standard and optional properties according to the provided specification.
 * 
 * @param metadata - The metadata string to parse.
 * @returns An object with properties extracted from metadata.
 */
export function parseAssetMetadata(metadata: string): Record<string, unknown> {
  const parsedData: Record<string, string | number> = {};
  
  // Split the metadata string into properties.
  const properties = metadata.split(';');
  
  properties.forEach(prop => {
    // Ignore empty properties (like after the last ';').
    if(!prop) return;
    
    // Split each property into a key and value.
    const [key, value] = prop.split('=');
    
    // Map each key to its corresponding property on the asset object.
    switch(key) {
      case 'N':
        parsedData.name = value;
        break;
      case 'SN':
        parsedData.shortName = value;
        break;
      case 'UN':
        parsedData.unitName = value;
        break;
      case 'NTHUN':
        parsedData.smallestUnitName = value;
        break;
      case 'NTH_RATIO':
        parsedData.smallestUnitRatio = parseInt(value);
        break;
      default:
        if(key.startsWith('OPT_')) {
          // Remove 'OPT_' prefix for optional properties and convert to camelCase.
          const optKey = key.slice(4).toLowerCase().replace(/_([a-z])/g, function (g) { return g[1].toUpperCase(); });
          parsedData[optKey] = value;
        }
    }
  });

  return parsedData;
}
