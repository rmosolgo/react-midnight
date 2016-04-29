import React, { Component, PropTypes } from 'react'
import withCalendarProps from '../decorators/with-calendar-props'

class PrevMonth extends Component {
  static propTypes = {
    disabled: PropTypes.bool
  }

  static defaultProps = {
    disabled: false
  }

  handleClick = () => {
    const { disabled, calendar, onClick } = this.props
    if (!disabled) {
      calendar.navigateMonth(-1)
      onClick && onClick.call(this)
    }
  }

  render() {
    const { disabled, calendar } = this.props
    let classes = 'cal__nav cal__nav--prev'

    if (disabled) {//minDay && isSame(month, minDay, 'month')
      classes += ' cal__nav--disabled'
    }

    return (
      <button
        type="button"
        disabled={disabled}
        aria-controls={calendar.id + '__table'}
        title="Previous month"
        className={classes}
        onClick={this.handleClick}
      />
    )
  }
}

export default withCalendarProps(PrevMonth)