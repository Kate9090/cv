import React from 'react';

import DICTIONARY from '../commons/dictionary';

import styles from './Right.module.scss';

const RightContent = ({ lang }) => {
  return (
    <div className={styles.Right}>
      <section>
        <h1 className={styles.Right__Name}>{DICTIONARY[`${lang}`].main_name}</h1>
        <h2 className={styles.Right__JobTitle}>{DICTIONARY[`${lang}`].job_title}</h2>
      </section>

      <section>
        <h1 className={styles.Right__Title}>{DICTIONARY[`${lang}`].expirience_title}</h1>

        <div className={styles.Right__ExpirienceWrapper}>
          <div className={styles.Right__Period}>
            {DICTIONARY[`${lang}`].june} 2023 - {DICTIONARY[`${lang}`].present}
          </div>
          <div className={styles.Right__DescriptionWtapper}>
            <div className={styles.Right__Organization}>{DICTIONARY[`${lang}`].mygames}</div>
            <div className={styles.Right__Description}>
              <p style={{ fontStyle: 'italic' }}>
                Stack: React, TypeScript, RTK Query, Next.js, Ant Design, Storybook, open-source
                contributions (Mattermost).
              </p>
              <br />
              {/* {DICTIONARY[`${lang}`].mygames_expirience}*/}
              Developed and maintained a wide range of internal products used daily by managers,
              analysts, and support teams. Delivered significant improvements to usability,
              performance, and internal workflows.
              <div className={styles.Right__Projects_Wrapper}>Key Projects & Achievements</div>
              <ul className={styles.Right__Projects_List}>
                <li>
                  <strong className={styles.Right__Projects_Title}>
                    Knowledge Base (internal Confluence-like platform)
                  </strong>
                  <ul>
                    <li>Rebuilt navigation and article linking across all internal services.</li>
                    <li>
                      Improved content structure, increasing information discovery efficiency for
                      teams
                    </li>
                  </ul>
                </li>

                <li>
                  <strong className={styles.Right__Projects_Title}>
                    Landing Page for Projects & Sales
                  </strong>
                  <ul>
                    <li>
                      Developed a fully responsive landing page for the department showcasing
                      internal tools for external partners.
                    </li>
                    <li>Built using Next.js, optimized for SEO and fast load times.</li>
                  </ul>
                </li>

                <li>
                  <strong className={styles.Right__Projects_Title}>
                    Instance Administration Dashboard
                  </strong>
                  <ul>
                    <li>Replaced legacy Django admin with a modern React-based dashboard.</li>
                    <li>
                      Simplified instance management for analysts/managers, redesigned logic and UI.
                    </li>
                    <li>
                      Reduced operations time for routine tasks (creating, editing, linking
                      instances).
                    </li>
                  </ul>
                </li>

                <li>
                  <strong className={styles.Right__Projects_Title}>
                    User & Permission Management Admin Panel
                  </strong>
                  <ul>
                    <li>
                      Fully reworked legacy Django interface into a new React-based admin panel.
                    </li>
                    <li>
                      Automated project assignment and permission flows, reducing manual operations
                      for support and managers.
                    </li>
                  </ul>
                </li>

                <li>
                  <strong className={styles.Right__Projects_Title}>
                    Reporting Tool with Prediction Model
                  </strong>
                  <ul>
                    <li>
                      Implemented a frontend for a reporting system with predictive analytics for
                      managers.
                    </li>
                    <li>
                      Improved data visualization and made prediction results easy to interpret.
                    </li>
                  </ul>
                </li>

                <li>
                  <strong className={styles.Right__Projects_Title}>
                    Mattermost (open-source contributions, desktop app)
                  </strong>
                  <ul>
                    <li>Expanded user card functionality.</li>
                    <li>Added multi-select for posts and related settings.</li>
                    <li>Implemented image attachments during post editing.</li>
                    <li>
                      Introduced “Recents” navigation block for faster switching between
                      conversations.
                    </li>
                    <li>Contributions improved usability and were merged into the live product.</li>
                  </ul>
                </li>

                <li>
                  <strong className={styles.Right__Projects_Title}>
                    Component Library & DX Improvements
                  </strong>
                  <ul>
                    <li>Improved and extended internal component library based on Ant Design.</li>
                    <li>
                      Added Storybook, enabling component documentation and smoother migration to
                      new versions.
                    </li>
                    <li>Streamlined development process for all frontend teams.</li>
                  </ul>
                </li>

                <li>
                  <strong className={styles.Right__Projects_Title}>Performance Optimization</strong>
                  <ul>
                    <li>
                      Optimized the main internal system by replacing heavy CSS solutions with
                      lightweight alternatives.
                    </li>
                    <li>Reduced page load time by several seconds on key screens.</li>
                  </ul>
                </li>

                <li>
                  <strong className={styles.Right__Projects_Title}>General Responsibilities</strong>
                  <ul>
                    <li>Refactoring and maintenance of legacy code.</li>
                    <li>Full ownership of several admin panels (frontend part).</li>
                    <li>Close collaboration with backend teams (Python/Django).</li>
                    <li>UI/UX improvements and accessibility updates.</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.Right__ExpirienceWrapper}>
          <div className={styles.Right__Period}>
            {DICTIONARY[`${lang}`].september} 2019 - {DICTIONARY[`${lang}`].february} 2023
          </div>
          <div className={styles.Right__DescriptionWtapper}>
            <div className={styles.Right__Organization}>{DICTIONARY[`${lang}`].sberbank}</div>
            <div className={styles.Right__Description}>
              <p style={{ fontStyle: 'italic' }}>
                React 18, TypeScript, Redux, Recoil, Vue.js, Vuex, Vuetify, MobX, Chart.js
              </p>
              <br />
              Developed a wide range of internal services used by thousands of employees and
              managers across the bank. Led the implementation of UI features, dashboards, and
              internal tooling that improved daily operational workflows.
              <div className={styles.Right__Projects_Wrapper}>Key Projects & Achievements</div>
              <ul className={styles.Right__Projects_List}>
                <li>
                  <strong className={styles.Right__Projects_Title}>
                    Booking Systems (meeting rooms & vacations)
                  </strong>

                  <ul>
                    <li>
                      Built internal tools for booking meeting rooms and managing employee vacations
                      (React + Redux)
                    </li>
                    <li>
                      Improved UX and reduced booking errors by redesigning flows and enhancing
                      validation logic.
                    </li>
                  </ul>
                </li>

                <li>
                  <strong className={styles.Right__Projects_Title}>
                    Custom UI Kit Development
                  </strong>

                  <ul>
                    <li>
                      Co-created a fully custom UI component library to replace fragmented
                      solutions.
                    </li>
                    <li>
                      Delivered reusable components (multi-selects, autocomplete, calendars, form
                      elements) that standardized UI across multiple internal products.
                    </li>
                    <li>Accelerated development efficiency for the whole frontend team.</li>
                  </ul>
                </li>

                <li>
                  <strong className={styles.Right__Projects_Title}>HR Admin Systems</strong>

                  <ul>
                    <li>
                      Developed and maintained internal admin panels for employee data, permissions,
                      and workflow automation.
                    </li>
                    <li>
                      Simplified complex multi-step processes for HR managers, reducing manual
                      routine actions.
                    </li>
                  </ul>
                </li>

                <li>
                  <strong className={styles.Right__Projects_Title}>
                    Monitoring Dashboards (Vue)
                  </strong>

                  <ul>
                    <li>
                      Built Vue.js dashboards (Vuex, Vuetify) for real-time monitoring of key
                      internal services.
                    </li>
                    <li>
                      Integrated charts and metrics visualizations, improving response time to
                      incidents.
                    </li>
                  </ul>
                </li>

                <li>
                  <strong className={styles.Right__Projects_Title}>
                    Dividend Calculation Interface
                  </strong>

                  <ul>
                    <li>
                      Created a frontend for a corporate dividend calculation platform (React +
                      Redux).
                    </li>
                    <li>
                      Developed custom filters and logic on the backend (Java) to support
                      accountants' workflows.
                    </li>
                    <li>Result: faster calculations and fewer manual processing errors.</li>
                  </ul>
                </li>

                <li>
                  <strong className={styles.Right__Projects_Title}>
                    Tech Upgrades & Performance Work
                  </strong>

                  <ul>
                    <li>
                      Migrated critical components to TypeScript, improving code reliability and
                      maintainability.
                    </li>
                    <li>
                      Refactored legacy modules, reducing bundle size and improving page load speed.
                    </li>
                    <li>
                      Implemented Highcharts for advanced visualizations in analytic dashboards.
                    </li>
                    <li>
                      Collaborated closely with backend teams to optimize API structure and data
                      flows
                    </li>
                  </ul>
                </li>

                <li>
                  <strong className={styles.Right__Projects_Title}>Impact & Achievements</strong>

                  <ul>
                    <li>
                      Reduced average load time of internal tools by refactoring heavy UI components
                      and optimizing state management.
                    </li>
                    <li>
                      Standardized UI across several teams through the custom UI kit adoption.
                    </li>
                    <li>
                      Improved operational efficiency for HR, accounting, and management teams by
                      simplifying workflows and improving internal tooling reliability.
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.Right__ExpirienceWrapper}>
          <div className={styles.Right__Period}>
            {DICTIONARY[`${lang}`].december} 2020 - {DICTIONARY[`${lang}`].august} 2021
          </div>
          <div className={styles.Right__DescriptionWtapper}>
            <div className={styles.Right__Organization}>{DICTIONARY[`${lang}`].lipgart}</div>
            {/* <p className={styles.Right__Description}>{DICTIONARY[`${lang}`].lipgart_expirience}</p> */}
            <div className={styles.Right__Description}>
              <ul className={styles.Right__Projects_List}>
                <li>
                  <strong className={styles.Right__Projects_Title}>
                    Electric Bus Monitoring Platform — Frontend Engineer (Angular 2)
                  </strong>

                  <ul>
                    <li>
                      Worked on an intelligent transportation monitoring system for electric bus
                      fleets.
                    </li>
                    <li>
                      Maintained and extended Angular 2 codebase, delivering new features for
                      real-time monitoring and analytics.
                    </li>
                    <li>
                      Implemented a new UI component library (tables, interactive maps, charts),
                      which significantly accelerated frontend development and simplified feature
                      rollout.
                    </li>
                  </ul>
                </li>

                <li>
                  <strong className={styles.Right__Projects_Title}>Key Achievements:</strong>

                  <ul>
                    <li>
                      Reduced development time for new UI features by introducing reusable component
                      modules.
                    </li>
                    <li>
                      Enhanced stability and maintainability of the Angular application through
                      refactoring and improved architecture.
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.Right__ExpirienceWrapper}>
          <div className={styles.Right__Period}>
            {DICTIONARY[`${lang}`].august} 2018 - {DICTIONARY[`${lang}`].august} 2019
          </div>
          <div className={styles.Right__DescriptionWtapper}>
            <div className={styles.Right__Organization}>{DICTIONARY[`${lang}`].uchiRu}</div>
            <div className={styles.Right__Description}>
              <ul className={styles.Right__Projects_List}>
                <li>
                  <strong className={styles.Right__Projects_Title}>
                    School Olympiads Platform — Frontend Developer (Vue.js)
                  </strong>
                  <p>
                    Developed key functionality for launching and supporting bi-weekly online school
                    Olympiads.
                  </p>
                  <ul>
                    <li>
                      Built a Vue.js-based Olympiad constructor that significantly accelerated the
                      creation and release of new Olympiads.
                    </li>
                    <li>
                      Implemented layouts for interactive games and landing pages, ensuring visual
                      consistency, accessibility and stable performance.
                    </li>
                    <li>
                      Contributed to fast and predictable production cycles with Olympiad releases
                      every two weeks.
                    </li>
                  </ul>
                </li>

                <li>
                  <strong className={styles.Right__Projects_Title}>Key Achievements:</strong>

                  <ul>
                    <li>
                      Reduced the time needed to prepare a new Olympiad by introducing a reusable
                      constructor.
                    </li>
                    <li>
                      Improved UI/UX and the maintainability of landing pages and game layouts.
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.Right__ExpirienceWrapper}>
          <div className={styles.Right__Period}>
            {DICTIONARY[`${lang}`].january} 2018 - {DICTIONARY[`${lang}`].july} 2018
          </div>
          <div className={styles.Right__DescriptionWtapper}>
            <div className={styles.Right__Organization}>{DICTIONARY[`${lang}`].payOnline}</div>
            <p className={styles.Right__Description}>
              {DICTIONARY[`${lang}`].payOnline_expirience}
            </p>
          </div>
        </div>
      </section>

      <section className={styles.Right__EducationWrapper}>
        <h1 className={styles.Right__Title}>{DICTIONARY[`${lang}`].education_title}</h1>

        <div className={styles.Right__ExpirienceWrapper}>
          <div className={styles.Right__Period}>
            {DICTIONARY[`${lang}`].september} 2011 - {DICTIONARY[`${lang}`].june} 2013
          </div>
          <div className={styles.Right__DescriptionWtapper}>
            <div className={styles.Right__Organization}>{DICTIONARY[`${lang}`].MSTU}</div>
            <p className={styles.Right__Description}>{DICTIONARY[`${lang}`].master_degree}</p>
          </div>
        </div>

        <div className={styles.Right__ExpirienceWrapper}>
          <div className={styles.Right__Period}>
            {DICTIONARY[`${lang}`].september} 2007 - {DICTIONARY[`${lang}`].june} 2011
          </div>
          <div className={styles.Right__DescriptionWtapper}>
            <div className={styles.Right__Organization}>{DICTIONARY[`${lang}`].MSTU}</div>
            <p className={styles.Right__Description}>{DICTIONARY[`${lang}`].bachelor_degree}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RightContent;
