import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

const WorkGroupContainer = ({ children }: { children?: React.ReactNode }) => (
  <div style={{ marginBottom: '2rem' }}>{children}</div>
);

const AboutMe = () => (
  <div>
    <h1>About Me</h1>
    <WorkGroupContainer>
      <p>I'm working at OGP as a Senior Software Engineer where I help:</p>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <ul>
          <li>
            Leading the payment initiative to see it being released, and
            spearheading multiple core features as the tech lead for payments
          </li>
          <li>
            Improving signify's FE through introduction of best practices and
            organization of FE components
          </li>
          <li>
            Improving FormSG engineering efficiencies through introduction of
            tools and practices
          </li>
        </ul>
      </div>
      Skills: MongoDB · Express.js · Python · JavaScript · React.js · Node.js ·
      AWS
    </WorkGroupContainer>
    <hr />
    <WorkGroupContainer>
      <p style={{ marginBottom: '0.5rem' }}>
        I've worked at Shopee as an Expert Software Engineer where I help:
      </p>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div>
          <ul>
            <li>
              Develop sustainable engineering solutions for the RN team on the
              Shopee App
            </li>
            <li>
              Initiated parallelized deployment strategy to improve overall RN
              deployment speed by more than 3x
            </li>
            <li>
              Major past projects include migration of various pages from the
              mobile browser over to the RN framework
            </li>
            <li>
              Developed multiple internal tools to assist to track and ease
              release process
            </li>
          </ul>
          <h5>RN (Promotion Team - Technical Lead)</h5>
          <ul>
            <li>
              Coordinate with Product and Project Managers to ensure feature
              delivery
            </li>
            <li>
              Conduct feasibility studies of proposed new features/projects and
              provide technical advice with product managers and engineers
            </li>
            <li>
              Leading and Managing technical solutions in the RN Promotion team
              as a technical leader
            </li>
            <li>Set teams goals with manager of team</li>
            <li>
              Conduct Interviews for potential hires, design questions banks for
              interview
            </li>
          </ul>
        </div>
        <div>
          <StaticImage src={''} alt={''} height={100} />
        </div>
      </div>
      Skills: React Native · Express.js · Jenkins · Go (Programming Language) ·
      Python · JavaScript · React.js · Node.js
    </WorkGroupContainer>
  </div>
);

export default AboutMe;
