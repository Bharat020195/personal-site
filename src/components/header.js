import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <div className="text-white font-bold">
    <Link
      className="text-white ml-10 p-8 font-bold text-3xl"
      to="/">
      {siteTitle}
    </Link>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
