/* eslint-disable react/no-unescaped-entities */
import React from "react";

const TimeLine = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-3/4">
        <section class="ps-timeline-sec">
          <div class="container">
            <ol class="ps-timeline">
              <li>
                <div class="ps-top">
                  <p>
                    <h4>Goals</h4>Your goal is nearing completion date, update
                    now!
                  </p>
                </div>
                <div class="ps-bot">
                  <h5>Oct '19</h5>
                </div>
                <span class="ps-sp-top">01</span>
              </li>
              <li>
                <div class="ps-bot">
                  <p>
                    <h4>Congratulations</h4>On winning INSTA award! Share with
                    Peers
                  </p>
                </div>
                <div class="ps-top">
                  <h5>Nov '19</h5>
                </div>
                <span class="ps-sp-bot">02</span>
              </li>
              <li>
                <div class="ps-top">
                  <p>
                    <h4>Collaboration</h4>Feedback received from X. View now!
                  </p>
                </div>
                <div class="ps-bot">
                  <h5>Dec '19</h5>
                </div>
                <span class="ps-sp-top">03</span>
              </li>
              <li>
                <div class="ps-bot">
                  <p>
                    <h4>Project Challenge</h4>Review goals and define new
                    priorities now!
                  </p>
                </div>
                <div class="ps-top">
                  <h5>Jan '20</h5>
                </div>
                <span class="ps-sp-bot">04</span>
              </li>
              <li>
                <div class="ps-top">
                  <p>
                    <h4>Development</h4>JAVA full stack developer course
                    successfully completed. Share with peers
                  </p>
                </div>
                <div class="ps-bot">
                  <h5>Jan '20</h5>
                </div>
                <span class="ps-sp-top">05</span>
              </li>
            </ol>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TimeLine;
