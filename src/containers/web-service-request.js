import React, { Component } from 'react';

import { fetchWebSserviceRequest } from 'services';
import Loader from 'components/loader';
import ServiceRequestedBy from 'components/service-requested-by';
import ServiceRequestApprovers from 'components/service-request-approvers';
import Message from 'components/message';
import AmazonLogo from 'images/amazon-logo.png';

class WebServiceRequest extends Component {
  state = {
    isLoading: true,
    data: {}
  };
  componentDidMount() {
    fetchWebSserviceRequest().then(
      data => {
        this.setState(state => ({
          isLoading: false,
          data: data,
          error: null
        }));
      },
      error => {
        this.setState(state => ({
          isLoading: false,
          data: {},
          error: error
        }));
      }
    );
  }

  render() {
    if (this.state.isLoading) {
      return (
        <main>
          <Loader />
        </main>
      );
    }

    if (this.state.error && this.state.error.message) {
      return (
        <Message type="error">
          <header>Error occured: {this.state.error.message}</header>
        </Message>
      );
    }

    if (!this.state.data || !this.state.data.id) {
      return (
        <Message type="info">
          <header>No data found for respective request!</header>
        </Message>
      );
    }

    return (
      <main className="row">
        <div className="col-12">
          <div className="row">
            <div className="col-xs-12">
              <Message type="warning">
                <i className="fas fa-lock pr-2" />
                <header>Security message</header>
                <label className="content">
                  orem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt.
                </label>
              </Message>
            </div>
          </div>
          <div className="row">
            <div className="col-12 divide-bottom">
              <div className="item">
                <div className="media">
                  <img src={AmazonLogo} alt="amazon service request" />
                </div>
                <div className="content">
                  <h5 className="m-0">
                    Request for amazon web serviee (#{this.state.data.id})
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12  col-md-6 divide-right">
              <ServiceRequestedBy data={this.state.data} />
            </div>
            <div className="col-xs-12  col-md-6">
              <ServiceRequestApprovers approvers={this.state.data.approvers} />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <Message type="error" className="m-0">
                <header>
                  Your company is already paying for Amazon Web Service on a
                  recurring basis.
                </header>
              </Message>
              <Message>
                <header>
                  <small>(1 instance owened by John Smith)</small>
                </header>
              </Message>
            </div>
            <div className="col-12">
              <button className="button button-primary">Apply</button>
              <button className="button button-warning">Deny</button>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default WebServiceRequest;
