import React from 'react'

export const Landing = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="section center-align">
        <h2 className="blue-text text-darken-2">Welcome to SurveyHub</h2>
        <p className="grey-text text-darken-1">
          Create, share, and analyze surveys effortlessly.
        </p>
        <a className="waves-effect waves-light btn blue darken-2" href="/auth/google">
          Login
        </a>
      </div>

      {/* Features Section */}
      <div className="section row">
        <div className="col s12 m4">
          <div className="card">
            <div className="card-content center-align">
              <i className="large material-icons blue-text">create</i>
              <h5>Create Surveys</h5>
              <p>Design custom surveys with an intuitive interface.</p>
            </div>
          </div>
        </div>
        <div className="col s12 m4">
          <div className="card">
            <div className="card-content center-align">
              <i className="large material-icons blue-text">share</i>
              <h5>Share Easily</h5>
              <p>Distribute surveys via email, social media, or links.</p>
            </div>
          </div>
        </div>
        <div className="col s12 m4">
          <div className="card">
            <div className="card-content center-align">
              <i className="large material-icons blue-text">analytics</i>
              <h5>Analyze Results</h5>
              <p>Gain insights with real-time analytics and reports.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
