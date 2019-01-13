import React from 'react';

import Message from 'components/message';

import 'components/service-request-by.scss';

const ServiceRequestedBy = function({ data = {} }) {
  const requestedBy = data.requested_by;
  let content;
  if (!requestedBy) {
    content = (
      <Message type="info">
        <header>
          <small>Nothing to display!</small>
        </header>
      </Message>
    );
  } else {
    const fullName = `${requestedBy.first_name}  ${requestedBy.last_name}`;

    content = (
      <div className="content-table">
        <div className="row">
          <div className="col-3">
            <label className="label-light">Requested By</label>
          </div>
          <div className="col-9">
            <div className="item">
              <div className="media">
                <img src={requestedBy.profile_picture} alt={fullName} />
              </div>
              <div className="content">{fullName}</div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-3">
            <label className="label-light">Cost</label>
          </div>
          <div className="col-9">${data.cost}</div>
        </div>

        <div className="row">
          <div className="col-6 divide-right">
            <div className="row">
              <div className="col-6">
                <label className="label-light">Renewal Frequency</label>
              </div>
              <div className="col-6">${data.cost * 12}</div>
            </div>
          </div>
          <div className="col-6">
            <div className="row">
              <div className="col-6">
                <label className="label-light">Annual Cost</label>
              </div>
              <div className="col-6">
                {data.renewal_frequency_in_months} month
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-3">
            <label className="label-light">Expense Account</label>
          </div>
          <div className="col-9">{data.expense_account}</div>
        </div>

        <div className="row">
          <div className="col-3">
            <label className="label-light">File</label>
          </div>
          <div className="col-9">
            {data.files.map(file => {
              const parsedFile = fileIconFor(file);
              return (
                <div className="item" key={file}>
                  <div className="media">
                    <i className={parsedFile.classNames} />
                  </div>
                  <div className="content">{parsedFile.fileName}</div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="row">
          <div className="col-3">
            <label className="label-light">Description</label>
          </div>
          <div className="col-9">{data.description}</div>
        </div>
      </div>
    );
  }
  return content;
};

const fileIconFor = filePath => {
  let classNames = 'mr-2 far fa-file';
  if (!filePath) {
    return { classNames, fileName: '-' };
  }

  const fileExtension = filePath.split('.').pop();
  const fileExtMap = {
    doc: '-word',
    docx: '-word',
    xls: '-excel',
    xlsx: '-excel',
    pdf: '-pdf',
    bmp: '-image',
    gif: '-image',
    ico: '-image',
    jpeg: '-image',
    jpg: '-image',
    png: '-image',
    aif: '-audio',
    cda: '-audio',
    mid: '-audio',
    mp3: '-audio',
    ogg: '-audio',
    wav: '-video',
    wma: '-video',
    wpl: '-video',
    mp4: '-video',
    mov: '-video'
  };

  if (fileExtMap[fileExtension]) {
    classNames += fileExtMap[fileExtension];
  }
  return {
    classNames,
    fileName: filePath.split('/').pop()
  };
};

export default ServiceRequestedBy;
