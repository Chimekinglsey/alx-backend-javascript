export default function getNeighborhoodsList() {
  let sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  return{
    addNeighborhood: (newNeighborhood) => {
       sanFranciscoNeighborhoods.push(newNeighborhood);
       return sanFranciscoNeighborhoods;
     }
  }
}
