import { useParams } from 'react-router';

export default function Detail() {

  const urlParams = useParams();
  console.log('Params are: ', urlParams);

  return (
    <div>
      <h3>Detailed info about something</h3>
      <p>Here you can see a dummy text. We will add an ID here. Now id is {urlParams.detail_id}</p>
    </div>
  )
}