let toggle = true;
export default function loadBalancer(chinaDownload, USDownload) {
  let resolver;
  if (toggle) {
    resolver = chinaDownload;
    toggle = !toggle;
  } else {
    resolver = USDownload;
    toggle = !toggle;
  }
  return resolver;
// const result = shouldPrintChina ? chinaDownload : USDownload;
// Toggle the state variable for the next function call
// shouldPrintChina = !shouldPrintChin
}
