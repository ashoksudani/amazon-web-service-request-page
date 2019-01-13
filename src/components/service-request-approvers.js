import React from 'react';

import Message from 'components/message';
import dateUtils from 'utils/date';

import 'components/service-request-approvers.scss';

const ServiceRequestApprovers = function({ approvers = [] }) {
  let content;
  if (!approvers.length) {
    content = (
      <Message type="info">
        <header>
          <small>Nothing to display!</small>
        </header>
      </Message>
    );
  } else {
    const approvedList = approvers.filter(a => a.status === 'accepted');
    const pendingList = approvers.filter(a => a.status !== 'accepted');
    let approvedContent;
    let pendingContent;

    if (!approvedList.length) {
      approvedContent = (
        <Message type="info">
          <header>
            <small>No approves!</small>
          </header>
        </Message>
      );
    } else {
      approvedContent = approvedList.map((item, i) => {
        return prepareApproverItem(item, i);
      });
    }
    if (!pendingList.length) {
      pendingContent = (
        <Message type="info">
          <header>
            <small>Nothing is pending!</small>
          </header>
        </Message>
      );
    } else {
      pendingContent = pendingList.map((item, i) => {
        return prepareApproverItem(item, i);
      });
    }

    content = (
      <div className="request-approvers">
        <div className="row approvers-list">
          <div className="col-12 py-0">
            <label className="label-light">Approved</label>
            {approvedContent}
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-12 py-0">
            <label className="label-light">Pending</label>
            {pendingContent}
          </div>
        </div>
      </div>
    );
  }
  return content;
};

function prepareApproverItem(item, i) {
  const approver = item.approver;
  const fullName = approver.first_name + ' ' + approver.last_name;
  let apporvedStatus;
  if (item.status === 'accepted') {
    apporvedStatus = (
      <span className="fa-stack fa-sm pull-right mt-2">
        <i className="fas fa-circle fa-stack-2x success" />
        <i className="fas fa-check fa-stack-1x fa-inverse" />
      </span>
    );
  } else {
    apporvedStatus = <i className="far fa-2x fa-circle pull-right light" />;
  }
  return (
    <div className="item" key={approver.email}>
      <div className="media">
        <label className="badge circular mr-1">{i + 1}</label>
        <img src={approver.profile_picture} alt={fullName} />
      </div>
      <div className="content">
        <div className="pull-left">
          <h6>
            {fullName}{' '}
            <label className="label-light">
              <small>({approver.email})</small>
            </label>
          </h6>

          <label className="label-light">
            Approved: {dateUtils.format(item.last_updated_date, 'MMM DD YYYY')}
          </label>
        </div>
        {apporvedStatus}
      </div>
    </div>
  );
}

export default ServiceRequestApprovers;
