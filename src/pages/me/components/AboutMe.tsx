import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

const WorkGroupContainer = ({
  children,
  logoElement,
  date,
  location,
}: {
  children?: React.ReactNode;
  logoElement?: React.ReactNode;
  date: string;
  location: string;
}) => (
  <div
    style={{
      marginBottom: '2rem',
      display: 'flex',
      justifyContent: 'space-between',
    }}
  >
    <div>
      <LocoDateContent date={date} location={location} />
      {children}
    </div>
    <div style={{ marginLeft: '2rem', marginTop: '2rem' }}>{logoElement}</div>
  </div>
);

const LocoDateContent = ({
  date,
  location,
}: {
  date: string;
  location: string;
}) => {
  return (
    <p>
      <small>{date}</small>
      <br />
      {location}
    </p>
  );
};

const SkillsGroupContent = ({ children }: { children?: React.ReactNode }) => (
  <div>{children}</div>
);

const AboutMe = () => (
  <div>
    <h1 style={{ fontWeight: 'normal' }}>About Me</h1>
    <WorkGroupContainer
      date="Feb'23 to current, Singapore"
      location="I'm working at OGP as a Senior Software Engineer where I help:"
      logoElement={
        <StaticImage
          src="../assets/img/ogp-logo.jpg"
          alt="logo"
          height={100}
          layout="fixed"
          style={{
            borderRadius: '100%',
          }}
        />
      }
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
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
      <SkillsGroupContent>
        Skills: MongoDB · Express.js · Python · JavaScript · React.js · Node.js
        · AWS
      </SkillsGroupContent>
    </WorkGroupContainer>

    <hr />

    <WorkGroupContainer
      date="Sep'18 to Feb'23, Singapore"
      location="I've worked at Shopee as an Expert Software Engineer where I help:"
      logoElement={
        <StaticImage
          src="../assets/img/shopee-logo.jpg"
          alt="logo"
          height={100}
          layout="fixed"
          style={{
            borderRadius: '100%',
          }}
        />
      }
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
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
      </div>
      <SkillsGroupContent>
        Skills: React Native · Express.js · Jenkins · Go (Programming Language)
        · Python · JavaScript · React.js · Node.js
      </SkillsGroupContent>
    </WorkGroupContainer>

    <hr />

    <WorkGroupContainer
      date="Jun'17 to Dec'18, Singapore"
      location="I've worked part-time at NUS as a Web Developer where I help:"
      logoElement={
        <StaticImage
          src="../assets/img/nus-logo.jpg"
          alt="logo"
          height={100}
          layout="fixed"
          style={{
            borderRadius: '100%',
          }}
        />
      }
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <ul>
            <li>
              Develop an event management{' '}
              <a
                href="https://uvents.nus.edu.sg/homepage/events"
                target="_blank"
              >
                website
              </a>
            </li>
            <li>
              Pushed development of scoped user roles in the accounts system
            </li>
            <li>Integrated coding framework of unit tests</li>
            <li>
              Initiated load balancers to better handle traffic and enabling for
              blue-green deployment
            </li>
          </ul>
        </div>
      </div>
      <SkillsGroupContent>
        Skills: Express.js · JavaScript · React.js · Node.js
      </SkillsGroupContent>
    </WorkGroupContainer>

    <hr />

    <WorkGroupContainer
      date="Jan'18 to May'18, Singapore"
      location="I've worked part-time at NUS as a Teaching Assistant where I help:"
      logoElement={
        <StaticImage
          src="../assets/img/nus-logo.jpg"
          alt="logo"
          height={100}
          layout="fixed"
          style={{
            borderRadius: '100%',
          }}
        />
      }
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <ul>
            <li>
              Conduct tutorial sessions for Year 1 computer science algorithm
              classes
            </li>
            <li>Teaching feedback score: 4.6/5</li>
          </ul>
        </div>
      </div>
      <p>
        <small>Aug'17 to Dec'17, Singapore</small>
      </p>
      <div>
        <ul>
          <li>
            Conduct tutorial sessions for Year 1 computer science algorithm
            classes
          </li>
          <li>Teaching feedback score: 4.5/5</li>
        </ul>
      </div>
    </WorkGroupContainer>

    <hr />

    <WorkGroupContainer
      date="May'17 to Jul'17, Singapore"
      location="I've interned at GovTech as a DevOps Engineer where I help:"
      logoElement={
        <StaticImage
          src={'../assets/img/govtech-logo.jpg'}
          alt={'govtech logo'}
          height={100}
          layout="fixed"
          style={{
            borderRadius: '100%',
          }}
        />
      }
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <ul>
            <li>Assisted in managing Atlassian suite for department</li>
            <li>Assisted in migration of networks and servers</li>
            <li>
              Designed and implemented a proof of concept for a ticketing and
              CRM solution
            </li>
          </ul>
        </div>
      </div>
      <SkillsGroupContent>
        Skills: Express.js · Jenkins · Python · JavaScript · Python (Programming
        Language) · React.js · Node.js
      </SkillsGroupContent>
    </WorkGroupContainer>

    <hr />

    <WorkGroupContainer
      date="Jan'17 to Apr'17, Singapore"
      location="I've worked part-time at NUS as a Teaching Assistant where I help:"
      logoElement={
        <StaticImage
          src={'../assets/img/nus-logo.jpg'}
          alt={'nus logo'}
          height={100}
          layout="fixed"
          style={{
            borderRadius: '100%',
          }}
        />
      }
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <ul>
            <li>
              Conduct laboratory sessions for Year 1 computer science algorithm
              classes
            </li>
            <li>Teaching feedback score: 4.1/5</li>
          </ul>
        </div>
      </div>
    </WorkGroupContainer>

    <hr />

    <WorkGroupContainer
      date="Jan'16 to Dec'16, San Francisco Bay Area"
      location="I've interned at PRX.co as a Software Engineer where I help:"
      logoElement={
        <StaticImage
          src={'../assets/img/prx-logo.jpg'}
          alt={'prx logo'}
          height={100}
          layout="fixed"
          style={{
            borderRadius: '100%',
          }}
        />
      }
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <ul>
            <li>
              Developed features to help PR managers better manage campaigns
              with the clients
            </li>
            <li>Assisted in migration if frontend from Django to React</li>
            <li>
              Worked on improving overall internal search query response and
              UI/UX
            </li>
            <li>
              Worked on a web scraper to index articles from various media
              publications
            </li>
            <li>
              Developed a classifier to categorize emails received from
              journalists to relieve team from tending to automated responses
            </li>
          </ul>
        </div>
      </div>
      <SkillsGroupContent>
        Skills: Web Scraping · Django · Express.js · Python · JavaScript ·
        Python (Programming Language) · React.js · Node.js
      </SkillsGroupContent>
    </WorkGroupContainer>
  </div>
);

export default AboutMe;
