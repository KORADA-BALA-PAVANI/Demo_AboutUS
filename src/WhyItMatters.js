import React from 'react';

const WhyItMatters = () => {
  return (
    <div>
      <div className="card-header text-center">
        <h2>Why It Matters</h2>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-4">
            <div className="card WIM">
              <div className="card-body">
                <h5 className="card-title"><b>Reducing Food Waste:</b></h5>
                <p className="card-text">
                  Every year, tons of food end up in landfills while many people go hungry. 
                  By donating your surplus food, you help reduce waste and make a positive environmental impact.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card WIM">
              <div className="card-body">
                <h5 className="card-title"><b>Supporting Communities:</b></h5>
                <p className="card-text">
                  Your donations directly support orphanages and charitable homes, providing nutritious 
                  meals to those who might otherwise go without.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card WIM">
              <div className="card-body">
                <h5 className="card-title"><b>Creating Connections:</b></h5>
                <p className="card-text">
                  Our platform fosters a sense of community by connecting those who have more with those 
                  who have less, promoting a culture of generosity and care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyItMatters;
