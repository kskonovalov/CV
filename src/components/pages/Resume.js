import React from 'react';

const Resume = () => {
  return (
    <>
      <h1>RESUME</h1>
      <h2>Work Experience</h2>
      <ul className="work-list">
        <li className="work-list__item">
          <h3>
            <b>Full-stack Web Developer</b>, Splend{' '}
            <img
              src="/assets/images/flags/nl.png"
              alt="NL"
              title="Netherlands"
            />
          </h3>
          <span className="year">
            <i className="fa fa-calendar" /> oct 2015 - present
          </span>
          <p>Remote job, Part-time job.</p>
          <ul className="tasks-list browser-default">
            <li>Websites development, support;</li>
            <li>PSD to WordPress;</li>
            <li>WordPress viral cleaning;</li>
            <li>WordPress shortcodes and small plugins development;</li>
          </ul>
          <p>
            Main technology stack: PHP, mysql, JavaScript, jQuery, WordPress.
          </p>
          <p>Achievements:</p>
          <ul className="list">
            <li>
              created more than 20 WordPress sites from PSD or from scratch;
            </li>
            <li>solved almost infinite problems with sites =)</li>
          </ul>
        </li>
        <li className="work-list__item">
          <h3>
            <b>PHP backend developer</b>, SKU Grid{' '}
            <img src="/assets/images/flags/us.png" alt="US" title="USA" />
          </h3>
          <span className="year">
            <i className="fa fa-calendar" /> oct 2017 - may 2019
          </span>
          <p>Remote job.</p>
          <p>Create third-party parsers for different e-commerce.</p>
          <p>Mostly used: PHP, phpQuery, Git, Gitlab, Asana</p>
        </li>
        <li className="work-list__item">
          <h3>
            <b>Full-stack Web Developer</b>, Maxi By Media{' '}
            <img src="/assets/images/flags/by.png" alt="BY" title="Belarus" />
          </h3>
          <span className="year">
            <i className="fa fa-calendar" /> nov 2014 - sep 2015
          </span>
          <ul className="tasks-list browser-default">
            <li>Websites development using WordPress, OpenCart, 1C-Bitrix;</li>
            <li>
              support of websites built with WordPress, Joomla, OpenCart,
              Laravel, Yii2, Drupal, Bitrix, SimplaCMS, ModX, custom CMS.
            </li>
            <li>PSD to WordPress, PSD to OpenCart;</li>
            <li>sites viral cleaning;</li>
            <li>small server tasks (ssh);</li>
            <li>SEO changes for websites;</li>
          </ul>
          <p>
            Created more than 10 websites using WordPress/WooCommerce, few
            websites using 1C-Bitrix and about 5 e-commerce with OpenCart.
          </p>
        </li>
        <li className="work-list__item">
          <h3>
            <b>Full-stack Web Developer</b>, Freelance{' '}
            <i className="fa fa-globe" />
          </h3>
          <span className="year">
            <i className="fa fa-calendar" /> 2010 - 2014
          </span>
          <p>Remote job.</p>
          <ul className="tasks-list browser-default">
            <li>Websites development, support;</li>
          </ul>
          <p>
            Main technology stack: PHP, mysql, JavaScript, jQuery, Drupal,
            InstantCMS, Joomla, PhpBB, CodeIgniter, WordPress
          </p>
        </li>
      </ul>
    </>
  );
};

export default Resume;
