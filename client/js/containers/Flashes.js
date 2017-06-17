import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'
import { getAlerts } from 'reducers/alerts'
import css from './Flashes.scss'
import Flash from 'components/Flash'

const Flashes = (props) => {
  const { alerts, dispatch, fixed } = props

  return (
    <div className={classNames({ [`${css.fixed}`]: fixed })}>
      {
        alerts && alerts.map(alert =>
          <Flash
            dispatch={dispatch}
            id={alert.id}
            key={alert.id}
            {...alert}
          />
        )
      }
    </div>
  )
}

Flashes.defaultProps = {
  alerts: []
}

Flashes.propTypes = {
  alerts: PropTypes.arrayOf(PropTypes.object),
  dispatch: PropTypes.func.isRequired,
  fixed: PropTypes.bool
}

const mapStateToProps = state => ({ ...getAlerts(state) })

export default connect(mapStateToProps)(Flashes)
