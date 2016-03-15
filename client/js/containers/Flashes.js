import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'
import { getAlerts } from 'reducers/alerts'
import css from './Flashes.scss'
import _ from 'lodash'
import Flash from 'components/Flash'

const Flashes = (props) => {
  const { alerts, dispatch, fixed } = props

  return (
    <div className={classNames({ [`${css.fixed}`]: fixed })}>
      {
        _.map(alerts, (flash, key) =>
          <Flash
            dispatch={dispatch}
            id={parseInt(key, 10)}
            key={key}
            {...flash}
          />
        )
      }
    </div>
  )
}

Flashes.propTypes = {
  alerts: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
  fixed: PropTypes.bool
}

const mapStateToProps = (state) => ({ ...getAlerts(state) })

export default connect(mapStateToProps)(Flashes)
