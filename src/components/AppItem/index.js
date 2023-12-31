// Write your code here
import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imgUrl} = appDetails

  return (
    <li className="app-item">
      <img src={imgUrl} alt={appName} className="app-img" />
      <p className="app-name">{appName}</p>
    </li>
  )
}

export default AppItem
