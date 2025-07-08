import { Outlet } from 'react-router';

export default function Page2() {

  return (
    <div className="page page2">
      <h2>This is the second page of our app</h2>
      <p>It also contains this small dummy text, and contains small grid below.</p>
      <Outlet />
    </div>
  )
}