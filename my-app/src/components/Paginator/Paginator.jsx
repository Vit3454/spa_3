import React, { useState } from 'react'
import s from './Paginator.module.css'

const Paginator = (props) => {
  const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
  const pages = []
  for (let i = 1; i <= pagesCount; i++) pages.push(i)

  const portionCount = Math.ceil(pagesCount / props.portionSize)
  const [currentPortion, setCurrentPortion] = useState(1)
  const letfLimit = (currentPortion - 1) * props.portionSize + 1
  const rightLimit = currentPortion * props.portionSize

  return (
    <div className={s.paginator}>
      {currentPortion > 1 ? (
        <button
          onClick={() => {
            setCurrentPortion(currentPortion - 1)
          }}
        >
          ←
        </button>
      ) : null}

      {pages
        .filter((p) => p >= letfLimit && p <= rightLimit)
        .map((p) => (
          <button
            key={p}
            onClick={() => {
              props.onChangePage(p)
            }}
            className={p === props.currentPage ? s.active : null}
          >
            {p}
          </button>
        ))}
      {currentPortion < portionCount ? (
        <button
          onClick={() => {
            setCurrentPortion(currentPortion + 1)
          }}
        >
          →
        </button>
      ) : null}
    </div>
  )
}

export default Paginator
