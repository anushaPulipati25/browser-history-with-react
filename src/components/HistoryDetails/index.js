import './index.css'

const HistoryDetails = props => {
  const {uniqueId, itemDetails, deleteHistoryItem} = props
  const {timeAccessed, logoUrl, title, domainUrl} = itemDetails

  const deleteItem = () => {
    deleteHistoryItem(uniqueId)
  }

  const mainEle = (
    <li className="itemContainer">
      <p className="time">{timeAccessed}</p>
      <div className="logoDeleteContainer">
        <div className="logoContainer">
          <img className="logo" alt="domain logo" src={logoUrl} />
          <div className="deleteTitleContainer">
            <div className="titleContainer">
              <p className="title">{title}</p>
              <p className="domain">{domainUrl}</p>
            </div>

            <button type="button" className="button" onClick={deleteItem}>
              <img
                src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
                alt="delete"
                className="deleteIcon"
                onClick={deleteItem}
              />
            </button>
          </div>
        </div>
      </div>
    </li>
  )

  return mainEle
}

export default HistoryDetails
